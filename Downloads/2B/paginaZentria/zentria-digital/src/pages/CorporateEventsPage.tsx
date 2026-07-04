// src/pages/CorporateEventsPage.tsx
// Ruta: /catalogo/eventos-corporativos

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const TEL = '529999908114';
const wa = (msg: string) => `https://wa.me/${TEL}?text=${encodeURIComponent(msg)}`;

function Check({ color }: { color: string }) {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function WAIcon({ size = 5 }: { size?: number }) {
  return (
    <svg className={`w-${size} h-${size}`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function useVisible(threshold = 0.12) {
  const [v, setV] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setV(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, v };
}

const TIPOS = [
  { ico: '🚀', title: 'Lanzamiento de Producto',  desc: 'Genera anticipación con una invitación que ya comunica el nivel de tu producto.',          color: '#0052CC' },
  { ico: '🎤', title: 'Conferencias y Congresos',  desc: 'Agenda por ponentes, QR individual y mapa del recinto en una sola URL.',                   color: '#22d3ee' },
  { ico: '🏆', title: 'Cena de Premiación',         desc: 'El momento de reconocer a tu equipo merece una invitación a la altura del logro.',         color: '#f59e0b' },
  { ico: '🤝', title: 'Team Building',              desc: 'Genera expectativa y confirma asistencia con dinámicas integradas.',                       color: '#10b981' },
  { ico: '🎉', title: 'Cena de Fin de Año',          desc: 'Cierra el año con una experiencia digital que tus colaboradores compartirán con orgullo.', color: '#8b5cf6' },
  { ico: '📊', title: 'Reunión de Consejo',          desc: 'Comunicación formal y precisa para directivos e invitados especiales.',                   color: '#3b9eff' },
];

const BENEFICIOS = [
  { ico: '⚡', title: 'Entrega en 5-10 días',  desc: 'Tu invitación lista según la complejidad del paquete elegido.',              badge: '5-10d' },
  { ico: '📊', title: 'RSVP en tiempo real',   desc: 'Dashboard de confirmaciones al instante. Sabes cuántos asisten.',              badge: '100%'  },
  { ico: '🎨', title: 'Branding impecable',    desc: 'Logo, colores y tipografía de tu empresa en cada elemento del diseño.',        badge: '1:1'   },
  { ico: '📱', title: 'Sin apps requeridas',   desc: 'Tus invitados abren la invitación desde WhatsApp. Cero descargas.',           badge: '0'     },
  { ico: '🌐', title: 'Bilingüe disponible',   desc: 'Para eventos internacionales: español e inglés en una sola URL.',             badge: 'ES/EN' },
  { ico: '🔒', title: 'Acceso por QR único',   desc: 'QR individual por invitado para control de acceso y seguridad.',              badge: 'QR'    },
];

const SIEMPRE = [
  'Enlace único para compartir por WhatsApp, correo y redes',
  'Vista optimizada para móvil, tablet y escritorio',
  'Sin marcas de agua ni publicidad de terceros',
  'Invitación activa 90 días después del evento',
  'Soporte técnico durante todo el proceso',
];

const GALERIA = [
  { src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=700', title: 'Lanzamiento de Producto', tag: 'Executive',  acento: '#22d3ee' },
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=700', title: 'Congreso Empresarial',   tag: 'Enterprise', acento: '#f59e0b' },
  { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=700', title: 'Cena de Premiación',      tag: 'Executive',  acento: '#8b5cf6' },
];

// ── ÚNICO CAMBIO: precios actualizados para Mérida ──
const PAQUETES = [
  {
    id: 'business', name: 'Business', price: '$799', period: 'MXN / evento',
    desc: 'Para empresas que quieren impresionar sin complicaciones.',
    color: '#0052CC', featured: false,
    si: ['Diseño con branding corporativo','Información completa del evento','Mapa interactivo del recinto','RSVP con lista de confirmados','Compartir por WhatsApp','2 revisiones de diseño','Entrega en 5-7 días hábiles'],
    no: ['QR individual por invitado','Versión bilingüe','Dashboard de asistencia'],
    waMsg: 'Hola! Me interesa el paquete Business para evento corporativo ($799 MXN). Podemos hablar?',
  },
  {
    id: 'executive', name: 'Executive', price: '$1,199', period: 'MXN / evento',
    desc: 'El estándar para empresas que no negocian su imagen.',
    color: '#22d3ee', featured: true,
    si: ['Todo lo del paquete Business','QR de acceso individual por invitado','Dashboard de confirmaciones en tiempo real','Agenda por bloques horarios','Versión bilingüe (ES/EN)','Dress code y estacionamiento','Revisiones ilimitadas','Soporte prioritario 24h'],
    no: [],
    waMsg: 'Hola! Me interesa el paquete Executive para evento corporativo ($1,199 MXN). Podemos hablar?',
  },
  {
    id: 'enterprise', name: 'Enterprise', price: 'Cotización', period: 'especial',
    desc: 'Para grandes corporativos y eventos de alto perfil.',
    color: '#f59e0b', featured: false,
    si: ['Todo lo del paquete Executive','Video teaser del evento integrado','Micrositio con dominio personalizado','Integración con tu CRM','Múltiples idiomas','Capacitación al equipo','Mantenimiento post-evento','Account manager dedicado'],
    no: [],
    waMsg: 'Hola! Me interesa el paquete Enterprise para evento corporativo. Podemos hablar?',
  },
];

const CASOS = [
  { emp: 'Inmobiliaria Punto Clave',     ev: 'Lanzamiento residencial',   res: 'Tasa de confirmación del 94% — el evento más asistido en la historia de la empresa.', ico: '🏢', color: '#0052CC' },
  { emp: 'Centro Empresarial Yucatán',   ev: 'Congreso anual directivos', res: '200 invitados gestionados sin papel. Control de acceso 100% digital con QR.',       ico: '🎤', color: '#22d3ee' },
  { emp: 'Grupo Industrial del Sureste', ev: 'Cena de premiación anual',  res: 'Invitados compartieron la invitación en redes antes del evento — expectativa máxima.', ico: '🏆', color: '#f59e0b' },
];

export default function CorporateEventsPage() {
  const [hovPaq, setHovPaq] = useState<string | null>(null);
  const hero = useVisible(0.04);
  const s2 = useVisible();
  const s3 = useVisible();
  const s4 = useVisible();
  const s5 = useVisible();
  const s6 = useVisible();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const appear = (vis: boolean, delay = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  const mainWA = wa('Hola! Vi la página de Eventos Corporativos en Zentria Digital y me interesa una cotización. Podemos hablar?');

  return (
    <div className="min-h-screen bg-[#060f1e] font-inter">

      {/* HERO */}
      <section ref={hero.ref} className="relative min-h-[88vh] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=85&w=1600"
          alt="Eventos Corporativos Zentria Digital"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060f1e] via-[#060f1e]/75 to-[#060f1e]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060f1e]/60 to-transparent" />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(0,82,204,0.22), transparent 55%)' }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-40" style={appear(hero.v)}>
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/catalogo" className="hover:text-white transition-colors">Catálogo</Link>
            <span>/</span>
            <span className="text-gray-300">Eventos Corporativos</span>
          </nav>
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0052CC]/20 border border-[#0052CC]/40 backdrop-blur-sm">
              <span>🏢</span>
              <span className="text-xs font-bold text-[#3b9eff] tracking-widest uppercase">Eventos Corporativos · Zentria Digital</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-libre font-bold text-white leading-[1.05]">
              Tu empresa merece{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b9eff] to-cyan-400">invitaciones</span>{' '}
              a su altura.
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed max-w-2xl">
              Diseñamos invitaciones digitales corporativas con RSVP en tiempo real, branding impecable y QR de acceso — entrega en 5 a 10 días hábiles.
            </p>
            <div className="flex flex-wrap gap-6 pt-2">
              {[['5-10d','Días de entrega'],['94%','Tasa de confirmación'],['0','Apps requeridas']].map(([n,l],i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-2xl font-black text-[#3b9eff]">{n}</span>
                  <span className="text-sm text-gray-400 leading-tight max-w-[110px]">{l}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href={mainWA} target="_blank" rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white bg-[#0052CC] hover:bg-[#0041a3] transition-all duration-300 shadow-xl shadow-[#0052CC]/30 hover:-translate-y-0.5 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <WAIcon size={5} />
                <span className="relative">Solicitar cotización gratis</span>
              </a>
              <a href="#paquetes" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white bg-white/8 border border-white/12 hover:bg-white/12 transition-all duration-300">
                Ver paquetes
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TIPOS DE EVENTO */}
      <section ref={s2.ref} className="py-24 px-6 bg-[#0A192F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 space-y-3" style={appear(s2.v)}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-gray-400 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0052CC]" /> Tipos de evento
            </div>
            <h2 className="text-4xl md:text-5xl font-libre font-bold text-white">
              Para cada ocasión empresarial,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b9eff] to-cyan-400">una solución a medida.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TIPOS.map((t, i) => (
              <div key={i} className="group p-6 rounded-3xl border border-white/7 bg-[#0d1f35] hover:border-white/15 hover:-translate-y-1 transition-all duration-300"
                style={{ opacity: s2.v?1:0, transform: s2.v?'translateY(0)':'translateY(24px)', transition: `opacity .5s ease ${i*.07}s, transform .5s ease ${i*.07}s` }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4" style={{ backgroundColor: `${t.color}18` }}>{t.ico}</div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#3b9eff] transition-colors">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section ref={s3.ref} className="relative py-24 px-6 bg-[#060f1e] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0052CC] opacity-[0.05] blur-[130px] rounded-full pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14 space-y-3" style={appear(s3.v)}>
            <h2 className="text-4xl md:text-5xl font-libre font-bold text-white">
              Por qué una invitación digital{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b9eff] to-cyan-400">corporativa?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">No es solo una invitación. Es la primera impresión de tu evento.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFICIOS.map((b, i) => (
              <div key={i} className="relative p-7 rounded-3xl bg-[#0d1f35] border border-white/7 overflow-hidden group hover:border-white/15 transition-all duration-300"
                style={{ opacity: s3.v?1:0, transform: s3.v?'translateY(0)':'translateY(24px)', transition: `opacity .5s ease ${i*.08}s, transform .5s ease ${i*.08}s` }}>
                <span className="absolute top-4 right-5 text-5xl font-black text-white/4 select-none group-hover:text-white/7 transition-colors">{b.badge}</span>
                <div className="text-3xl mb-4">{b.ico}</div>
                <h3 className="text-base font-black text-white mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-8 rounded-3xl bg-[#0d1f35] border border-white/8" style={appear(s3.v, 0.3)}>
            <p className="text-xs font-bold text-[#3b9eff] uppercase tracking-widest mb-5">Incluido en todos los paquetes</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SIEMPRE.map((it, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-400"><Check color="#0052CC" />{it}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section ref={s4.ref} className="py-24 px-6 bg-[#0A192F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 space-y-3" style={appear(s4.v)}>
            <h2 className="text-4xl md:text-5xl font-libre font-bold text-white">
              Diseños que{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b9eff] to-cyan-400">impresionan.</span>
            </h2>
            <p className="text-gray-400 text-lg">Ejemplos reales de invitaciones corporativas entregadas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {GALERIA.map((g, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden border border-white/8 hover:border-white/20 hover:-translate-y-2 transition-all duration-500"
                style={{ opacity: s4.v?1:0, transform: s4.v?'translateY(0)':'translateY(24px)', transition: `opacity .6s ease ${i*.1}s, transform .6s ease ${i*.1}s` }}>
                <div className="relative h-64 overflow-hidden">
                  <img src={g.src} alt={g.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f35] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white"
                    style={{ backgroundColor: `${g.acento}80`, backdropFilter: 'blur(8px)', border: `1px solid ${g.acento}40` }}>{g.tag}</span>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={wa(`Hola! Vi el ejemplo "${g.title}" en Zentria Digital y me interesa algo similar.`)}
                      target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                      className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/25 text-white font-bold text-sm hover:bg-white/20 transition-colors">
                      <WAIcon size={4} /> Quiero algo así
                    </a>
                  </div>
                </div>
                <div className="p-5 bg-[#0d1f35]">
                  <h3 className="text-base font-black text-white group-hover:text-[#3b9eff] transition-colors">{g.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">Entrega en 5-10 días · Branding personalizado</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAQUETES */}
      <section id="paquetes" ref={s5.ref} className="py-24 px-6 bg-[#060f1e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 space-y-3" style={appear(s5.v)}>
            <h2 className="text-4xl md:text-5xl font-libre font-bold text-white">Paquetes y precios</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">Transparentes, sin cargos ocultos. Entrega en 5 a 10 días hábiles según el paquete.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PAQUETES.map((p, i) => {
              const hov = hovPaq === p.id;
              return (
                <div key={p.id}
                  onMouseEnter={() => setHovPaq(p.id)} onMouseLeave={() => setHovPaq(null)}
                  className="relative flex flex-col rounded-3xl border p-8 transition-all duration-300"
                  style={{
                    opacity: s5.v ? 1 : 0,
                    transform: s5.v ? (hov ? 'translateY(-6px)' : 'translateY(0)') : 'translateY(32px)',
                    transition: `opacity .5s ease ${i*.1}s, transform .4s ease, box-shadow .4s`,
                    backgroundColor: p.featured ? `${p.color}10` : '#0d1f35',
                    borderColor: p.featured ? `${p.color}45` : hov ? 'rgba(255,255,255,.15)' : 'rgba(255,255,255,.07)',
                    boxShadow: p.featured ? `0 0 50px ${p.color}20` : hov ? '0 20px 50px rgba(0,0,0,.5)' : '0 4px 20px rgba(0,0,0,.3)',
                  }}>
                  <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full"
                    style={{ background: `linear-gradient(90deg,transparent,${p.color},transparent)`, opacity: p.featured||hov?1:.3 }} />
                  {p.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white"
                      style={{ backgroundColor: p.color }}>Más elegido</div>
                  )}
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: p.color }}>{p.name}</p>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-black text-white">{p.price}</span>
                      <span className="text-sm text-gray-500">{p.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{p.desc}</p>
                  </div>
                  <ul className="space-y-2.5 flex-grow mb-8">
                    {p.si.map((it, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray-300"><Check color={p.color} />{it}</li>
                    ))}
                    {p.no.map((it, j) => (
                      <li key={`n${j}`} className="flex items-start gap-2.5 text-sm text-gray-600 line-through">
                        <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>{it}
                      </li>
                    ))}
                  </ul>
                  <a href={wa(p.waMsg)} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      backgroundColor: p.featured ? p.color : 'rgba(255,255,255,.07)',
                      border: p.featured ? 'none' : '1px solid rgba(255,255,255,.12)',
                      boxShadow: p.featured ? `0 8px 30px ${p.color}40` : 'none',
                    }}>
                    {p.price === 'Cotización' ? 'Solicitar cotización' : 'Elegir este paquete'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m0 0l-6.75-6.75M20.25 12l-6.75 6.75" />
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
          <p className="text-center text-sm text-gray-600 mt-8" style={appear(s5.v, 0.4)}>
            No sabes qué paquete elegir?{' '}
            <a href={wa('Hola! Necesito orientación para elegir el paquete corporativo adecuado.')}
              target="_blank" rel="noopener noreferrer" className="text-[#3b9eff] hover:underline">
              Escríbenos y te asesoramos sin costo.
            </a>
          </p>
        </div>
      </section>

      {/* CASOS DE ÉXITO + CTA FINAL */}
      <section ref={s6.ref} className="py-24 px-6 bg-[#0A192F]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 space-y-3" style={appear(s6.v)}>
            <h2 className="text-4xl md:text-5xl font-libre font-bold text-white">
              Empresas que ya{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b9eff] to-cyan-400">confían en nosotros.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {CASOS.map((c, i) => (
              <div key={i} className="p-7 rounded-3xl bg-[#0d1f35] border border-white/7 hover:border-white/15 transition-all duration-300"
                style={{ opacity: s6.v?1:0, transform: s6.v?'translateY(0)':'translateY(24px)', transition: `opacity .5s ease ${i*.1}s, transform .5s ease ${i*.1}s` }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5" style={{ backgroundColor: `${c.color}18` }}>{c.ico}</div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: c.color }}>{c.emp}</p>
                <p className="text-sm text-gray-400 mb-4">{c.ev}</p>
                <div className="border-t border-white/5 pt-4">
                  <p className="text-white text-sm leading-relaxed font-medium">"{c.res}"</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-[1px] rounded-3xl" style={{ background: 'linear-gradient(135deg,#0052CC80,transparent 50%,#22d3ee40)', ...appear(s6.v, 0.3) }}>
            <div className="bg-[#0A192F] rounded-[23px] px-8 py-14 md:py-16 text-center space-y-6">
              <p className="text-sm font-bold uppercase tracking-widest text-[#3b9eff]">Eventos Corporativos · Zentria Digital</p>
              <h2 className="text-4xl md:text-5xl font-libre font-bold text-white leading-tight">
                Tu próximo evento merece<br />la mejor primera impresión.
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Escríbenos hoy. En menos de 1 hora recibes una propuesta personalizada, sin costo y sin compromisos.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <a href={mainWA} target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-white text-lg bg-[#25D366] hover:bg-[#20ba5a] transition-all duration-300 hover:-translate-y-0.5 shadow-2xl shadow-[#25D366]/30 relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <WAIcon size={6} />
                  <span className="relative">Pedir cotización gratis</span>
                </a>
                <Link to="/catalogo" className="inline-flex items-center gap-2 px-8 py-5 rounded-2xl font-bold text-gray-400 hover:text-white transition-colors text-base">
                  Ver otras categorías
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
                {['Respuesta en menos de 1 hora','Sin compromisos','Cotización gratuita'].map((t, i) => (
                  <span key={i} className="text-sm text-gray-600">✓ {t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}