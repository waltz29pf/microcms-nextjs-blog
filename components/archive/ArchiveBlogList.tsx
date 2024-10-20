import { BlogPost } from "@/app/types";
import BlogCard from "@/components/blog/BlogCard";
import { blogPerPage } from "@/lib/utils";
import { format } from "date-fns";
import PaginationButton from "../pagers/PaginationButton";

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
  return (
    <div>
      <h2 className="font-bold text-2xl mb-4">
        Archive - {format(new Date(blogPosts[0].publishedAt), "yyyy年MM月")} (
        {totalCount})
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {blogPosts.map((blogPost) => (
          <BlogCard key={blogPost.id} blogPost={blogPost} />
        ))}
      </div>
      {blogPosts.length !== 0 && (
        <PaginationButton pageCount={pageCount} displayPerPage={blogPerPage} />
      )}
    </div>
  );
};

export default ArchiveBlogList;
