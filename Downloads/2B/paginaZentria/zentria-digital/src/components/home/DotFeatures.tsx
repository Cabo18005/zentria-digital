export default function DotFeatures() {
  const caracteristicas = [
    {
      titulo: "Tecnología NFC",
      desc: "Toca cualquier smartphone moderno y comparte tu perfil al instante sin instalar apps.",
      color: "text-blue-400",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
      )
    },
    {
      titulo: "Perfil Dinámico",
      desc: "Cambia tu WhatsApp, Instagram o catálogo en segundos desde nuestra plataforma.",
      color: "text-purple-400",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
      )
    },
    {
      titulo: "Diseño de Élite",
      desc: "Impresión en PVC premium o Metal con acabado mate. Elegancia que se siente al tacto.",
      color: "text-emerald-400",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      )
    },
    {
      titulo: "Ecosistema Zentria",
      desc: "Vincula tus invitaciones digitales directamente a tu tarjeta para eventos corporativos.",
      color: "text-rose-400",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
      )
    }
  ];

  return (
    <section id="dot-info" className="py-24 bg-[#0A192F] text-white overflow-hidden relative font-inter">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-libre font-bold mb-4">
            Zentria <span className="text-blue-500">DOT</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            La última tarjeta de presentación que vas a comprar. Innovación, elegancia y conectividad en la palma de tu mano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {caracteristicas.map((item, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500 group"
            >
              <div className={`mb-6 transform group-hover:scale-110 transition-transform duration-300 ${item.color}`}>
                {item.svg}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.titulo}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Banner de Acción */}
        <div className="mt-20 p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-3xl">
          <div className="bg-[#0A192F] rounded-[23px] p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">¿Listo para digitalizar tu networking?</h3>
            <a 
              href="https://wa.me/529990000000?text=Hola!+Me+interesa+adquirir+mi+tarjeta+NFC+DOT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#0A192F] px-10 py-4 rounded-full font-black hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-xl"
            >
              ADQUIRIR MI DOT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}