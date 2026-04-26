import { eventConfig } from '@/config/event';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Sparkles } from 'lucide-react';

interface HeroProps {
  datosInvitado?: any;
}

export function Hero({ datosInvitado }: HeroProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  // Extracción de datos del invitado
  const nombre = datosInvitado?.['Nombre'] || datosInvitado?.['Nombre/Familia'];
  const pases = datosInvitado?.['Pases_Totales'] || datosInvitado?.['Cantidad de Pases'];

  // TRUCO DE FUERZA BRUTA: Si eventConfig falla, usamos el texto directo
  const hashtagDisplay = eventConfig?.redes?.hashtag || "#XVFATIMAANALY";

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] py-20">
      
      <div className="relative z-10 text-center px-4 flex flex-col items-center w-full max-w-4xl mx-auto space-y-4">
        
        <p className="text-[#d4af37] tracking-[0.3em] uppercase text-xs md:text-sm font-semibold">
          MIS XV AÑOS
        </p>
        
        <h1 className="font-script text-7xl md:text-9xl text-[#d4af37] drop-shadow-lg">
          Fatima Analy
        </h1>

        <p className="text-white/80 tracking-[0.4em] uppercase text-sm font-serif">
          KU PECH
        </p>

        <p className="text-white tracking-widest uppercase text-sm md:text-base mt-8">
          SÁBADO, 6 DE JUNIO DE 2026
        </p>

        {/* ÓVALO REFORZADO: Sin animaciones de scroll para que no falle el renderizado */}
        <div className="mt-8 mb-4">
          <span className="inline-block border-2 border-[#d4af37] px-8 py-3 rounded-full bg-[#d4af37]/5 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <p className="text-[#d4af37] text-sm md:text-lg tracking-[0.3em] font-black uppercase leading-none">
              {hashtagDisplay}
            </p>
          </span>
        </div>

        {/* Mensaje de bienvenida (Letanía) */}
        {eventConfig.mensajeBienvenida && (
          <p className="text-white/70 text-sm max-w-md mx-auto italic mt-6 px-4 leading-relaxed whitespace-pre-line">
            {eventConfig.mensajeBienvenida}
          </p>
        )}

        {/* Tarjeta de Invitado */}
        <div className="mt-12 w-full flex justify-center">
          {nombre ? (
            <div className="animate-fade-in-up w-full max-w-sm">
              <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-[#d4af37]/30 p-6 rounded-[2rem] shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                <Sparkles className="w-6 h-6 text-[#d4af37] mx-auto mb-3 animate-pulse" />
                
                <p className="text-[10px] text-[#d4af37] uppercase tracking-[0.2em] mb-2 font-semibold">
                  Invitado de Honor
                </p>
                
                <h2 className="text-2xl font-serif text-white capitalize mb-4 truncate px-2">
                  {nombre}
                </h2>
                
                <div className="inline-block bg-[#141414] border border-[#d4af37]/20 rounded-full px-5 py-1.5">
                  <p className="text-xs text-[#d4af37] font-medium tracking-widest uppercase">
                    Pases Asignados: {pases}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-sm bg-[#0a0a0a]/30 backdrop-blur-sm border border-white/5 p-8 rounded-[2rem] animate-pulse">
               <div className="h-3 bg-white/10 rounded w-1/3 mx-auto mb-4"></div>
               <div className="h-6 bg-white/10 rounded w-3/4 mx-auto mb-6"></div>
               <div className="h-8 bg-white/10 rounded-full w-1/2 mx-auto"></div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}