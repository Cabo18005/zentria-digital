// src/components/Gallery.tsx
import { useEffect, useRef } from 'react';
import './Gallery.css';

const photos = [
  { id: 1, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=600&fit=crop', alt: 'Novios' },
  { id: 2, url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&h=600&fit=crop', alt: 'Anillos' },
  { id: 3, url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=500&h=600&fit=crop', alt: 'Flores' },
  { id: 4, url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&h=600&fit=crop', alt: 'Brindis' },
  { id: 5, url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=600&fit=crop', alt: 'Novia' },
  { id: 6, url: 'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?w=500&h=600&fit=crop', alt: 'Baile' },
  { id: 7, url: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=500&h=600&fit=crop', alt: 'Pastel' },
  { id: 8, url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&h=600&fit=crop', alt: 'Decoración' },
  { id: 10, url: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=500&h=600&fit=crop', alt: 'Beso' },
  { id: 11, url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500&h=600&fit=crop', alt: 'Cortejo' },
  { id: 13, url: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=500&h=600&fit=crop', alt: 'Detalles' },
  { id: 15, url: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=500&h=600&fit=crop', alt: 'Novio' },
  { id: 16, url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&h=600&fit=crop', alt: 'Despedida' }
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Agrupamos las fotos de 2 en 2 para crear las columnas dobles
  const pairedPhotos = [];
  for (let i = 0; i < photos.length; i += 2) {
    pairedPhotos.push(photos.slice(i, i + 2));
  }

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let animationId: number;
    let isPaused = false;

    const animate = () => {
      if (!isPaused && slider) {
        slider.scrollLeft += 0.7; // Velocidad elegante
        if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 1) {
          slider.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleTouchStart = () => { isPaused = true; };
    const handleTouchEnd = () => { setTimeout(() => { isPaused = false; }, 1000); };

    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchend', handleTouchEnd);
    slider.addEventListener('mouseenter', handleTouchStart);
    slider.addEventListener('mouseleave', handleTouchEnd);

    return () => {
      cancelAnimationFrame(animationId);
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchend', handleTouchEnd);
      slider.removeEventListener('mouseenter', handleTouchStart);
      slider.removeEventListener('mouseleave', handleTouchEnd);
    };
  }, []);

  return (
    <section className="gallery-section animate-on-scroll">
      <h3 className="section-title">Nuestra Historia</h3>
      <p className="gallery-subtitle">Un pequeño viaje a través de nuestro amor</p>
      
      <div className="instagram-carousel" ref={scrollRef}>
        {pairedPhotos.map((pair, index) => (
          <div key={index} className="carousel-column">
            {pair.map(photo => (
              <div key={photo.id} className="carousel-item">
                <img src={photo.url} alt={photo.alt} />
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="carousel-dots">
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </section>
  );
}