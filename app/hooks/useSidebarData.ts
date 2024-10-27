import { fetchBlogPosts } from "@/app/lib/api/blog";
import { ArchiveMonth, CategoryCount } from "@/app/types";
import { useQuery } from "@tanstack/react-query";

interface SidebarData {
  archiveMonths: ArchiveMonth[];
  categoryCounts: CategoryCount[];
}

export const useSidebarData = () => {
  return useQuery<SidebarData>({
    queryKey: ["sidebarData"],
    queryFn: async () => {
      const { archiveMonths, categoryCounts } = await fetchBlogPosts({});
      return { archiveMonths, categoryCounts };
    },
    staleTime: 1000 * 60 * 5,
  });
};
