# Google Drive Cache System

Event-driven cache invalidation with a serverless-hosted cache for Google Drive data,
running entirely on Vercel with zero external Redis dependency.

## Storage Summary

| Data | Backend | Why |
|---|---|---|
| Drive data per folder | Next.js `unstable_cache` (tag `drive`, `revalidate: false`) | Vercel-native shared cache; invalidated via `revalidateTag` |
| Page token | Firebase RTDB: `drive/meta/pageToken` | Small durable string the webhook needs to resume `changes.list` |
| Watch metadata | Firebase RTDB: `drive/meta/watch` | channelId / resourceId / expiration for renewal + webhook validation |

**No distributed locks and no cache-version counter** are needed:

- **Cache stampede** — `unstable_cache` only runs its rebuild once per key; concurrent
  requesters share a single in-flight isolation.
- **Stale fetch vs invalidation** — `revalidateTag` *revalidates* (does not append), so a
  stale result cannot win over the post-invalidation state; on the next request after a
  webhook the tag is expired and Drive is re-fetched.
- **Concurrent webhooks** — `revalidateTag` is idempotent; the page token is only advanced
  after all pages are processed, so duplicate deliveries are harmless.

## Architecture

```
                         GOOGLE DRIVE
                              │
                              │ file changes
                              ▼
                     ┌──────────────────┐
                     │ changes.watch    │
                     └────────┬─────────┘
                              │
                              │ HTTPS POST
                              ▼
                  ┌─────────────────────────┐
                  │ Next.js Webhook         │
                  │ /api/drive/webhook      │
                  └───────────┬─────────────┘
                              │
                              ▼
                     changes.list()  (paginated)
                              │
                              │ any changes?
                              │
                              ▼
                    revalidateTag("drive")
                              │
                              ▼
                    Update page token (RTDB)


CLIENT
  │
  ▼
Next.js API /api/drive
  │
  ▼
unstable_cache (tag "drive", revalidate: false)
  ├── HIT → return cached data (no Drive API call)
  │
  └── MISS → Google Drive API → populate cache → Client
```

## Environment Variables

### Required (new)

| Variable | Purpose | Example |
|---|---|---|
| `GOOGLE_DRIVE_WEBHOOK_TOKEN` | Webhook validation token | Any random secret |
| `GOOGLE_DRIVE_WEBHOOK_URL` | Public webhook URL | `https://your-domain.vercel.app/api/drive/webhook` |
| `ADMIN_SECRET` | Admin endpoint auth | Any random secret |

### Existing (already set)

| Variable | Used By |
|---|---|
| `GOOGLE_CLIENT_EMAIL` | Google Drive auth |
| `GOOGLE_PRIVATE_KEY` | Google Drive auth |

The page token + watch metadata persist to Firebase RTDB using the **existing**
`firebase-admin` service account in `lib/firebase-admin.js` (project `last-197cd`) — no
additional env variables are required for storage. Drive data lives in Next's `unstable_cache`,
which needs no configuration.

### Generating Secrets

```bash
openssl rand -hex 32
```

## Data Layout

### Next.js cache (Drive data)

- Key: `unstable_cache` per folder, keyed `drive_${folderId}`
- Tags: `["drive"]`
- `revalidate: false` (permanent until invalidated)
- Invalidated wholesale by the webhook via `revalidateTag("drive")`

### Firebase RTDB (metadata)

| Path | Fields | Purpose |
|---|---|---|
| `drive/meta/pageToken` | string | Google Drive changes page token |
| `drive/meta/watch` | `{ channelId, resourceId, expiration }` | Watch channel metadata |

## API Endpoints

### POST /api/drive

Main API endpoint. Fetches Drive files with caching.

**Request:**
```json
{ "folderId": "1xbyCdj3XQ9AsCCF8ImI13HCo25JEhgUJ" }
```

**Response (unchanged format):**
```json
{
  "files": [...],
  "parentFolderId": "...",
  "currentFolder": { "id": "...", "name": "..." }
}
```

### GET /api/drive

Health check. Returns storage backend, watch status (channel/expiry), and page-token presence
from Firebase RTDB.

### POST /api/drive/webhook

Google Drive push notification endpoint. Receives change notifications and processes them.

**Protected by:** token + channel ID + resource ID validation

### POST /api/drive/setup

First-time initialization. Creates page token + watch channel.

**Protected by:** `Authorization: Bearer <ADMIN_SECRET>`

**Response:**
```json
{
  "status": "initialized",
  "pageToken": "stored",
  "watch": {
    "channelId": "...",
    "resourceId": "...",
    "expiration": "2026-01-01T00:00:00.000Z"
  }
}
```

