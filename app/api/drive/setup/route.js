import { NextResponse } from "next/server";
import { initializePageToken, createWatchChannel } from "@/lib/drive-changes.js";
import { getWatchInfo } from "@/lib/drive-meta.js";

const ADMIN_SECRET = process.env.ADMIN_SECRET;
const WEBHOOK_URL = process.env.GOOGLE_DRIVE_WEBHOOK_URL;
const WEBHOOK_TOKEN = process.env.GOOGLE_DRIVE_WEBHOOK_TOKEN;

function verifyAdmin(req) {
  if (!ADMIN_SECRET) {
    return false;
  }
  const authHeader = req.headers.get("authorization");
  return authHeader === `Bearer ${ADMIN_SECRET}`;
}

export async function POST(req) {
  if (!verifyAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!WEBHOOK_URL) {
    return NextResponse.json(
      { error: "GOOGLE_DRIVE_WEBHOOK_URL environment variable is not set" },
      { status: 500 },
    );
  }

  if (!WEBHOOK_TOKEN) {
    return NextResponse.json(
      { error: "GOOGLE_DRIVE_WEBHOOK_TOKEN environment variable is not set" },
      { status: 500 },
    );
  }

  try {
    const existingWatch = await getWatchInfo();
    if (existingWatch && existingWatch.expiration) {
      const expiration = Number(existingWatch.expiration);
      if (Date.now() < expiration) {
        return NextResponse.json({
          status: "already_initialized",
          watch: {
            channelId: existingWatch.channelId,
            expiration: new Date(expiration).toISOString(),
          },
        });
      }
    }

    const pageToken = await initializePageToken();

    const watch = await createWatchChannel(WEBHOOK_URL, WEBHOOK_TOKEN);

    return NextResponse.json({
      status: "initialized",
      pageToken: "stored",
      watch: {
        channelId: watch.channelId,
        resourceId: watch.resourceId,
        expiration: new Date(Number(watch.expiration)).toISOString(),
      },
    });
  } catch (err) {
    console.error("[Setup] Initialization failed:", err);
    return NextResponse.json(
      { error: `Setup failed: ${err.message}` },
      { status: 500 },
    );
  }
}
