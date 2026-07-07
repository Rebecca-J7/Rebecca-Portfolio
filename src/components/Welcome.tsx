"use client";

import { useEffect, useState } from "react";

const Welcome = () => {
  const introText =
    "Bridging the gap between ethics and technology to build innovations.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (displayedText.length >= introText.length) {
      return;
    }

    const timer = window.setTimeout(() => {
      setDisplayedText(introText.slice(0, displayedText.length + 1));
    }, 45);

    return () => window.clearTimeout(timer);
  }, [displayedText, introText]);

  return (
    <div id="introduction" className="mt-20 flex flex-col items-center">
      <p className="animate-fade font-mono text-5xl font-semibold text-[#EDEAF6] transition-colors hover:text-[#B8A6FF] md:text-6xl">
        Rebecca Jennings
      </p>

      <div className="mt-7 flex w-full justify-center px-4">
        <div className="flex max-w-[90vw] items-start justify-center gap-1 sm:max-w-[34rem] md:max-w-[40rem]">
          <p className="w-full max-w-[90vw] overflow-hidden whitespace-pre-line break-words text-center font-mono text-2xl font-medium leading-relaxed text-[#C9C5D9] sm:max-w-[34rem] md:max-w-[40rem] md:text-3xl">
            {displayedText}
            <span className="ml-0.5 inline-block h-7 w-2.5 shrink-0 animate-pulse bg-[#B8A6FF] align-middle" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
