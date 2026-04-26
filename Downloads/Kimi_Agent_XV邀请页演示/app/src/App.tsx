import { useState, useEffect, useCallback } from 'react';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { LoadingScreen } from '@/components/LoadingScreen';
import { AudioPlayer } from '@/components/AudioPlayer';
import { Hero } from '@/sections/Hero';
import { IntroSection } from '@/sections/IntroSection';
import { CountdownSection } from '@/sections/CountdownSection';
import { FamilySection } from '@/sections/FamilySection';
import { LocationSection } from '@/sections/LocationSection';
import { SeatingMapSection } from '@/sections/SeatingMapSection';
import { TipsSection } from '@/sections/TipsSection';
import { ConfirmationSection } from '@/sections/ConfirmationSection';
// Quita las llaves para importar un 'default'
import { PhotoGallerySection } from '@/sections/PhotoGallerySection';
import { Footer } from '@/sections/Footer';
import { eventConfig } from '@/config/event';
import './App.css';
import { GiftsSection } from './sections/GiftsSection'; // Asegúrate de que la ruta sea correcta

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // ESTADOS PARA LOS DATOS DEL INVITADO
  const [datosInvitado, setDatosInvitado] = useState<any>(null);
  const [invitadoNombre, setInvitadoNombre] = useState<string | null>(null);
  const [pasesPermitidos, setPasesPermitidos] = useState<number>(1);

  // LOGICA DE CARGA RAPIDA (ESTILO CAMILA)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const idInvitado = params.get('id'); // Ejemplo: ?id=fam-ku

    if (idInvitado) {
      // Llamada directa al script de Google Sheets
      fetch(eventConfig.confirmacion.googleScriptUrl)
        .then(res => res.json())
        .then(data => {
          // Búsqueda instantánea por ID directo (Columna A del Excel)
          const encontrado = data.find((inv: any) => inv['ID'] === idInvitado);
          
          if (encontrado) {
            setDatosInvitado(encontrado);
            setInvitadoNombre(encontrado['Nombre/Familia']);
            // Se sincronizan los pases totales permitidos
            setPasesPermitidos(Number(encontrado['Pases_Totales']) || 1);
          }
        })
        .catch(err => console.error("Error al conectar con la base de datos:", err));
    }
  }, []);

  // Manejo de la barra de progreso de scroll
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden font-montserrat">
      {/* Pantalla de Carga */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Barra de Progreso Superior */}
      <div 
        className="fixed top-0 left-0 h-1 bg-[#d4af37] z-[100] transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <ParticlesBackground />
      <AudioPlayer />

      <main className="relative z-10">
        {/* Pasamos los datos personalizados del Excel al Hero */}
        
        <Hero datosInvitado={datosInvitado} />        
        <IntroSection />
        <CountdownSection />
        <FamilySection />
        <LocationSection />
        <SeatingMapSection />
        <TipsSection />
        <PhotoGallerySection datosInvitado={datosInvitado} />
        {/* SECCIÓN DE CONFIRMACIÓN: Recibe el objeto completo para manejar pases y QR */}
        <ConfirmationSection datosInvitado={datosInvitado} />
        <GiftsSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;