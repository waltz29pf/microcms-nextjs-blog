import { NAVIGATION_ITEMS } from "@/app/constants/navigationItems";
import { ThemeToggle } from "@/components/navigation/ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { GiMusicSpell } from "react-icons/gi";

const Navigation = () => {
  return (
    <header className="px-8 py-4 shadow">
      <div className="flex items-center justify-between">
        <Link href="/blog" className="font-bold text-xl space-x-2">
          <div className="flex items-center justify-center  gap-2">
            <GiMusicSpell size={40} />
            <div className="flex flex-col items-center">
              <span>WaltzTech</span>
              <span className="text-sm">Web Developer</span>
            </div>
            <span className="text-2xl">|</span>
            <span className="text-2xl">TechBlog</span>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <nav aria-label="Main navigation">
            <NavigationMenu>
              <NavigationMenuList>
                {NAVIGATION_ITEMS.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
