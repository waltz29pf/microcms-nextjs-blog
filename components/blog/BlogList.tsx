"use client";

import { BlogPost } from "@/app/types";
import BlogCard from "@/components/blog/BlogCard";
import { blogPerPage } from "@/lib/utils";
import { useRouter } from "next/navigation";
import PaginationButton from "../pagers/PaginationButton";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface BlogListProps {
  blogPosts: BlogPost[];
  pageCount: number;
}

const BlogList = ({ blogPosts, pageCount }: BlogListProps) => {
  const router = useRouter();
  if (blogPosts.length === 0) {
    return (
      <Card className="w-full px-6 py-12">
        <CardHeader className="flex flex-col gap-2 items-center">
          <CardTitle className="text-5xl">ブログ記事がありません</CardTitle>
          <CardDescription className="text-xl">
            申し訳ありません。現在表示できるブログ記事がありません。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">
            新しい記事が追加されるまでお待ちください。
          </p>
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => router.push("/")}
            className="flex-1 bg-slate-800"
          >
            Homeに戻る
          </Button>
        </CardFooter>
      </Card>
    );
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
