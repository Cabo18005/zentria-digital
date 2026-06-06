// Testimonios.tsx
// Sección de prueba social con 6 testimonios reales (placeholder).
// Estilo oscuro coherente con el resto de la marca Zentria Digital.

import { useState, useEffect, useRef } from 'react';

// ─── Tipos ────────────────────────────────────────────────────────────────────
interface Testimonio {
  nombre: string;
  cargo: string;
  tipo: 'evento' | 'negocio';
  proyecto: string;
  texto: string;
  estrellas: number;
  iniciales: string;
  color: string;   // color del avatar
  servicio: string; // etiqueta del servicio usado
}

// ─── Datos ────────────────────────────────────────────────────────────────────
// ⚠️  Reemplaza con testimonios reales de tus clientes.
const TESTIMONIOS: Testimonio[] = [
  {
    nombre: 'Sofía Ramírez',
    cargo: 'Quinceañera — Mérida, Yuc.',
    tipo: 'evento',
    proyecto: 'Invitación Digital XV Años',
    texto:
      'Quedé enamorada de mi invitación. Mis amigos no podían creer que era digital — la música, las fotos, el RSVP… Todo perfecto. La recomiendo al 100%.',
    estrellas: 5,
    iniciales: 'SR',
    color: '#8b5cf6',
    servicio: '✉️ Invitación Digital',
  },
  {
    nombre: 'Carlos Mendoza',
    cargo: 'Dueño — Barbería El Estilo',
    tipo: 'negocio',
    proyecto: 'Chatbot IA para WhatsApp',
    texto:
      'El chatbot atiende a mis clientes de 8 am a 11 pm sin que yo intervenga. Agenda citas solo, manda recordatorios y ya no pierdo clientes por no contestar a tiempo.',
    estrellas: 5,
    iniciales: 'CM',
    color: '#22d3ee',
    servicio: '🤖 Chatbot IA',
  },
  {
    nombre: 'Valeria & Luis Torres',
    cargo: 'Boda — Mérida, Yucatán',
    tipo: 'evento',
    proyecto: 'Pack Boda Oro',
    texto:
      'Nuestros invitados nos decían que nuestra invitación era la más bonita que habían recibido. El contador de días y el mapa integrado hicieron todo muy fácil para todos.',
    estrellas: 5,
    iniciales: 'VL',
    color: '#f59e0b',
    servicio: '✉️ Invitación Digital',
  },
  {
    nombre: 'Fernanda Castillo',
    cargo: 'Directora — Centro de Yoga Merkaba',
    tipo: 'negocio',
    proyecto: 'Tarjeta NFC DOT + Chatbot',
    texto:
      'La tarjeta DOT ha sido un éxito total en mis talleres. La gente la toca con el celular y en segundos tiene mi WhatsApp, mi Instagram y mi agenda. Y el bot responde dudas mientras yo doy clases.',
    estrellas: 5,
    iniciales: 'FC',
    color: '#ec4899',
    servicio: '📲 DOT + Chatbot',
  },
  {
    nombre: 'Diego Herrera',
    cargo: 'CEO — Inmobiliaria Punto Clave',
    tipo: 'negocio',
    proyecto: 'Automatización IA + Branding',
    texto:
      'Antes perdíamos prospectos porque tardábamos en responder. Ahora el bot califica clientes, agenda visitas y solo me avisa cuando alguien ya está listo para comprar. Triplicamos conversiones.',
    estrellas: 5,
    iniciales: 'DH',
    color: '#0052CC',
    servicio: '🤖 Automatización IA',
  },
  {
    nombre: 'Mariana López',
    cargo: 'Organizadora de Eventos',
    tipo: 'evento',
    proyecto: 'Paquete Completo — 3 Bodas',
    texto:
      'Trabajo con Zentria en todas mis bodas. Entrega rápido, calidad impecable y siempre están disponibles para ajustes. Mis clientes preguntan por la invitación antes que por el catering.',
    estrellas: 5,
    iniciales: 'ML',
    color: '#10b981',
    servicio: '✨ Paquete Completo',
  },
];

