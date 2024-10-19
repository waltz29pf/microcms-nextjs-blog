import { BlogPost } from "@/app/types";
import BlogItem from "@/components/blog/BlogItem";

interface BlogListProps {
  blogPosts: BlogPost[];
}

const BlogList = ({ blogPosts }: BlogListProps) => {
  if (blogPosts.length === 0) {
    return <div>ブログ記事がありません。</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
      {blogPosts.map((blogPost) => (
        <BlogItem key={blogPost.id} blogPost={blogPost} />
      ))}
    </div>
  );
};

export default BlogList;
