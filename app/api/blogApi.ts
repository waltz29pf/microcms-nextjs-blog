import { microCmsClient } from "../libs/microCmsClient";
import { BlogPost } from "../types";

// ブログ記事一覧の取得
export const fetchBlogPosts = async (): Promise<{ contents: BlogPost[] }> => {
  try {
    const contents = await microCmsClient.getList<BlogPost>({
      endpoint: "blogs",
      queries: {
        orders: "-publishedAt",
      },
    });
    return contents;
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    throw new Error(
      `ブログ記事一覧の取得に失敗しました。後でもう一度お試しください。`
    );
  }
};

// ブログ記事詳細の取得
export const fetchBlogPostById = async (
  contentId: string
): Promise<BlogPost> => {
  try {
    const contents = await microCmsClient.getListDetail<BlogPost>({
      endpoint: "blogs",
      contentId,
    });
    return contents;
  } catch (error) {
    console.error(`Failed to fetch blog post by ${contentId}:`, error);
    throw new Error(
      `ブログ記事(ID: ${contentId})の取得に失敗しました。後でもう一度お試しください。`
    );
  }
};
