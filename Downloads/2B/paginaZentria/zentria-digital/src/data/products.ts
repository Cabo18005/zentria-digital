export interface Product {
  id: number;
  titulo: string;
  categoria: string;
  imagen: string;
  esNuevo: boolean;
  colorCapa: string;
}

export const productosData: Product[] = [
  { 
    id: 1,
    titulo: "XV Años - Sofía", 
    categoria: "Invitación Premium", 
    imagen: "🌸", 
    esNuevo: true,
    colorCapa: "from-blue-600 to-blue-900" 
  },
  { 
    id: 2,
    titulo: "Boda - Ana & Luca", 
    categoria: "Boda Real", 
    imagen: "💍", 
    esNuevo: false,
    colorCapa: "from-slate-700 to-slate-900" 
  },
  { 
    id: 3,
    titulo: "Zentria DOT - Black", 
    categoria: "Business Card", 
    imagen: "📱", 
    esNuevo: true,
    colorCapa: "from-black to-gray-800" 
  },
  { 
    id: 4,
    titulo: "Bautizo - Mateo", 
    categoria: "Celebración", 
    imagen: "🕊️", 
    esNuevo: false,
    colorCapa: "from-zentria-primary to-blue-400" 
  },
];