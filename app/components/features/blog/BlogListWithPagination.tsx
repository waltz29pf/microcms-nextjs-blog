import PaginationButton from "@/app/components/ui/pagers/PaginationButton";
import { BlogPost } from "@/app/types";

import { blogPerPage } from "@/app/lib/utils";
import BlogCard from "./BlogCard";

interface BlogListWithPaginationProps {
  blogPosts: BlogPost[];
  pageCount: number;
  totalCount: number;
  title: string;
}

const BlogListWithPagination = ({
  blogPosts,
  pageCount,
  totalCount,
  title,
}: BlogListWithPaginationProps) => {
  if (blogPosts.length === 0) {
    return <div>ブログ記事がありません。</div>;
  }

  return (
    <div>
      <h2 className="font-bold text-2xl mb-4">
        {title} ({totalCount})
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

export default BlogListWithPagination;
