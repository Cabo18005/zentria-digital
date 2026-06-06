import { useState } from 'react';

// ─── Tipos ───────────────────────────────────────────────────────────────────
interface Servicio {
  icono: string;
  nombre: string;
  desc: string;
}

interface Pilar {
  id: string;
  etiqueta: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  servicios: Servicio[];
  cta: { texto: string; href: string };
  acento: string;       // color Tailwind para detalles
  acentoHex: string;    // hex para sombras y gradientes inline
  gradiente: string;    // clases del gradiente del header de la card
}

// ─── Datos ───────────────────────────────────────────────────────────────────
const PILARES: Pilar[] = [
  {
    id: 'diseno',
    etiqueta: '✦ Diseño Creativo',
    titulo: 'Piezas que\nenamoran.',
    subtitulo: 'Desde la pantalla hasta el tacto',
    descripcion:
      'Creamos experiencias visuales que generan emoción y hacen que tu marca sea recordada. Cada pieza es diseñada a medida, sin plantillas genéricas.',
    servicios: [
      {
        icono: '✉️',
        nombre: 'Invitaciones Digitales',
        desc: 'Bodas, XV Años, Bautizos, Graduaciones — interactivas y con RSVP.',
      },
      {
        icono: '🪪',
        nombre: 'Zentria DOT — Tarjetas NFC',
        desc: 'Comparte tu perfil con un toque. PVC premium o metal con chip NFC.',
      },
      {
        icono: '🎨',
        nombre: 'Logos & Branding',
        desc: 'Identidad visual completa: logotipo, paleta, tipografía y manual de marca.',
      },
      {
        icono: '📄',
        nombre: 'Flyers & Materiales',
        desc: 'Diseño para redes, impresión y campañas digitales con coherencia visual.',
      },
    ],
    cta: {
      texto: 'Ver catálogo de diseños',
      href: '#catalogo',
    },
    acento: 'text-violet-400',
    acentoHex: '#8b5cf6',
    gradiente: 'from-violet-900/40 via-[#0A192F] to-[#0A192F]',
  },
  {
    id: 'ia',
    etiqueta: '⚡ Automatización IA',
    titulo: 'Tu negocio\nsiempre activo.',
    subtitulo: 'Vende y atiende mientras duermes',
    descripcion:
      'Implementamos chatbots con inteligencia artificial que responden, califican prospectos y cierran ventas en WhatsApp, Instagram y Facebook — sin intervención humana.',
    servicios: [
      {
        icono: '🤖',
        nombre: 'Chatbot IA para WhatsApp',
        desc: 'Respuestas automáticas, catálogo de productos y cierre de ventas 24/7.',
      },
      {
        icono: '📅',
        nombre: 'Agendamiento Automático',
        desc: 'El bot agenda citas, manda recordatorios y sincroniza con tu calendario.',
      },
      {
        icono: '📊',
        nombre: 'Calificación de Prospectos',
        desc: 'Filtra leads automáticamente y solo avisa cuando un cliente está listo.',
      },
      {
        icono: '💬',
        nombre: 'Instagram & Facebook Bots',
        desc: 'Responde DMs y comentarios en segundos. Nunca pierdas un lead por tardanza.',
      },
    ],
    cta: {
      texto: 'Quiero automatizar mi negocio',
      href: 'https://wa.me/529999908114?text=Hola!+Me+interesa+un+chatbot+con+IA+para+mi+negocio',
    },
    acento: 'text-cyan-400',
    acentoHex: '#22d3ee',
    gradiente: 'from-cyan-900/40 via-[#0A192F] to-[#0A192F]',
  },
];

