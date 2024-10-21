import { FiHome } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import { RiArticleLine } from "react-icons/ri";

export const NAVIGATION_ITEMS = [
  { title: "Home", href: "/", icon: FiHome },
  { title: "About", href: "/about", icon: ImProfile },
  { title: "Blog", href: "/blog", icon: RiArticleLine },
] as const;

export type NavigationItem = (typeof NAVIGATION_ITEMS)[number];
