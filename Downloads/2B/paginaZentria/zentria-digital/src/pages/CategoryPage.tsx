// src/pages/CategoryPage.tsx
// Template reutilizable para cada categoría del catálogo.
// Se alimenta de los datos en src/data/catalogo.ts según el slug de la URL.

import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getCategoriaBySlug, type Producto, type PaquetePrecio } from '../data/catalogo';

// ─── Sub: card de producto ────────────────────────────────────────────────────
function ProductCard({ prod, acento }: { prod: Producto; acento: string }) {
  const [hov, setHov] = useState(false);
  const hasDemoUrl = prod.demoUrl && prod.demoUrl !== '#';

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="flex flex-col rounded-3xl overflow-hidden border bg-[#0d1f35] transition-all duration-500"
      style={{
        borderColor: hov ? `${acento}30` : 'rgba(255,255,255,0.07)',
        transform:   hov ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow:   hov ? `0 20px 50px -15px rgba(0,0,0,0.6), 0 0 0 1px ${acento}20` : '0 4px 20px rgba(0,0,0,0.3)',
      }}
    >
      {/* Imagen */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <img
          src={prod.imagen}
          alt={prod.titulo}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hov ? 'scale(1.08)' : 'scale(1)' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f35] via-transparent to-transparent" />

        {prod.badge && (
          <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white"
            style={{ backgroundColor: prod.badgeColor }}>
            {prod.badge}
          </span>
        )}

        {hasDemoUrl && hov && (
          <a
            href={prod.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold shadow-xl">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
              Ver demo
            </span>
          </a>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-lg font-black text-white">{prod.titulo}</h3>
        <p className="text-xs text-gray-500 mt-0.5 mb-4">{prod.subtitulo}</p>

        <ul className="space-y-1.5 mb-5 flex-grow">
          {prod.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
              <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: acento }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {f}
            </li>
          ))}
        </ul>

        <p className="text-xl font-black text-white mb-4">{prod.precio}</p>

        <div className="grid grid-cols-2 gap-3">
          <a
            href={hasDemoUrl ? prod.demoUrl : `https://wa.me/529999908114?text=${encodeURIComponent(prod.waMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 rounded-2xl text-xs font-bold border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            {hasDemoUrl ? 'Ver demo' : 'Ver info'}
          </a>
          <a
            href={`https://wa.me/529999908114?text=${encodeURIComponent(prod.waMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 rounded-2xl text-xs font-bold text-white transition-all duration-300"
            style={{ backgroundColor: acento }}
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

// ─── Sub: card de paquete de precios ─────────────────────────────────────────
function PaqueteCard({ paquete }: { paquete: PaquetePrecio }) {
  return (
    <div
      className="relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: paquete.destacado ? `${paquete.acento}12` : '#0d1f35',
        borderColor: paquete.destacado ? `${paquete.acento}50` : 'rgba(255,255,255,0.08)',
        boxShadow: paquete.destacado ? `0 0 40px ${paquete.acento}20` : 'none',
      }}
    >
      {paquete.destacado && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white"
          style={{ backgroundColor: paquete.acento }}>
          Más popular
        </div>
      )}

      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: paquete.acento }}>
        {paquete.nombre}
      </p>
      <p className="text-3xl font-black text-white mb-1">{paquete.precio}</p>
      <p className="text-gray-500 text-sm mb-6">{paquete.descripcion}</p>

      <ul className="space-y-2.5 flex-grow mb-8">
        {paquete.incluye.map((item, i) => (
          <li key={i} className="flex items-center gap-2.5 text-sm text-gray-300">
            <svg className="w-4 h-4 flex-shrink-0" style={{ color: paquete.acento }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            {item}
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/529999908114?text=${encodeURIComponent(`Hola! Me interesa el paquete "${paquete.nombre}" (${paquete.precio}). ¿Podemos hablar?`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-px"
        style={{ backgroundColor: paquete.destacado ? paquete.acento : 'rgba(255,255,255,0.08)', border: paquete.destacado ? 'none' : '1px solid rgba(255,255,255,0.1)' }}
      >
        Elegir este plan
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m0 0l-6.75-6.75M20.25 12l-6.75 6.75" />
        </svg>
      </a>
    </div>
  );
}

// ─── Página principal ─────────────────────────────────────────────────────────
export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const cat = getCategoriaBySlug(slug ?? '');

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!cat) return <Navigate to="/catalogo" replace />;

  return (
    <div className="min-h-screen bg-[#060f1e] font-inter">

      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[480px] flex items-end overflow-hidden">
        {/* Imagen de fondo */}
        <img
          src={cat.imagen}
          alt={cat.nombre}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        {/* Overlay gradiente fuerte */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060f1e] via-[#060f1e]/70 to-transparent" />
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at left, ${cat.acento}15, transparent 60%)` }} />

        {/* Contenido */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/catalogo" className="hover:text-white transition-colors">Catálogo</Link>
            <span>/</span>
            <span className="text-gray-300">{cat.nombre}</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{cat.emoji}</span>
            <div
              className="text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest"
              style={{ color: cat.acento, backgroundColor: `${cat.acento}15`, border: `1px solid ${cat.acento}30` }}
            >
              {cat.nombre}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-libre font-bold text-white leading-tight max-w-3xl">
            {cat.tagline}
          </h1>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl leading-relaxed">
            {cat.descripcion}
          </p>

          {/* CTA rápido */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={`https://wa.me/529999908114?text=${encodeURIComponent(cat.waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
              style={{ backgroundColor: cat.acento, boxShadow: `0 8px 30px ${cat.acento}40` }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Cotizar ahora
            </a>
            <a href="#disenos" className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-bold text-white bg-white/8 border border-white/10 hover:bg-white/12 transition-all duration-300">
              Ver diseños
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Beneficios ── */}
      <section className="py-20 px-6 bg-[#0A192F]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-libre font-bold text-white mb-10 text-center">
            ¿Qué incluye tu invitación?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cat.beneficios.map((b, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-2xl bg-[#0d1f35] border border-white/6">
                <div className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: `${cat.acento}20` }}>
                  <svg className="w-4 h-4" style={{ color: cat.acento }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Galería / Diseños ── */}
      <section id="disenos" className="py-20 px-6 bg-[#060f1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-libre font-bold text-white mb-3">
              Nuestros diseños de {cat.nombre}
            </h2>
            <p className="text-gray-400">Haz clic en "Ver demo" para ver cada invitación en acción.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.productos.map((prod) => (
              <ProductCard key={prod.id} prod={prod} acento={cat.acento} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Paquetes de precios ── */}
      <section className="py-20 px-6 bg-[#0A192F]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-libre font-bold text-white mb-3">
              Paquetes y precios
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Elige el paquete que mejor se adapte a tu presupuesto. Entrega en 5 a 10 días hábiles según el paquete.
            </p>
          </div>
          <div className={`grid gap-6 ${cat.paquetes.length === 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
            {cat.paquetes.map((pq, i) => (
              <PaqueteCard key={i} paquete={pq} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-24 px-6 bg-[#060f1e]">
        <div
          className="max-w-4xl mx-auto rounded-3xl p-[1px]"
          style={{ background: `linear-gradient(135deg, ${cat.acento}60, transparent, #0052CC60)` }}
        >
          <div className="bg-[#060f1e] rounded-[23px] px-8 py-12 md:py-16 text-center space-y-6">
            <p className="text-sm font-bold uppercase tracking-widest" style={{ color: cat.acento }}>
              {cat.emoji} {cat.nombre} · Zentria Digital
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-libre font-bold text-white">
              ¿Lista/o para empezar?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Escríbenos hoy. En menos de 1 hora tienes una propuesta sin costo y sin compromisos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={`https://wa.me/529999908114?text=${encodeURIComponent(cat.waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-white transition-all duration-300 hover:-translate-y-0.5 shadow-2xl text-lg"
                style={{ backgroundColor: '#25D366', boxShadow: '0 10px 40px #25D36640' }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pedir cotización gratis
              </a>
              <Link
                to="/catalogo"
                className="inline-flex items-center gap-2 px-8 py-5 rounded-2xl font-bold text-gray-400 hover:text-white transition-colors duration-300 text-base"
              >
                ← Ver otras categorías
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
