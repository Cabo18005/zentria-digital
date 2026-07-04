// ComoFunciona.tsx — Zentria Digital
// 4 pasos: del primer contacto a compartir la invitación.

import { useEffect, useRef, useState } from 'react';

const PASOS = [
  {
    num: '01',
    icono: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.275 2.906 2.85 2.982l.351.019c.688.038 1.32.39 1.706.959L8.25 19.5l1.168-1.66a2.25 2.25 0 011.706-.959l.351-.019c1.575-.076 2.85-1.381 2.85-2.981V6.75a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6.75v6.01z" />
      </svg>
    ),
    titulo: 'Cuéntanos tu idea',
    desc: 'Escríbenos por WhatsApp con los detalles de tu evento: fecha, estilo, colores y lo que te inspire. Sin formularios, sin esperas.',
    detalle: 'Respondemos en menos de 1 hora',
    color: '#3b9eff',
    bgColor: '#3b9eff15',
  },
  {
    num: '02',
    icono: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    titulo: 'Diseñamos tu invitación',
    desc: 'Nuestro equipo crea tu invitación personalizada: galería, música, RSVP, mapa y cuenta regresiva — todo integrado y a tu estilo.',
    detalle: 'Entrega en 5 a 10 días hábiles',
    color: '#8b5cf6',
    bgColor: '#8b5cf615',
  },
  {
    num: '03',
    icono: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titulo: 'Tú revisas y apruebas',
    desc: 'Ves el resultado en tu celular antes de enviarlo. Si quieres ajustar colores, textos o fotos, lo hacemos hasta que quede exactamente como lo imaginaste.',
    detalle: 'Revisiones incluidas en tu paquete',
    color: '#f59e0b',
    bgColor: '#f59e0b15',
  },
  {
    num: '04',
    icono: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
    titulo: 'Comparte y sorprende',
    desc: 'Recibes tu link único. Lo envías por WhatsApp, Instagram o donde quieras. Tus invitados lo abren en su celular y viven una experiencia que no olvidarán.',
    detalle: 'Link activo para siempre',
    color: '#22d3ee',
    bgColor: '#22d3ee15',
  },
];

export default function ComoFunciona() {
  const [visible, setVisible] = useState(false);
  const [pasoActivo, setPasoActivo] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="como-funciona"
      className="relative py-28 px-6 bg-[#0A192F] overflow-hidden font-inter"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#3b9eff] opacity-[0.04] blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600 opacity-[0.04] blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Encabezado */}
        <div
          className="text-center mb-20 space-y-4 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-gray-400 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
            Proceso
          </div>
          <h2 className="text-4xl md:text-5xl font-libre font-bold text-white leading-tight">
            De tu idea a manos de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b9eff] to-cyan-400">
              tus invitados.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            En 4 pasos simples. Sin tecnicismos, sin demoras, sin complicaciones.
          </p>
        </div>

        {/* Pasos — desktop: línea horizontal / móvil: vertical */}
        <div className="relative">

          {/* Línea conectora desktop */}
          <div
            className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px transition-all duration-1000 delay-300"
            style={{
              background: 'linear-gradient(90deg, #3b9eff40, #8b5cf640, #f59e0b40, #22d3ee40)',
              opacity: visible ? 1 : 0,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {PASOS.map((paso, i) => {
              const isActivo = pasoActivo === i;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setPasoActivo(i)}
                  onMouseLeave={() => setPasoActivo(null)}
                  className="relative flex flex-col items-center lg:items-center text-left lg:text-center group cursor-default transition-all duration-700"
                  style={{
                    opacity:   visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(32px)',
                    transitionDelay: `${i * 120}ms`,
                  }}
                >
                  {/* Línea conectora móvil */}
                  {i < PASOS.length - 1 && (
                    <div
                      className="lg:hidden absolute left-[26px] top-[52px] w-px h-[calc(100%+2rem)]"
                      style={{ background: `linear-gradient(180deg, ${paso.color}60, ${PASOS[i + 1].color}30)` }}
                    />
                  )}

                  {/* Número + icono */}
                  <div className="relative flex-shrink-0 mb-6">
                    {/* Halo exterior */}
                    <div
                      className="absolute inset-0 rounded-2xl transition-all duration-500"
                      style={{
                        backgroundColor: paso.bgColor,
                        transform: isActivo ? 'scale(1.15)' : 'scale(1)',
                        opacity: isActivo ? 1 : 0,
                      }}
                    />
                    {/* Círculo principal */}
                    <div
                      className="relative w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500"
                      style={{
                        backgroundColor: isActivo ? paso.bgColor : 'rgba(255,255,255,0.04)',
                        borderColor:     isActivo ? `${paso.color}50` : 'rgba(255,255,255,0.1)',
                        color:           paso.color,
                        boxShadow:       isActivo ? `0 0 30px ${paso.color}30` : 'none',
                      }}
                    >
                      {paso.icono}
                    </div>
                    {/* Número flotante */}
                    <span
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-[10px] font-black flex items-center justify-center text-white transition-all duration-500"
                      style={{ backgroundColor: paso.color, boxShadow: `0 2px 8px ${paso.color}60` }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  {/* Texto — móvil en fila, desktop centrado */}
                  <div className="flex-1 lg:w-full pl-0 lg:pl-0">
                    <h3
                      className="text-base font-black text-white mb-2 transition-colors duration-300"
                      style={{ color: isActivo ? paso.color : '#ffffff' }}
                    >
                      {paso.titulo}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">
                      {paso.desc}
                    </p>
                    {/* Chip de detalle */}
                    <span
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full transition-all duration-300"
                      style={{
                        color:           paso.color,
                        backgroundColor: `${paso.color}12`,
                        border:          `1px solid ${paso.color}25`,
                      }}
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {paso.detalle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA inferior */}
        <div
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)' }}
        >
          <a
            href="https://wa.me/529999908114?text=Hola!+Quiero+empezar+con+mi+invitación+digital.+¿Por+dónde+comenzamos?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#0052CC] text-white font-bold text-sm hover:bg-[#0041a3] transition-all duration-300 shadow-lg shadow-[#0052CC]/30 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Empezar ahora — es gratis
          </a>
          <a
            href="#catalogo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Ver ejemplos primero
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
