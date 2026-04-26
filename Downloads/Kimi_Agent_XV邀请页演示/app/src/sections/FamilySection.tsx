import { Heart, Crown } from 'lucide-react';
import { eventConfig } from '@/config/event';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function FamilySection() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Adorno sutil de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#d4af37]/5 blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Bloque de Padres - Aparece primero */}
          <div className="glass-card text-center p-8 md:p-12 animate-in fade-in slide-in-from-bottom duration-1000 delay-300 fill-mode-both">
            <div className="relative inline-block mb-6">
              <Heart className="w-12 h-12 text-[#d4af37] mx-auto" />
              <div className="absolute -inset-2 bg-[#d4af37]/20 blur-xl rounded-full -z-10" />
            </div>
            
            <h4 className="font-cinzel text-2xl md:text-3xl text-[#d4af37] mb-8 tracking-widest">
              Con la bendición de mis padres
            </h4>
            
            <div className="space-y-4">
              {eventConfig.padres.map((padre, index) => (
                <div key={index} className="group">
                  <p className="text-xl text-white/95 font-light tracking-wide group-hover:text-[#d4af37] transition-colors duration-300">
                    {/* AQUÍ ESTÁ LA SOLUCIÓN: Agregamos .nombre */}
                    {padre.nombre}
                  </p>
                  {index < eventConfig.padres.length - 1 && (
                    <div className="w-8 h-[1px] bg-[#d4af37]/30 mx-auto mt-4" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bloque de Padrinos - Aparece con un poco más de retraso */}
          <div className="glass-card text-center p-8 md:p-12 animate-in fade-in slide-in-from-bottom duration-1000 delay-700 fill-mode-both">
            <div className="relative inline-block mb-6">
              <Crown className="w-12 h-12 text-[#d4af37] mx-auto" />
              <div className="absolute -inset-2 bg-[#d4af37]/20 blur-xl rounded-full -z-10" />
            </div>

            <h4 className="font-cinzel text-2xl md:text-3xl text-[#d4af37] mb-8 tracking-widest">
              Con el cariño de mis padrinos
            </h4>

            <div className="space-y-4">
              {eventConfig.padrinos.map((padrino, index) => (
                <div key={index} className="group">
                  <p className="text-xl text-white/95 font-light tracking-wide group-hover:text-[#d4af37] transition-colors duration-300">
                    {/* AQUÍ TAMBIÉN: Agregamos .nombre */}
                    {padrino.nombre}
                  </p>
                  {index < eventConfig.padrinos.length - 1 && (
                    <div className="w-8 h-[1px] bg-[#d4af37]/30 mx-auto mt-4" />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}