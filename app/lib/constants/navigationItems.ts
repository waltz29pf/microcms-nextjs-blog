export const NAVIGATION_ITEMS = [
  { title: "Home", href: "/" },
  { title: "Works", href: "/works" },
  { title: "Blog", href: "/blog" },
] as const;

export type NavigationItem = (typeof NAVIGATION_ITEMS)[number];
