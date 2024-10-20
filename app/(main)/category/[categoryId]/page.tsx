import { fetchBlogPostsByCategory } from "@/app/api/blogApi";
import Loading from "@/app/loading";
import CategoryBlogList from "@/components/category/CategoryBlogList";
import LayoutWithSidebar from "@/components/layout/LayoutWithSIdebar";
import { blogPerPage } from "@/lib/utils";
import { Suspense } from "react";

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
