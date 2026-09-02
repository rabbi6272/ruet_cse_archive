let adminDbCache = null;

async function getAdminDb() {
  if (adminDbCache) return adminDbCache;
  const { adminDb } = await import("./firebase-admin.js");
  adminDbCache = adminDb || null;
  return adminDbCache;
}

export async function getPageToken() {
  const db = await getAdminDb();
  if (!db) return null;
  try {
    const snap = await db.ref("drive/meta/pageToken").once("value");
    const token = snap.val();
    return token || null;
  } catch (err) {
    console.error("[DriveMeta] getPageToken error:", err.message);
    return null;
  }
}

export async function setPageToken(token) {
  const db = await getAdminDb();
  if (!db) return;
  try {
    await db.ref("drive/meta/pageToken").set(token);
    console.log("[DriveMeta] Page token updated");
  } catch (err) {
    console.error("[DriveMeta] setPageToken error:", err.message);
  }
}

export async function getWatchInfo() {
  const db = await getAdminDb();
  if (!db) return null;
  try {
    const snap = await db.ref("drive/meta/watch").once("value");
    return snap.val() || null;
  } catch (err) {
    console.error("[DriveMeta] getWatchInfo error:", err.message);
    return null;
  }
}

export async function setWatchInfo({ channelId, resourceId, expiration }) {
  const db = await getAdminDb();
  if (!db) return;
  try {
    await db
      .ref("drive/meta/watch")
      .set({ channelId, resourceId, expiration: String(expiration) });
    console.log(`[DriveMeta] Watch info stored: channel=${channelId}`);
  } catch (err) {
    console.error("[DriveMeta] setWatchInfo error:", err.message);
  }
}

export async function removeWatchInfo() {
  const db = await getAdminDb();
  if (!db) return;
  try {
    await db.ref("drive/meta/watch").remove();
  } catch (err) {
    console.error("[DriveMeta] removeWatchInfo error:", err.message);
  }
}
