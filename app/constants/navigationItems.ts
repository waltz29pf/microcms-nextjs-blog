export const NAVIGATION_ITEMS = [
  // { title: "Home", href: "/" }, // TODO: Change to "/" when the home page is ready
  // { title: "About", href: "/about" }, // TODO: Change to "/about" when the about page is ready
  { title: "Blog", href: "/blog" },
] as const;

export type NavigationItem = (typeof NAVIGATION_ITEMS)[number];
