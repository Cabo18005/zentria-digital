import { useCountdown } from '@/hooks/useCountdown';
import { getFechaEvento } from '@/config/event';

export function Countdown() {
  const timeLeft = useCountdown(getFechaEvento());

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  if (timeLeft.isExpired) {
    return (
      <div className="text-center py-10">
        <h3 className="font-cinzel text-3xl text-gold-shimmer">¡El gran día ha llegado!</h3>
        <p className="mt-4 text-white/70">Gracias por ser parte de esta celebración</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      <div className="countdown-item">
        <span className="font-cinzel text-4xl md:text-5xl text-[#d4af37] block leading-none tabular-nums">
          {formatNumber(timeLeft.days)}
        </span>
        <div className="text-xs uppercase tracking-[3px] text-white/60 mt-2">
          Días
        </div>
      </div>
      <div className="countdown-item">
        <span className="font-cinzel text-4xl md:text-5xl text-[#d4af37] block leading-none tabular-nums">
          {formatNumber(timeLeft.hours)}
        </span>
        <div className="text-xs uppercase tracking-[3px] text-white/60 mt-2">
          Horas
        </div>
      </div>
      <div className="countdown-item">
        <span className="font-cinzel text-4xl md:text-5xl text-[#d4af37] block leading-none tabular-nums">
          {formatNumber(timeLeft.minutes)}
        </span>
        <div className="text-xs uppercase tracking-[3px] text-white/60 mt-2">
          Minutos
        </div>
      </div>
      <div className="countdown-item">
        <span className="font-cinzel text-4xl md:text-5xl text-[#d4af37] block leading-none tabular-nums">
          {formatNumber(timeLeft.seconds)}
        </span>
        <div className="text-xs uppercase tracking-[3px] text-white/60 mt-2">
          Segundos
        </div>
      </div>
    </div>
  );
}
