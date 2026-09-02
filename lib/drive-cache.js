import { unstable_cache } from "next/cache";
import { revalidateTag } from "next/cache";

export const DRIVE_CACHE_TAG = "drive";

export async function invalidateAllDriveCaches() {
  try {
    revalidateTag(DRIVE_CACHE_TAG);
    console.log("[DriveCache] Invalidated all Drive caches (revalidateTag)");
    return true;
  } catch (err) {
    console.error("[DriveCache] Invalidation error:", err.message);
    return false;
  }
}

export async function getCachedDriveData(folderId, fetchFn) {
  const cached = unstable_cache(
    async () => {
      return await fetchFn();
    },
    [`drive_${folderId}`],
    { tags: [DRIVE_CACHE_TAG], revalidate: false },
  );

  return await cached();
}
