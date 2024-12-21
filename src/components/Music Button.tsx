"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";

const MusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying); // Toggle the state
    console.log(isPlaying ? "Paused!" : "Playing!");
    // Add additional logic for playing/pausing music
  };

  return (
    <div className="absolute right-48 top-40 flex flex-row gap-5">
      <button
        className="h-11 w-11 rounded-full bg-web-purple-2 focus:outline-none"
        onClick={togglePlay}
      >
        <i
          className={`fa ${isPlaying ? "fa-pause" : "fa-play"} fa-1x text-white`}
          id="play-btn"
        ></i>
      </button>

      <p className="relative top-2 grow basis-3 font-mono text-xl font-semibold text-black">
        lofi serendipity
      </p>
    </div>
  );
};

export default MusicButton;
