// src/components/Hotels.tsx
import { FaHotel, FaStar } from 'react-icons/fa';

const hotelOptions = [
  {
    name: "Holiday Inn Express México Basílica",
    stars: 4,
    description: "La opción más moderna y cercana, a solo unos minutos de la Basílica.",
    link: "https://maps.google.com/?cid=12623743407624377188&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ"
  },
  {
    name: "Hotel HOT La Villa",
    stars: 4,
    description: "Hotel boutique moderno con excelentes vistas y muy cerca del recinto.",
    link: "https://maps.google.com/?cid=9375185295582735589&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ"
  },
  {
    name: "Hotel Panorama",
    stars: 3,
    description: "Una opción clásica, cómoda y con tarifas accesibles para grupos.",
    link: "https://www.google.com/maps/search/Hyatt+Regency+Merida0"
  }
];

export default function Hotels() {
  return (
    <section className="hotels-section animate-on-scroll">
      <h3 className="section-title">HOSPEDAJE RECOMENDADO</h3>
      <p className="section-subtitle">Sugerencias para nuestros invitados que nos acompañan de fuera:</p>
      
      <div className="hotels-grid">
        {hotelOptions.map((hotel, index) => (
          <div key={index} className="hotel-card">
            <FaHotel className="hotel-icon" />
            <div className="hotel-stars">
              {[...Array(hotel.stars)].map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>
            <h4>{hotel.name}</h4>
            <p>{hotel.description}</p>
            <a href={hotel.link} target="_blank" rel="noreferrer" className="btn-hotel">
              Ver Ubicación
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}