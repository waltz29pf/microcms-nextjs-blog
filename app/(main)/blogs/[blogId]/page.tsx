import { fetchBlogPostById } from "@/app/api/blogApi";
import Loading from "@/app/loading";

import BlogDetail from "@/components/blog/BlogDetail";
import LayoutWithSidebar from "@/components/layout/LayoutWithSIdebar";
import { Suspense } from "react";

interface BlogDetailPageProps {
  params: {
    blogId: string;
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  try {
    const blogPost = await fetchBlogPostById(params.blogId);

    // let relatedBlogs: BlogPost[] = [];

    // 同じカテゴリのブログを取得;
    // if (blogPost?.category) {
    //   const relatedBlogsResponse = await microCmsClient.getList<BlogPost>({
    //     endpoint: "blog",
    //     queries: {
    //       filters: `category[equals]${blogPost.category.id}[and]id[not_equals]${params.blogId}`,
    //       limit: 6,
    //       orders: "-publishedAt",
    //     },
    //   });
    //   relatedBlogs = relatedBlogsResponse.contents;
    // }

    return (
      <LayoutWithSidebar>
        <Suspense fallback={<Loading />}>
          <BlogDetail blogPost={blogPost} />
        </Suspense>
      </LayoutWithSidebar>
    );
  } catch (error) {
    console.error("Failed to fetch blog detail:", error);
    return (
      <div className="flex items-center justify-center min-h-screen">
        ブログ記事の取得に失敗しました。
      </div>
    );
  }
}
