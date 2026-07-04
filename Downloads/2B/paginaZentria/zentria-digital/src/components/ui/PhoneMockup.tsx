import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface PhoneMockupProps {
  demoUrl: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ demoUrl }) => {
  const [loaded, setLoaded] = useState(false);
  // El iframe de la demo trae ~900 KB de terceros (música, fotos, su propio JS).
  // No lo montamos hasta que el usuario pida verlo, para no cargarlo de gratis
  // en cada visita a la home.
  const [activated, setActivated] = useState(false);
  const reduceMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // El iframe con la demo en vivo no puede vivir dentro de WebGL (los navegadores
  // no permiten usar contenido de iframe como textura), así que el "3D" aquí es
  // un tilt real en CSS que mantiene la demo completamente interactiva.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 15 });
  const shadowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [18, -18]), { stiffness: 150, damping: 15 });
  const glare = useMotionTemplate`radial-gradient(circle at ${useTransform(mouseX, [-0.5, 0.5], ['0%', '100%'])} ${useTransform(mouseY, [-0.5, 0.5], ['0%', '100%'])}, rgba(255,255,255,0.16), transparent 55%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="flex flex-col justify-center items-center py-10 gap-3">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1200 }}
        className="relative"
      >
        {/* Sombra de contacto que se desplaza en sentido opuesto al tilt */}
        <motion.div
          aria-hidden
          className="absolute left-1/2 -bottom-5 -z-10 w-56 h-10 -translate-x-1/2 rounded-full bg-black/50 blur-2xl"
          style={{ x: reduceMotion ? 0 : shadowX }}
        />

        <motion.div
          style={{
            rotateX: reduceMotion ? 0 : rotateX,
            rotateY: reduceMotion ? 0 : rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[650px] w-[320px] shadow-2xl"
        >
          {/* Notch */}
          <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 w-40 mx-auto rounded-b-3xl z-20" />

          {/* Pantalla del teléfono */}
          <div className="overflow-hidden rounded-[1.5rem] bg-[#0d1f35] h-full w-full relative">
            {!activated ? (
              /* Placeholder liviano: no descarga nada del sitio de terceros hasta el clic */
              <button
                onClick={() => setActivated(true)}
                className="group absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC]/20 via-transparent to-cyan-500/10" />
                <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#0052CC] shadow-lg shadow-[#0052CC]/40 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <div className="relative space-y-1">
                  <p className="text-sm font-bold text-white">Ver demo en vivo</p>
                  <p className="text-[11px] text-gray-400">Toca para cargar la invitación interactiva</p>
                </div>
              </button>
            ) : (
              <>
                {/* Spinner mientras carga */}
                {!loaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
                    <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-[#3b9eff] animate-spin" />
                    <p className="text-[11px] text-gray-500">Cargando vista previa…</p>
                  </div>
                )}
                <iframe
                  src={demoUrl}
                  className="w-full h-full border-none"
                  title="Demo Invitación Zentria"
                  onLoad={() => setLoaded(true)}
                />
              </>
            )}
            {/* Brillo de cristal que sigue al mouse, sin bloquear el iframe/botón */}
            {!reduceMotion && (
              <motion.div className="absolute inset-0 pointer-events-none z-20" style={{ background: glare }} />
            )}
          </div>
        </motion.div>
      </div>

      {/* Fallback: abrir en nueva pestaña si el iframe es bloqueado */}
      <a
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-[11px] text-gray-500 hover:text-[#3b9eff] transition-colors duration-200"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
        Abrir en nueva pestaña
      </a>
    </div>
  );
};

export default PhoneMockup;
