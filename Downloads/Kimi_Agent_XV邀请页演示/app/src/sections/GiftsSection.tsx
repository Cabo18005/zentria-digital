import { Gift, ExternalLink, Heart } from 'lucide-react'; // Quitamos CreditCard
import { eventConfig } from '@/config/event';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';

export function GiftsSection() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="py-20 px-4 bg-black/40">
      <div className="max-w-4xl mx-auto text-center">
        <Gift className="w-12 h-12 text-[#d4af37] mx-auto mb-6 opacity-80" />
        <h3 className="font-serif text-3xl md:text-4xl text-[#d4af37] mb-6 tracking-widest uppercase">
          Mesa de Regalos
        </h3>
        <p className="text-white/70 mb-12 max-w-lg mx-auto italic leading-relaxed">
          "{eventConfig.regalos.frase}"
        </p>

        {/* Usamos flexbox para centrar la tarjeta si solo hay una opción */}
        <div className="flex flex-wrap justify-center gap-8">
          {eventConfig.regalos.opciones.map((opcion, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-3xl border border-[#d4af37]/20 bg-white/5 backdrop-blur-sm hover:border-[#d4af37]/50 transition-all duration-500 group w-full max-w-md"
            >
              <div className="space-y-4">
                <div className="h-10 flex items-center justify-center">
                  <span className="text-[#d4af37] font-bold text-2xl tracking-tighter uppercase italic">
                    {opcion.tipo}
                  </span>
                </div>
                <h4 className="text-xl text-white font-serif uppercase tracking-wider">Mesa de Regalos</h4>
                <p className="text-white/60 text-sm">Evento: {opcion.evento}</p>
                <Button 
                  variant="outline"
                  className="w-full border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37] hover:text-black mt-4 rounded-xl"
                  onClick={() => window.open(opcion.link, '_blank')}
                >
                  Ver Mesa <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Heart className="w-6 h-6 text-red-500/40 mx-auto animate-pulse" />
          <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] mt-4">
            Agradecemos de corazón tu detalle
          </p>
        </div>
      </div>
    </section>
  );
}