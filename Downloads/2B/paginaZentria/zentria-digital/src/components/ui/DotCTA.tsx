
// DotCTA.tsx
// Posicionamiento manejado por el contenedor en App.tsx (NO usa fixed propio).
// Estilo actualizado al tema oscuro del nuevo Zentria Digital.
 
import { useState } from 'react';
 
const DOT_LINK =
  "https://wa.me/529999908114?text=Hola!+Me+interesa+adquirir+mi+tarjeta+NFC+DOT+de+Zentria";
 
export default function DotCTA() {
  const [hovered, setHovered] = useState(false);
 
  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip que se desliza desde la derecha */}
      <div
        className="mr-3 pointer-events-none"
        style={{
          opacity:    hovered ? 1 : 0,
          transform:  hovered ? 'translateX(0)' : 'translateX(12px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        <div className="relative bg-[#0d1f35] border border-white/10 text-white px-4 py-2.5 rounded-xl shadow-2xl text-xs font-semibold whitespace-nowrap backdrop-blur-md">
          Tarjetas NFC · Zentria DOT
          {/* Flecha derecha del tooltip */}
          <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0d1f35] border-t border-r border-white/10 rotate-45" />
        </div>
      </div>
 
      {/* Botón DOT circular */}
      <a
        href={DOT_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conocer Zentria DOT tarjetas NFC"
        className="relative w-14 h-14 rounded-full flex items-center justify-center
                   bg-[#0d1f35] border border-white/15
                   shadow-lg shadow-black/40
                   hover:border-[#0052CC]/60 hover:shadow-[#0052CC]/20
                   transition-all duration-300 hover:-translate-y-0.5 group"
      >
        {/* Anillo de pulso */}
        <span className="absolute inset-0 rounded-full border border-[#0052CC]/40 animate-[dotPulse_2.5s_ease-in-out_infinite]" />
 
        {/* Texto DOT */}
        <span className="font-black text-[11px] tracking-tight text-white group-hover:text-[#3b9eff] transition-colors duration-300 select-none">
          DOT
        </span>
      </a>
 
      <style>{`
        @keyframes dotPulse {
          0%, 100% { transform: scale(1);    opacity: 0.5; }
          50%       { transform: scale(1.25); opacity: 0;   }
        }
      `}</style>
    </div>
  );
}
 