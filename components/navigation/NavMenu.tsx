"use client";
import {
  NAVIGATION_ITEMS,
  NavigationItem,
} from "@/app/constants/navigationItems";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

const NavMenu = () => {
  const pathName = usePathname();

  return (
    <NavigationMenu className="hidden md:block" aria-label="Main navigation">
      <NavigationMenuList className="flex gap-2">
        {NAVIGATION_ITEMS.map((item: NavigationItem) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded",
                  "hover:border-b-2 hover:rounded-none hover:border-black",
                  pathName === item.href && "bg-black text-gray-100"
                )}
                aria-current={pathName === item.href ? "page" : undefined}
              >
                {item.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
