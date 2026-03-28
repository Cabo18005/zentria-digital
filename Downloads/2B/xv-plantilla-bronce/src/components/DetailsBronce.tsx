import { MapPin, Clock, Shirt } from 'lucide-react';

const DetailsBronce = () => {
  return (
    <section className="py-20 bg-white text-rose-950 px-6">
      <h2 
        className="text-4xl font-serif italic text-center mb-12" /* Quité text-rose-900 */
        style={{ color: '#4c0519' }} /* <-- ¡Fuerza Bruta Directa! */
      >
        Dónde & Cuándo
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tarjeta de la Iglesia */}
        <div className="flex flex-col items-center text-center p-8 border border-rose-100/60 bg-rose-50/30 rounded-2xl shadow-sm">
          <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mb-6">
            <Clock className="text-rose-700" size={28} />
          </div>
          <h3 className="text-2xl font-serif mb-2">Ceremonia Religiosa</h3>
          <p className="font-bold text-rose-950 mb-1">Catedral Metropolitana</p>
          <p className="text-sm font-light text-rose-800 mb-1">Centro Histórico, CDMX</p>
          <p className="text-sm text-neutral-500 mb-6">5:00 PM</p>
          {/* Link real a Google Maps */}
          <a href="https://www.google.com/maps/search/?api=1&query=Catedral+Metropolitana+CDMX" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-rose-800 text-white text-xs tracking-widest uppercase rounded-full hover:bg-rose-900 transition-colors shadow-md">
            Ver Mapa
          </a>
        </div>

        {/* Tarjeta de la Recepción */}
        <div className="flex flex-col items-center text-center p-8 border border-rose-100/60 bg-rose-50/30 rounded-2xl shadow-sm">
          <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mb-6">
            <MapPin className="text-rose-700" size={28} />
          </div>
          <h3 className="text-2xl font-serif mb-2">Recepción</h3>
          <p className="font-bold text-rose-950 mb-1">Casino Español de México</p>
          <p className="text-sm font-light text-rose-800 mb-1">Isabel La Católica 29, CDMX</p>
          <p className="text-sm text-neutral-500 mb-6">7:30 PM</p>
          {/* Link real a Google Maps */}
          <a href="https://www.google.com/maps/search/?api=1&query=Casino+Español+de+Mexico+CDMX" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-rose-800 text-white text-xs tracking-widest uppercase rounded-full hover:bg-rose-900 transition-colors shadow-md">
            Ver Mapa
          </a>
        </div>
      </div>

      {/* Código de vestimenta */}
      <div className="mt-20 text-center flex flex-col items-center">
        <Shirt className="text-rose-400 mb-4" size={36} />
        <h3 className="text-2xl font-serif mb-2">Código de Vestimenta</h3>
        <p className="font-light text-rose-900 text-lg">Formal / Elegante</p>
        <p className="text-sm text-neutral-500 mt-2 italic">*Se reserva el color rojo para la quinceañera*</p>
      </div>
    </section>
  );
};

export default DetailsBronce;