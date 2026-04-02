// src/components/MusicPlayer.tsx
import { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src="/musica.mp3" loop />
      <button 
        className={`music-fab ${isPlaying ? 'spinning' : ''}`} 
        onClick={toggleMusic}
        title={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? <FaPause className="music-icon" /> : <FaPlay className="music-icon" />}
      </button>
    </>
  );
}