// App.tsx
import { useState, useEffect } from 'react';
import './App.css';

// Componentes de Identidad y Protocolo
import Envelope from './components/Envelope';
import MainProtocol from './components/MainProtocol';
import Header from './components/Header';
import MusicPlayer from './components/MusicPlayer';
import Gallery from './components/Gallery';
import Countdown from "./components/Countdown";

// Componentes de Logística
import TicketVIP from './components/TicketVIP';
import Timeline from './components/Timeline';
import Locations from './components/Locations';
import Hotels from './components/Hotels';
import RSVPForm from './components/RSVPForm';
import ImportantDetails from './components/ImportantDetails';

function App() {
  const [loading, setLoading] = useState(true);
  const [guestFound, setGuestFound] = useState(false);
  const [guestInfo, setGuestInfo] = useState({ id: '', nombre: '', pases_totales: 0 });
  const [hasConfirmed, setHasConfirmed] = useState(false);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showFlowers, setShowFlowers] = useState(false); // NUEVO ESTADO PARA FLORES

  // Efecto para controlar la aparición de las flores con delay
  useEffect(() => {
    if (isEnvelopeOpen) {
      const timer = setTimeout(() => {
        setShowFlowers(true);
      }, 500); // 500ms después de que se abre el sobre
      return () => clearTimeout(timer);
    }
  }, [isEnvelopeOpen]);

  useEffect(() => {
    const fetchGuest = async () => {
      const params = new URLSearchParams(window.location.search);
      const idParam = params.get('id');

      if (idParam) {
        try {
          const response = await fetch(`https://sheetdb.io/api/v1/i5tqs3tes8png/search?id=${idParam}`);
          const data = await response.json();
          
          if (data && data.length > 0) {
            setGuestInfo({
              id: data[0].id,
              nombre: data[0].Nombre, 
              pases_totales: parseInt(data[0].pases_otorgados) || 0
            });
            setGuestFound(true);
            if (data[0].asistencia === 'si') setHasConfirmed(true);
          }
        } catch (e) { 
          console.error("Error de conexión:", e); 
        }
      }
      setLoading(false);
    };
    fetchGuest();
  }, []);

  // Intersection Observer para las animaciones premium
  useEffect(() => {
    if (!loading && guestFound && isEnvelopeOpen) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      const sections = document.querySelectorAll(
        '.protocol-section, .gallery-section, .vip-ticket-section, .timeline-section, .location-section, .hotels-section, .rsvp-section, .details-section'
      );
      sections.forEach((s) => observer.observe(s));
      return () => observer.disconnect();
    }
  }, [loading, guestFound, isEnvelopeOpen]);

  if (loading) return <div className="loader">Preparando tu invitación...</div>;

  if (!guestFound) {
    return (
      <div className="invitation-container">
        <div className="error-msg" style={{marginTop: '100px', textAlign: 'center'}}>
          <h2 style={{fontFamily: 'Playfair Display'}}>Invitación no válida</h2>
          <p>Por favor, contacta a los novios para recibir tu acceso personalizado.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {!isEnvelopeOpen && (
        <Envelope 
          initials="S & A" 
          onOpen={() => setIsEnvelopeOpen(true)} 
        />
      )}

      {/* CLASE show-flowers AGREGADA DINÁMICAMENTE */}
      <div className={`invitation-container ${isEnvelopeOpen ? 'envelope-opened' : 'hidden'} ${showFlowers ? 'show-flowers' : ''}`}>
        
        <MusicPlayer />
        
        {/* Las decoraciones se manejan ahora vía pseudo-elementos (::before y ::after) en el CSS */}
        {/* Ya no necesitamos los divs vacíos aquí, el CSS del contenedor hace el trabajo */}

        <Header guestName={guestInfo.nombre} />
        
        <main>
          {/* 1. PROTOCOLO */}
          <MainProtocol />
          <Countdown />
          
          {/* 2. HISTORIA */}
          <Gallery />

          {/* 3. ACCESO */}
          {hasConfirmed ? (
            <div className="fade-in">
              <TicketVIP 
                guestId={guestInfo.id} 
                guestName={guestInfo.nombre} 
                pasesTotales={guestInfo.pases_totales} 
              />
            </div>
          ) : (
            <RSVPForm 
              guestId={guestInfo.id} 
              guestName={guestInfo.nombre} 
              pasesTotales={guestInfo.pases_totales} 
              onSuccess={() => setHasConfirmed(true)} 
            />
          )}

          {/* 4. LOGÍSTICA */}
          <Timeline />
          <Locations />
          <Hotels />
          <ImportantDetails />
        </main>
      </div>
    </>
  );
}

export default App;