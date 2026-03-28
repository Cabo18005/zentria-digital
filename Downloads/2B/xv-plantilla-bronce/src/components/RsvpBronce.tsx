import { Send } from 'lucide-react';

const RsvpBronce = () => {
  // Aquí pones el número de la mamá o del cliente (Puse un 999 de Mérida de ejemplo)
  const phoneNumber = "529991234567"; 
  
  // El mensaje que se escribirá solito en WhatsApp
  const message = "¡Hola! Confirmo mi asistencia a los XV años de Sofia. 🎊 Familia: ";
  
  // Generamos el link de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-24 bg-rose-900 text-rose-50 px-6 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-serif italic mb-6 text-white">Confirma tu Asistencia</h2>
        
        <p className="font-light text-rose-200 text-lg mb-10">
          Para nosotros es muy importante contar con tu presencia. Por favor, confírmanos si nos acompañarás en este día tan especial.
        </p>
        
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-10 py-4 bg-white text-rose-900 font-bold uppercase tracking-widest text-sm rounded-full hover:bg-rose-100 transition-colors shadow-lg group"
        >
          <span>Confirmar por WhatsApp</span>
          <Send size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
        
        <p className="text-xs text-rose-300 mt-8 font-light tracking-widest uppercase">
          Fecha límite: 10 de Octubre, 2026
        </p>
      </div>
    </section>
  );
};

export default RsvpBronce;