// src/data/catalogo.ts
// Fuente única de datos para todas las páginas del catálogo.
// ⚠️  Actualiza demoUrl con tus links reales de Vercel/Netlify.

export interface Producto {
  id: number;
  titulo: string;
  subtitulo: string;
  precio: string;
  precioNum: number;
  imagen: string;
  demoUrl: string;
  waMsg: string;
  badge?: string;
  badgeColor?: string;
  features: string[];
}

export interface PaquetePrecio {
  nombre: string;
  precio: string;
  descripcion: string;
  incluye: string[];
  destacado?: boolean;
  acento: string;
}

export interface Categoria {
  slug: string;
  nombre: string;
  emoji: string;
  tagline: string;
  descripcion: string;
  imagen: string;
  acento: string;
  acentoGradiente: string;
  beneficios: string[];
  paquetes: PaquetePrecio[];
  productos: Producto[];
  waMsg: string;
}

export const CATEGORIAS: Categoria[] = [

  // ─── BODAS ────────────────────────────────────────────────────────────────
  {
    slug: 'bodas',
    nombre: 'Bodas',
    emoji: '💍',
    tagline: 'Invitaciones de boda que sus invitados no olvidarán.',
    descripcion:
      'Creamos experiencias digitales únicas para el día más especial. Desde el diseño hasta el RSVP interactivo — todo personalizado para tu historia de amor.',
    imagen: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1400',
    acento: '#f59e0b',
    acentoGradiente: 'from-amber-900/40 via-[#0A192F] to-[#0A192F]',
    beneficios: [
      'RSVP digital con confirmaciones en tiempo real',
      'Cuenta regresiva personalizada con la fecha de su boda',
      'Galería de fotos del compromiso integrada',
      'Mapa interactivo de la iglesia y salón',
      'Música de fondo a su elección',
      'Historia de su historia de amor',
    ],
    paquetes: [
      {
        nombre: 'Bronce',
        precio: 'Desde $399 MXN',
        descripcion: 'Ideal para bodas íntimas y elegantes',
        incluye: ['Diseño personalizado', 'Galería de fotos', 'Mapa del evento', 'Contador de días', '1 revisión'],
        acento: '#cd7f32',
      },
      {
        nombre: 'Oro',
        precio: 'Desde $599 MXN',
        descripcion: 'La experiencia completa para su gran día',
        incluye: ['Todo lo del Bronce', 'RSVP interactivo', 'Música de fondo', 'Historia de amor', 'Mesa de regalos digital', '3 revisiones'],
        destacado: true,
        acento: '#f59e0b',
      },
      {
        nombre: 'Platino',
        precio: 'Desde $899 MXN',
        descripcion: 'Experiencia premium sin límites',
        incluye: ['Todo lo del Oro', 'Video de boda integrado', 'Animaciones exclusivas', 'Dominio personalizado', 'Pases QR por invitado', 'Revisiones ilimitadas', 'Soporte prioritario'],
        destacado: false,
        acento: '#e2e8f0',
      },
    ],
    productos: [
      {
        id: 101,
        titulo: 'Boda Real',
        subtitulo: 'Pack Oro — Clásico romántico',
        precio: 'Desde $599 MXN',
        precioNum: 599,
        imagen: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600',
        demoUrl: 'https://courageous-entremet-faed04.netlify.app/?id=SAL-001',
        waMsg: 'Hola! Me interesa la invitación de boda "Boda Real Pack Oro". ¿Podemos hablar?',
        badge: 'Popular',
        badgeColor: '#f59e0b',
        features: ['Video de boda incluido', 'RSVP interactivo', 'Mapa y cuenta regresiva'],
      },
      {
        id: 102,
        titulo: 'Boda Minimalista',
        subtitulo: 'Pack Bronce — Elegancia simple',
        precio: 'Desde $399 MXN',
        precioNum: 399,
        imagen: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600',
        demoUrl: 'https://boda-premium-oro.vercel.app',
        waMsg: 'Hola! Me interesa la invitación de Boda Minimalista. ¿Podemos hablar?',
        features: ['Galería de fotos', 'Contador de días', 'Link de regalo digital'],
      },
      {
        id: 103,
        titulo: 'Boda Rustic Chic',
        subtitulo: 'Pack Platino — Estilo boho premium',
        precio: 'Desde $899 MXN',
        precioNum: 899,
        imagen: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=600',
        demoUrl: '#',
        waMsg: 'Hola! Me interesa la invitación de Boda Rustic Chic. ¿Podemos hablar?',
        badge: 'Nuevo',
        badgeColor: '#22d3ee',
        features: ['Paleta rústica personalizada', 'Historia de amor', 'RSVP con conteo'],
      },
    ],
    waMsg: 'Hola! Vi el catálogo de Zentria Digital y me interesa una invitación digital para mi boda. ¿Podemos hablar?',
  },

  // ─── XV AÑOS ──────────────────────────────────────────────────────────────
  {
    slug: 'xv-anos',
    nombre: 'XV Años',
    emoji: '🌸',
    tagline: 'La invitación tan especial como ella.',
    descripcion:
      'Sus XV años son únicos. Su invitación también debe serlo. Diseños que reflejan la personalidad de la quinceañera con música, fotos y animaciones que dejan boquiabiertos.',
    imagen: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1400',
    acento: '#ec4899',
    acentoGradiente: 'from-pink-900/40 via-[#0A192F] to-[#0A192F]',
    beneficios: [
      'Diseño 100% según la personalidad de la quinceañera',
      'Música favorita de fondo (link de YouTube o Spotify)',
      'Galería de fotos de sesión de XV',
      'RSVP con contador de confirmaciones',
      'Itinerario del evento integrado',
      'Historia: "Sus 15 años en fotos"',
    ],
    paquetes: [
      {
        nombre: 'Bronce',
        precio: 'Desde $349 MXN',
        descripcion: 'La esencia de sus XV, digitalizada',
        incluye: ['Diseño personalizado', 'Galería de fotos', 'Música de fondo', 'Datos del evento', '1 revisión'],
        acento: '#cd7f32',
      },
      {
        nombre: 'Plata',
        precio: 'Desde $549 MXN',
        descripcion: 'Para una quinceañera que quiere más',
        incluye: ['Todo lo del Bronce', 'RSVP interactivo', 'Itinerario del evento', 'Mesa de regalos', '2 revisiones'],
        destacado: false,
        acento: '#94a3b8',
      },
      {
        nombre: 'Oro Divino',
        precio: 'Desde $799 MXN',
        descripcion: 'La experiencia XV más completa',
        incluye: ['Todo lo del Plata', 'Video intro animado', 'Historia en fotos "Sus 15 años"', 'Animaciones premium', 'Revisiones ilimitadas'],
        destacado: true,
        acento: '#f59e0b',
      },
    ],
    productos: [
      {
        id: 201,
        titulo: 'XV Bronce',
        subtitulo: 'Pack Bronce — Delicado y elegante',
        precio: 'Desde $349 MXN',
        precioNum: 349,
        imagen: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=600',
        demoUrl: 'https://xvsofiabroncezentriadigital.vercel.app',
        waMsg: 'Hola! Me interesa la invitación de XV Años Bronce. ¿Podemos hablar?',
        badge: 'Nuevo',
        badgeColor: '#22d3ee',
        features: ['Música de fondo', 'RSVP y confirmación', 'Paleta personalizable'],
      },
      {
        id: 202,
        titulo: 'XV Divino',
        subtitulo: 'Pack Oro Divino — Premium con video',
        precio: 'Desde $799 MXN',
        precioNum: 799,
        imagen: 'https://images.unsplash.com/photo-1533227268428-f9ed0900f40a?auto=format&fit=crop&q=80&w=600',
        demoUrl: 'https://idyllic-marigold-aad25a.netlify.app',
        waMsg: 'Hola! Me interesa la invitación de XV Años Divino. ¿Podemos hablar?',
        badge: 'Popular',
        badgeColor: '#f59e0b',
        features: ['Animaciones premium', 'Video intro personalizado', 'Historia y fotos'],
      },
      {
        id: 203,
        titulo: 'XV Plata',
        subtitulo: 'Pack Plata — Clásico moderno',
        precio: 'Desde $549 MXN',
        precioNum: 549,
        imagen: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=600',
        demoUrl: 'https://xv-camila-zentria.vercel.app/?id=fam-ku',
        waMsg: 'Hola! Me interesa la invitación de XV Años Plata. ¿Podemos hablar?',
        features: ['Diseño elegante', 'Confirmación de asistencia', 'Paleta a elegir'],
      },
    ],
    waMsg: 'Hola! Vi el catálogo de Zentria Digital y me interesa una invitación digital para XV Años. ¿Podemos hablar?',
  },

  // ─── BAUTIZOS ─────────────────────────────────────────────────────────────
  {
    slug: 'bautizos',
    nombre: 'Bautizos',
    emoji: '🕊️',
    tagline: 'Un momento sagrado merece una invitación especial.',
    descripcion:
      'Invitaciones digitales delicadas y llenas de ternura para celebrar la bienvenida de los más pequeños. Diseños que los abuelos también sabrán usar.',
    imagen: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&q=80&w=1400',
    acento: '#60a5fa',
    acentoGradiente: 'from-blue-900/40 via-[#0A192F] to-[#0A192F]',
    beneficios: [
      'Diseños angelicales y delicados',
      'Galería de fotos del bebé',
      'Mapa de la iglesia y/o salón',
      'Información del padrino/madrina',
      'RSVP sencillo para toda la familia',
      'Compatible con WhatsApp directo',
    ],
    paquetes: [
      {
        nombre: 'Ángel',
        precio: 'Desde $299 MXN',
        descripcion: 'Sencillo, tierno y completo',
        incluye: ['Diseño personalizado', 'Fotos del bebé', 'Datos del evento', 'Mapa', '1 revisión'],
        acento: '#60a5fa',
      },
      {
        nombre: 'Querubín',
        precio: 'Desde $449 MXN',
        descripcion: 'Para una celebración más completa',
        incluye: ['Todo lo del Ángel', 'RSVP interactivo', 'Galería ampliada', 'Info de padrinos', 'Música de fondo', '2 revisiones'],
        destacado: true,
        acento: '#818cf8',
      },
    ],
    productos: [
      {
        id: 301,
        titulo: 'Bautizo Celestial',
        subtitulo: 'Pack Ángel — Azul cielo',
        precio: 'Desde $299 MXN',
        precioNum: 299,
        imagen: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&q=80&w=600',
        demoUrl: '#',
        waMsg: 'Hola! Me interesa la invitación de Bautizo Celestial. ¿Podemos hablar?',
        badge: 'Nuevo',
        badgeColor: '#22d3ee',
        features: ['Diseño angelical', 'Galería del bebé', 'Mapa del evento'],
      },
      {
        id: 302,
        titulo: 'Bautizo Rosa',
        subtitulo: 'Pack Querubín — Para niña',
        precio: 'Desde $449 MXN',
        precioNum: 449,
        imagen: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600',
        demoUrl: '#',
        waMsg: 'Hola! Me interesa la invitación de Bautizo Rosa. ¿Podemos hablar?',
        features: ['Tonos rosas delicados', 'RSVP interactivo', 'Info de padrinos'],
      },
    ],
    waMsg: 'Hola! Vi el catálogo de Zentria Digital y me interesa una invitación digital para Bautizo. ¿Podemos hablar?',
  },

  // ─── CUMPLEAÑOS INFANTILES ────────────────────────────────────────────────
  {
    slug: 'cumpleanos',
    nombre: 'Cumpleaños Infantiles',
    emoji: '🎈',
    tagline: 'Invitaciones tan divertidas como la fiesta.',
    descripcion:
      'Personajes animados, colores vibrantes y música que los niños aman. Diseños que los papás comparten orgullosos y los invitados guardan.',
    imagen: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1400',
    acento: '#f97316',
    acentoGradiente: 'from-orange-900/40 via-[#0A192F] to-[#0A192F]',
    beneficios: [
      'Personajes y temas a elección (princesas, superhéroes, dinosaurios…)',
      'Animaciones divertidas que los niños aman',
      'RSVP fácil para los papás',
      'Música temática del personaje favorito',
      'Datos de dresscode y sugerencias de regalo',
      'Compatible con grupos de WhatsApp de papás',
    ],
    paquetes: [
      {
        nombre: 'Fiesta',
        precio: 'Desde $249 MXN',
        descripcion: 'Diversión garantizada al precio justo',
        incluye: ['Tema personalizado', 'Datos del evento', 'Música de fondo', '1 revisión'],
        acento: '#f97316',
      },
      {
        nombre: 'Súper Fiesta',
        precio: 'Desde $399 MXN',
        descripcion: 'La invitación que todos querrán compartir',
        incluye: ['Todo lo del Fiesta', 'Personaje animado', 'RSVP interactivo', 'Galería de fotos del cumpleañero', '2 revisiones'],
        destacado: true,
        acento: '#f59e0b',
      },
    ],
    productos: [
      {
        id: 401,
        titulo: 'Cumpleaños Dino',
        subtitulo: 'Pack Fiesta — Dinosaurios',
        precio: 'Desde $249 MXN',
        precioNum: 249,
        imagen: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=600',
        demoUrl: '#',
        waMsg: 'Hola! Me interesa una invitación de Cumpleaños Infantil. ¿Podemos hablar?',
        badge: 'Nuevo',
        badgeColor: '#22d3ee',
        features: ['Personaje animado', 'Música temática', 'RSVP para papás'],
      },
      {
        id: 402,
        titulo: 'Cumpleaños Princesa',
        subtitulo: 'Pack Súper Fiesta — Rosa mágico',
        precio: 'Desde $399 MXN',
        precioNum: 399,
        imagen: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80&w=600',
        demoUrl: '#',
        waMsg: 'Hola! Me interesa una invitación de Cumpleaños de Princesa. ¿Podemos hablar?',
        features: ['Animaciones mágicas', 'Galería del cumpleañero', 'RSVP interactivo'],
      },
    ],
    waMsg: 'Hola! Vi el catálogo de Zentria Digital y me interesa una invitación de Cumpleaños Infantil. ¿Podemos hablar?',
  },

  // ─── CORPORATIVO ──────────────────────────────────────────────────────────
  {
    slug: 'corporativo',
    nombre: 'Eventos Corporativos',
    emoji: '🏢',
    tagline: 'Profesionalismo desde la primera invitación.',
    descripcion:
      'Convenciones, lanzamientos, aniversarios empresariales y cenas de gala. Invitaciones digitales que reflejan la seriedad y el nivel de tu empresa.',
    imagen: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1400',
    acento: '#0052CC',
    acentoGradiente: 'from-blue-900/40 via-[#0A192F] to-[#0A192F]',
    beneficios: [
      'Branding corporativo integrado (colores, logo, tipografía)',
      'QR de acceso individual por invitado',
      'Lista de asistentes con confirmaciones en tiempo real',
      'Agenda del evento por bloques horarios',
      'Información de dress code y estacionamiento',
      'Versión en español e inglés disponible',
    ],
    paquetes: [
      {
        nombre: 'Business',
        precio: 'Desde $799 MXN',
        descripcion: 'Para eventos profesionales que impresionan',
        incluye: ['Diseño con branding', 'Agenda del evento', 'RSVP con lista', 'Mapa', '2 revisiones'],
        acento: '#0052CC',
      },
      {
        nombre: 'Executive',
        precio: 'Desde $1,199 MXN',
        descripcion: 'El estándar para grandes corporativos',
        incluye: ['Todo lo del Business', 'QR individual por invitado', 'Bilingüe (ES/EN)', 'Dashboard de asistencia', 'Soporte prioritario', 'Revisiones ilimitadas'],
        destacado: true,
        acento: '#22d3ee',
      },
    ],
    productos: [
      {
        id: 501,
        titulo: 'Evento Corporativo',
        subtitulo: 'Pack Business — Serio y profesional',
        precio: 'Desde $799 MXN',
        precioNum: 799,
        imagen: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600',
        demoUrl: '#',
        waMsg: 'Hola! Me interesa una invitación para Evento Corporativo. ¿Podemos hablar?',
        features: ['Branding corporativo', 'QR de acceso personalizado', 'Lista de asistentes'],
      },
      {
        id: 502,
        titulo: 'Lanzamiento de Producto',
        subtitulo: 'Pack Executive — Alto impacto',
        precio: 'Desde $1,199 MXN',
        precioNum: 1199,
        imagen: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=600',
        demoUrl: '#',
        waMsg: 'Hola! Me interesa una invitación para Lanzamiento de Producto. ¿Podemos hablar?',
        badge: 'Premium',
        badgeColor: '#8b5cf6',
        features: ['Diseño de alto impacto', 'Video teaser integrado', 'Dashboard de asistencia'],
      },
    ],
    waMsg: 'Hola! Vi el catálogo de Zentria Digital y me interesa una invitación para un Evento Corporativo. ¿Podemos hablar?',
  },

  // ─── CHATBOTS IA ──────────────────────────────────────────────────────────
  {
    slug: 'chatbots-ia',
    nombre: 'Chatbots con IA',
    emoji: '🤖',
    tagline: 'Tu negocio vendiendo mientras tú descansas.',
    descripcion:
      'Implementamos inteligencia artificial en WhatsApp, Instagram y Facebook para que tu negocio atienda, califique y cierre ventas las 24 horas, los 7 días.',
    imagen: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=1400',
    acento: '#8b5cf6',
    acentoGradiente: 'from-violet-900/40 via-[#0A192F] to-[#0A192F]',
    beneficios: [
      'Atención automática 24/7 sin intervención humana',
      'Calificación inteligente de prospectos por IA',
      'Agendamiento automático de citas con recordatorios',
      'Catálogo de productos integrado en el chat',
      'Reportes mensuales de conversaciones y conversiones',
      'Integración con WhatsApp, Instagram y Facebook',
    ],
    paquetes: [
      {
        nombre: 'Starter',
        precio: 'Desde $2,500 MXN',
        descripcion: 'Tu primer chatbot IA en WhatsApp',
        incluye: ['Chatbot WhatsApp', 'Respuestas automáticas', 'Catálogo básico', 'Agendamiento', '1 mes de soporte'],
        acento: '#8b5cf6',
      },
      {
        nombre: 'Pro',
        precio: 'Desde $4,500 MXN',
        descripcion: 'Automatización completa en 3 redes',
        incluye: ['Todo lo del Starter', 'Instagram + Facebook', 'Calificación IA de prospectos', 'Dashboard de métricas', '3 meses de soporte'],
        destacado: true,
        acento: '#22d3ee',
      },
      {
        nombre: 'Enterprise',
        precio: 'Cotización',
        descripcion: 'Para negocios que escalan en serio',
        incluye: ['Todo lo del Pro', 'CRM integrado', 'Automatizaciones avanzadas', 'Capacitación a tu equipo', 'Soporte ilimitado'],
        acento: '#f59e0b',
      },
    ],
    productos: [
      {
        id: 601,
        titulo: 'Chatbot WhatsApp Básico',
        subtitulo: 'Plan Starter — Automatización esencial',
        precio: 'Desde $2,500 MXN',
        precioNum: 2500,
        imagen: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=600',
        demoUrl: '#',
        waMsg: 'Hola! Me interesa el Chatbot IA para WhatsApp (Plan Starter). ¿Podemos hablar?',
        badge: 'IA',
        badgeColor: '#8b5cf6',
        features: ['Respuestas 24/7', 'Catálogo integrado', 'Agendamiento automático'],
      },
      {
        id: 602,
        titulo: 'Automatización Pro',
        subtitulo: 'Plan Pro — WhatsApp + Instagram + FB',
        precio: 'Desde $4,500 MXN',
        precioNum: 4500,
        imagen: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=600',
        demoUrl: '#',
        waMsg: 'Hola! Me interesa el Plan Pro de Automatización IA (3 redes sociales). ¿Podemos hablar?',
        badge: 'Popular',
        badgeColor: '#f59e0b',
        features: ['3 redes sociales', 'Calificación IA de leads', 'Reportes mensuales'],
      },
    ],
    waMsg: 'Hola! Vi el catálogo de Zentria Digital y me interesa un Chatbot con IA para mi negocio. ¿Podemos hablar?',
  },
];

export function getCategoriaBySlug(slug: string): Categoria | undefined {
  return CATEGORIAS.find((c) => c.slug === slug);
}