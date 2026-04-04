import PhoneMockup from '../ui/PhoneMockup';

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

      {/* Columna Derecha: Mockup del Celular Animado (100% Interactivo) */}
      <div className="w-full lg:w-1/2 flex justify-center relative">
        {/* Decoración de fondo suave */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>
        
        {/* Envolvemos tu nuevo PhoneMockup interactivo en el div que tiene la animación flotante */}
        <div className="relative z-10 animate-bounce-slow">
          <PhoneMockup demoUrl="https://earnest-truffle-e1a76d.netlify.app" />
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