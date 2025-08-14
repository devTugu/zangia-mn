"use server";
import axiosClient from "@/utils/axiosClient";
import { Posts } from "@/types/posts";
import { handleApiError } from "@/utils/errorHandling";

export async function fetchPosts(): Promise<Posts | { error: string }> {
  try {
    // Send GET request to the comission API endpoint
    const response = await axiosClient.get("/posts");

    // Only return the data property from the axios response
    return response.data as Posts;
  } catch (error: any) {
    return handleApiError(error, "Failed to get commission data");
  }
}

export const fetchAllPosts = async () => {
  try {
    const [posts] = await Promise.all([fetchPosts()]);

    return {
      posts,
    };
  } catch (error) {
    console.error("Getting error when fetch all business data:", error);
    throw error;
  }
};
