export const NAVIGATION_ITEMS = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Works", href: "/works" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
] as const;

export type NavigationItem = (typeof NAVIGATION_ITEMS)[number];
