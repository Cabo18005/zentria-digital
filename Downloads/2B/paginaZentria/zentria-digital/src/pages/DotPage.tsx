import { useEffect } from 'react';

export default function DotPage() {
  // Esto asegura que la página cargue desde arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0A192F] min-h-screen text-white font-inter pb-20">
      
      {/* Hero Section de DOT */}
      <section className="pt-32 pb-20 px-8 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-blue-400 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            El futuro del Networking
          </span>
          <h1 className="text-5xl md:text-7xl font-libre font-bold mb-6 leading-tight">
            Zentria <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">DOT</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Una sola tarjeta inteligente para conectar con el mundo. Comparte tu contacto, redes sociales y portafolio con un solo toque.
          </p>
          
          {/* Tarjeta Visual Animada */}
          <div className="w-64 h-40 mx-auto bg-gradient-to-tr from-gray-900 to-gray-800 rounded-xl border border-gray-700 shadow-2xl flex items-center justify-center relative overflow-hidden transform hover:scale-105 transition-transform duration-500 mb-12">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div className="relative z-10 text-2xl font-black tracking-widest text-gray-300">
              ZENTRIA <span className="text-blue-500">DOT</span>
            </div>
            {/* Símbolo de NFC simulado */}
            <svg className="absolute top-4 right-4 text-gray-500 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <a 
            href="https://wa.me/529990000000?text=Me+interesa+comprar+una+tarjeta+Zentria+DOT"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
          >
            Configurar mi Tarjeta
          </a>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 px-8 bg-black/30 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-libre font-bold text-center mb-16">¿Cómo funciona?</h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto border border-blue-500/30 text-2xl font-black text-blue-400">1</div>
              <h3 className="text-xl font-bold">Adquiere tu DOT</h3>
              <p className="text-gray-400 text-sm">Elige entre acabado en PVC Premium o Metal. La personalizamos con tu logo y nombre.</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto border border-purple-500/30 text-2xl font-black text-purple-400">2</div>
              <h3 className="text-xl font-bold">Crea tu Perfil</h3>
              <p className="text-gray-400 text-sm">Configuramos tu mini-sitio web con tu foto, WhatsApp, redes sociales, menú o portafolio.</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30 text-2xl font-black text-emerald-400">3</div>
              <h3 className="text-xl font-bold">Conecta con un Toque</h3>
              <p className="text-gray-400 text-sm">Acerca la tarjeta a cualquier celular moderno y tu información aparecerá en su pantalla al instante.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Modelos / Precios */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-libre font-bold text-center mb-16">Nuestros Modelos</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Modelo Standard */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-blue-500/50 transition-colors">
              <h3 className="text-2xl font-bold mb-2">DOT Standard</h3>
              <div className="text-blue-400 font-bold text-3xl mb-6">$450 <span className="text-sm text-gray-500 font-normal">MXN</span></div>
              <ul className="space-y-3 text-gray-300 mb-8 text-sm">
                <li>✓ Material PVC Premium (Mate o Brillante)</li>
                <li>✓ Chip NFC Alta Velocidad + Código QR</li>
                <li>✓ Perfil digital personalizado</li>
                <li>✓ Actualizaciones ilimitadas</li>
              </ul>
            </div>

            {/* Modelo Elite */}
            <div className="bg-gradient-to-b from-blue-900/40 to-black border border-blue-500/30 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-blue-600 text-xs font-bold px-3 py-1 rounded-full">MÁS VENDIDO</div>
              <h3 className="text-2xl font-bold mb-2">DOT Metal Elite</h3>
              <div className="text-emerald-400 font-bold text-3xl mb-6">$850 <span className="text-sm text-gray-500 font-normal">MXN</span></div>
              <ul className="space-y-3 text-gray-300 mb-8 text-sm">
                <li>✓ Tarjeta de Acero Inoxidable Grabada en Láser</li>
                <li>✓ Chip NFC Alta Velocidad + Código QR</li>
                <li>✓ Perfil digital personalizado avanzado</li>
                <li>✓ Sensación de peso y lujo extremo</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}