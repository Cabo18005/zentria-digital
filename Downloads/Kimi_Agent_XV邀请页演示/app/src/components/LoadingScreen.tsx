import { useState, useEffect } from 'react';
import { eventConfig } from '@/config/event';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 800);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div
        className="fixed inset-0 z-[9999] bg-[#050505] transition-opacity duration-800 pointer-events-none"
        style={{ opacity: 0 }}
      />
    );
  }

  return (
    <div
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center transition-opacity duration-800"
      style={{ opacity: progress >= 100 ? 0 : 1 }}
    >
      <div className="font-script text-5xl md:text-6xl text-[#d4af37] animate-[pulse-gold_2s_infinite]">
        {eventConfig.nombre}
      </div>
      <div className="loader-bar">
        <div
          className="loader-progress"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-5 text-xs tracking-[3px] text-white/60 uppercase">
        Cargando Experiencia
      </p>
    </div>
  );
}
