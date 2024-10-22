import { NAVIGATION_ITEMS } from "@/app/constants/navigationItems";
import { ThemeToggle } from "@/components/navigation/ThemeToggle";
import Link from "next/link";
import { GiMusicSpell } from "react-icons/gi";
import BlogTitle from "./navigation/BlogTitle";
import MobileMenu from "./navigation/MobileMenu";

const Navigation = () => {
  return (
    <header className="px-4 sm:px-8 py-4 shadow">
      <div className="flex items-center justify-between">
        <Link href="/blog" className="font-bold text-xl space-x-2">
          <div className="flex items-center justify-center gap-2">
            <GiMusicSpell size={40} />
            <div className="flex flex-col items-center">
              <span className="text-sm sm:text-base">WaltzTech</span>
              <span className="text-xs sm:text-sm">Web Developer</span>
            </div>
            <BlogTitle />
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex space-x-4">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center hover:text-gray-600"
                  >
                    {item.icon && <item.icon className="mr-1" />}
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <MobileMenu />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
