import ArchiveBlogList from "@/app/components/features/archive/ArchiveBlogList";
import LayoutWithSidebar from "@/app/components/layout/LayoutWithSidebar";
import { fetchBlogPostsByArchive } from "@/app/lib/api/blog";
import { blogPerPage } from "@/app/lib/utils";
import Loading from "@/app/loading";
import { Suspense } from "react";

export const revalidate = 60;

interface ArchivePageProps {
  params: {
    year: string;
    month: string;
  };
  searchParams: {
    [key: string]: string | undefined;
  };
}

const ArchivePage = async ({ params, searchParams }: ArchivePageProps) => {
  const { year, month } = params;
  const { page, perPage } = searchParams;
  const limit = typeof perPage === "string" ? parseInt(perPage) : blogPerPage;
  const offset = typeof page === "string" ? (parseInt(page) - 1) * limit : 0;
  const formattedMonth = `${year}-${month.padStart(2, "0")}`;
  const { archiveBlogPosts, totalCount } = await fetchBlogPostsByArchive({
    formattedMonth,
    limit,
    offset,
  });
  const pageCount = Math.ceil(totalCount / limit);
  return (
    <Suspense fallback={<Loading />}>
      <LayoutWithSidebar>
        <ArchiveBlogList
          blogPosts={archiveBlogPosts}
          pageCount={pageCount}
          totalCount={totalCount}
        />
      </LayoutWithSidebar>
    </Suspense>
  );
};

export default ArchivePage;
