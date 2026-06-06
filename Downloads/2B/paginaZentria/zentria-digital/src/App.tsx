import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/footer';

// Secciones de la Home
import HeroSection    from './components/home/HeroSection';
import ServiciosGrid  from './components/home/ServiciosGrid';   // ← NUEVA
import Beneficios     from './components/home/Beneficios';
import Catalogo       from './components/home/Catalogo';
import DotFeatures    from './components/home/DotFeatures';
import Testimonios    from './components/home/Testimonios';   // ← NUEVA
import CallToAction   from './components/home/CallToAction';

// UI flotante
import DotCTA         from './components/ui/DotCTA';
import WhatsAppButton from './components/ui/WhatsAppButton';
import PhoneMockup    from './components/ui/PhoneMockup';

// Páginas extras
import DotPage from './pages/DotPage';

// ─── HomePage ────────────────────────────────────────────────────────────────
function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero: tagline dual + mockup animado */}
        <section id="inicio">
          <HeroSection />
        </section>

        {/* 2. Dos pilares: Diseño Creativo + Automatización IA  ← NUEVO */}
        <section id="servicios">
          <ServiciosGrid />
        </section>

        {/* 3. Beneficios puntuales */}
        <section id="beneficios">
          <Beneficios />
        </section>

        {/* 4. Catálogo de invitaciones y diseños */}
        <section id="catalogo">
          <Catalogo />
        </section>

        {/* 5. Zentria DOT — tarjetas NFC */}
        <section id="dot-info">
          <DotFeatures />
        </section>

        {/* 6. Testimonios — prueba social ← NUEVA */}
        <section id="testimonios">
          <Testimonios />
        </section>

        {/* 7. CTA final de contacto */}
        <section id="contacto">
          <CallToAction />
        </section>
      </main>
      <Footer />

      {/* Botones flotantes */}
      <div className="fixed bottom-0 right-0 z-[100] p-6 pointer-events-none">
        <div className="flex flex-col items-end gap-4 pointer-events-auto">
          <DotCTA />
          <WhatsAppButton />
        </div>
      </div>
    </>
  );
}

// ─── App (enrutador principal) ────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0A192F] text-gray-800 font-inter selection:bg-zentria-primary selection:text-white">
        <Routes>
          <Route path="/"    element={<HomePage />} />
          <Route path="/dot" element={<DotPage />}  />
          <Route
            path="/demo"
            element={
              <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A192F] py-12">
                <h2 className="text-3xl font-bold mb-8 text-white">Vista Previa Interactiva</h2>
                <PhoneMockup demoUrl="https://earnest-truffle-e1a76d.netlify.app" />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}