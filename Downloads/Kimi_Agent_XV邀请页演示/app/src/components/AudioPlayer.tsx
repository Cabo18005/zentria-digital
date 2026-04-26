import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import { eventConfig } from '@/config/event';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // FORZADO: Usamos la ruta directa para evitar fallos de configuración
    const audioUrl = "/music.mp3"; 
    
    if (!audioRef.current) {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
    }

    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        setHasInteracted(true);
        setIsVisible(true);
        
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn("Navegador bloqueó el inicio, esperando acción manual", err);
          });
      }
    };

    // Escuchamos en cualquier parte de la ventana
    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que el clic dispare otros eventos
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Botón flotante dorado (Aparece después del primer clic) */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
        }`}
      >
        <div className="bg-black/90 border border-[#d4af37] rounded-full px-4 py-3 backdrop-blur-md flex items-center gap-4 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
          <button
            onClick={togglePlay}
            className="text-[#d4af37] hover:scale-110 transition-transform"
          >
            {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
          </button>
          
          {isPlaying && (
            <div className="flex gap-0.5 items-end h-4 w-6">
              <div className="w-1 bg-[#d4af37] animate-[music-bar_0.6s_ease-in-out_infinite]" />
              <div className="w-1 bg-[#d4af37] animate-[music-bar_0.9s_ease-in-out_infinite]" />
              <div className="w-1 bg-[#d4af37] animate-[music-bar_0.7s_ease-in-out_infinite]" />
            </div>
          )}
          
          <button onClick={toggleMute} className="text-[#d4af37]">
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>

      {/* BOTÓN DE RESCATE: Si no ha sonado, este botón fuerza el inicio */}
      {!isPlaying && (
        <div className="fixed inset-x-0 bottom-10 flex justify-center z-[60]">
          <button 
            onClick={() => {
              setHasInteracted(true);
              setIsVisible(true);
              audioRef.current?.play().then(() => setIsPlaying(true));
            }}
            className="bg-[#d4af37] text-black px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(212,175,55,0.5)] animate-bounce flex items-center gap-2 uppercase text-sm tracking-tighter"
          >
            <Music className="w-5 h-5" />
            Presiona para escuchar música
          </button>
        </div>
      )}
    </>
  );
}