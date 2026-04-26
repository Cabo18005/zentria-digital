import { Instagram, Facebook, Heart, Sparkles, ExternalLink } from 'lucide-react';
import { eventConfig } from '@/config/event';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Footer() {
  const ref = useScrollReveal<HTMLElement>();
  const currentYear = new Date().getFullYear();

  // TUS ENLACES DE NEGOCIO
  const ZENTRIA_INSTAGRAM = "https://www.instagram.com/zentriadigital?igsh=c25yYTI2NWZ2czE1";
  const ZENTRIA_FACEBOOK = "https://www.facebook.com/expresmid";

  return (
    <footer ref={ref} className="py-20 px-4 bg-black/90 border-t border-[#d4af37]/10">
      <div className="max-w-2xl mx-auto text-center">
        {/* Despedida de la Quinceañera */}
        <p className="font-serif text-5xl md:text-6xl text-[#d4af37] mb-6 italic drop-shadow-lg">
          ¡Te espero!
        </p>
        
        <p className="text-white/60 mb-10 max-w-sm mx-auto leading-relaxed font-light">
          Gracias por ser parte de este momento tan especial en mi vida.
        </p>

        <div className="h-[1px] w-16 bg-[#d4af37]/20 mx-auto mb-12"></div>

        {/* Branding de Zentria Digital */}
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex items-center justify-center gap-2 text-[#d4af37]/40 text-[9px] uppercase tracking-[0.5em] font-medium">
            <div className="h-[1px] w-4 bg-[#d4af37]/20"></div>
            <span>Powered by</span>
            <div className="h-[1px] w-4 bg-[#d4af37]/20"></div>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <a 
              href={ZENTRIA_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <h4 className="text-[#d4af37] font-serif text-2xl tracking-[0.25em] uppercase transition-all duration-500 group-hover:scale-105 group-hover:text-white">
                Zentria Digital
              </h4>
              <div className="flex items-center gap-2 text-white/20 text-[10px] uppercase tracking-widest mt-1 group-hover:text-[#d4af37]/50 transition-colors">
                <span>Software & Design</span>
                <Sparkles className="w-3 h-3" />
                <span>Mérida, Yuc.</span>
              </div>
            </a>

            {/* Redes Sociales de la Agencia */}
            <div className="flex justify-center gap-4 mt-4">
              <a
                href={ZENTRIA_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-white/30 hover:text-[#d4af37] hover:border-[#d4af37]/50 hover:bg-[#d4af37]/5 transition-all duration-300"
                title="Instagram Zentria"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={ZENTRIA_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-white/30 hover:text-[#d4af37] hover:border-[#d4af37]/50 hover:bg-[#d4af37]/5 transition-all duration-300"
                title="Facebook ExpresMid"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="pt-12 flex flex-col gap-3">
            <div className="flex items-center justify-center gap-2 text-white/20 text-[10px] font-light">
              <span>Hecho con</span>
              <Heart className="w-3 h-3 text-red-500/50 fill-red-500/30" />
              <span>para {eventConfig.nombre}</span>
            </div>
            <p className="text-white/10 text-[8px] uppercase tracking-tighter opacity-50">
              © {currentYear} | Invitación Digital Interactiva
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}