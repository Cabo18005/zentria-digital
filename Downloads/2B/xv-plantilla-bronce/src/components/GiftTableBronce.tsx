import { Gift, CreditCard } from 'lucide-react';
import { useState } from 'react';

const GiftTableBronce = () => {
  // Estado para saber si el usuario ya copió el número
  const [copied, setCopied] = useState(false);
  const accountNumber = "4027 6657 1234 4321";

  const handleCopy = () => {
    // Truco de UX: Copiar al portapapeles sin los espacios
    navigator.clipboard.writeText(accountNumber.replace(/\s/g, ''));
    setCopied(true);
    // Regresamos el botón a la normalidad después de 2 segundos
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-rose-50 px-6 border-t border-rose-100/50">
      <h2 
        className="text-4xl font-serif italic text-center mb-12" /* Quité text-rose-950 */
        style={{ color: '#4c0519' }} /* <-- ¡Fuerza Bruta Directa! */
      >
        Mesa de Regalos
      </h2>
      
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Opción 1: Lluvia de Sobres */}
        <div className="flex flex-col items-center text-center p-8 bg-white border border-rose-100 rounded-2xl shadow-sm">
          <Gift className="text-rose-400 mb-4" size={40} />
          <h3 className="text-xl font-serif text-rose-900 mb-3">Lluvia de Sobres</h3>
          <p className="font-light text-rose-800 text-sm">
            Es la tradición de regalar dinero en efectivo dentro de un sobre el día del evento. ¡Habrá un buzón en la recepción!
          </p>
        </div>

        {/* Opción 2: Transferencia (Con botón inteligente) */}
        <div className="flex flex-col items-center text-center p-8 bg-white border border-rose-100 rounded-2xl shadow-sm">
          <CreditCard className="text-rose-400 mb-4" size={40} />
          <h3 className="text-xl font-serif text-rose-900 mb-3">Transferencia</h3>
          <p className="font-light text-rose-800 text-sm mb-4">
            Si prefieres hacerme un presente por este medio, te dejo mis datos:
          </p>
          <p className="font-bold text-rose-950 tracking-widest mb-1">{accountNumber}</p>
          <p className="text-xs text-rose-600 mb-5">BBVA - Sofia Mendoza</p>
          
          <button 
            onClick={handleCopy}
            className={`px-6 py-2 text-xs font-bold tracking-widest uppercase rounded-full transition-colors ${
              copied 
                ? 'bg-green-100 text-green-800' 
                : 'bg-rose-100 text-rose-900 hover:bg-rose-200'
            }`}
          >
            {copied ? '¡Copiado!' : 'Copiar Cuenta'}
          </button>
        </div>

      </div>
    </section>
  );
};

export default GiftTableBronce;