### POST /api/drive/renew-watch

Watch channel renewal. Called by Vercel Cron daily.

**Protected by:** `Authorization: Bearer <ADMIN_SECRET>`

## Setup Procedure

1. **Generate secrets** (webhook token, admin secret):
   ```bash
   openssl rand -hex 32
   ```

2. **Set environment variables** in `.env.local` (local dev) and/or Vercel project settings
   (production):
   ```env
   GOOGLE_DRIVE_WEBHOOK_TOKEN=<generated-token>
   GOOGLE_DRIVE_WEBHOOK_URL=https://your-domain.vercel.app/api/drive/webhook
   ADMIN_SECRET=<generated-admin-secret>
   ```

3. **Deploy to Vercel**:
   ```bash
   git push
   ```

4. **Initialize the watch** (once):
   ```bash
   curl -X POST https://your-domain.vercel.app/api/drive/setup \
     -H "Authorization: Bearer <ADMIN_SECRET>"
   ```

5. **Verify**:
   ```bash
   curl https://your-domain.vercel.app/api/drive
   curl -X POST https://your-domain.vercel.app/api/drive \
     -H "Content-Type: application/json" \
     -d '{"folderId": "1xbyCdj3XQ9AsCCF8ImI13HCo25JEhgUJ"}'
   ```

## How It Works

### Cache Flow

1. Client requests `/api/drive` with a `folderId`
2. `getCachedDriveData` wraps the Drive fetch in `unstable_cache` (tag `drive`,
   `revalidate: false`)
3. **HIT**: `unstable_cache` returns the cached response — no Drive API call
4. **MISS**: Drive API is called once, result stored in the shared cache; concurrent
   requesters share the single rebuild

### Webhook Flow

1. Google Drive detects a file change
2. Sends HTTPS POST to `/api/drive/webhook`
3. Validates token, channel ID, resource ID
4. If `x-goog-resource-state: sync` → acknowledge and return 200
5. Call `drive.changes.list()` with pagination until no `nextPageToken`
6. Store `newStartPageToken` (RTDB) only after all pages processed
7. If any change exists: `revalidateTag("drive")` (invalidate all cached folders), return 200

> Invalidation scope: any change invalidates ALL cached folders, not a targeted folder.
> This matches the "changes are rare" workload and avoids tracking a cached-folder set.

### Watch Renewal Flow

1. Vercel Cron triggers daily at 3:00 AM
2. `/api/drive/renew-watch` reads `drive/meta/watch` from RTDB
3. If expiration < 24 hours away: create new watch channel
4. Store new channel info in RTDB
5. Old channel expires naturally (Google auto-cleans)

## Local Development

Google cannot send webhooks to `localhost`. Use a tunnel:

### Option A: ngrok

```bash
ngrok http 3000
```

Copy the `https://xxx.ngrok-free.app` URL and set:

```env
GOOGLE_DRIVE_WEBHOOK_URL=https://xxx.ngrok-free.app/api/drive/webhook
```

### Option B: Cloudflare Tunnel

```bash
cloudflared tunnel --url http://localhost:3000
```

### Initialize Locally

```bash
curl -X POST http://localhost:3000/api/drive/setup \
  -H "Authorization: Bearer <ADMIN_SECRET>"
```

Note: RTDB metadata writes require the Firebase Admin SDK to reach `last-197cd` RTDB
(must be allowed from your environment / firewalled outbound).

## Troubleshooting

### "No page token, cannot process changes"

Run the setup endpoint to initialize the page token.

### "Invalid token, ignoring" in webhook logs

The `x-goog-channel-token` header doesn't match `GOOGLE_DRIVE_WEBHOOK_TOKEN`. Update the env
var to match what was used when creating the watch.

### "Unknown channel, ignoring" in webhook logs

The webhook notification is for a stale/expired watch channel. The system will auto-renew.
If persistent, re-run setup.

### Webhook returns 500

Check Vercel function logs. Common causes:
- Firebase RTDB unavailable (admin SDK init failure / network)
- Google Drive API error (credentials, quota)

### Cache not invalidating

1. Check webhook is being received (Vercel logs)
2. Verify `drive/meta/watch` is populated: `GET /api/drive` returns `watch` info
3. Check `drive/meta/pageToken` exists
4. Remember: `unstable_cache` is a shared cache; a `revalidateTag` takes effect on the next
   request served after the tag expires (serverless caches may briefly serve stale data).

### Watch expired

If the cron hasn't renewed it, re-run setup:

```bash
curl -X POST https://your-domain.vercel.app/api/drive/setup \
  -H "Authorization: Bearer <ADMIN_SECRET>"
```
