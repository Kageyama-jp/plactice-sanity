import { sanityClient } from "sanity:client"

export async function getFirstBlogPost() {
  try {
    const query = `*[_type == "post" && defined(slug)] | order(publishedAt desc)`;
    const firstPost = await sanityClient.fetch(query);
    return firstPost;
    // 成功時の処理
  } catch (error) {
    console.error("Error:", error);
    }
}