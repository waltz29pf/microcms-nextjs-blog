"use client";

import { PROFILE } from "@/app/lib/constants/profileInfo";
import { BlogPost } from "@/app/types";
import { format } from "date-fns";
import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import { PiArrowsClockwise } from "react-icons/pi";
import BlogCard from "./BlogCard";

interface BlogDetailProps {
  blogPost: BlogPost;
  relatedBlogs?: BlogPost[];
}

const BlogDetail = ({ blogPost, relatedBlogs }: BlogDetailProps) => {
  const formattedPublishedDate = format(
    new Date(blogPost.publishedAt),
    "yyyy/MM/dd"
  );
  const formattedUpdatedDate = format(
    new Date(blogPost.updatedAt),
    "yyyy/MM/dd"
  );

  return (
    <article className="bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-200 max-w-[708px] space-y-10 mx-auto my-10 px-4 md:px-10 pb-8 rounded border-none sm:border border-gray-200 dark:border-gray-700">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={blogPost.image.url}
          width={768}
          height={432}
          alt={blogPost.title}
          className="object-cover rounded"
          priority={false}
        />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold text-3xl">{blogPost.title}</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={PROFILE.IMAGE_PATH}
              width={32}
              height={32}
              alt="profile"
              className="rounded-full"
              priority={false}
            />
            <div className="flex flex-col text-xs text-gray-500 dark:text-gray-300">
              <span>{PROFILE.NAME}</span>
              <div className="flex items-center gap-1">
                <CiClock2 />
                <time dateTime={blogPost.publishedAt}>
                  {formattedPublishedDate}
                </time>
                {blogPost.updatedAt !== blogPost.publishedAt && (
                  <div className="flex items-center gap-1">
                    <PiArrowsClockwise />
                    <time dateTime={blogPost.updatedAt}>
                      {formattedUpdatedDate}
                    </time>
                  </div>
                )}
              </div>
            </div>
          </div>

          <span className="text-xs text-gray-700 bg-gray-200 p-3 py-1 rounded-full">
            {blogPost.category.name}
          </span>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />

      {relatedBlogs && relatedBlogs.length > 0 && (
        <div>
          <div className="font-bold border-l-4 border-gray-300 pl-2">
            こんな記事も読まれています
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            {relatedBlogs.map((blogPost) => (
              <BlogCard key={blogPost.id} blogPost={blogPost} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default BlogDetail;
