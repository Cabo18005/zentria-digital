const GreetingBronce = () => {
  return (
    <section className="py-20 bg-rose-50 px-6 text-center border-t border-rose-100/50">
      <div className="max-w-3xl mx-auto">
        
        {/* La Frase o Declaración - ¡Forzado con Inline Style! */}
        <h2 
          className="text-2xl md:text-3xl font-serif italic mb-10 leading-relaxed"
          style={{ color: '#4c0519' }}
        >
          "Hay momentos inolvidables que se atesoran en el corazón para siempre, y hoy quiero compartir el inicio de esta nueva etapa con las personas que más quiero."
        </h2>

        {/* Separador elegante */}
        <div className="w-16 h-[2px] bg-rose-800 mx-auto mb-12"></div>

        {/* Sección de Padres */}
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-rose-800 mb-4 font-bold">
            Con la bendición de mis padres
          </p>
          <p className="text-2xl sm:text-3xl font-serif text-rose-950">Carlos Mendoza</p>
          <p className="text-sm font-light text-rose-500 my-2">&</p>
          <p className="text-2xl sm:text-3xl font-serif text-rose-950">Laura Sánchez</p>
        </div>

        {/* Sección de Padrinos */}
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-rose-800 mb-4 font-bold">
            Y mis padrinos
          </p>
          <p className="text-xl sm:text-2xl font-serif text-rose-900">Roberto Gómez</p>
          <p className="text-sm font-light text-rose-500 my-2">&</p>
          <p className="text-xl sm:text-2xl font-serif text-rose-900">María Elena Ruiz</p>
        </div>

      </div>
    </section>
  );
};

export default GreetingBronce;