import { useState, useEffect } from 'react';
import PhoneMockup from '../ui/PhoneMockup';

// ─── Configuración central de WhatsApp ───────────────────────────────────────
const TELEFONO = "529999908114";
function waLink(msg: string) {
  return `https://wa.me/${TELEFONO}?text=${encodeURIComponent(msg)}`;
}

// Opciones del selector de intención del CTA principal
const INTENCIONES = [
  {
    emoji: '✉️',
    label: 'Invitación digital',
    mensaje: 'Hola, vi tu página de Zentria Digital y estoy interesado en una invitación digital. ¿Podemos hablar?',
  },
  {
    emoji: '🤖',
    label: 'Chatbot con IA',
    mensaje: 'Hola, vi tu página de Zentria Digital y estoy interesado en un chatbot con IA para mi negocio. ¿Podemos hablar?',
  },
  {
    emoji: '✨',
    label: 'Paquete completo',
    mensaje: 'Hola, vi tu página de Zentria Digital y estoy interesado en el paquete completo de diseño y automatización. ¿Podemos hablar?',
  },
];

// Palabras que rotan en el headline animado
const ROTATING_WORDS = ['enamora.', 'impacta.', 'convierte.', 'perdura.'];

// Píldoras que describen los dos mundos del negocio
const PILLS = [
  { label: 'Invitaciones Digitales', emoji: '✉️' },
  { label: 'Tarjetas NFC DOT', emoji: '📲' },
  { label: 'Chatbots IA WhatsApp', emoji: '🤖' },
  { label: 'Logos & Branding', emoji: '🎨' },
];

