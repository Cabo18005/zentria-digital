import { motion } from 'framer-motion';

const HeaderBronce = () => {
  return (
    <header className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-rose-50">
      
      {/* Imagen de fondo (Usamos una foto elegante de Unsplash de prueba) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop')" }} 
      />
      
      {/* Degradado para dar profundidad */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-rose-100/30 via-transparent to-rose-50/90" />

      {/* Contenido principal animado (AHORA CON MÁS ESPACIO Y RESPIRO) */}
      <div className="z-10 text-center px-6 mt-12 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xs sm:text-sm tracking-[0.4em] uppercase text-rose-900 mb-8 font-bold"
        >
          Mis XV Años
        </motion.p>

        {/* Título "Sofia" - ¡Forzado con Inline Style! */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-7xl sm:text-9xl font-serif italic mb-10 drop-shadow-md" /* Quité la clase text-rose-950 */
          style={{ color: '#4c0519' }} /* <-- ¡Fuerza Bruta Directa! */
        >
          Sofia
        </motion.h1>

        {/* Línea decorativa */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '4rem' }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-[2px] bg-rose-800 mx-auto mb-10"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-base sm:text-lg text-rose-900 font-bold tracking-[0.2em]"
        >
          24 • OCTUBRE • 2026
        </motion.p>
      </div>
    </header>
  );
};

export default HeaderBronce;