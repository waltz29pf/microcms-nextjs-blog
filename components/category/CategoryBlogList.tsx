"use client";

import { BlogPost } from "@/app/types";
import { blogPerPage } from "@/lib/utils";
import BlogCard from "../blog/BlogCard";
import PaginationButton from "../pagers/PaginationButton";

interface CategoryProps {
  blogPosts: BlogPost[];
  pageCount: number;
  totalCount: number;
}

const CategoryBlogList = ({
  blogPosts,
  pageCount,
  totalCount,
}: CategoryProps) => {
  if (blogPosts.length === 0) {
    return <div>ブログ記事がありません。</div>;
  }
  return (
    <div>
      <h2 className="font-bold text-2xl mb-4">
        Category - {blogPosts[0]?.category.name} ({totalCount})
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

export default CategoryBlogList;
