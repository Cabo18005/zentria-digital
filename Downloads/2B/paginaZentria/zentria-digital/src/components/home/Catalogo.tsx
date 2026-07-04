// Catalogo.tsx — Zentria Digital
// Home preview: carrusel de destacados + filtro de categorías → sub-páginas.
// Datos centralizados en src/data/catalogo.ts

import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIAS } from '../../data/catalogo';
import CanvasErrorBoundary from '../three/CanvasErrorBoundary';

const CatalogoBackground3D = lazy(() => import('../three/CatalogoBackground3D'));

// ─── Productos destacados (los que tienen demo real) ─────────────────────────
// Tomamos todos los productos de todas las categorías y los aplanamos.
const TODOS_PRODUCTOS = CATEGORIAS.flatMap((cat) =>
  cat.productos.map((p) => ({ ...p, categoriaSlug: cat.slug, categoriaLabel: cat.nombre, acento: cat.acento }))
);

// Filtros para la sección
const FILTROS = [
  { id: 'todos',      label: 'Todos',        emoji: '✦' },
  { id: 'bodas',      label: 'Bodas',        emoji: '💍' },
  { id: 'xv-anos',   label: 'XV Años',       emoji: '🌸' },
  { id: 'bautizos',  label: 'Bautizos',      emoji: '🕊️' },
  { id: 'cumpleanos', label: 'Infantiles',   emoji: '🎈' },
  { id: 'corporativo',label: 'Corporativo',  emoji: '🏢' },
  { id: 'chatbots-ia',label: 'Chatbots IA',  emoji: '🤖' },
];

