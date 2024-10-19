import { profileImage, profileName } from "@/app/constant/profile";
import { BlogPost } from "@/app/types";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

interface BlogItemProps {
  blogPost: BlogPost;
  isRanking?: boolean;
}

const BlogItem = ({ blogPost, isRanking }: BlogItemProps) => {
  const { id, title, image, category, ranking, createdAt } = blogPost;
  const categoryColor = category.color || "gray";
  const formattedDate = format(new Date(createdAt), "yyyy/MM/dd");

  return (
    <article className="border rounded group">
      <Link href={`/blogs/${id}`}>
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={image.url}
            width={768}
            height={432}
            alt={title}
            className="object-cover transition-transform duration-100 ease-in-out group-hover:scale-105"
            priority={false}
          />

          <div
            className="absolute top-0 left-0 text-xs text-white py-1.5 px-4"
            style={{ backgroundColor: categoryColor }}
          >
            {category.name}
          </div>

          {isRanking && ranking && (
            <div className="absolute top-0 right-0 bg-white py-2 px-3 font-bold">
              {ranking}
            </div>
          )}
        </div>

        <div className="p-5 space-y-5 hover:text-gray-500">
          <h2 className="font-bold">{title}</h2>
          <div className="flex items-center gap-2">
            <Image
              src={profileImage}
              width={24}
              height={24}
              alt="profile"
              className="rounded-full"
              priority={false}
            />
            <div className="flex flex-col text-xs text-gray-500">
              <span>{profileName}</span>
              <time dateTime={createdAt}>{formattedDate}</time>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogItem;
