import ArchiveBlogList from "@/app/components/features/archive/ArchiveBlogList";
import LayoutWithSidebar from "@/app/components/layout/LayoutWithSidebar";
import { fetchBlogPostsByArchive } from "@/app/lib/api/blog";
import { blogPerPage } from "@/app/lib/utils";
import Loading from "@/app/loading";
import { Suspense } from "react";

export const revalidate = 60;

interface ArchivePageProps {
  params: Promise<{
    year: string;
    month: string;
  }>;
  searchParams: Promise<{
    [key: string]: string | undefined;
  }>;
}

const ArchivePage = async (props: ArchivePageProps) => {
  const searchParams = await props.searchParams;
  const params = await props.params;
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
