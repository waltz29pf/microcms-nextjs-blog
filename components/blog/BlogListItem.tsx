import { BlogPost } from "@/app/types";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

type Props = {
  blog: BlogPost;
};

export const BlogListItem = ({ blog }: Props) => {
  const categoryColor = blog.category.color || "gray";
  return (
    <li className="border">
      <article className="flex flex-col h-full">
        <Link href={`/blogs/${blog.id}`} className="border group">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={blog.image.url}
              width={768}
              height={432}
              alt="thumbnail"
              className="object-cover transition-transform duration-100 ease-in-out group-hover:scale-105"
              priority={false}
            />

            <div
              className="absolute top-0 left-0 text-xs text-white py-1.5 px-4"
              style={{ backgroundColor: categoryColor }}
            >
              {blog.category.name}
            </div>

            {blog.ranking && blog.ranking && (
              <div className="absolute top-0 right-0 bg-white py-2 px-3 font-bold">
                {blog.ranking}
              </div>
            )}
          </div>
          <div className="p-4">
            <div>{blog.title}</div>
            <div className="text-xs text-gray-500">
              {format(new Date(blog.createdAt), "yyy/MM/dd")}
            </div>
          </div>
        </Link>
      </article>
    </li>
  );
};
