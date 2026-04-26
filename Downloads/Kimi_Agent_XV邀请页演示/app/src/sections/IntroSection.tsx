import { Sparkles, Quote } from 'lucide-react';
import { eventConfig } from '@/config/event';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function IntroSection() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          {/* Decoración */}
          <Sparkles className="absolute top-6 right-6 w-8 h-8 text-[#d4af37]/30" />
          <Sparkles className="absolute bottom-6 left-6 w-6 h-6 text-[#d4af37]/20" />
          
          {/* Icono de quote */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
              <Quote className="w-8 h-8 text-[#d4af37]" />
            </div>
          </div>

          {/* Título */}
          <h3 className="font-cinzel text-2xl md:text-3xl text-[#d4af37] text-center mb-8">
            Palabras de Agradecimiento
          </h3>

          {/* Mensaje */}
          <div className="text-center space-y-4">
            {eventConfig.mensajeBienvenida.split('\n\n').map((parrafo, index) => (
              <p 
                key={index} 
                className="text-lg md:text-xl text-white/80 leading-relaxed font-light"
              >
                {parrafo.trim()}
              </p>
            ))}
          </div>

          {/* Firma */}
          <div className="mt-10 text-center">
            <p className="font-script text-4xl text-[#d4af37]">
              {eventConfig.nombre}
            </p>
            <p className="text-white/50 mt-2 text-sm tracking-widest uppercase">
              {eventConfig.apellidos}
            </p>
          </div>

          {/* Hashtag */}
          <div className="mt-8 text-center">
            <span className="inline-block px-6 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-[#d4af37] text-sm tracking-wider">
              {eventConfig.hashtag}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
