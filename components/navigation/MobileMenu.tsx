"use client";

import { NAVIGATION_ITEMS } from "@/app/constants/navigationItems";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className="p-2 text-gray-500 hover:text-gray-600 md:hidden"
          aria-label="Open mobile menu"
        >
          <FiMenu size={24} />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[240px] bg-white/20 dark:bg-black/80 backdrop-blur-sm"
      >
        <nav className="flex flex-col space-y-4 mt-8">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {item.icon && <item.icon className="mr-2" size={20} />}
              {item.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
