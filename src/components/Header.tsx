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
    <div className="fixed top-0 z-50 h-14 w-full bg-web-purple-1 opacity-75">
      <div className="absolute left-7 top-5 flex flex-row gap-5 font-mono text-base font-semibold">
        <p
          className="cursor-pointer scroll-mt-14 text-web-purple-2 hover:text-web-purple-2"
          onClick={() => scrollToSection("introduction")}
        >
          rebecca jennings
        </p>
        <p
          className="cursor-pointer scroll-mt-14 text-black hover:text-web-purple-2"
          onClick={() => scrollToSection("about")}
        >
          about
        </p>
        <p
          className="cursor-pointer scroll-mt-14 text-black hover:text-web-purple-2"
          onClick={() => scrollToSection("skills")}
        >
          skills
        </p>
        <p
          className="cursor-pointer scroll-mt-14 text-black hover:text-web-purple-2"
          onClick={() => scrollToSection("experience")}
        >
          experience
        </p>
        <p
          className="cursor-pointer scroll-mt-14 text-black hover:text-web-purple-2"
          onClick={() => scrollToSection("projects")}
        >
          projects
        </p>
        <p
          className="cursor-pointer scroll-mt-14 text-black hover:text-web-purple-2"
          onClick={() => scrollToSection("gallery")}
        >
          gallery
        </p>
      </div>
    </div>
  );
};

export default Header;
