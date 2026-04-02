import { FaChurch, FaGlassCheers } from 'react-icons/fa';

export default function Locations() {
  return (
    <section className="location-section animate-on-scroll">
      <h3 className="section-title">DÓNDE CELEBRAMOS</h3>
      
      <div className="location-grid">
        {/* CEREMONIA EN LA BASÍLICA */}
        <div className="location-card">
          <FaChurch className="location-icon" />
          <h4>Ceremonia Religiosa</h4>
          <p>
            <strong>Insigne y Nacional Basílica de Santa María de Guadalupe</strong><br/>
            Fray Juan de Zumárraga No. 2, Villa de Guadalupe,<br/>
            Gustavo A. Madero, CDMX.
          </p>
          <a 
            href="https://maps.app.goo.gl/7FGwAkgFBXQpCxFX7" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-map"
          >
            Ver Mapa de la Basílica
          </a>
        </div>

        {/* RECEPCIÓN EN EX HACIENDA DE ENMEDIO */}
        <div className="location-card">
          <FaGlassCheers className="location-icon" />
          <h4>Gran Recepción</h4>
          <p>
            <strong>Ex Hacienda de Enmedio</strong><br/>
            Calz. San Agustín 61, Hacienda de Enmedio,<br/>
            Edo. Méx. (Zona Lindavista/Norte)
          </p>
          <a 
            href="https://maps.app.goo.gl/FW9aVhScsGMG9JKG7" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-map"
          >
            Ver Mapa del Salón
          </a>
        </div>
      </div>
    </section>
  );
}