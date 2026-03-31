export default function CallToAction() {
  return (
    <section className="bg-zentria-dark text-white py-24 px-8 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-12">
        {/* Título Elegante */}
        <h2 className="text-4xl lg:text-5xl font-libre font-bold leading-tight">
  ¿Listo para hacer tu <br />
  <span className="text-white opacity-80 uppercase">Evento Inolvidable?</span>
</h2>
        
        {/* Formulario/Input Simulado */}
        <div className="w-full max-w-2xl bg-white/5 p-4 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm">
          <input 
            type="text" 
            placeholder="Cuéntanos brevemente sobre tu evento..." 
            className="w-full bg-white text-gray-800 placeholder:text-gray-400 p-5 rounded-2xl text-lg focus:ring-4 focus:ring-zentria-primary focus:outline-none transition-all shadow-inner"
          />
        </div>

        {/* Botón Gigante (Electric Blue) */}
        <button className="bg-zentria-primary text-white px-12 py-5 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 font-bold text-xl uppercase tracking-wider transform hover:-translate-y-1">
          SOLICITAR PRESUPUESTO
        </button>
      </div>
    </section>
  );
}