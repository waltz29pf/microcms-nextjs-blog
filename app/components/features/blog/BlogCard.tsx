import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/app/components/ui/card";
import { PROFILE } from "@/app/lib/constants/profileInfo";
import { formatDate } from "@/app/lib/utils/dateUtils";
import { BlogPost } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { CiClock2 } from "react-icons/ci";

interface BlogItemProps {
  blogPost: BlogPost;
}

const BlogCard = ({ blogPost }: BlogItemProps) => {
  const { id, title, image, category, publishedAt } = blogPost;

  const formattedDate = formatDate(publishedAt);

  return (
    <article>
      <Card className="group overflow-hidden">
        <Link href={`/blog/${id}`} className="block h-full">
          <CardHeader className="p-0">
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={image.url}
                width={768}
                height={432}
                alt={title}
                className="object-cover transition-transform duration-100 ease-in-out group-hover:scale-105"
                priority={false}
              />
            </div>
          </CardHeader>
          <div>
            <CardContent className="px-5 py-3 space-y-2">
              <h2 className="font-bold text-xl">{title}</h2>
            </CardContent>

            <CardFooter className="p-5 pt-0 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Image
                  src={PROFILE.IMAGE_PATH}
                  width={28}
                  height={28}
                  alt="profile"
                  className="rounded-full"
                  priority={false}
                />
                <div className="flex flex-col text-xs text-gray-500 dark:text-gray-300">
                  <span>{PROFILE.NAME}</span>
                  <div className="flex items-center gap-1">
                    <CiClock2 />
                    <time dateTime={blogPost.publishedAt}>{formattedDate}</time>
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-700 bg-gray-200 p-3 py-1 rounded-full">
                {category.name}
              </span>
            </CardFooter>
          </div>
        </Link>
      </Card>
    </article>
  );
};

export default BlogCard;
