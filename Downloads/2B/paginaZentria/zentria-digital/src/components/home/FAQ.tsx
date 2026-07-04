import { useState, useEffect, useRef } from 'react';

interface Pregunta {
  q: string;
  a: string;
}

interface Categoria {
  id: string;
  label: string;
  emoji: string;
  color: string;
  preguntas: Pregunta[];
}

const CATEGORIAS: Categoria[] = [
  {
    id: 'invitaciones',
    label: 'Invitaciones',
    emoji: '✉️',
    color: '#f59e0b',
    preguntas: [
      {
        q: '¿Cómo funciona una invitación digital?',
        a: 'Es una página web personalizada a la que tus invitados acceden desde su celular — sin descargar nada. La compartes por WhatsApp, correo o redes sociales. Incluye el diseño, galería de fotos, música, mapa, cuenta regresiva y RSVP, todo en un solo link.',
      },
      {
        q: '¿Cuánto tiempo tarda en estar lista mi invitación?',
        a: 'El tiempo de entrega varía según el paquete: Pack Bronce 3-5 días hábiles, Pack Plata/Oro 5-7 días hábiles, Pack Platino/Divino 7-10 días hábiles. Los tiempos comienzan una vez que recibes y apruebas la propuesta de diseño inicial.',
      },
      {
        q: '¿Cuántas revisiones puedo pedir?',
        a: 'Depende del paquete elegido: Bronce incluye 1 revisión, Plata/Oro incluyen 2-3 revisiones, y Platino/Divino tienen revisiones ilimitadas. Cada revisión cubre cambios de texto, colores, fotos y secciones.',
      },
      {
        q: '¿La invitación funciona en iPhone y Android?',
        a: 'Sí, 100%. Nuestras invitaciones están optimizadas para todos los dispositivos y navegadores modernos (Chrome, Safari, Firefox). No requieren descarga de ninguna app.',
      },
      {
        q: '¿Por cuánto tiempo estará disponible el link?',
        a: 'El link permanece activo durante 12 meses desde la fecha de entrega. Si necesitas extender la disponibilidad más tiempo, podemos renovarlo por una cuota mínima de mantenimiento.',
      },
      {
        q: '¿Puedo ver una muestra antes de pagar?',
        a: 'Sí. Tenemos demos reales que puedes ver en el catálogo — son invitaciones completas de proyectos anteriores. Además, al contratar enviamos una propuesta de diseño antes del pago total para que apruebes la dirección visual.',
      },
    ],
  },
  {
    id: 'chatbots',
    label: 'Chatbots IA',
    emoji: '🤖',
    color: '#8b5cf6',
    preguntas: [
      {
        q: '¿Qué puede hacer el chatbot por mi negocio?',
        a: 'El bot atiende a tus clientes 24/7, responde preguntas frecuentes, muestra tu catálogo de productos, califica prospectos automáticamente, agenda citas y envía recordatorios — todo sin que tengas que intervenir.',
      },
      {
        q: '¿En qué plataformas funciona?',
        a: 'Plan Starter: WhatsApp. Plan Pro: WhatsApp + Instagram + Facebook Messenger. Plan Enterprise: todas las anteriores más integraciones con tu CRM, correo o sistema de tickets.',
      },
      {
        q: '¿Cuánto tiempo tarda en estar listo el chatbot?',
        a: 'En promedio 7-14 días hábiles, dependiendo de la complejidad de los flujos de tu negocio. Incluimos una semana de ajustes sin costo después del lanzamiento para afinar respuestas.',
      },
      {
        q: '¿Necesito pagar mensualidad después?',
        a: 'El precio del plan cubre el desarrollo y configuración inicial, más el soporte incluido según el plan (1-3 meses). Después del periodo de soporte, puedes contratar mantenimiento mensual o gestionar el bot de forma independiente.',
      },
      {
        q: '¿El chatbot suena como robot o como persona?',
        a: 'Lo entrenamos con el tono de voz de tu marca. Si eres informal y cercano, el bot habla así. Si eres formal y corporativo, también. Además, siempre puede transferir a un agente humano cuando el cliente lo necesite.',
      },
    ],
  },
  {
    id: 'dot',
    label: 'Tarjeta DOT',
    emoji: '📲',
    color: '#22d3ee',
    preguntas: [
      {
        q: '¿Qué es la tarjeta Zentria DOT?',
        a: 'Es una tarjeta de presentación inteligente con chip NFC integrado. Cuando alguien la acerca a su celular (iPhone o Android), se abre automáticamente tu perfil digital con tus redes sociales, WhatsApp, portafolio o lo que necesites compartir — sin apps, sin escanear QR.',
      },
      {
        q: '¿Funciona con todos los celulares?',
        a: 'Sí. Los iPhone desde el XS en adelante leen NFC de forma nativa. Los Android con NFC activado (la gran mayoría desde 2018) también la leen. Para los celulares sin NFC, incluimos un QR en el respaldo de la tarjeta como alternativa.',
      },
      {
        q: '¿Puedo cambiar los datos de la tarjeta después?',
        a: 'Sí. Tu perfil digital es editable en cualquier momento desde tu panel de control — la tarjeta física siempre redirige a la versión más actual. Puedes actualizar tu número, agregar redes o cambiar tu portafolio sin necesidad de una tarjeta nueva.',
      },
      {
        q: '¿Cuánto tiempo tarda en llegar?',
        a: 'La tarjeta física se entrega en 5-7 días hábiles dentro de Yucatán y 7-12 días para el resto de México. El perfil digital queda listo en 1-2 días hábiles.',
      },
    ],
  },
  {
    id: 'general',
    label: 'General',
    emoji: '💬',
    color: '#10b981',
    preguntas: [
      {
        q: '¿Cómo es el proceso de pago?',
        a: 'Trabajamos con 50% de anticipo para iniciar el proyecto y 50% al aprobar el diseño final antes de la entrega. Aceptamos transferencia bancaria (SPEI), tarjeta de crédito/débito y efectivo en Mérida.',
      },
      {
        q: '¿Trabajan con clientes fuera de Mérida?',
        a: 'Sí, trabajamos con clientes en toda la república mexicana y en el extranjero. Todo el proceso es 100% digital — presentamos propuestas, hacemos revisiones y entregamos proyectos por WhatsApp o videollamada.',
      },
      {
        q: '¿Qué pasa si no me gusta el resultado final?',
        a: 'Trabajamos contigo desde el inicio para entender exactamente lo que quieres. Si después de las revisiones incluidas en tu plan el resultado no te satisface, analizamos el caso y buscamos la mejor solución. Tu satisfacción es nuestra prioridad.',
      },
      {
        q: '¿Tienen portafolio para ver trabajos anteriores?',
        a: 'Sí, en la sección de catálogo de esta página puedes ver demos reales de invitaciones entregadas. También tenemos portafolio adicional disponible por WhatsApp con proyectos de chatbots y tarjetas DOT.',
      },
    ],
  },
];