export default function HeroSection() {
  const [wordIndex,  setWordIndex]  = useState(0);
  const [isVisible,  setIsVisible]  = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);

  // Arranca la animación de entrada
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Rota las palabras del headline cada 2.5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0A192F]">

      {/* ── FONDO: malla de gradiente + grid sutil ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Orbe azul primario */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#0052CC] opacity-20 blur-[120px]" />
        {/* Orbe cyan acento */}
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500 opacity-10 blur-[100px]" />
        {/* Orbe violeta derecha */}
        <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] rounded-full bg-indigo-600 opacity-15 blur-[130px]" />
        {/* Grid punteado */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* ── CONTENIDO PRINCIPAL ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* ── COLUMNA IZQUIERDA: Texto ── */}
          <div
            className="w-full lg:w-[55%] flex flex-col items-start space-y-7"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-gray-300 tracking-widest uppercase">
                Mérida, Yucatán · Disponible ahora
              </span>
            </div>

            {/* Headline principal con palabra rotante */}
            <div className="space-y-1">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-libre font-bold text-white leading-[1.08]">
                Diseño que{' '}
                <span
                  key={wordIndex}
                  className="text-[#3b9eff] inline-block"
                  style={{
                    animation: 'wordFadeUp 0.45s ease both',
                  }}
                >
                  {ROTATING_WORDS[wordIndex]}
                </span>
              </h1>
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-libre font-bold text-white leading-[1.08]">
                IA que{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#0052CC]">
                    vende por ti.
                  </span>
                  {/* Línea subrayado decorativa */}
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 to-[#0052CC] rounded-full" />
                </span>
              </h2>
            </div>

            {/* Subtítulo */}
            <p
              className="text-gray-400 text-lg lg:text-xl max-w-xl leading-relaxed"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
              }}
            >
              Creamos{' '}
              <span className="text-white font-medium">
                invitaciones digitales y branding
              </span>{' '}
              que impresionan, y{' '}
              <span className="text-white font-medium">
                chatbots con IA
              </span>{' '}
              que atienden, venden y automatizan tu negocio — 24/7.
            </p>

            {/* Píldoras de servicios */}
            <div
              className="flex flex-wrap gap-2"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.8s ease 0.35s',
              }}
            >
              {PILLS.map((pill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-default"
                >
                  <span>{pill.emoji}</span>
                  {pill.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s',
              }}
            >
              {/* ── CTA Principal: selector de intención ── */}
              <div className="relative">
                {/* Menú desplegable de intenciones */}
                {menuOpen && (
                  <div className="absolute bottom-[calc(100%+10px)] left-0 z-50 w-72 bg-[#0d1f35] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden backdrop-blur-md">
                    <p className="px-4 pt-4 pb-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      ¿Qué te interesa?
                    </p>
                    {INTENCIONES.map((op) => (
                      <a
                        key={op.label}
                        href={waLink(op.mensaje)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3.5 hover:bg-white/5 transition-colors duration-150 border-t border-white/5 group"
                      >
                        <span className="text-xl w-8 text-center">{op.emoji}</span>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-white group-hover:text-[#3b9eff] transition-colors">
                            {op.label}
                          </p>
                          <p className="text-[11px] text-gray-500 leading-tight mt-0.5 line-clamp-1">
                            {op.mensaje.slice(0, 52)}…
                          </p>
                        </div>
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-[#3b9eff] flex-shrink-0 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}

                {/* Botón principal */}
                <button
                  onClick={() => setMenuOpen((v) => !v)}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base bg-[#0052CC] text-white shadow-lg shadow-[#0052CC]/30 hover:bg-[#0041a3] hover:shadow-[#0052CC]/50 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden w-full sm:w-auto"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Hablar con un experto
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${menuOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* CTA Secundario → Catálogo */}
              <a
                href="#catalogo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
              >
                Ver catálogo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Social proof mini */}
            <div
              className="flex items-center gap-4 pt-1"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.8s ease 0.65s',
              }}
            >
              {/* Avatares */}
              <div className="flex -space-x-2">
                {['bg-violet-500', 'bg-pink-500', 'bg-amber-500', 'bg-cyan-600'].map((color, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${color} border-2 border-[#0A192F] flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {['A', 'M', 'J', 'R'][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-white font-semibold">+50 negocios</span> ya confían en Zentria
              </p>
            </div>
          </div>

          {/* ── COLUMNA DERECHA: PhoneMockup ── */}
          <div
            className="w-full lg:w-[45%] flex justify-center items-center relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s',
            }}
          >
            {/* Halo de luz detrás del teléfono */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#0052CC] rounded-full blur-[80px] opacity-30 pointer-events-none" />

            {/* Tarjeta flotante superior: Chatbot IA */}
            <div
              className="absolute -top-4 -right-2 lg:-right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 shadow-2xl max-w-[180px]"
              style={{ animation: 'floatCard 4s ease-in-out infinite' }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">🤖</span>
                <span className="text-xs font-bold text-white">Chatbot IA</span>
              </div>
              <p className="text-[11px] text-gray-300 leading-snug">
                "¡Hola! ¿En qué puedo ayudarte hoy?"
              </p>
              <div className="mt-2 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-emerald-400 font-medium">Activo 24/7</span>
              </div>
            </div>

            {/* Tarjeta flotante inferior: Invitación enviada */}
            <div
              className="absolute -bottom-4 -left-2 lg:-left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 shadow-2xl max-w-[190px]"
              style={{ animation: 'floatCard 4s ease-in-out infinite 2s' }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">✉️</span>
                <span className="text-xs font-bold text-white">Invitación enviada</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex -space-x-1">
                  {['bg-pink-400', 'bg-violet-400', 'bg-blue-400'].map((c, i) => (
                    <div key={i} className={`w-5 h-5 rounded-full ${c} border border-white/20`} />
                  ))}
                </div>
                <span className="text-[11px] text-gray-300">248 vistos ✓✓</span>
              </div>
            </div>

            {/* El mockup con animación de flotación */}
            <div
              className="relative z-10 scale-[0.88] lg:scale-100"
              style={{ animation: 'phoneBounce 5s ease-in-out infinite' }}
            >
              <PhoneMockup demoUrl="https://earnest-truffle-e1a76d.netlify.app" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Flecha scroll hacia abajo ── */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-50 hover:opacity-80 transition-opacity cursor-pointer"
        onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] text-gray-400 tracking-widest uppercase">Descubrir</span>
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          style={{ animation: 'arrowBounce 1.8s ease-in-out infinite' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* ── Keyframes CSS ── */}
      <style>{`
        @keyframes wordFadeUp {
          from { opacity: 0; transform: translateY(12px); filter: blur(4px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
        }
        @keyframes phoneBounce {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-16px); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes arrowBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(5px); }
        }
      `}</style>
    </section>
  );
}