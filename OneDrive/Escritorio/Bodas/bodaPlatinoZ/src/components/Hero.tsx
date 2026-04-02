// src/components/Hero.tsx
import heroImg from '../assets/hero.png'; // Fíjate que la ruta cambia a '../assets/'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="image-frame">
        <img src={heroImg} alt="Novios" className="hero-image" />
      </div>
      <h2 className="welcome-title">TE INVITAMOS A COMPARTIR NUESTRO AMOR</h2>
      <p className="welcome-text">
        Con la bendición de Dios y de nuestros padres, nos unimos en matrimonio. 
        ¡Nos encantaría que nos acompañes en este día tan especial!
      </p>
    </section>
  );
}