"use client";

import { BlogPost } from "@/app/types";
import BlogListWithPagination from "../blog/BlogListWithPagination";

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
  const title = `Category - ${blogPosts[0]?.category.name}`;

  return (
    <BlogListWithPagination
      blogPosts={blogPosts}
      pageCount={pageCount}
      totalCount={totalCount}
      title={title}
    />
  );
};

export default CategoryBlogList;
