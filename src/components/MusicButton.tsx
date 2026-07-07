"use client";
import React, { useState } from "react";
import { Play, Pause } from "lucide-react";

const MusicButton: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed right-8 top-20 z-40 flex animate-fade items-center gap-3 rounded-full border border-[#2A2536] bg-[#1C1926]/80 px-3 py-2 backdrop-blur hover:border-[#7F77DD] hover:shadow-[0_8px_30px_-8px_#7F77DD55]">
      <button
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B8A6FF]/15 text-[#B8A6FF] transition-colors hover:bg-[#B8A6FF]/25"
      >
        {isPlaying ? <Pause size={14} /> : <Play size={14} />}
      </button>

      <p className="font-mono text-xs text-[#9691AA]">lofi serendipity</p>

      <audio ref={audioRef} src="/btsserendipitylofi.mp3" />
    </div>
  );
};

export default MusicButton;
