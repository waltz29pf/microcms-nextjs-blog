import { microCmsClient } from "@/app/lib/config/microCmsClient";
import { parseContent } from "@/app/lib/utils/blogContentParser";
import { ArchiveMonth, BlogPost, CategoryCount } from "@/app/types";

export const revalidate = 60;

interface fetchBlogPostsProps {
  blogPosts: BlogPost[];
  totalCount: number;
  archiveMonths: ArchiveMonth[];
  categoryCounts: CategoryCount[];
}

// ブログ記事一覧の取得
export const fetchBlogPosts = async ({
  limit,
  offset,
}: {
  limit?: number;
  offset?: number;
}): Promise<fetchBlogPostsProps> => {
  try {
    const response = await microCmsClient.getList<BlogPost>({
      endpoint: "blog",
      queries: {
        orders: "-publishedAt",
        limit: limit || 100,
        offset: offset || 0,
      },
    });

    const allBlogPosts = response.contents;

    // アーカイブの年月を取得;
    const extractArchiveMonths = (blogs: BlogPost[]): ArchiveMonth[] => {
      const monthCounts = new Map<string, ArchiveMonth>();
      blogs.forEach((blog) => {
        const date = new Date(blog.publishedAt || blog.createdAt);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const key = `${year}-${month}`;
        const current = monthCounts.get(key) || { year, month, count: 0 };
        monthCounts.set(key, { ...current, count: current.count + 1 });
      });
      return Array.from(monthCounts.values()).sort(
        (a, b) => b.year - a.year || b.month - a.month
      );
    };

    // カテゴリごとの記事数を取得
    const extractCategoryCounts = (blogs: BlogPost[]): CategoryCount[] => {
      const categoryCounts = new Map<string, CategoryCount>();
      blogs.forEach((blog) => {
        const { id, name } = blog.category;
        const current = categoryCounts.get(id) || { id, name, count: 0 };
        categoryCounts.set(id, { ...current, count: current.count + 1 });
      });
      return Array.from(categoryCounts.values()).sort(
        (a, b) => b.count - a.count
      );
    };

    return {
      blogPosts: response.contents,
      totalCount: response.totalCount,
      archiveMonths: extractArchiveMonths(allBlogPosts),
      categoryCounts: extractCategoryCounts(allBlogPosts),
    };
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
      endpoint: "blog",
      contentId,
    });

    return {
      ...contents,
      content: parseContent(contents.content),
    };
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
      endpoint: "blog",
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

// カテゴリ別記事の取得
export const fetchBlogPostsByCategory = async ({
  categoryId,
  limit,
  offset,
}: {
  categoryId: string;
  limit: number;
  offset: number;
}): Promise<{ contents: BlogPost[]; totalCount: number }> => {
  try {
    const response = await microCmsClient.getList<BlogPost>({
      endpoint: "blog",
      queries: {
        limit: limit || 10,
        offset: offset || 0,
        filters: `category[equals]${categoryId}`,
        orders: "-publishedAt",
      },
    });

    return { contents: response.contents, totalCount: response.totalCount };
  } catch (error) {
    console.error("Failed to fetch blog posts by category:", error);
    throw new Error(
      "カテゴリー別の記事の取得に失敗しました。ネットワーク接続を確認し、後でもう一度お試しください。"
    );
  }
};

// アーカイブ別記事の取得
export const fetchBlogPostsByArchive = async ({
  formattedMonth,
  limit,
  offset,
}: {
  formattedMonth: string;
  limit: number;
  offset: number;
}): Promise<{ archiveBlogPosts: BlogPost[]; totalCount: number }> => {
  try {
    const response = await microCmsClient.getList<BlogPost>({
      endpoint: "blog",
      queries: {
        limit: limit || 10,
        offset: offset || 0,
        filters: `publishedAt[begins_with]${formattedMonth}`,
        orders: "-publishedAt",
      },
    });

    return {
      archiveBlogPosts: response.contents,
      totalCount: response.totalCount,
    };
  } catch (error) {
    console.error("Failed to fetch blog posts by category:", error);
    throw new Error(
      "アーカイブ別の記事の取得に失敗しました。ネットワーク接続を確認し、後でもう一度お試しください。"
    );
  }
};
