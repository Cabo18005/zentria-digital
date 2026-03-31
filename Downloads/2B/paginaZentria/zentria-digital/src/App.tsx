import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes de la página principal
import Navbar from './components/layout/Navbar';
import HeroSection from './components/home/HeroSection';
import Beneficios from './components/home/Beneficios';
import Catalogo from './components/home/Catalogo';
import DotFeatures from './components/home/DotFeatures';
import CallToAction from './components/home/CallToAction';
import Footer from './components/layout/footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import DotCTA from './components/ui/DotCTA';

// Importamos la nueva página que acabas de crear
import DotPage from './pages/DotPage';

// 1. Empaquetamos todo tu trabajo anterior en un componente llamado "HomePage"
function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section id="inicio"><HeroSection /></section>
        <section id="beneficios"><Beneficios /></section>
        <section id="catalogo"><Catalogo /></section>
        <section id="dot-info"><DotFeatures /></section>
        <section id="contacto"><CallToAction /></section>
      </main>
      <Footer />

      {/* Botones Flotantes */}
      <div className="fixed bottom-0 right-0 z-[100] p-8 pointer-events-none">
        <div className="flex flex-col items-end gap-4 pointer-events-auto">
          <DotCTA />
          <WhatsAppButton />
        </div>
      </div>
    </>
  );
}

// 2. App ahora es el enrutador principal
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-inter selection:bg-zentria-primary selection:text-white">
        <Routes>
          {/* Si entran a zentria.digital/ -> Ven la página de invitaciones */}
          <Route path="/" element={<HomePage />} />
          
          {/* Si entran a zentria.digital/dot -> Ven el landing oscuro de tarjetas NFC */}
          <Route path="/dot" element={<DotPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}