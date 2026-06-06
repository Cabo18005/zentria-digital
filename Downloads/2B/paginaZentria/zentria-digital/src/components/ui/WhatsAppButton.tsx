// WhatsAppButton.tsx
// Botón flotante global con selector de intención de 3 opciones.
// Posicionamiento manejado por el contenedor en App.tsx (sin fixed propio).

import { useState, useEffect, useRef } from 'react';

const TELEFONO = "529999908114";

function waLink(msg: string) {
  return `https://wa.me/${TELEFONO}?text=${encodeURIComponent(msg)}`;
}

const OPCIONES = [
  {
    emoji: '✉️',
    label: 'Invitación digital',
    sub: 'Bodas, XV, Bautizos…',
    mensaje:
      'Hola, vi tu página de Zentria Digital y estoy interesado en una invitación digital. ¿Podemos hablar?',
  },
  {
    emoji: '🤖',
    label: 'Chatbot con IA',
    sub: 'WhatsApp, Instagram, FB',
    mensaje:
      'Hola, vi tu página de Zentria Digital y estoy interesado en un chatbot con IA para mi negocio. ¿Podemos hablar?',
  },
  {
    emoji: '✨',
    label: 'Paquete completo',
    sub: 'Diseño + Automatización',
    mensaje:
      'Hola, vi tu página de Zentria Digital y estoy interesado en el paquete completo de diseño y automatización. ¿Podemos hablar?',
  },
];

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Cierra el menú al hacer clic fuera
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  return (
    <div ref={ref} className="relative flex flex-col items-end gap-2">

      {/* ── Panel de opciones (aparece arriba del botón) ── */}
      <div
        className="w-72 bg-[#0d1f35] border border-white/10 rounded-2xl shadow-2xl shadow-black/70 overflow-hidden backdrop-blur-md transition-all duration-300 origin-bottom-right"
        style={{
          opacity:        open ? 1 : 0,
          transform:      open ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(12px)',
          pointerEvents:  open ? 'auto' : 'none',
        }}
      >
        {/* Header del panel */}
        <div className="px-4 pt-4 pb-3 border-b border-white/5">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            ¿En qué te podemos ayudar?
          </p>
        </div>

        {/* Opciones */}
        {OPCIONES.map((op) => (
          <a
            key={op.label}
            href={waLink(op.mensaje)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3.5 hover:bg-white/5 transition-colors duration-150 border-b border-white/[0.04] last:border-b-0 group"
          >
            <span className="text-2xl w-9 text-center flex-shrink-0">{op.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white group-hover:text-[#3b9eff] transition-colors leading-tight">
                {op.label}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">{op.sub}</p>
            </div>
            {/* Ícono WhatsApp pequeño */}
            <svg className="w-5 h-5 text-[#25D366] flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        ))}

        {/* Footer del panel */}
        <div className="px-4 py-3 bg-[#0A192F]/60 border-t border-white/5">
          <p className="text-[10px] text-gray-600 text-center">
            Respuesta en menos de 1 hora 🕐
          </p>
        </div>
      </div>

      {/* ── Botón principal verde ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Contactar por WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg shadow-[#25D366]/40 hover:shadow-[#25D366]/60 hover:-translate-y-0.5 transition-all duration-300"
        style={{
          transform: open ? 'rotate(45deg) scale(0.92)' : 'rotate(0deg) scale(1)',
          transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background-color 0.2s, box-shadow 0.2s',
        }}
      >
        {/* Ping de notificación */}
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#25D366] flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping absolute" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] relative" />
          </span>
        )}

        {/* Ícono: WhatsApp cuando cerrado, X cuando abierto */}
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
      </button>
    </div>
  );
}