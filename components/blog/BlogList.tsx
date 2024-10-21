import { BlogPost } from "@/app/types";
import BlogCard from "@/components/blog/BlogCard";
import { blogPerPage } from "@/lib/utils";
import PaginationButton from "../pagers/PaginationButton";

interface BlogListProps {
  blogPosts: BlogPost[];
  pageCount: number;
}

const BlogList = ({ blogPosts, pageCount }: BlogListProps) => {
  if (blogPosts.length === 0) {
    return <div>ブログ記事がありません。</div>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 ">
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

export default BlogList;
