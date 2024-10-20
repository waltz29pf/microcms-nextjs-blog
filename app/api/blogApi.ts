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
      "ブログ記事一覧の取得に失敗しました。ネットワーク接続を確認し、後でもう一度お試しください。"
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
      `ブログ記事(ID: ${contentId})の取得に失敗しました。記事が存在しないか、ネットワークエラーが発生した可能性があります。`
    );
  }
};

// 関連記事の取得
export const fetchRelatedBlogPosts = async (
  categoryId: string,
  currentBlogId: string,
  limit: number = 6
): Promise<BlogPost[]> => {
  try {
    const response = await microCmsClient.getList<BlogPost>({
      endpoint: "blogs",
      queries: {
        filters: `category[equals]${categoryId}[and]id[not_equals]${currentBlogId}`,
        limit,
        orders: "-publishedAt",
      },
    });
    return response.contents;
  } catch (error) {
    console.error("Failed to fetch related blog posts:", error);
    throw new Error(
      "関連記事の取得に失敗しました。ネットワーク接続を確認し、後でもう一度お試しください。"
    );
  }
};
