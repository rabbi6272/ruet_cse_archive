import { randomUUID } from "crypto";
import { createDriveClient } from "./drive-auth.js";
import {
  getPageToken,
  setPageToken,
  getWatchInfo,
  setWatchInfo,
  removeWatchInfo,
} from "./drive-meta.js";

// =================== Watch Channel ===================

export async function createWatchChannel(webhookUrl, token) {
  const drive = await createDriveClient();
  const channelId = randomUUID();

  const response = await drive.changes.watch({
    requestBody: {
      id: channelId,
      type: "web_hook",
      address: webhookUrl,
      token: token,
    },
  });

  const { resourceId, expiration } = response.data;

  await setWatchInfo({ channelId, resourceId, expiration });

  console.log(
    `[DriveChanges] Watch created: channel=${channelId}, expires=${new Date(Number(expiration)).toISOString()}`,
  );

  return { channelId, resourceId, expiration };
}

// =================== Renewal Check ===================

export async function renewWatchIfNeeded(webhookUrl, token, safetyWindowMs = 24 * 60 * 60 * 1000) {
  const watchInfo = await getWatchInfo();

  if (!watchInfo) {
    console.log("[DriveChanges] No watch found, creating new one");
    return await createWatchChannel(webhookUrl, token);
  }

  const expiration = Number(watchInfo.expiration);
  const now = Date.now();
  const remaining = expiration - now;

  if (remaining <= safetyWindowMs) {
    console.log(`[DriveChanges] Watch expiring in ${Math.round(remaining / 3600000)}h, renewing`);
    await removeWatchInfo();
    return await createWatchChannel(webhookUrl, token);
  }

  console.log(`[DriveChanges] Watch valid for ${Math.round(remaining / 3600000)}h, no renewal needed`);
  return { ...watchInfo, renewed: false };
}

// =================== Initialize Token ===================

export async function initializePageToken() {
  const existing = await getPageToken();
  if (existing) {
    console.log("[DriveChanges] Page token already exists, skipping initialization");
    return existing;
  }

  const drive = await createDriveClient();
  const response = await drive.changes.getStartPageToken();
  const token = response.data.startPageToken;

  await setPageToken(token);
  console.log(`[DriveChanges] Initial page token obtained: ${token}`);
  return token;
}

// =================== Process Changes ===================

export async function processChanges() {
  const drive = await createDriveClient();
  const pageToken = await getPageToken();

  if (!pageToken) {
    console.log("[DriveChanges] No page token, cannot process changes");
    return { changes: [], newStartPageToken: null, hasRelevantChanges: false };
  }

  let allChanges = [];
  let nextPageToken = pageToken;
  let newStartPageToken = null;

  do {
    const response = await drive.changes.list({
      pageToken: nextPageToken,
      pageSize: 1000,
      includeRemoved: true,
      fields:
        "nextPageToken, newStartPageToken, changes(fileId, removed, file(id, name, mimeType, parents, modifiedTime))",
    });

    const { changes, nextPageToken: next, newStartPageToken: nsp } = response.data;

    if (changes) {
      allChanges = allChanges.concat(changes);
    }

    nextPageToken = next || null;
    if (nsp) newStartPageToken = nsp;
  } while (nextPageToken);

  console.log(`[DriveChanges] Fetched ${allChanges.length} change(s)`);

  if (newStartPageToken) {
    await setPageToken(newStartPageToken);
  }

  return { changes: allChanges, newStartPageToken, hasRelevantChanges: true };
}
