import { createClient } from "@vercel/kv";

let _kv = null;
let _initialized = false;

function getKv() {
  if (_initialized) return _kv;
  _initialized = true;

  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;

  if (!url || !token || url.startsWith("YOUR_") || token.startsWith("YOUR_")) {
    console.warn("[Redis] KV_REST_API_URL/KV_REST_API_TOKEN not configured — Redis caching disabled");
    return null;
  }

  _kv = createClient({ url, token });
  return _kv;
}

export function getRedisClient() {
  return getKv();
}

export const redis = new Proxy(
  {},
  {
    get(_, prop) {
      const client = getKv();
      if (!client) return undefined;
      const value = client[prop];
      if (typeof value === "function") {
        return value.bind(client);
      }
      return value;
    },
  },
);
