import { createClient } from "microcms-js-sdk";

export type Blog = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

if (!process.env.SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

// ブログ一覧を取得
export const getBlogs = async (): Promise<{ contents: Blog[] }> => {
  try {
    const blogs = await client.getList<Blog>({
      endpoint: "blogs",
    });
    return blogs;
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    throw error;
  }
};

// ブログの詳細を取得
export const getDetail = async (contentId: string) => {
  try {
    const blog = await client.getListDetail<Blog>({
      endpoint: "blogs",
      contentId,
    });
    return blog;
  } catch (error) {
    console.error(`Failed to fetch blog detail for ID ${contentId}:`, error);
    throw error;
  }
};
