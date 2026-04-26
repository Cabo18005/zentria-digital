// src/config/event.ts

export const eventConfig = {
  // ==========================================
  // 1. DATOS PRINCIPALES DEL EVENTO
  // ==========================================
  nombre: "Fátima Analy",
  apellidos: "Ku Pech",
  tipoEvento: "XV Años",
  hashtag: "#XVFatimaAnaly",
  
  // Fecha principal del evento (Sábado, 6 de Junio de 2026)
  fechaEvento: "2026-06-06T20:00:00", 
  
  // Hora exacta de la misa (06 de Junio a las 6:00 PM)
  fechaMisa: "2026-06-06T18:00:00", 

  // ==========================================
  // 2. CONFIGURACIÓN DE SEGURIDAD Y ADMIN
  // ==========================================
  adminConfig: {
    idAdministrador: "Fam-Cabo", 
    passwordBorrado: "Zentria2026", 
    habilitarPruebas: false // Si lo pones en true, se desbloquea todo para ti
  },

  // ==========================================
  // 3. CONFIRMACIÓN Y BASE DE DATOS
  // ==========================================
  confirmacion: {
    googleScriptUrl: "https://sheetdb.io/api/v1/amt6apzk96d96",
    whatsapp: "529999107517", 
    // ACTUALIZADO: 23 de Mayo (2 semanas antes del 06 de Junio)
    fechaLimite: "2026-05-23T23:59:59", 
  },

  // ==========================================
  // 4. UBICACIONES
  // ==========================================
  ceremonia: {
    nombre: 'Parroquia La Ascensión del Señor',
    direccion: 'Av. Alfredo Barrera Vazquez 524, Residencial Pensiones IV, Mérida, Yuc.',
    hora: '18:00',
    latitud: 20.9979038, 
    longitud: -89.6553719,
    mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.297746197178!2d-89.65794682474441!3d20.99790878064379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5674787fae6c03%3A0xec922b46c1e128a2!2sParroquia%20La%20Ascensi%C3%B3n%20del%20Se%C3%B1or!5e0!3m2!1ses!2smx!4v1711900000000!5m2!1ses!2smx',
    googleMapsUrl: 'https://maps.app.goo.gl/wJk4zX9eR5bQ2aLz9',
  },
  recepcion: {
    nombre: 'Salón de Eventos LAS REYNAS',
    direccion: 'Calle 25 x 30 y 32, Polígono Chuburná Dzityá, Mérida, Yuc.',
    hora: '20:00',
    latitud: 21.0545661,
    longitud: -89.6432914,
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3642358356163!2d-89.64586632474347!3d21.054571080601615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5675007f660bef%3A0x4ac4bcc441bf1695!2sSal%C3%B3n%20Las%20Reynas!5e0!3m2!1ses!2smx!4v1711900000000!5m2!1ses!2smx",
    googleMapsUrl: 'https://maps.app.goo.gl/k9zT4xKj8mN6pL5H8',
  },

  // ==========================================
  // 5. NOMBRES IMPORTANTES
  // ==========================================
  padres: [
    { nombre: "CP. Roger Gabriel Ku Pech", rol: "Papá" },
    { nombre: "Fatima Del Rosario Pech Bacelis", rol: "Mamá" }
  ],
  padrinos: [
    { nombre: "Ana Karelia Pech Bacelis", rol: "Madrina" },
    { nombre: "Maribel Alejandra Pech Bacelis", rol: "Madrina" },
    { nombre: "Ing. Jesus Gabriel Ku Pech", rol:"Padrino"}
  ],
  
  // ==========================================
  // 6. MÚSICA DE FONDO
  // ==========================================
  musica: {
    url: "/music.mp3", 
    volumen: 0.8,
    autoplay: true
  },

  // ==========================================
  // 7. TEXTOS Y MENSAJES
  // ==========================================
  mensajeBienvenida: "Hay momentos en la vida que son especiales por sí solos.\nPero compartirlos con las personas que más quieres los convierte en momentos inolvidables.\nTe invito a celebrar conmigo este día tan especial.",

  tips: [
    "Código de vestimenta: Formal / Etiqueta.",
    "Por favor, confirma tu asistencia antes de la fecha límite.",
    "Llega 15 minutos antes a la ceremonia religiosa.",
    "¡Prepara tu mejor actitud para celebrar!"
  ],

  // ==========================================
  // 8. GALERÍA DE FOTOS
  // ==========================================
  fotos: {
    tiposPermitidos: ['image/jpeg', 'image/png', 'image/webp'],
    maxFileSize: 10 * 1024 * 1024, // 10MB
    habilitadoSiempre: false, 
  },

  // ==========================================
  // 9. REDES SOCIALES
  // ==========================================
  redes: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    hashtag: "#XVFatimaAnaly"
  },
  
  regalos: {
    frase: "Tu presencia es nuestro mejor regalo, pero si deseas hacernos un detalle, te dejamos estas opciones de igual forma habra lluvia de sobres:",
    opciones: [
      {
        tipo: "Liverpool",
        evento: "51982035",
        link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51982035"
      }
    ]
  }
};

// ==========================================
// FUNCIONES DE REGLAS DE NEGOCIO
// ==========================================

export const getFechaCierreConfirmacion = (): Date => new Date(eventConfig.confirmacion.fechaLimite);
export const estaConfirmacionAbierta = (): boolean => new Date().getTime() <= getFechaCierreConfirmacion().getTime();

// Esta función bloquea la galería hasta las 6:00 PM del 06 de Junio
export const esHoraDeMisa = (): boolean => {
  if (eventConfig.adminConfig.habilitarPruebas) return true;
  return new Date().getTime() >= new Date(eventConfig.fechaMisa).getTime();
};

export const getFechaEvento = (): Date => new Date(eventConfig.fechaEvento);

export const formatFecha = (fecha: Date): string => {
  return new Intl.DateTimeFormat('es-MX', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  }).format(fecha);
};

export const formatHora = (fechaHora: string | Date): string => {
  const date = typeof fechaHora === 'string' ? new Date(fechaHora) : fechaHora;
  if (isNaN(date.getTime())) return String(fechaHora);
  return new Intl.DateTimeFormat('es-MX', {
    hour: 'numeric', minute: '2-digit', hour12: true,
  }).format(date);
};

export const mostrarCroquisMesas = (): boolean => {
  if (eventConfig.adminConfig.habilitarPruebas) return true;
  const fechaEvento = new Date(eventConfig.fechaEvento).getTime();
  // Se muestra solo 7 días antes del evento
  return (fechaEvento - new Date().getTime()) <= (7 * 24 * 60 * 60 * 1000);
};