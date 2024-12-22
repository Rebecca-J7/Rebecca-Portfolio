"use client";

import { useState } from "react";

type TabKey = "heart" | "laptop" | "headphones" | "cat" | "journal";

const Introduction = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("heart");

  const tabContent: Record<TabKey, string> = {
    heart:
      "Hello! I am Rebecca Jennings, a Computer Science major at University of California, Riverside!",
    laptop:
      "I developed a passion for computer science as I researched and observed impacts of the digital world. I want to branch my career into cybersecurity so I may bridge the gaps between ethics and technology.",
    headphones:
      "I delved into my love for music when I learned to play the drum set and found K-pop! Through playing and many genres of music I find comfort and motivation in making playlists and analyzing the meaning of songs.",
    cat: "I have two amazing pets, Clipper and Trixie! Clipper is very chipper and a fun bundle of feathers who loves to fly around and be involved! As for Trixie, she is rambunctious and sassy, loving zoomies and nightly cuddles!",
    journal:
      "Through journaling I am able to express my thoughts, feelings, reflections, and experiences. Journaling also provides a medium for me to discover my creativity and cherish the memories I have throughout the year.",
  };

  return (
    <div className="absolute left-52 top-96 flex flex-col">
      <div className="flex flex-row gap-5 rounded-md">
        <div
          className={`flex h-[40px] w-[100px] items-center justify-center rounded-md border-2 border-web-purple-2 ${
            activeTab === "heart"
              ? "bg-web-purple-2"
              : "bg-web-purple-1 hover:bg-web-purple-2"
          }`}
          onClick={() => setActiveTab("heart")}
        >
          <img
            src="/icons8-heart-50.png"
            alt="Heart Logo"
            className="h-[30px] w-[30px] object-contain"
          />
        </div>

        <div
          className={`flex h-[40px] w-[100px] items-center justify-center rounded-md border-2 border-web-purple-2 ${
            activeTab === "laptop"
              ? "bg-web-purple-2"
              : "bg-web-purple-1 hover:bg-web-purple-2"
          }`}
          onClick={() => setActiveTab("laptop")}
        >
          <img
            src="/icons8-laptop-50.png"
            alt="Laptop Logo"
            className="h-[30px] w-[30px] object-contain"
          />
        </div>

        <div
          className={`flex h-[40px] w-[100px] items-center justify-center rounded-md border-2 border-web-purple-2 ${
            activeTab === "headphones"
              ? "bg-web-purple-2"
              : "bg-web-purple-1 hover:bg-web-purple-2"
          }`}
          onClick={() => setActiveTab("headphones")}
        >
          <img
            src="/icons8-headphones-24.png"
            alt="Headphones Logo"
            className="h-[30px] w-[30px] object-contain"
          />
        </div>

        <div
          className={`flex h-[40px] w-[100px] items-center justify-center rounded-md border-2 border-web-purple-2 ${
            activeTab === "cat"
              ? "bg-web-purple-2"
              : "bg-web-purple-1 hover:bg-web-purple-2"
          }`}
          onClick={() => setActiveTab("cat")}
        >
          <img
            src="/icons8-cat-30.png"
            alt="Cat Logo"
            className="h-[30px] w-[30px] object-contain"
          />
          <img
            src="/icons8-bird-48.png"
            alt="Bird Logo"
            className="h-[25px] w-[25px] object-contain"
          />
        </div>

        <div
          className={`flex h-[40px] w-[100px] items-center justify-center rounded-md border-2 border-web-purple-2 ${
            activeTab === "journal"
              ? "bg-web-purple-2"
              : "bg-web-purple-1 hover:bg-web-purple-2"
          }`}
          onClick={() => setActiveTab("journal")}
        >
          <img
            src="/icons8-journal-30.png"
            alt="Journal Logo"
            className="h-[30px] w-[30px] object-contain"
          />
        </div>
      </div>

      <div className="relative right-3 flex h-[280px] w-[620px] items-center justify-center rounded-md border-2 border-web-purple-2 bg-web-purple-1">
        <div className="flex w-5/6 flex-row gap-10">
          <img
            src="/BCOE-Photo.jpg"
            alt="BCOE Photo"
            className="h-60 w-40 rounded-md border-2 border-web-purple-2"
          />
          <p className="content-center font-mono text-xl font-semibold text-black">
            {tabContent[activeTab]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
