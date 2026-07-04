// src/pages/CatalogoPage.tsx
// Página overview del catálogo: 6 cards grandes que llevan a cada categoría.

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIAS } from '../data/catalogo';

// Stats de confianza
const STATS = [
  { num: '50+',  label: 'Proyectos entregados' },
  { num: '100%', label: 'Clientes satisfechos'  },
  { num: '5★',   label: 'Calificación promedio' },
  { num: '5-10d', label: 'Días de entrega'       },
];

export default function CatalogoPage() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-screen bg-[#060f1e] font-inter">

      {/* ── Hero de la página ── */}
      <section className="relative pt-28 pb-20 px-6 overflow-hidden">
        {/* Fondo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0052CC] opacity-[0.08] blur-[140px] rounded-full" />
        </div>

        <div
          className="relative z-10 max-w-4xl mx-auto text-center space-y-6 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-gray-400 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0052CC] animate-pulse" />
            Catálogo de servicios
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-libre font-bold text-white leading-tight">
            ¿Qué estás{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b9eff] to-cyan-400">
              celebrando?
            </span>
          </h1>

          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Elige la categoría que más se acerca a tu proyecto y descubre los diseños, paquetes y precios.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section
        className="px-6 pb-16 transition-all duration-700 delay-150"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <div key={i} className="bg-[#0d1f35] border border-white/8 rounded-2xl p-5 text-center">
              <p className="text-2xl font-black text-[#3b9eff]">{s.num}</p>
              <p className="text-gray-500 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Grid de categorías ── */}
      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIAS.map((cat, i) => (
            <Link
              key={cat.slug}
              to={`/catalogo/${cat.slug}`}
              className="group relative rounded-3xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-500 block"
              style={{
                opacity:   visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s, box-shadow 0.4s ease, border-color 0.4s ease`,
              }}
            >
              {/* Imagen de fondo */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cat.imagen}
                  alt={cat.nombre}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060f1e] via-[#060f1e]/60 to-transparent" />

                {/* Emoji flotante */}
                <div className="absolute top-5 left-5 w-12 h-12 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-2xl shadow-lg">
                  {cat.emoji}
                </div>

                {/* Contador de diseños */}
                <div className="absolute top-5 right-5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                  {cat.productos.length} diseños
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 bg-[#0d1f35]">
                <h2 className="text-xl font-black text-white mb-1 group-hover:text-[#3b9eff] transition-colors duration-300">
                  {cat.nombre}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-2">
                  {cat.tagline}
                </p>

                {/* Precio desde */}
                <p className="text-xs text-gray-500 mb-4">
                  Desde{' '}
                  <span className="font-black text-white text-base">
                    ${Math.min(...cat.productos.map((p) => p.precioNum)).toLocaleString('es-MX')} MXN
                  </span>
                </p>

                {/* CTA */}
                <div
                  className="flex items-center justify-between pt-4 border-t border-white/5"
                >
                  <span className="text-sm font-bold text-[#3b9eff] group-hover:text-white transition-colors duration-300">
                    Ver diseños y precios
                  </span>
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                    style={{ backgroundColor: `${cat.acento}20`, border: `1px solid ${cat.acento}30` }}
                  >
                    <svg className="w-4 h-4" style={{ color: cat.acento }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Línea de acento inferior */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, transparent, ${cat.acento}, transparent)` }}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA bottom ── */}
      <section className="px-6 pb-28">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-gray-400 text-lg">
            ¿No encuentras lo que buscas?{' '}
            <span className="text-white font-semibold">Hacemos diseños personalizados.</span>
          </p>
          <a
            href="https://wa.me/529999908114?text=Hola!+Quiero+un+diseño+personalizado.+¿Podemos+hablar?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#0052CC] text-white font-bold hover:bg-[#0041a3] transition-all duration-300 shadow-lg shadow-[#0052CC]/30 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Solicitar diseño personalizado
          </a>
        </div>
      </section>
    </div>
  );
}
