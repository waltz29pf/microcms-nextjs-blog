"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Ranking",
    href: "/ranking",
  },
  {
    title: "blog",
    href: "/blogs",
  },
];

const Navigation = () => {
  const pathname = usePathname();
  const { setTheme } = useTheme();

  return (
    <header>
      <div className="px-8 py-4 flex shadow items-center justify-between">
        <div className="flex-1 min-w-0 flex justify-start">
          <Link href="/" className="font-bold text-xl">
            WaltzTech
          </Link>
        </div>
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-4">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded text-sm font-bold transition-colors",
                  pathname === item.href
                    ? "bg-gray-900 text-white"
                    : "text-gray-800 hover:bg-gray-700 hover:text-white"
                )}
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="flex-1 min-w-0 flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
