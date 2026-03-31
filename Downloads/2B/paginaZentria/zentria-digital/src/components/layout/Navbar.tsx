import { useState } from 'react';

export default function Navbar() {
  // Estado para controlar el menú móvil
  const [isOpen, setIsOpen] = useState(false);

  // Función para cerrar el menú al hacer clic en un enlace (UX)
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 font-inter">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 bg-zentria-dark text-white flex items-center justify-center font-bold text-xl rounded shadow-md">
            Z
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-zentria-dark leading-tight tracking-tight">
              ZENTRIA DIGITAL
            </span>
            <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">
              Invitaciones Digitales
            </span>
          </div>
        </div>

        {/* Menú Desktop */}
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          {[
            { name: 'Inicio', href: '#inicio' },
            { name: 'Catálogo', href: '#catalogo' },
            { name: 'Servicios', href: '#beneficios' },
            { name: 'Contacto', href: '#contacto' }
          ].map((item) => (
            <li key={item.name} className="relative group">
              <a 
                href={item.href} 
                className="hover:text-zentria-primary transition-all duration-300 cursor-pointer"
              >
                {item.name}
              </a>
              <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-zentria-primary transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Botón Desktop */}
        <a 
          href="#catalogo" 
          className="hidden md:block bg-zentria-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-zentria-dark transition-all duration-300 shadow-md"
        >
          VER CATÁLOGO
        </a>

        {/* Botón Hamburguesa (Móvil) */}
        <button 
          className="md:hidden text-zentria-dark p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú Desplegable Móvil (Corregido) */}
      <div className={`
        absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out md:hidden
        ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}
      `}>
        <ul className="flex flex-col p-6 space-y-4 font-medium text-gray-700">
          <li><a href="#inicio" onClick={closeMenu} className="block hover:text-zentria-primary py-2 border-b border-gray-50">Inicio</a></li>
          <li><a href="#catalogo" onClick={closeMenu} className="block hover:text-zentria-primary py-2 border-b border-gray-50">Catálogo</a></li>
          <li><a href="#beneficios" onClick={closeMenu} className="block hover:text-zentria-primary py-2 border-b border-gray-50">Servicios</a></li>
          <li><a href="#contacto" onClick={closeMenu} className="block hover:text-zentria-primary py-2">Contacto</a></li>
          <a 
            href="#catalogo" 
            onClick={closeMenu}
            className="block w-full bg-zentria-primary text-white py-4 rounded-xl font-bold shadow-lg mt-4 text-center"
          >
            VER CATÁLOGO
          </a>
        </ul>
      </div>
    </nav>
  );
}