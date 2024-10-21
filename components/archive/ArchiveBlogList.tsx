import { BlogPost } from "@/app/types";
import { format } from "date-fns";
import BlogListWithPagination from "../blog/BlogListWithPagination";

interface ArchiveProps {
  blogPosts: BlogPost[];
  pageCount: number;
  totalCount: number;
}

const ArchiveBlogList = ({
  blogPosts,
  pageCount,
  totalCount,
}: ArchiveProps) => {
  const title = `Archive - ${format(
    new Date(blogPosts[0].publishedAt),
    "yyyy年MM月"
  )}`;

  return (
    <BlogListWithPagination
      blogPosts={blogPosts}
      pageCount={pageCount}
      totalCount={totalCount}
      title={title}
    />
  );
};

export default ArchiveBlogList;
