import { NextResponse } from "next/server";
import { createDriveClient } from "@/lib/drive-auth.js";
import { getCachedDriveData } from "@/lib/drive-cache.js";

async function fetchDriveData(folderId) {
  const drive = await createDriveClient();

  const [folderInfo, filesResponse] = await Promise.all([
    drive.files.get({
      fileId: folderId,
      fields: "id, name, parents",
    }),
    drive.files.list({
      q: `'${folderId}' in parents and trashed = false`,
      fields:
        "files(id, name, mimeType, webViewLink, webContentLink, size, modifiedTime)",
      pageSize: 1000,
      orderBy: "name",
    }),
  ]);

  return {
    files: filesResponse.data.files || [],
    parentFolderId: folderInfo.data.parents?.[0] || null,
    currentFolder: {
      id: folderInfo.data.id,
      name: folderInfo.data.name,
    },
  };
}

export async function POST(req) {
  let folderId;

  try {
    const body = await req.json();
    folderId = body.folderId;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body. Expected JSON with folderId field." },
      { status: 400 },
    );
  }

  if (!folderId) {
    return NextResponse.json(
      { error: "Folder ID is required" },
      { status: 400 },
    );
  }

  try {
    const data = await getCachedDriveData(folderId, () => fetchDriveData(folderId));

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (err) {
    console.error("Google Drive API Error:", err);

    let errorMessage = "Failed to fetch files from Google Drive";
    let statusCode = 500;

    if (err.code === "ENOENT") {
      errorMessage = "Google Drive credentials file not found";
    } else if (err.code === 403 || err.response?.status === 403) {
      errorMessage = "Access denied. Check your Google Drive API permissions.";
      statusCode = 403;
    } else if (err.code === 404 || err.response?.status === 404) {
      errorMessage = "Folder not found or not accessible.";
      statusCode = 404;
    } else if (err.code === 429 || err.response?.status === 429) {
      errorMessage = "Rate limit exceeded. Please try again in a moment.";
      statusCode = 429;
    } else if (err.message?.includes("invalid_grant")) {
      errorMessage =
        "Authentication failed. Check your service account credentials and system time.";
    } else if (err.message?.includes("JWT")) {
      errorMessage =
        "JWT token error. Please regenerate your service account credentials.";
    } else if (err.message?.includes("credentials not found")) {
      errorMessage =
        "Google Drive credentials not found. Please add credentials.json or set environment variables.";
    } else if (err.message) {
      errorMessage = err.message;
    }

    return NextResponse.json(
      { error: errorMessage },
      {
        status: statusCode,
        headers: { "Cache-Control": "no-cache, no-store, must-revalidate" },
      },
    );
  }
}

export async function GET() {
  const { getWatchInfo, getPageToken } = await import("@/lib/drive-meta.js");

  const [watchInfo, pageToken] = await Promise.all([
    getWatchInfo(),
    getPageToken(),
  ]);

  return NextResponse.json({
    storage: "next-cache (unstable_cache) + firebase-rtdb (drive/meta)",
    watch: watchInfo
      ? {
          channelId: watchInfo.channelId,
          expiration: watchInfo.expiration
            ? new Date(Number(watchInfo.expiration)).toISOString()
            : null,
          expired: watchInfo.expiration
            ? Date.now() > Number(watchInfo.expiration)
            : true,
        }
      : null,
    pageToken: pageToken ? "present" : "missing",
  });
}
