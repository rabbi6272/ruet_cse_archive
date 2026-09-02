import { NextResponse } from "next/server";
import { renewWatchIfNeeded } from "@/lib/drive-changes.js";

const ADMIN_SECRET = process.env.ADMIN_SECRET;
const WEBHOOK_URL = process.env.GOOGLE_DRIVE_WEBHOOK_URL;
const WEBHOOK_TOKEN = process.env.GOOGLE_DRIVE_WEBHOOK_TOKEN;

function verifyAuth(req) {
  if (!ADMIN_SECRET) return false;
  const authHeader = req.headers.get("authorization");
  return authHeader === `Bearer ${ADMIN_SECRET}`;
}

export async function POST(req) {
  if (!verifyAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!WEBHOOK_URL || !WEBHOOK_TOKEN) {
    return NextResponse.json(
      { error: "GOOGLE_DRIVE_WEBHOOK_URL and GOOGLE_DRIVE_WEBHOOK_TOKEN must be set" },
      { status: 500 },
    );
  }

  try {
    const result = await renewWatchIfNeeded(WEBHOOK_URL, WEBHOOK_TOKEN);

    if (result.renewed === false) {
      return NextResponse.json({
        status: "no_renewal_needed",
        expiresAt: result.expiration
          ? new Date(Number(result.expiration)).toISOString()
          : null,
      });
    }

    return NextResponse.json({
      status: "renewed",
      watch: {
        channelId: result.channelId,
        resourceId: result.resourceId,
        expiration: new Date(Number(result.expiration)).toISOString(),
      },
    });
  } catch (err) {
    console.error("[RenewWatch] Failed:", err);
    return NextResponse.json(
      { error: `Renewal failed: ${err.message}` },
      { status: 500 },
    );
  }
}
