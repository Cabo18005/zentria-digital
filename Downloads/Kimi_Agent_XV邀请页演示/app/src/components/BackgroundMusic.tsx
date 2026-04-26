import YouTube from 'react-youtube';
import { useState } from 'react';

export function BackgroundMusic() {
  const [player, setPlayer] = useState<any>(null);

  const opts = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: 'Tx-4mDRvfQM', // El ID de tu video de YouTube
    },
  };

  const onReady = (event: any) => {
    setPlayer(event.target);
    // Nota: El audio solo iniciará si el usuario ya hizo un clic previo en la web
    event.target.playVideo();
  };

  return (
    <div className="hidden">
      <YouTube videoId="Tx-4mDRvfQM" opts={opts} onReady={onReady} />
      {/* Botón flotante para mutear si el invitado quiere silencio */}
      <button 
        onClick={() => player?.mute()}
        className="fixed bottom-4 left-4 z-50 bg-[#d4af37] p-2 rounded-full"
      >
        🔇
      </button>
    </div>
  );
}