function ItemFAQ({
  pregunta,
  color,
  abierto,
  onToggle,
}: {
  pregunta: Pregunta;
  color: string;
  abierto: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="rounded-2xl border transition-all duration-300 overflow-hidden"
      style={{
        borderColor: abierto ? `${color}30` : 'rgba(255,255,255,0.07)',
        backgroundColor: abierto ? `${color}08` : '#0d1f35',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span
          className="font-bold text-sm md:text-base leading-snug transition-colors duration-300"
          style={{ color: abierto ? '#ffffff' : '#d1d5db' }}
        >
          {pregunta.q}
        </span>
        <div
          className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            backgroundColor: abierto ? color : 'rgba(255,255,255,0.06)',
            transform: abierto ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <svg
            className="w-3.5 h-3.5"
            style={{ color: abierto ? '#fff' : '#6b7280' }}
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{
          maxHeight: abierto ? `${contentRef.current?.scrollHeight ?? 500}px` : '0px',
          opacity: abierto ? 1 : 0,
        }}
      >
        <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">{pregunta.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [catActiva, setCatActiva] = useState('invitaciones');
  const [abierto, setAbierto] = useState<number | null>(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cat = CATEGORIAS.find((c) => c.id === catActiva)!;

  const cambiarCategoria = (id: string) => {
    setCatActiva(id);
    setAbierto(0);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-28 px-6 bg-[#060f1e] overflow-hidden font-inter"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#0052CC] opacity-[0.04] blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Encabezado */}
        <div
          className="text-center mb-12 space-y-4 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-gray-400 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
            Preguntas frecuentes
          </div>
          <h2 className="text-4xl md:text-5xl font-libre font-bold text-white leading-tight">
            Todo lo que quieres{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-cyan-400">
              saber.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Resolvemos las dudas más comunes. Si no encuentras tu respuesta, escríbenos por WhatsApp.
          </p>
        </div>

        {/* Tabs de categorías */}
        <div
          className="flex overflow-x-auto gap-2 pb-2 mb-10 justify-start md:justify-center transition-all duration-700 delay-100"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            scrollbarWidth: 'none',
          }}
        >
          {CATEGORIAS.map((c) => {
            const isActive = c.id === catActiva;
            return (
              <button
                key={c.id}
                onClick={() => cambiarCategoria(c.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-300 flex-shrink-0 border"
                style={{
                  backgroundColor: isActive ? c.color          : 'rgba(255,255,255,0.04)',
                  borderColor:     isActive ? c.color          : 'rgba(255,255,255,0.08)',
                  color:           isActive ? '#ffffff'        : '#9ca3af',
                  transform:       isActive ? 'translateY(-2px)' : 'translateY(0)',
                  boxShadow:       isActive ? `0 4px 20px ${c.color}40` : 'none',
                }}
              >
                <span>{c.emoji}</span>
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Lista de preguntas */}
        <div
          key={catActiva}
          className="space-y-3 transition-all duration-700 delay-150"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            animation: 'faqFadeIn 0.35s ease both',
          }}
        >
          {cat.preguntas.map((p, i) => (
            <ItemFAQ
              key={i}
              pregunta={p}
              color={cat.color}
              abierto={abierto === i}
              onToggle={() => setAbierto(abierto === i ? null : i)}
            />
          ))}
        </div>

        {/* CTA inferior */}
        <div
          className="mt-14 text-center space-y-4 transition-all duration-700 delay-200"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)' }}
        >
          <p className="text-gray-500 text-sm">
            ¿Tienes una pregunta que no está aquí?
          </p>
          <a
            href="https://wa.me/529999908114?text=Hola!+Tengo+una+duda+sobre+los+servicios+de+Zentria+Digital."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            style={{ backgroundColor: '#25D366', boxShadow: '0 8px 30px #25D36640' }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Preguntarnos por WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        @keyframes faqFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        #faq ::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
