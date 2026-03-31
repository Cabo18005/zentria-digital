import { useState } from 'react';

export default function DotCTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed bottom-28 right-8 z-[100] flex items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mensaje que aparece al poner el mouse */}
      <div className={`
        mr-4 bg-zentria-dark text-white px-4 py-2 rounded-lg shadow-xl text-sm font-bold
        transition-all duration-500 ease-in-out transform
        ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}
      `}>
        ¿Te interesa tener tu propia tarjeta NFC DOT?
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-zentria-dark rotate-45"></div>
      </div>

      {/* El Círculo del Producto DOT */}
      <a 
        href="https://wa.me/529990000000?text=Hola!+Me+interesa+adquirir+mi+tarjeta+NFC+DOT"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-white border-2 border-zentria-dark rounded-full flex items-center justify-center shadow-lg hover:bg-zentria-dark hover:text-white transition-all duration-300 animate-pulse-slow"
      >
        <span className="font-black text-xs tracking-tighter">DOT</span>
      </a>

      {/* Estilos de animación personalizada */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
          50% { transform: scale(1.05); shadow: 0 20px 25px -5px rgb(0 0 0 / 0.2); border-color: #0052CC; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </div>
  );
}