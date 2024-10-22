export const NAVIGATION_ITEMS = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Blog", href: "/blog" },
] as const;

export type NavigationItem = (typeof NAVIGATION_ITEMS)[number];
