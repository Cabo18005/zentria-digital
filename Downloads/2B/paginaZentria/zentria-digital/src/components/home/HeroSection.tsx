import Countdown from '../ui/Countdown';

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto min-h-[85vh] gap-12 font-inter">
      
      {/* Columna Izquierda: Texto y Llamado a la Acción */}
      <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6 animate-fade-in">
        <h1 className="text-5xl lg:text-7xl font-libre font-bold text-zentria-dark leading-tight">
          ELEGANCIA <br /> 
          <span className="text-zentria-primary">QUE PERDURA</span>
        </h1>
        
        <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
          Invitaciones digitales e interactivas que reflejan la esencia de tu evento. Sorprende a tus invitados con una experiencia moderna, elegante y fácil de compartir.
        </p>
        
        <a 
          href="#catalogo"
          className="mt-4 bg-zentria-dark text-white px-8 py-4 rounded-xl shadow-xl hover:bg-zentria-primary transition-all duration-300 font-bold text-lg transform hover:-translate-y-1 inline-block"
        >
          COTIZAR AHORA
        </a>
      </div>

      {/* Columna Derecha: Mockup del Celular Animado */}
      <div className="w-full lg:w-1/2 flex justify-center relative">
        {/* Decoración de fondo suave */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>
        
        {/* El "Celular" con animación de levitación */}
        <div className="relative z-10 w-[320px] h-[640px] bg-white rounded-[3rem] shadow-2xl border-[10px] border-gray-900 overflow-hidden flex flex-col items-center animate-bounce-slow">
          
          {/* La muesca (Dynamic Island) */}
          <div className="absolute top-0 w-36 h-7 bg-gray-900 rounded-b-3xl z-20"></div>
          
          {/* Pantalla Interna */}
          <div className="w-full h-full bg-[#fdfbf7] flex flex-col items-center pt-24 pb-12 px-6 text-center">
            
            {/* Iniciales elegantes */}
            <div className="w-16 h-16 border-2 border-amber-500 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <span className="font-libre text-2xl text-amber-700 italic">A&L</span>
            </div>
            
            <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase mb-3 font-bold">Nuestra Boda</p>
            <h2 className="text-4xl font-libre text-zentria-dark mb-6">Ana & Luca</h2>
            
            <p className="text-sm text-gray-500 leading-relaxed mb-8 px-4 font-libre italic">
              "Tenemos el honor de invitarte a celebrar nuestro gran día."
            </p>
            
            {/* COMPONENTE DE CONTADOR REAL */}
            <div className="mt-auto w-full">
              <Countdown />
            </div>

            {/* Botón de confirmación simulado */}
            <div className="mt-10 w-full px-4">
              <div className="bg-zentria-dark/5 border border-zentria-dark/10 py-3 rounded-lg text-zentria-dark font-bold text-xs tracking-widest">
                CONFIRMAR ASISTENCIA
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Estilos para las animaciones personalizadas */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>

    </section>
  );
}