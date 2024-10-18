import { getBlogs } from "@/app/libs/client";
import { BlogListItem } from "../components/BlogListItem";

export default async function StaticPage() {
  try {
    const { contents } = await getBlogs();

    if (!contents) {
      return (
        <h1 className="text-2xl font-bold text-center mt-20">No Contents</h1>
      );
    }

    return (
      <>
        <div className="h-screen container mx-auto mt-10">
          <ul className="space-y-10" aria-label="ブログ記事一覧">
            {contents.map((blog) => (
              <BlogListItem key={blog.id} blog={blog} />
            ))}
          </ul>
        </div>
      </>
    );
  } catch {
    console.error("Failed to fetch blog list", Error);
    return (
      <div className="text-center mt-20">
        ブログの取得に失敗しました。後でもう一度お試しください。
      </div>
    );
  }
}
