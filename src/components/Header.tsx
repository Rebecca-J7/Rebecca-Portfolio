"use client";
import React from "react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const headerHeight = 56;
    if (section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed top-0 z-50 h-14 w-full bg-web-purple-2">
      <div className="font-mono text-lg font-semibold cursor-pointer scroll-mt-24 text-black">
        <p className = "absolute left-28 top-4 hover:text-web-purple-1"
          onClick={() => scrollToSection("introduction")}
        >
          Rebecca Jennings
        </p>
      <div className="absolute right-28 top-4 flex flex-row gap-10">
        <p className = "hover:text-web-purple-1"
          onClick={() => scrollToSection("about")}
        >
          about
        </p>
        <p className = "hover:text-web-purple-1"
          onClick={() => scrollToSection("experience")}
        >
          experience
        </p>
        <p className = "hover:text-web-purple-1"
          onClick={() => scrollToSection("projects")}
        >
          projects
        </p>
      </div>
      </div>
    </div>
  );
};

export default Header;