// ─── Card de producto ─────────────────────────────────────────────────────────
function ProductCard({ prod }: { prod: typeof TODOS_PRODUCTOS[0] }) {
  const [hovered, setHovered] = useState(false);
  const hasDemoUrl = prod.demoUrl && prod.demoUrl !== '#';
  const waLink = `https://wa.me/529999908114?text=${encodeURIComponent(prod.waMsg)}`;

  return (
    <div
      className="group relative flex flex-col rounded-3xl overflow-hidden border transition-all duration-500 bg-[#0d1f35]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.06)',
        transform:   hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow:   hovered
          ? '0 24px 60px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08)'
          : '0 4px 20px rgba(0,0,0,0.3)',
      }}
    >
      {/* Imagen */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <img
          src={prod.imagen}
          alt={prod.titulo}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0d1f35] via-transparent to-transparent transition-opacity duration-300"
          style={{ opacity: hovered ? 0.85 : 0.5 }}
        />

        {prod.badge && (
          <span
            className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg"
            style={{ backgroundColor: prod.badgeColor }}
          >
            {prod.badge}
          </span>
        )}

        <Link
          to={`/catalogo/${prod.categoriaSlug}`}
          className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-black/40 backdrop-blur-md text-white border border-white/10 hover:bg-black/60 transition-colors"
        >
          {prod.categoriaLabel}
        </Link>

        {hasDemoUrl && (
          <a
            href={prod.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center transition-all duration-300"
            style={{ opacity: hovered ? 1 : 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold shadow-xl">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
              Vista previa
            </span>
          </a>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-grow p-6">
        <div className="mb-3">
          <h3 className="text-lg font-black text-white leading-tight">{prod.titulo}</h3>
          <p className="text-xs text-gray-500 mt-0.5 font-medium">{prod.subtitulo}</p>
        </div>

        <ul className="space-y-1.5 mb-5 flex-grow">
          {prod.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
              <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: prod.acento }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {f}
            </li>
          ))}
        </ul>

        <div className="flex items-baseline gap-1 mb-5">
          <span className="text-2xl font-black text-white">{prod.precio}</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <a
            href={hasDemoUrl ? prod.demoUrl : waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 rounded-2xl text-xs font-bold transition-all duration-300 border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {hasDemoUrl ? 'Ver demo' : 'Ver info'}
          </a>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 rounded-2xl text-xs font-bold transition-all duration-300 text-white shadow-md"
            style={{ backgroundColor: prod.acento, boxShadow: `0 4px 14px ${prod.acento}40` }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Cotizar
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function Catalogo() {
  const [filtro,  setFiltro]  = useState('todos');
  const [visible, setVisible] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cambiarFiltro = (id: string) => {
    setFiltro(id);
    setAnimKey((k) => k + 1);
  };

  const productosFiltrados =
    filtro === 'todos'
      ? TODOS_PRODUCTOS
      : TODOS_PRODUCTOS.filter((p) => p.categoriaSlug === filtro);

  return (
    <section
      ref={sectionRef}
      id="catalogo"
      className="relative py-28 px-6 bg-[#060f1e] overflow-hidden font-inter"
    >
      {/* Fondo decorativo: CSS + partículas 3D sutiles (se montan al entrar en vista) */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] bg-[#0052CC] opacity-[0.04] blur-[140px] rounded-full" />
        {visible && (
          <CanvasErrorBoundary fallback={null}>
            <Suspense fallback={null}>
              <CatalogoBackground3D />
            </Suspense>
          </CanvasErrorBoundary>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Encabezado */}
        <div
          className="text-center mb-12 space-y-4 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-gray-400 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0052CC] animate-pulse" />
            Portafolio de diseños
          </div>
          <h2 className="text-4xl md:text-5xl font-libre font-bold text-white leading-tight">
            Explora nuestro{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b9eff] to-cyan-400">
              catálogo.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Invitaciones digitales, automatizaciones IA y mucho más. Filtra por categoría.
          </p>
        </div>

        {/* Filtros */}
        <div
          className="flex overflow-x-auto gap-2 pb-3 mb-10 justify-start md:justify-center transition-all duration-700 delay-100"
          style={{
            opacity:        visible ? 1 : 0,
            transform:      visible ? 'translateY(0)' : 'translateY(16px)',
            scrollbarWidth: 'none',
          }}
        >
          {FILTROS.map((cat) => {
            const isActive = filtro === cat.id;
            const count = cat.id === 'todos'
              ? TODOS_PRODUCTOS.length
              : TODOS_PRODUCTOS.filter((p) => p.categoriaSlug === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => cambiarFiltro(cat.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-300 flex-shrink-0 border"
                style={{
                  backgroundColor: isActive ? '#0052CC'          : 'rgba(255,255,255,0.04)',
                  borderColor:     isActive ? '#0052CC'          : 'rgba(255,255,255,0.08)',
                  color:           isActive ? '#ffffff'          : '#9ca3af',
                  transform:       isActive ? 'translateY(-2px)' : 'translateY(0)',
                  boxShadow:       isActive ? '0 4px 20px #0052CC40' : 'none',
                }}
              >
                <span>{cat.emoji}</span>
                {cat.label}
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded-full font-black"
                  style={{
                    backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.06)',
                    color:           isActive ? '#fff' : '#6b7280',
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid de productos */}
        <div
          key={animKey}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ animation: 'gridFadeIn 0.4s ease both' }}
        >
          {productosFiltrados.map((prod) => (
            <ProductCard key={`${prod.categoriaSlug}-${prod.id}`} prod={prod} />
          ))}
        </div>

        {/* Estado vacío */}
        {productosFiltrados.length === 0 && (
          <div className="text-center py-24 space-y-4">
            <div className="text-6xl mb-4">🚧</div>
            <p className="text-xl font-bold text-white">Próximamente</p>
            <p className="text-gray-500">Estamos diseñando nuevas experiencias para esta categoría.</p>
            <button
              onClick={() => cambiarFiltro('todos')}
              className="mt-4 px-6 py-3 rounded-2xl bg-[#0052CC] text-white font-bold text-sm hover:bg-[#0041a3] transition-colors"
            >
              Ver todos los diseños
            </button>
          </div>
        )}

        {/* CTA inferior */}
        <div
          className="mt-16 text-center space-y-4 transition-all duration-700 delay-200"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)' }}
        >
          <p className="text-gray-400 text-sm">
            ¿No encontraste lo que buscas?{' '}
            <span className="text-white font-semibold">Hacemos diseños 100% personalizados.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/catalogo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Ver catálogo completo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m0 0l-6.75-6.75M20.25 12l-6.75 6.75" />
              </svg>
            </Link>
            <a
              href="https://wa.me/529999908114?text=Hola!+Quiero+un+dise%C3%B1o+personalizado+que+no+est%C3%A1+en+el+cat%C3%A1logo.+%C2%BFPodemos+hablar?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#0052CC] text-white font-bold text-sm hover:bg-[#0041a3] transition-all duration-300 shadow-lg shadow-[#0052CC]/25"
            >
              Pedir diseño personalizado
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gridFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        #catalogo ::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
