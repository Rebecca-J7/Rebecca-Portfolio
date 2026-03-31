"use client";
import React from "react";
import Link from "next/link";

const Header = () => {
  // const scrollToSection = (sectionId: string) => {
  //   const section = document.getElementById(sectionId);
  //   const headerHeight = 56;
  //   if (section) {
  //     window.scrollTo({
  //       top: section.offsetTop - headerHeight,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <div className="fixed top-0 z-50 h-14 w-full bg-web-purple-2">
      <div className="cursor-pointer scroll-mt-24 font-mono text-lg font-semibold text-black">
        <Link
          href="/"
          className="absolute left-28 top-4 hover:text-web-purple-1"
        >
          Rebecca Jennings
        </Link>
        <div className="absolute right-28 top-4 flex flex-row gap-10">
          <Link href="/" className="hover:text-web-purple-1">
            #home
          </Link>
          <Link href="/about" className="hover:text-web-purple-1">
            #about
          </Link>
          <Link href="/experience" className="hover:text-web-purple-1">
            #experience
          </Link>
          <Link href="/projectss" className="hover:text-web-purple-1">
            #projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
