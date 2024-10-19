import { fetchBlogPosts } from "@/app/api/blogApi";
import Loading from "@/app/loading";
import BlogList from "@/components/blog/BlogList";
import LayoutWithSidebar from "@/components/layout/LayoutWithSIdebar";
import { Suspense } from "react";

export default async function BlogListPage() {
  try {
    const { contents } = await fetchBlogPosts();

    return (
      <LayoutWithSidebar>
        <Suspense fallback={<Loading />}>
          <BlogList blogPosts={contents} />
        </Suspense>
      </LayoutWithSidebar>
    );
  } catch (error) {
    console.error("Failed to fetch blog list", error);
    return (
      <LayoutWithSidebar>
        <div className="text-center mt-20">
          ブログの取得に失敗しました。後でもう一度お試しください。
        </div>
      </LayoutWithSidebar>
    );
  }
}
