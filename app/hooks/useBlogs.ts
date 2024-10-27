import { fetchBlogPosts } from "@/app/lib/api/blog";
import { useQuery } from "@tanstack/react-query";

export const useBlogs = (limit?: number, offset?: number) => {
  return useQuery({
    queryKey: ["blogList", limit, offset],
    queryFn: async () => {
      const { blogPosts, totalCount } = await fetchBlogPosts({ limit, offset });
      return { blogPosts, totalCount };
    },
    staleTime: 1000 * 60 * 5,
  });
};
