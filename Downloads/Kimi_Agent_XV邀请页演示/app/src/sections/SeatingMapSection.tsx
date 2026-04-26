import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Search, Map, QrCode, Camera, X, Lock, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { mostrarCroquisMesas, eventConfig } from '@/config/event';
import { Html5QrcodeScanner } from 'html5-qrcode';

export function SeatingMapSection() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [busqueda, setBusqueda] = useState('');
  const [resultado, setResultado] = useState<any>(null);
  const [listaMesas, setListaMesas] = useState<any[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  
  // Estado para el bloqueo de tiempo
  const [isLocked, setIsLocked] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  // 1. Lógica del Temporizador y Bloqueo
  useEffect(() => {
    const checkAccess = () => {
      const now = new Date();
      // Fecha del evento desde tu config
      const eventDate = new Date(eventConfig.fechaEvento); // Asegúrate que en config sea un string ISO o Date
      
      // Una hora antes del evento (3600000 milisegundos)
      const accessTime = new Date(eventDate.getTime() - 3600000);
      
      if (now >= accessTime) {
        setIsLocked(false);
      } else {
        // Calcular tiempo restante para el desbloqueo (una hora antes)
        const diff = accessTime.getTime() - now.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    };

    checkAccess();
    const timer = setInterval(checkAccess, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Cargar datos desde Google Sheets (solo si está desbloqueado)
  useEffect(() => {
    if (!isLocked && mostrarCroquisMesas()) {
      const cargarDatos = async () => {
        try {
          const response = await fetch(eventConfig.confirmacion.googleScriptUrl);
          const data = await response.json();
          setListaMesas(data);
        } catch (_error) {
          console.error("Error cargando la base de datos de mesas.");
        }
      };
      cargarDatos();
    }
  }, [isLocked]);

  // 3. Lógica del Escáner QR
  useEffect(() => {
    let scanner: Html5QrcodeScanner | null = null;
    if (isScanning) {
      scanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 }, false);
      scanner.render(
        (decodedText) => {
          setBusqueda(decodedText);
          ejecutarBusqueda(decodedText);
          detenerEscaneo();
        },
        (_error) => {}
      );
    }
    return () => { scanner?.clear().catch(() => {}); };
  }, [isScanning]);

  const detenerEscaneo = () => setIsScanning(false);

  const ejecutarBusqueda = (textoManual?: string) => {
    const term = (textoManual || busqueda).toLowerCase().trim();
    if (!term) return;
    const encontrado = listaMesas.find(inv => 
      inv.familia?.toLowerCase().trim().includes(term) || 
      inv.id?.toUpperCase().trim() === term.toUpperCase()
    );
    setResultado(encontrado ? (encontrado.mesa ? encontrado : 'pendiente') : 'no_encontrado');
  };

  if (!mostrarCroquisMesas()) return null;

  return (
    <section ref={ref} className="py-16 px-4 relative bg-[#050505] border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="font-serif text-3xl md:text-4xl text-[#d4af37] mb-4 flex items-center justify-center gap-3 uppercase tracking-widest">
          <Map className="w-8 h-8" />
          Tu Lugar en la Fiesta
        </h3>

        <div className="glass-card p-6 md:p-10 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
          
          {isLocked ? (
            /* VISTA BLOQUEADA CON CONTADOR */
            <div className="py-10 animate-in fade-in duration-1000">
              <div className="w-20 h-20 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#d4af37]/20">
                <Lock className="w-10 h-10 text-[#d4af37] animate-pulse" />
              </div>
              <h4 className="text-white font-serif text-xl mb-4 uppercase tracking-widest">Buscador próximamente</h4>
              <p className="text-white/60 mb-8 italic">Podrás consultar tu mesa una hora antes del evento.</p>
              
              <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto">
                <div className="bg-black/40 p-3 rounded-xl border border-[#d4af37]/30">
                  <span className="block text-2xl font-bold text-[#d4af37]">{timeLeft.hours}</span>
                  <span className="text-[10px] text-white/40 uppercase">Hrs</span>
                </div>
                <div className="bg-black/40 p-3 rounded-xl border border-[#d4af37]/30">
                  <span className="block text-2xl font-bold text-[#d4af37]">{timeLeft.minutes}</span>
                  <span className="text-[10px] text-white/40 uppercase">Min</span>
                </div>
                <div className="bg-black/40 p-3 rounded-xl border border-[#d4af37]/30">
                  <span className="block text-2xl font-bold text-[#d4af37]">{timeLeft.seconds}</span>
                  <span className="text-[10px] text-white/40 uppercase">Seg</span>
                </div>
              </div>
            </div>
          ) : (
            /* VISTA DESBLOQUEADA (BUSCADOR) */
            <div className="animate-in zoom-in fade-in duration-700">
              <p className="text-white/70 mb-8 italic">Escanea tu pase QR o busca tu apellido.</p>
              
              {!isScanning ? (
                <Button 
                  onClick={() => setIsScanning(true)}
                  className="mb-8 bg-[#d4af37] text-black hover:bg-[#bfa032] font-bold w-full md:w-auto py-7 rounded-2xl px-10 shadow-lg"
                >
                  <Camera className="w-6 h-6 mr-2" /> Escanear mi Pase QR
                </Button>
              ) : (
                <div className="mb-8 relative">
                  <div id="qr-reader" className="overflow-hidden rounded-2xl border-2 border-[#d4af37] bg-black max-w-sm mx-auto shadow-2xl"></div>
                  <Button onClick={detenerEscaneo} variant="destructive" className="mt-6 w-full md:w-auto rounded-xl">
                    <X className="w-4 h-4 mr-2" /> Cancelar
                  </Button>
                </div>
              )}

              <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
                <div className="relative w-full md:w-2/3">
                  <QrCode className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d4af37]/50 w-5 h-5" />
                  <Input 
                    placeholder="Escribe tu apellido..."
                    className="pl-12 py-6 bg-black/40 border-[#d4af37]/30 text-white w-full rounded-xl"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && ejecutarBusqueda()}
                  />
                </div>
                <Button onClick={() => ejecutarBusqueda()} className="bg-transparent border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-bold px-10 py-6 rounded-xl">
                  <Search className="w-5 h-5 mr-2" /> Buscar
                </Button>
              </div>

              {/* Mismos resultados de antes... */}
              {resultado && typeof resultado === 'object' && (
                <div className="bg-[#d4af37]/10 border border-[#d4af37]/40 rounded-2xl p-8 mb-4 animate-in slide-in-from-bottom-6">
                  <h4 className="font-serif text-2xl text-white mb-6 uppercase tracking-wider">Familia {resultado.familia}</h4>
                  <div className="relative bg-[#d4af37] text-black text-5xl font-black rounded-3xl w-28 h-28 flex items-center justify-center mx-auto shadow-xl">
                    {resultado.mesa}
                  </div>
                  <p className="text-[#d4af37] mt-6 font-bold tracking-[0.3em] uppercase text-xs">Mesa Asignada</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}