
"use client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';

const MusicButton = () => {

    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
    setIsPlaying(!isPlaying); // Toggle the state
    console.log(isPlaying ? "Paused!" : "Playing!");
    // Add additional logic for playing/pausing music
    };

    return (
        <div className="flex flex-row gap-5 absolute top-36 right-48">
        <button className="w-14 h-14 rounded-full bg-web-purple-2 focus:outline-none" onClick={togglePlay}><i className={`fa ${isPlaying ? "fa-pause" : "fa-play"} fa-2x text-white`}
        id="play-btn"></i></button>
        
        <p className="relative top-4 grow basis-3 text-black font-semibold text-xl font-mono">
            lofi serendipity
        </p>
    </div>
    );
};

export default MusicButton;