import { microCmsClient } from "../libs/microCmsClient";
import { ArchiveMonth, BlogPost, CategoryCount, SidebarData } from "../types";

// サイドバーのデータを取得する関数
export const fetchSidebarData = async (): Promise<SidebarData> => {
  try {
    const response = await microCmsClient.getList<BlogPost>({
      endpoint: "blogs",
      queries: {
        orders: "-publishedAt",
      },
    });
    const allBlogPosts = response.contents;

    // 最新の5件を取得;
    const latestBlogs = allBlogPosts.slice(0, 5);

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
      latestBlogs,
      archiveMonths: extractArchiveMonths(allBlogPosts),
      categoryCounts: extractCategoryCounts(allBlogPosts),
    };
  } catch (error) {
    console.error("Error in fetchSidebarData:", error);
    throw new Error(
      "全ブログ記事の取得に失敗しました。ネットワーク接続を確認し、後でもう一度お試しください。"
    );
  }
};
