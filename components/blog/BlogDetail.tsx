"use client";

import { profileImage, profileName } from "@/app/constants/profileInfo";
import { BlogPost } from "@/app/types";
import { format } from "date-fns";
import Image from "next/image";

interface BlogDetailProps {
  blogPost: BlogPost;
}

// ブログ詳細
const BlogDetail = ({ blogPost }: BlogDetailProps) => {
  const categoryColor = blogPost.category.color || "gray";
  const formattedDate = format(new Date(blogPost.createdAt), "yyyy/MM/dd");

  return (
    <article>
      <div className="space-y-10">
        <div className="space-y-8">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={blogPost.image.url}
              width={768}
              height={432}
              alt="thumbnail"
              className="object-cover"
              priority={false}
            />

            <div
              className="absolute top-0 left-0 text-xs text-white py-1.5 px-4"
              style={{ backgroundColor: categoryColor }}
            >
              {blogPost.category.name}
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-bold text-3xl">{blogPost.title}</h2>
            <div className="flex items-center gap-2">
              <Image
                src={profileImage}
                width={32}
                height={32}
                alt="profile"
                className="rounded-full"
                priority={false}
              />
              <div className="flex flex-col text-xs text-gray-500">
                <span>{profileName}</span>
                <time dateTime={blogPost.createdAt}>{formattedDate}</time>
              </div>
            </div>
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        {/* {relatedBlogs.length > 0 && (
        <div>
          <div className="font-bold border-l-4 border-black pl-2">関連記事</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedBlogs.map((blogPost) => (
              <BlogItem key={blogPost.id} blogPost={blogPost} />
            ))}
          </div>
        </div>
      )} */}
      </div>
    </article>
  );
};

export default BlogDetail;
