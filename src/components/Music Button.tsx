"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState, useRef } from "react";

const MusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause(); // Pause the audio
    } else {
      audioRef.current.play(); // Play the audio
    }

    setIsPlaying(!isPlaying);

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

      <audio ref={audioRef} src="/bts-serendipity-lofi.mp3" />

    </div>
  );
};

export default MusicButton;
