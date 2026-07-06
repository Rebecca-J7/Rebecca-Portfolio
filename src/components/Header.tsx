"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "#home" },
  { href: "/about", label: "#about" },
  { href: "/experience", label: "#experience" },
  { href: "/projects", label: "#projects" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 h-14 w-full border-b border-[#2A2536] bg-[#121018]/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 md:px-12">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-lg font-semibold text-[#B8A6FF] transition-colors hover:text-[#EDEAF6]"
        >
          <Terminal size={18} />
          Rebecca Jennings
        </Link>

        <nav className="flex flex-row gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative font-mono text-sm transition-colors ${
                  isActive
                    ? "text-[#EDEAF6]"
                    : "text-[#9691AA] hover:text-[#EDEAF6]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#B8A6FF] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
