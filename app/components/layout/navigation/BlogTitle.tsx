"use client";

import { usePathname } from "next/navigation";

const PATH_TITLES: Record<string, string> = {
  "/blog": "| Tech Blog",
  "/works": "| My Works",
};

const BlogTitle = () => {
  const pathname = usePathname();
  const pageTitle = PATH_TITLES[pathname];

  if (!pageTitle) return null;

  return (
    <span className="text-xl sm:text-xl bg-clip-text bg-gradient-to-r from-sky-500 to-sky-300 text-transparent">
      {pageTitle}
    </span>
  );
};

export default BlogTitle;
