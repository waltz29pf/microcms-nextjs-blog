import { getBlogs, getDetail } from "@/app/libs/client";

export async function generateStaticParams() {
  const { contents } = await getBlogs();

  return contents.map((blog) => ({
    blogId: blog.id,
  }));
}

export default async function StaticDetailPage({
  params,
}: {
  params: { blogId: string };
}) {
  try {
    const blog = await getDetail(params.blogId);

    return (
      <>
        <div className="h-screen pt-5">
          <div className="content">
            <h1>{blog.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: `${blog.body}`,
              }}
            />
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("Failed to fetch blog detail:", error);
    return <div>ブログ記事の取得に失敗しました。</div>;
  }
}
