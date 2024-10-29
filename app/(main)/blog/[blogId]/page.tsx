import BlogDetail from "@/app/components/features/blog/BlogDetail";
import Loading from "@/app/loading";
import { BlogPost } from "@/app/types";

import { fetchBlogPostById, fetchRelatedBlogPosts } from "@/app/lib/api/blog";
import { Suspense } from "react";

export const revalidate = 300;
interface BlogDetailPageProps {
  params: {
    blogId: string;
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  try {
    const blogPost = await fetchBlogPostById(params.blogId);
    let relatedBlogs: BlogPost[] = [];

    if (blogPost.category) {
      relatedBlogs = await fetchRelatedBlogPosts(
        blogPost.category.id,
        params.blogId
      );
    }

    return (
      <Suspense fallback={<Loading />}>
        <BlogDetail blogPost={blogPost} relatedBlogs={relatedBlogs} />
      </Suspense>
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
