import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/footer';

// Secciones de la Home (se cargan de inmediato: es la ruta principal del sitio)
import HeroSection    from './components/home/HeroSection';
import ServiciosGrid  from './components/home/ServiciosGrid';   // ← NUEVA
import Beneficios     from './components/home/Beneficios';
import Catalogo       from './components/home/Catalogo';
import DotFeatures    from './components/home/DotFeatures';
import Testimonios    from './components/home/Testimonios';
import ComoFunciona  from './components/home/ComoFunciona';
import FAQ           from './components/home/FAQ';
import CallToAction   from './components/home/CallToAction';

// UI flotante
import DotCTA         from './components/ui/DotCTA';
import WhatsAppButton from './components/ui/WhatsAppButton';
import PhoneMockup    from './components/ui/PhoneMockup';

// Páginas secundarias: solo se descargan cuando el usuario navega a ellas.
const DotPage             = lazy(() => import('./pages/DotPage'));
const CatalogoPage        = lazy(() => import('./pages/CatalogoPage'));
const CategoryPage        = lazy(() => import('./pages/CategoryPage'));
const CorporateEventsPage = lazy(() => import('./pages/CorporateEventsPage'));

// Loader mínimo mientras llega el chunk de la página secundaria.
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#0A192F]">
      <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-[#3b9eff] animate-spin" />
    </div>
  );
}

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

        {/* 4. Cómo funciona — proceso de 4 pasos */}
        <section id="como-funciona">
          <ComoFunciona />
        </section>

        {/* 5. Catálogo de invitaciones y diseños */}
        <section id="catalogo">
          <Catalogo />
        </section>

        {/* 6. Zentria DOT — tarjetas NFC */}
        <section id="dot-info">
          <DotFeatures />
        </section>

        {/* 7. Testimonios — prueba social */}
        <section id="testimonios">
          <Testimonios />
        </section>

        {/* 8. FAQ — preguntas frecuentes */}
        <section id="faq">
          <FAQ />
        </section>

        {/* 9. CTA final de contacto */}
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

// ─── Layout con Navbar/Footer compartido ─────────────────────────────────────
function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
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
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"    element={<HomePage />} />
            <Route path="/dot"                             element={<PageLayout><DotPage /></PageLayout>} />
            <Route path="/catalogo"                        element={<PageLayout><CatalogoPage /></PageLayout>} />
            <Route path="/catalogo/eventos-corporativos"   element={<PageLayout><CorporateEventsPage /></PageLayout>} />
            <Route path="/catalogo/:slug"                  element={<PageLayout><CategoryPage /></PageLayout>} />
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
        </Suspense>
      </div>
    </BrowserRouter>
  );
}