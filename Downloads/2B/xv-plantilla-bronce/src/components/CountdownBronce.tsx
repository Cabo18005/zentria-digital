import { useState, useEffect } from 'react';

const CountdownBronce = () => {
  // Aquí pones la fecha del evento (Año-Mes-Día y la hora)
  // Pusimos el 24 de Octubre de 2026 a las 5:00 PM
  const targetDate = new Date('2026-10-24T17:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutos: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          segundos: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="py-20 bg-rose-50 flex flex-col items-center justify-center px-4 border-t border-rose-100/50">
      <h2 className="text-3xl font-serif text-rose-950 mb-10 italic text-center">Ya casi llega el día...</h2>
      
      <div className="flex gap-4 sm:gap-6 justify-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            {/* El circulito blanco para cada número */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-rose-100 mb-3">
              <span className="text-2xl sm:text-3xl font-light text-rose-800">
                {value.toString().padStart(2, '0')}
              </span>
            </div>
            {/* La etiqueta (Días, Horas, etc.) */}
            <span className="text-xs uppercase tracking-widest text-rose-900/60 font-medium">
              {unit}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountdownBronce;