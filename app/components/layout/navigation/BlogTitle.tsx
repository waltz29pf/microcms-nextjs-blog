"use client";

import { usePathname } from "next/navigation";

const BlogTitle = () => {
  const pathname = usePathname();
  const showBlogTitle = pathname === "/blog";

  return (
    <span className="text-xl sm:text-xl hidden sm:inline">
      {showBlogTitle && "| TechBlog"}
    </span>
  );
};

export default BlogTitle;
