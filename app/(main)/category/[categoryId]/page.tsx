import CategoryBlogList from "@/app/components/features/category/CategoryBlogList";
import LayoutWithSidebar from "@/app/components/layout/LayoutWithSidebar";
import { fetchBlogPostsByCategory } from "@/app/lib/api/blog";
import { blogPerPage } from "@/app/lib/utils";
import Loading from "@/app/loading";
import { Suspense } from "react";

export const revalidate = 60;
interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    [key: string]: string | undefined;
  };
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const { page, perPage } = searchParams;
  const { categoryId } = params;
  const limit = typeof perPage === "string" ? parseInt(perPage) : blogPerPage;
  const offset = typeof page === "string" ? (parseInt(page) - 1) * limit : 0;
  const { contents: categoryBlogs, totalCount } =
    await fetchBlogPostsByCategory({
      categoryId,
      limit,
      offset,
    });
  const pageCount = Math.ceil(totalCount / limit);

  return (
    <Suspense fallback={<Loading />}>
      <LayoutWithSidebar>
        <CategoryBlogList
          blogPosts={categoryBlogs}
          pageCount={pageCount}
          totalCount={totalCount}
        />
      </LayoutWithSidebar>
    </Suspense>
  );
};

export default CategoryPage;
