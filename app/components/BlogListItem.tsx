import { Blog } from "@/app/libs/client";
import Link from "next/link";

type Props = {
  blog: Blog;
};

export const BlogListItem = ({ blog }: Props) => (
  <li className="p-5 rounded shadow-lg content flex justify-between items-center">
    <h4>{blog.title}</h4>
    <Link href={`/blogs/${blog.id}`}>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        aria-label={`${blog.title}の詳細を見る`}
      >
        詳細
      </button>
    </Link>
  </li>
);
