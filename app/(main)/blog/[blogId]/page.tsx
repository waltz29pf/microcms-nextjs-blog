import { fetchBlogPostById, fetchRelatedBlogPosts } from "@/app/api/blogApi";
import Loading from "@/app/loading";
import { BlogPost } from "@/app/types";

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
    let relatedBlogs: BlogPost[] = [];

    // 同じカテゴリのブログを取得;
    if (blogPost?.category) {
      relatedBlogs = await fetchRelatedBlogPosts(
        blogPost.category.id,
        params.blogId
      );
    }

    return (
      <LayoutWithSidebar>
        <Suspense fallback={<Loading />}>
          <BlogDetail blogPost={blogPost} relatedBlogs={relatedBlogs} />
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
