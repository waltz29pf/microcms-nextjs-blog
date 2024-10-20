import { BlogPost } from "@/app/types";
import BlogCard from "@/components/blog/BlogCard";

interface BlogListProps {
  blogPosts: BlogPost[];
}

const BlogList = ({ blogPosts }: BlogListProps) => {
  if (blogPosts.length === 0) {
    return <div>ブログ記事がありません。</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
      {blogPosts.map((blogPost) => (
        <BlogCard key={blogPost.id} blogPost={blogPost} />
      ))}
    </div>
  );
};

export default BlogList;
