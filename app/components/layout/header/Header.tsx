import NavMenu from "@/app/components/layout/navigation/NavMenu";
import { ThemeToggle } from "@/app/components/layout/navigation/ThemeToggle";
import Link from "next/link";
import { GiMusicSpell } from "react-icons/gi";
import BlogTitle from "../navigation/BlogTitle";
import MobileMenu from "../navigation/MobileMenu";

const Header = () => {
  return (
    <header className="py-3 px-4 sm:px-8 shadow">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-xl"
          aria-label="WaltzTech Home"
        >
          <div className="flex items-center gap-2">
            <GiMusicSpell size={40} />
            <div className="flex flex-col items-center">
              <span className="text-sm sm:text-base">WaltzTech</span>
              <span className="text-xs sm:text-sm">Software Engineer</span>
            </div>
            <BlogTitle />
          </div>
        </Link>
        {/* Navigation Menu */}
        <div className="flex items-center gap-2 md:gap-6">
          <NavMenu />
          {/* Hamburger Menu */}
          <MobileMenu />
          {/* Dark mode */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
