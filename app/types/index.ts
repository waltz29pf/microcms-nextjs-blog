export interface AboutContent {
  id: string;
  content: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  image: {
    url: string;
  };
  category: Category;
  ranking?: number;
  isRecommended: boolean;
  isSpecial: boolean;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

export interface ArchiveMonth {
  year: number;
  month: number;
  count: number;
}

export interface CategoryCount {
  id: string;
  name: string;
  count: number;
}

export interface SidebarData {
  latestBlogs: BlogPost[];
  archiveMonths: ArchiveMonth[];
  categoryCounts: CategoryCount[];
}
