"use client";

import { NAVIGATION_ITEMS } from "@/app/constants/navigationItems";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { containerVariants, itemVariants } from "./constants/animations";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className="p-2 md:hidden text-gary-300"
          aria-label="Open Mobile Menu"
        >
          <FiMenu className="h-6 w-6" aria-hidden="true" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[280px] p-0"
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <motion.nav
          className="flex flex-col mt-12 p-4"
          aria-label="mobile navigation"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.ul className="list-none p-0 m-0">
            <li>
              {NAVIGATION_ITEMS.map((item) => (
                <motion.li key={item.href} variants={itemVariants}>
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className={cn(
                      "flex items-center px-4 py-3 rounded-md text-lg",
                      "transition-colors duration-200",
                      "hover:bg-accent/80",
                      "focus:outline-none focus:ring-2 focus:ring-primary",
                      pathname === item.href &&
                        "bg-accent text-primary font-medium"
                    )}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.title}
                  </Link>
                </motion.li>
              ))}
            </li>
          </motion.ul>
        </motion.nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
