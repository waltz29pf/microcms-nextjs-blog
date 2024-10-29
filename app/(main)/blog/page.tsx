"use client";
import BlogList from "@/app/components/features/blog/BlogList";

import LayoutWithSidebar from "@/app/components/layout/LayoutWithSidebar";
import { Button } from "@/app/components/ui/button";
import { useBlogs } from "@/app/hooks/useBlogs";
import { blogPerPage } from "@/app/lib/utils";
import { useRouter } from "next/navigation";

interface BlogPageProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}

export default function BlogListPage({ searchParams }: BlogPageProps) {
  const router = useRouter();
  const { page, perPage } = searchParams;
  const limit = typeof perPage === "string" ? parseInt(perPage) : blogPerPage;
  const offset = typeof page === "string" ? (parseInt(page) - 1) * limit : 0;
  const { data, isLoading, error } = useBlogs(limit, offset);

  if (isLoading)
    return (
      <LayoutWithSidebar>
        <div>Loading...</div>
      </LayoutWithSidebar>
    );
  if (error)
    return (
      <LayoutWithSidebar>
        <div>Error: {error.message}</div>
      </LayoutWithSidebar>
    );
  if (!data || !data.blogPosts.length) {
    return (
      <LayoutWithSidebar>
        <div className="text-center">
          <h2>ブログ記事がありません</h2>
          <Button onClick={() => router.push("/")}>Homeに戻る</Button>
        </div>
      </LayoutWithSidebar>
    );
  }

  const pageCount = Math.ceil(data.totalCount / limit);

  return (
    <LayoutWithSidebar>
      <BlogList blogPosts={data.blogPosts} pageCount={pageCount} />
    </LayoutWithSidebar>
  );
}