// ─── Componente ───────────────────────────────────────────────────────────────
export default function ServiciosGrid() {
  const [hoveredPilar, setHoveredPilar] = useState<string | null>(null);
  const [hoveredServicio, setHoveredServicio] = useState<string | null>(null);

  return (
    <section
      id="servicios"
      className="relative py-28 px-6 bg-[#060f1e] overflow-hidden font-inter"
    >
      {/* ── Fondo decorativo ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0052CC] opacity-[0.06] blur-[140px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Encabezado de sección ── */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-gray-400 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0052CC] animate-pulse" />
            Nuestros servicios
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-libre font-bold text-white leading-tight">
            Dos superpoderes.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-[#3b9eff] to-cyan-400">
              Una sola agencia.
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Combinamos creatividad de alto nivel con tecnología de automatización inteligente para que tu marca destaque y tu negocio crezca solo.
          </p>
        </div>

        {/* ── Grid de dos pilares ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {PILARES.map((pilar) => {
            const isHovered = hoveredPilar === pilar.id;

            return (
              <div
                key={pilar.id}
                onMouseEnter={() => setHoveredPilar(pilar.id)}
                onMouseLeave={() => setHoveredPilar(null)}
                className="relative rounded-3xl border border-white/10 bg-[#0d1f35] overflow-hidden transition-all duration-500 flex flex-col"
                style={{
                  boxShadow: isHovered
                    ? `0 0 60px 0 ${pilar.acentoHex}22, 0 20px 60px -20px rgba(0,0,0,0.6)`
                    : '0 4px 30px rgba(0,0,0,0.3)',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  borderColor: isHovered ? `${pilar.acentoHex}30` : 'rgba(255,255,255,0.08)',
                }}
              >
                {/* Línea superior de acento */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${pilar.acentoHex}, transparent)`,
                    opacity: isHovered ? 1 : 0.3,
                  }}
                />

                {/* ── Header de la card ── */}
                <div className={`bg-gradient-to-br ${pilar.gradiente} px-8 pt-10 pb-8 border-b border-white/5`}>
                  {/* Etiqueta */}
                  <span
                    className="text-xs font-bold tracking-widest uppercase mb-4 block"
                    style={{ color: pilar.acentoHex }}
                  >
                    {pilar.etiqueta}
                  </span>

                  {/* Título */}
                  <h3 className="text-3xl md:text-4xl font-libre font-bold text-white leading-tight whitespace-pre-line mb-2">
                    {pilar.titulo}
                  </h3>
                  <p className="text-sm font-medium text-gray-400 mb-4">{pilar.subtitulo}</p>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                    {pilar.descripcion}
                  </p>
                </div>

                {/* ── Lista de servicios ── */}
                <div className="px-8 py-8 flex flex-col flex-grow">
                  <ul className="space-y-3 flex-grow">
                    {pilar.servicios.map((srv, i) => {
                      const key = `${pilar.id}-${i}`;
                      const srvHovered = hoveredServicio === key;
                      return (
                        <li
                          key={i}
                          onMouseEnter={() => setHoveredServicio(key)}
                          onMouseLeave={() => setHoveredServicio(null)}
                          className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 cursor-default"
                          style={{
                            backgroundColor: srvHovered ? `${pilar.acentoHex}10` : 'transparent',
                            borderColor: srvHovered ? `${pilar.acentoHex}25` : 'transparent',
                            border: '1px solid',
                          }}
                        >
                          {/* Icono */}
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-transform duration-300"
                            style={{
                              backgroundColor: `${pilar.acentoHex}15`,
                              transform: srvHovered ? 'scale(1.1)' : 'scale(1)',
                            }}
                          >
                            {srv.icono}
                          </div>

                          {/* Texto */}
                          <div>
                            <p className="text-sm font-bold text-white mb-0.5">{srv.nombre}</p>
                            <p className="text-xs text-gray-500 leading-relaxed">{srv.desc}</p>
                          </div>

                          {/* Chevron */}
                          <svg
                            className="w-4 h-4 flex-shrink-0 mt-0.5 ml-auto transition-all duration-300"
                            style={{
                              color: pilar.acentoHex,
                              opacity: srvHovered ? 1 : 0,
                              transform: srvHovered ? 'translateX(0)' : 'translateX(-6px)',
                            }}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                        </li>
                      );
                    })}
                  </ul>

                  {/* ── CTA de cada pilar ── */}
                  <div className="mt-8">
                    <a
                      href={pilar.cta.href}
                      target={pilar.cta.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl font-bold text-sm transition-all duration-300 overflow-hidden"
                      style={{
                        backgroundColor: `${pilar.acentoHex}18`,
                        border: `1px solid ${pilar.acentoHex}35`,
                        color: '#ffffff',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = `${pilar.acentoHex}28`;
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = `${pilar.acentoHex}60`;
                        (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = `${pilar.acentoHex}18`;
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = `${pilar.acentoHex}35`;
                        (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                      }}
                    >
                      {/* Shimmer */}
                      <span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                      />
                      {pilar.cta.texto}
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m0 0l-6.75-6.75M20.25 12l-6.75 6.75" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Banner inferior: combo de los dos ── */}
        <div className="mt-10 p-[1px] rounded-3xl bg-gradient-to-r from-violet-500 via-[#0052CC] to-cyan-500">
          <div className="bg-[#060f1e] rounded-[23px] px-8 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Paquete completo</p>
              <h4 className="text-xl md:text-2xl font-libre font-bold text-white">
                ¿Necesitas diseño{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                  y automatización
                </span>
                ?
              </h4>
              <p className="text-gray-400 text-sm mt-1 max-w-md">
                Combina los dos pilares y obtén un precio especial. Pregunta por nuestros paquetes integrales.
              </p>
            </div>
            <a
              href="https://wa.me/529999908114?text=Hola!+Me+interesa+un+paquete+completo+de+Diseño+y+Automatización+IA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-3 bg-white text-[#0A192F] px-8 py-4 rounded-2xl font-black text-sm hover:bg-gray-100 transition-all duration-300 shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
            >
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pedir cotización integral
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
