import { useState } from 'react';

// Base de datos de nuestros productos (Actualizada con demoUrl y precios estratégicos)
const PRODUCTOS = [
  {
    id: 1,
    titulo: "Boda Real - Pack Oro",
    categoria: "Bodas",
    precio: "Desde $850",
    imagen: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=500",
    link: "https://wa.me/529999908114?text=Me+interesa+el+Pack+Oro+de+Boda",
    demoUrl: "https://courageous-entremet-faed04.netlify.app/?id=SAL-001" // Pon tu link aquí cuando lo tengas
  },
  {
    id: 2,
    titulo: "Boda - Pack Bronce",
    categoria: "Bodas",
    precio: "Desde $700",
    imagen: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=500",
    link: "https://wa.me/529999908114?text=Me+interesa+la+invitación+de+Boda+Minimalista",
    demoUrl: "https://boda-premium-oro.vercel.app"
  },
  {
    id: 3,
    titulo: "XV Años - bronce",
    categoria: "XV Años",
    precio: "Desde $650",
    imagen: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=500",
    link: "https://wa.me/529999908114?text=Me+interesa+el+diseño+de+XV+Años+Sofía",
    demoUrl: "https://xvsofiabroncezentriadigital.vercel.app" // <-- Aquí va tu link real de Vercel
  },
  {
    id: 4,
    titulo: "XV Años - divino",
    categoria: "XV Años",
    precio: "Desde $900",
    imagen: "https://images.unsplash.com/photo-1493225457124-a1a2a5f2571f?auto=format&fit=crop&q=80&w=500",
    link: "https://wa.me/529999908114?text=Me+interesa+el+diseño+K-Pop+para+XV+Años",
    demoUrl: "https://analyxv.netlify.app#"
  },
  {
    id: 5,
    titulo: "XV años oro",
    categoria: "XV Años",
    precio: "Desde 8700",
    imagen: "https://images.unsplash.com/photo-1533227268428-f9ed0900f40a?auto=format&fit=crop&q=80&w=500",
    link: "https://wa.me/529999908114?text=Me+interesa+la+invitación+infantil+Aventura+Espacial",
    demoUrl: "https://idyllic-marigold-aad25a.netlify.app"
  },
  {
    id: 6,
    titulo: "XV años - plata",
    categoria: "XV Años",
    precio: "$700",
    imagen: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=500",
    link: "https://wa.me/529999908114?text=Quiero+información+sobre+las+tarjetas+DOT",
    demoUrl: "https://xv-camila-zentria.vercel.app/?id=fam-ku"
  }
];

// Extraemos las categorías únicas para generar los botones automáticamente
const CATEGORIAS = ["Todos", "Bodas", "XV Años", "Infantiles", "Corporativo"];

export default function Catalogo() {
  // Estado para saber qué pestaña está seleccionada
  const [filtroActivo, setFiltroActivo] = useState("Todos");

  // Filtramos los productos según la pestaña activa
  const productosFiltrados = filtroActivo === "Todos" 
    ? PRODUCTOS 
    : PRODUCTOS.filter(prod => prod.categoria === filtroActivo);

  return (
    <section id="catalogo" className="py-20 px-8 bg-gray-50 font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-libre font-bold text-[#0A192F]">Nuestros Diseños</h2>
          <p className="text-gray-500 mt-2">Explora nuestras soluciones digitales por temática</p>
        </div>

        {/* Botones de Filtro (Pestañas) */}
        <div className="flex overflow-x-auto gap-3 pb-4 mb-8 custom-scrollbar md:flex-wrap md:overflow-visible">
          {CATEGORIAS.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setFiltroActivo(categoria)}
              className={`px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300 border ${
                filtroActivo === categoria
                  ? "bg-[#0052CC] text-white border-[#0052CC] shadow-md transform scale-105"
                  : "bg-white text-gray-500 border-gray-200 hover:border-[#0052CC] hover:text-[#0052CC]"
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Cuadrícula de Productos Animada */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((prod) => (
            <div 
              key={prod.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 flex flex-col"
            >
              {/* Imagen */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={prod.imagen} 
                  alt={prod.titulo}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-[#0052CC] shadow-sm uppercase">
                  {prod.categoria}
                </div>
              </div>

              {/* Información */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#0A192F] mb-1">{prod.titulo}</h3>
                <p className="text-[#0052CC] font-bold text-lg mb-6">{prod.precio}</p>
                
                <div className="mt-auto grid grid-cols-2 gap-3">
                  {/* Botón Funcional para ver Demo */}
                  <a 
                    href={prod.demoUrl}
                    target={prod.demoUrl !== "#" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-center bg-gray-50 border border-gray-200 text-[#0A192F] py-2.5 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 text-sm"
                  >
                    Ver Demo
                  </a>
                  
                  {/* Botón de Venta directo a WhatsApp */}
                  <a 
                    href={prod.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-center bg-[#0A192F] text-white py-2.5 rounded-xl font-bold hover:bg-[#0052CC] transition-all duration-300 text-sm"
                  >
                    Cotizar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje si la categoría está vacía */}
        {productosFiltrados.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-xl font-bold mb-2">Próximamente</p>
            <p>Estamos diseñando nuevas experiencias para esta categoría.</p>
          </div>
        )}
      </div>
    </section>
  );
}