import { ThemeToggle } from "@/components/navigation/ThemeToggle";
import Link from "next/link";

const Navigation = () => {
  return (
    <header className="px-8 py-4 shadow">
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/blog" className="font-bold text-xl">
            WaltzTech
          </Link>
        </div>
        {/* <nav aria-label="Main navigation">
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
        </nav> */}
        <div className="flex-shrink-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
