// src/components/MainProtocol.tsx
import './MainProtocol.css';

export default function MainProtocol() {
  return (
    <section className="protocol-section animate-on-scroll">
      <div className="spiritual-message">
        <p className="cursive-text">
          "Damos gracias a Dios por habernos guiado en el camino <br/>
          y por permitirnos unir nuestras vidas para siempre."
        </p>
      </div>

      <div className="couple-names">
        {/* Nombres con apellidos y fuente cursiva */}
        <h1 className="name-cursive">Sofía García & Alejandro Vargas</h1>
      </div>

      <div className="parents-godparents-grid">
        <div className="protocol-block">
          <h3 className="protocol-title">Con la bendición de nuestros padres</h3>
          <div className="names-list">
            <div className="side">
              <p className="parent-label">Padres de la Novia</p>
              <p className="name-gold">Ricardo Méndez Silva</p>
              <p className="name-gold">Elena Villaseñor Torres</p>
            </div>
            <div className="side">
              <p className="parent-label">Padres del Novio</p>
              <p className="name-gold">Héctor Delgado Ruíz</p>
              <p className="name-gold">Beatriz Estrada Moreno</p>
            </div>
          </div>
        </div>

        <div className="protocol-block">
          <h3 className="protocol-title">Nuestros Padrinos de Velación</h3>
          <div className="godparents-grid">
            <p className="name-gold">Carlos Ruiz & Martha Soto León</p>
            <p className="name-gold">Fernando Lara & Lucía Ortiz Méndez</p>
            <p className="name-gold">Jorge Guzmán & Patricia Reyes Cruz</p>
            <p className="name-gold">Roberto Díaz & Silvia Luna Pineda</p>
          </div>
        </div>
      </div>
    </section>
  );
}