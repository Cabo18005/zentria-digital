import { useState, useEffect } from 'react';
import './Countdown.css';

export default function Countdown() {
  const targetDate = new Date("2026-12-20T17:00:00").getTime(); // AJUSTA TU FECHA AQUÍ
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <p className="cursive-text">Faltan pocos días...</p>
      <div className="timer-grid">
        <div className="time-box"><span>{timeLeft.days}</span><p>Días</p></div>
        <div className="time-box"><span>{timeLeft.hours}</span><p>Hs</p></div>
        <div className="time-box"><span>{timeLeft.minutes}</span><p>Min</p></div>
        <div className="time-box"><span>{timeLeft.seconds}</span><p>Seg</p></div>
      </div>
    </div>
  );
}