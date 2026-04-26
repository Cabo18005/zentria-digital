import { Countdown } from '@/components/Countdown';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function CountdownSection() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section 
      id="countdown-section" 
      ref={ref}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h3 className="font-cinzel text-2xl md:text-3xl text-[#d4af37] text-center mb-12">
          Faltan
        </h3>
        <Countdown />
      </div>
    </section>
  );
}
