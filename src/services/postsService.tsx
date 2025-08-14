import { fetchAllPosts } from "@/action/postsAction";
import { cachedFetch } from "@/utils/cache";

const CACHE_TTL = 60000;

export const fetchAllPostsData = async () => {
  const cacheKey = "posts-data";

  try {
    const data = await cachedFetch(
      cacheKey,
      async () => {
        const [posts] = await Promise.all([fetchAllPosts()]);

        return {
          posts,
        };
      },
      CACHE_TTL
    );

    return data;
  } catch (error) {
    console.error("Posts function get error:", error);
    throw error;
  }
};

export const fetchPostsDataWithRetry = async (retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fetchAllPostsData();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise((resolve) => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
};
