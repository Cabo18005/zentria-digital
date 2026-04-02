// src/components/Envelope.tsx
import { useState } from 'react';
import './Envelope.css'; // Crearemos este archivo CSS a continuación

interface EnvelopeProps {
  initials: string; // Ejemplo: "S & A"
  onOpen: () => void; // Función que avisa a App.tsx que se abrió
}

export default function Envelope({ initials, onOpen }: EnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Esperamos a que termine la animación (1.5s) para avisar a App.tsx
    setTimeout(() => {
      onOpen();
    }, 1500); 
  };

  return (
    <div className={`envelope-wrapper ${isOpen ? 'open' : ''}`}>
      <div className="envelope">
        {/* Solapa trasera del sobre */}
        <div className="flap"></div>
        
        {/* Cuerpo delantero del sobre */}
        <div className="front"></div>
        
        {/* Texto de invitación */}
        <div className="envelope-text">
          <p className="subtitle">Una invitación especial</p>
          <p className="title">Para ti</p>
        </div>

        {/* SELLO DE CERA PERSONALIZADO (SVG Dinámico) */}
        <div className="wax-seal" onClick={handleOpen} title="Haz clic para abrir">
          <svg viewBox="0 0 100 100" className="seal-svg">
            {/* Círculo de cera con textura */}
            <defs>
              <radialGradient id="waxGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C19A6B" /> {/* Oro Sage */}
                <stop offset="100%" stopColor="#A88255" />
              </radialGradient>
              <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.4 0 0 0 0 0.2 0 0 0 0.5 0"/>
                <feComposite operator="in" in2="SourceGraphic" result="monoNoise"/>
                <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply"/>
              </filter>
            </defs>
            <circle cx="50" cy="50" r="48" fill="url(#waxGradient)" filter="url(#noise)" stroke="#967448" strokeWidth="1"/>
            <circle cx="50" cy="50" r="42" fill="none" stroke="#E6D3B1" strokeWidth="1.5" strokeDasharray="3 3"/>
            
            {/* INICIALES PERSONALIZADAS EN ORO */}
            <text 
              x="50%" 
              y="55%" 
              textAnchor="middle" 
              className="seal-initials"
            >
              {initials}
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}