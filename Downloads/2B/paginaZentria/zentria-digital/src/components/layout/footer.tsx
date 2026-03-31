export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-16 px-8 border-t border-gray-100 font-inter">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        
        {/* Columna 1: Logo */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zentria-dark text-white flex items-center justify-center font-bold text-lg rounded shadow-sm">
              Z
            </div>
            <span className="text-lg font-bold text-zentria-dark tracking-tight">
              ZENTRIA DIGITAL
            </span>
          </div>
          <p className="text-sm text-gray-500 italic font-libre">
            "Elegancia que perdura"
          </p>
        </div>

        {/* Columna 2: Enlaces Útiles */}
        <div className="space-y-4">
          <h4 className="font-bold text-zentria-dark">Enlaces Útiles</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#inicio" className="text-gray-500 hover:text-zentria-primary transition-colors">Inicio</a></li>
            <li><a href="#catalogo" className="text-gray-500 hover:text-zentria-primary transition-colors">Catálogo</a></li>
            <li><a href="#beneficios" className="text-gray-500 hover:text-zentria-primary transition-colors">Servicios</a></li>
            <li><a href="#contacto" className="text-gray-500 hover:text-zentria-primary transition-colors">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="space-y-4">
          <h4 className="font-bold text-zentria-dark">Contacto</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-zentria-primary">✉</span> zentria.digital18@gmail.com
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-zentria-primary">📍</span> Mérida, Yucatán
            </li>
          </ul>
        </div>

        {/* Columna 4: Redes Sociales */}
        <div className="space-y-4">
          <h4 className="font-bold text-zentria-dark">Síguenos</h4>
          <div className="flex gap-4 justify-center md:justify-start">
            {/* Facebook */}
            <a 
              href="https://www.facebook.com/expresmid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-[#1877F2] hover:text-white transition-all duration-300 shadow-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/zentriadigital?igsh=c25yYTI2NWZ2czE1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white transition-all duration-300 shadow-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Franja final */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Zentria Digital. Todos los derechos reservados.
      </div>
    </footer>
  );
}