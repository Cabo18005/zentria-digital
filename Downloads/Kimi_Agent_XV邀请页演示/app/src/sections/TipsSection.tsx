import { Lightbulb, Check } from 'lucide-react';
import { eventConfig } from '@/config/event';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function TipsSection() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-[#d4af37]" />
            </div>
            <h4 className="font-cinzel text-xl text-[#d4af37]">Tips para los Invitados</h4>
          </div>

          <ul className="space-y-4">
            {eventConfig.tips.map((tip, index) => (
              <li 
                key={index} 
                className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Check className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <span className="text-white/80">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
