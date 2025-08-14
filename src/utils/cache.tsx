interface CacheItem {
  data: any;
  timestamp: number;
}

const cache = new Map<string, CacheItem>();

export const cachedFetch = async <T,>(
  key: string,
  fetcher: () => Promise<T>,
  ttl = 30000
): Promise<T> => {
  const cached = cache.get(key);
  const now = Date.now();

  // Кэш байгаа эсэхийг шалгах
  if (cached && now - cached.timestamp < ttl) {
    console.debug(`[Cache] ${key} get cache`);
    return cached.data;
  }

  console.debug(`[Cache] ${key} cached`);
  const data = await fetcher();
  cache.set(key, { data, timestamp: now });
  return data;
};

export const clearCache = (key?: string) => {
  if (key) {
    cache.delete(key);
  } else {
    cache.clear();
  }
};

export const getCacheStats = () => {
  return {
    size: cache.size,
    keys: Array.from(cache.keys()),
  };
};
