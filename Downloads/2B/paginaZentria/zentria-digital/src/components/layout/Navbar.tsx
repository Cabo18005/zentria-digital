import { useState, useEffect } from 'react';
 
const NAV_LINKS = [
  { name: 'Inicio',     href: '#inicio'    },
  { name: 'Catálogo',   href: '#catalogo'  },
  { name: 'Servicios',  href: '#beneficios'},
  { name: 'Contacto',   href: '#contacto'  },
];
 
export default function Navbar() {
  const [isOpen,    setIsOpen]    = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
 
  // Detecta scroll para cambiar la apariencia de la barra
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  const closeMenu = () => setIsOpen(false);
 
  return (
    <nav
      className={`sticky top-0 z-50 font-inter transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A192F]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5'
          : 'bg-[#0A192F]'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
 
        {/* ── Logo ── */}
        <a href="#inicio" className="flex items-center gap-3 group cursor-pointer">
          {/* Icono "Z" con gradiente */}
          <div className="relative w-10 h-10 flex items-center justify-center rounded-xl overflow-hidden shadow-md shadow-[#0052CC]/40 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC] to-[#003a99]" />
            <span className="relative text-white font-black text-xl tracking-tight">Z</span>
          </div>
 
          <div className="flex flex-col leading-none">
            <span className="text-[17px] font-bold text-white tracking-tight group-hover:text-[#3b9eff] transition-colors duration-300">
              ZENTRIA DIGITAL
            </span>
            <span className="text-[9px] text-[#3b9eff] tracking-[0.22em] uppercase font-semibold mt-0.5">
              Diseño · IA · Automatización
            </span>
          </div>
        </a>
 
        {/* ── Menú Desktop ── */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="relative px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-[#0052CC] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </a>
            </li>
          ))}
        </ul>
 
        {/* ── CTA Desktop ── */}
        <a
          href="#catalogo"
          className="hidden md:inline-flex items-center gap-2 bg-[#0052CC] hover:bg-[#0041a3] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-md shadow-[#0052CC]/30 hover:shadow-[#0052CC]/50 hover:-translate-y-px"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m0 0l-6.75-6.75M20.25 12l-6.75 6.75" />
          </svg>
          Ver Catálogo
        </a>
 
        {/* ── Botón hamburguesa (Móvil) ── */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          <div className="w-6 flex flex-col gap-[5px] overflow-hidden">
            <span
              className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                isOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                isOpen ? 'opacity-0 -translate-x-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                isOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </div>
        </button>
      </div>
 
      {/* ── Menú Móvil ── */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0A192F]/98 backdrop-blur-md border-t border-white/5 shadow-xl px-6 py-6 space-y-1">
          {NAV_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium text-sm border border-transparent hover:border-white/10"
            >
              {item.name}
              <svg className="w-4 h-4 text-[#0052CC]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          ))}
 
          {/* Separador */}
          <div className="h-px bg-white/5 my-2" />
 
          {/* CTA Móvil */}
          <a
            href="#catalogo"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 w-full bg-[#0052CC] hover:bg-[#0041a3] text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-[#0052CC]/30 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m0 0l-6.75-6.75M20.25 12l-6.75 6.75" />
            </svg>
            Ver Catálogo
          </a>
 
          {/* Subtítulo de marca en el menú móvil */}
          <p className="text-center text-[10px] text-gray-600 tracking-[0.2em] uppercase pt-2">
            Diseño · IA · Automatización
          </p>
        </div>
      </div>
    </nav>
  );
}