// ─── Sub-componente: Estrellas ────────────────────────────────────────────────
function Estrellas({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          viewBox="0 0 20 20"
          fill={i < n ? '#FBBF24' : 'none'}
          stroke={i < n ? '#FBBF24' : '#374151'}
          strokeWidth={1.5}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function Testimonios() {
  const [activo, setActivo] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [animDir, setAnimDir] = useState<'left' | 'right'>('right');
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Intersection Observer para animación de entrada
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-avance cada 5s cuando no está pausado
  useEffect(() => {
    if (pausado) return;
    intervalRef.current = setInterval(() => {
      setAnimDir('right');
      setActivo((prev) => (prev + 1) % TESTIMONIOS.length);
    }, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [pausado]);

  const irA = (idx: number) => {
    setAnimDir(idx > activo ? 'right' : 'left');
    setActivo(idx);
    // Reinicia el timer
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!pausado) {
      intervalRef.current = setInterval(() => {
        setAnimDir('right');
        setActivo((prev) => (prev + 1) % TESTIMONIOS.length);
      }, 5000);
    }
  };

  const anterior = () => irA((activo - 1 + TESTIMONIOS.length) % TESTIMONIOS.length);
  const siguiente = () => irA((activo + 1) % TESTIMONIOS.length);

  const t = TESTIMONIOS[activo];

  return (
    <section
      ref={sectionRef}
      id="testimonios"
      className="relative py-28 px-6 bg-[#0A192F] overflow-hidden font-inter"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
    >
      {/* ── Fondo decorativo ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-700 opacity-[0.05] blur-[130px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600 opacity-[0.05] blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Encabezado ── */}
        <div
          className="text-center mb-16 space-y-4 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-gray-400 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Lo que dicen nuestros clientes
          </div>
          <h2 className="text-4xl md:text-5xl font-libre font-bold text-white leading-tight">
            Resultados que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              hablan solos.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Más de 50 eventos y negocios en Yucatán ya experimentaron la diferencia Zentria.
          </p>
        </div>

        {/* ── Layout principal: tarjeta grande + mini-lista ── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 transition-all duration-700 delay-150"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
        >

          {/* ── Tarjeta de testimonio activo ── */}
          <div
            key={activo}
            className="relative bg-[#0d1f35] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[340px] overflow-hidden"
            style={{
              animation: `slideIn${animDir === 'right' ? 'Right' : 'Left'} 0.4s ease both`,
              boxShadow: `0 0 60px 0 ${t.color}18, 0 20px 50px -20px rgba(0,0,0,0.5)`,
              borderColor: `${t.color}20`,
            }}
          >
            {/* Línea superior de acento */}
            <div
              className="absolute top-0 left-8 right-8 h-[2px] rounded-full"
              style={{ background: `linear-gradient(90deg, transparent, ${t.color}, transparent)` }}
            />

            {/* Comillas decorativas */}
            <div
              className="absolute top-6 right-8 text-[100px] font-serif leading-none select-none pointer-events-none"
              style={{ color: `${t.color}15` }}
            >
              "
            </div>

            {/* Contenido */}
            <div className="space-y-6 relative z-10">
              {/* Etiqueta de servicio */}
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border"
                style={{ color: t.color, borderColor: `${t.color}30`, backgroundColor: `${t.color}10` }}
              >
                {t.servicio}
              </span>

              {/* Texto del testimonio */}
              <blockquote className="text-white/90 text-lg md:text-xl leading-relaxed font-light">
                "{t.texto}"
              </blockquote>

              {/* Estrellas */}
              <Estrellas n={t.estrellas} />
            </div>

            {/* Footer: avatar + info */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
              <div className="flex items-center gap-4">
                {/* Avatar con iniciales */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-white flex-shrink-0 shadow-lg"
                  style={{ backgroundColor: t.color, boxShadow: `0 4px 20px ${t.color}50` }}
                >
                  {t.iniciales}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.nombre}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{t.cargo}</p>
                </div>
              </div>

              {/* Navegación flechas */}
              <div className="flex gap-2">
                <button
                  onClick={anterior}
                  aria-label="Anterior"
                  className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  onClick={siguiente}
                  aria-label="Siguiente"
                  className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* ── Mini-lista lateral (desktop) ── */}
          <div className="hidden lg:flex flex-col gap-3">
            {TESTIMONIOS.map((item, i) => (
              <button
                key={i}
                onClick={() => irA(i)}
                className={`flex items-center gap-3 p-3.5 rounded-2xl text-left transition-all duration-300 border ${
                  i === activo
                    ? 'bg-white/8 border-white/15 shadow-lg'
                    : 'bg-transparent border-transparent hover:bg-white/4 hover:border-white/8'
                }`}
              >
                {/* Avatar pequeño */}
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black text-white flex-shrink-0 transition-all duration-300"
                  style={{
                    backgroundColor: i === activo ? item.color : `${item.color}40`,
                    boxShadow: i === activo ? `0 0 12px ${item.color}60` : 'none',
                  }}
                >
                  {item.iniciales}
                </div>

                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-bold truncate transition-colors duration-300 ${i === activo ? 'text-white' : 'text-gray-400'}`}>
                    {item.nombre}
                  </p>
                  <p className="text-[10px] text-gray-600 truncate mt-0.5">{item.proyecto}</p>
                </div>

                {/* Indicador activo */}
                {i === activo && (
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Dots (móvil) ── */}
        <div className="flex lg:hidden justify-center gap-2 mt-8">
          {TESTIMONIOS.map((item, i) => (
            <button
              key={i}
              onClick={() => irA(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width:           i === activo ? '24px' : '8px',
                height:          '8px',
                backgroundColor: i === activo ? item.color : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>

        {/* ── Barra de stats ── */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-300"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
        >
          {[
            { num: '50+',  label: 'Clientes satisfechos', color: '#8b5cf6' },
            { num: '100%', label: 'Recomendarían Zentria', color: '#FBBF24' },
            { num: '24/7', label: 'Disponibilidad del chatbot', color: '#22d3ee' },
            { num: '< 1h', label: 'Tiempo de respuesta',  color: '#10b981' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#0d1f35] border border-white/8 rounded-2xl px-6 py-5 text-center hover:border-white/15 transition-colors duration-300"
            >
              <p className="text-3xl font-black" style={{ color: stat.color }}>
                {stat.num}
              </p>
              <p className="text-gray-500 text-xs mt-1 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
