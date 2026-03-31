import { useState, useEffect } from 'react';

export default function Countdown() {
  // Pon aquí la fecha del evento (Año, Mes [0-11], Día, Hora, Minuto)
  const targetDate = new Date(2026, 5, 20, 18, 0, 0).getTime(); 

  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutos: Math.floor((difference / 1000 / 60) % 60),
          segundos: Math.floor((difference / 1000) % 60)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 justify-center mt-12 animate-fade-in-up">
      <TimeUnit value={timeLeft.dias} label="DÍAS" />
      <TimeUnit value={timeLeft.horas} label="HRS" />
      <TimeUnit value={timeLeft.minutos} label="MIN" />
      <TimeUnit value={timeLeft.segundos} label="SEG" />
    </div>
  );
}

// Sub-componente para cada cuadrito
function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-white px-4 py-5 rounded-xl shadow-lg border border-gray-100 min-w-[70px] transform transition-all duration-300 hover:scale-105">
      <div className="text-2xl font-bold text-zentria-dark leading-none">
        {value < 10 ? `0${value}` : value}
      </div>
      <div className="text-[10px] text-gray-400 font-bold mt-2 tracking-widest uppercase">
        {label}
      </div>
    </div>
  );
}