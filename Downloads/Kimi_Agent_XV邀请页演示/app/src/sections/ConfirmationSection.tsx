import { useState, useEffect } from 'react';
import { MessageCircle, Clock, CheckCircle, Download, Ticket, QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { eventConfig, estaConfirmacionAbierta, getFechaCierreConfirmacion, formatFecha } from '@/config/event';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { showToast } from '@/components/Toast';

interface ConfirmationSectionProps {
  datosInvitado?: any;
}

export function ConfirmationSection({ datosInvitado }: ConfirmationSectionProps) {
  const ref = useScrollReveal<HTMLDivElement>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isQrDialogOpen, setIsQrDialogOpen] = useState(false);
  
  // Estados vinculados a los datos del Excel
  const [nombre, setNombre] = useState('');
  const [pasesConfirmados, setPasesConfirmados] = useState(1);
  const [codigoQR, setCodigoQR] = useState(''); // Este será el ID de la fila
  const [mesa, setMesa] = useState<string | number>('');
  const [yaConfirmo, setYaConfirmo] = useState(false); // Nuevo estado para saber si ya había confirmado
  const [maximoPermitido, setMaximoPermitido] = useState(1);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const confirmacionAbierta = estaConfirmacionAbierta();
  const fechaCierre = getFechaCierreConfirmacion();

  // Sincronizar datos cuando App.tsx encuentre al invitado
  useEffect(() => {
    if (datosInvitado) {
      // Adaptado para leer la estructura limpia de la nueva base de datos (Ej. Camila)
      // Soporta los nombres de columnas nuevos o los viejos por si acaso
      const nombreDB = datosInvitado['Nombre'] || datosInvitado['Nombre/Familia'] || '';
      const pasesTotalesDB = Number(datosInvitado['Pases_Totales'] || datosInvitado['Cantidad de Pases']) || 1;
      const pasesYaConfirmadosDB = Number(datosInvitado['Confirmados']) || 0;
      const idQR = datosInvitado['ID'] || datosInvitado['Código QR'] || '';
      const mesaDB = datosInvitado['Mesa'] || '';

      setNombre(nombreDB);
      setCodigoQR(idQR);
      setMesa(mesaDB);
      setMaximoPermitido(pasesTotalesDB);

      // Lógica inteligente: Si ya hay pases confirmados en el Excel, bloqueamos el form
      if (pasesYaConfirmadosDB > 0) {
        setYaConfirmo(true);
        setPasesConfirmados(pasesYaConfirmadosDB); // Mostramos los que realmente confirmó
      } else {
        setYaConfirmo(false);
        setPasesConfirmados(pasesTotalesDB); // Por defecto, sugerimos confirmar todos sus pases
      }
    }
  }, [datosInvitado]);

  const handleAccionPrincipal = () => {
    if (yaConfirmo) {
      // Si ya confirmó antes, le mostramos su pase directamente
      setIsQrDialogOpen(true);
    } else {
      // Si no, abrimos el modal para que elija cuántos van
      setIsDialogOpen(true);
    }
  };

  const handleConfirmar = async () => {
    setIsSubmitting(true);
    const url = eventConfig.confirmacion.googleScriptUrl;
    
    if (url) {
      try {
        await fetch(url, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: codigoQR, // Usamos el ID para que tu Apps Script busque la fila
            nombre: nombre.trim(),
            pasesConfirmados: pasesConfirmados, // Actualizamos la columna "Confirmados"
            estado: 'CONFIRMADO',
            fecha_registro: new Date().toLocaleString(),
          }),
        });
      } catch (error) {
        console.error('Error al guardar:', error);
      }
    }

    setIsSubmitting(false);
    setIsDialogOpen(false);
    setYaConfirmo(true); // Actualizamos el estado local
    setIsQrDialogOpen(true); // Le disparamos el boleto VIP
    showToast('¡Confirmación registrada con éxito!', 'success');
  };

  const enviarWhatsApp = () => {
    let mensaje = `¡Hola! Confirmo mi asistencia a los XV años de *${eventConfig.nombre}*.\n\n`;
    mensaje += `*Familia/Invitado:* ${nombre.trim()}\n`;
    mensaje += `*Pases confirmados:* ${pasesConfirmados} de ${maximoPermitido}\n`;
    if (mesa) mensaje += `*Mesa asignada:* ${mesa}\n`;
    mensaje += `*ID de acceso:* ${codigoQR}\n\n`;
    mensaje += `¡Nos vemos en la fiesta! 🎉`;
    
    const url = `https://wa.me/${eventConfig.confirmacion.whatsapp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  const descargarQR = () => {
    const svg = document.getElementById('qr-code') as unknown as SVGSVGElement;
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.download = `Pase-${nombre.trim().replace(/\s+/g, '-')}.png`;
        downloadLink.href = pngFile;
        downloadLink.click();
      };
      img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    }
  };

  return (
    <section ref={ref} className="py-24 px-4 bg-[#050505] relative overflow-hidden">
      <div className="max-w-xl mx-auto">
        {/* Contenedor principal estilo image_0.png */}
        <div className="bg-[#0a0a0a] text-center p-8 md:p-12 border border-[#d4af37]/20 relative z-10 rounded-[3rem] shadow-2xl">
          <div className="w-16 h-16 bg-[#141414] border border-[#d4af37]/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Ticket className="w-8 h-8 text-[#d4af37]" />
          </div>
          
          <h3 className="font-serif text-4xl text-[#d4af37] mb-4 tracking-widest uppercase">
            Asistencia
          </h3>

          {confirmacionAbierta ? (
            <>
              <p className="text-gray-400 mb-2 font-light tracking-wide uppercase text-xs">Límite para confirmar:</p>
              <p className="text-[#d4af37] font-bold mb-10 flex items-center justify-center gap-3 text-lg">
                <Clock className="w-5 h-5" />
                {formatFecha(fechaCierre)}
              </p>

              <button
                onClick={handleAccionPrincipal}
                disabled={!datosInvitado}
                className="group relative bg-[#d4af37] text-black px-10 py-4 rounded-full font-bold flex items-center justify-center gap-3 mx-auto hover:bg-[#bfa032] transition-all disabled:bg-[#1f1f1f] disabled:text-gray-500 disabled:cursor-not-allowed w-full max-w-xs"
              >
                {!datosInvitado ? (
                  <>
                    <MessageCircle className="w-5 h-5 opacity-50" />
                    Cargando invitación...
                  </>
                ) : yaConfirmo ? (
                  <>
                    <QrCode className="w-5 h-5" />
                    Ver mi Pase VIP
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5" />
                    Confirmar Ahora
                  </>
                )}
              </button>
            </>
          ) : (
            <div className="bg-[#d4af37]/5 border border-[#d4af37]/10 rounded-2xl p-10 mt-8">
              <CheckCircle className="w-14 h-14 text-[#d4af37]/30 mx-auto mb-4" />
              <p className="text-white/80 text-xl font-serif tracking-widest uppercase">Confirmaciones Cerradas</p>
            </div>
          )}
        </div>
      </div>

      {/* MODAL DE AJUSTE DE PASES */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-[#0f0f0f] border-[#d4af37]/30 text-white max-w-sm rounded-[2rem]">
          <DialogHeader className="text-center">
            <DialogTitle className="font-serif text-2xl text-[#d4af37] uppercase tracking-wider">Confirmación</DialogTitle>
            <DialogDescription className="text-white/40 italic">Ajusta el número de personas que asistirán</DialogDescription>
          </DialogHeader>

          <div className="space-y-8 mt-6">
            <div className="text-center">
              <Label className="text-[#d4af37] text-[10px] uppercase tracking-[3px] mb-4 block">Invitación para:</Label>
              <p className="text-2xl font-serif text-white capitalize">{nombre || "Invitado Especial"}</p>
            </div>

            <div className="flex flex-col items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/5">
              <Label className="text-white/50 text-xs uppercase tracking-widest">¿Cuántos pases usarás?</Label>
              <div className="flex items-center gap-8">
                <button
                  onClick={() => setPasesConfirmados(Math.max(1, pasesConfirmados - 1))}
                  className="w-12 h-12 rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all text-2xl flex items-center justify-center disabled:opacity-30"
                  disabled={pasesConfirmados <= 1}
                > - </button>
                <span className="text-4xl font-bold text-white w-10 text-center">{pasesConfirmados}</span>
                <button
                  onClick={() => setPasesConfirmados(Math.min(maximoPermitido, pasesConfirmados + 1))}
                  className="w-12 h-12 rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all text-2xl flex items-center justify-center disabled:opacity-30"
                  disabled={pasesConfirmados >= maximoPermitido}
                > + </button>
              </div>
              <p className="text-[9px] text-[#d4af37]/70 uppercase tracking-[2px] mt-2 font-bold">
                Pases Totales Asignados: {maximoPermitido}
              </p>
            </div>

            <Button
              onClick={handleConfirmar}
              disabled={isSubmitting}
              className="w-full bg-[#d4af37] hover:bg-[#bfa032] text-black h-14 rounded-2xl font-bold text-lg transition-all"
            >
              {isSubmitting ? "Registrando..." : "Confirmar Mi Lugar"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* MODAL DEL PASE QR TIPO BOLETO VIP */}
      <Dialog open={isQrDialogOpen} onOpenChange={setIsQrDialogOpen}>
        <DialogContent className="bg-white border-none text-black max-w-sm p-0 overflow-hidden rounded-[2.5rem] shadow-[0_0_50px_rgba(212,175,55,0.3)]">
          <div className="bg-[#d4af37] p-8 text-center relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-black/10" />
            <h2 className="font-serif text-2xl font-black uppercase tracking-tighter text-black">Pase Personal</h2>
            <p className="text-[10px] text-black/60 uppercase tracking-[0.3em] font-bold">{eventConfig.nombre || "XV Años"}</p>
          </div>
          
          <div className="p-10 flex flex-col items-center bg-white">
            <div className="bg-white p-4 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] mb-8 border border-gray-100">
              <QRCodeSVG id="qr-code" value={codigoQR} size={200} level="H" />
            </div>

            <div className="text-center mb-10 w-full">
              <p className="text-[9px] text-gray-400 uppercase tracking-[4px] mb-3 font-bold">Familia / Invitado</p>
              <h4 className="font-serif text-xl font-bold border-b-2 border-gray-50 pb-4 mb-6 text-gray-900 capitalize">{nombre}</h4>
              
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">Pases</p>
                  <p className="font-bold text-2xl text-[#d4af37]">{pasesConfirmados}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">Mesa</p>
                  <p className="font-bold text-2xl text-[#d4af37]">{mesa || "---"}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-3">
              <Button onClick={descargarQR} variant="outline" className="w-full border-gray-200 text-gray-700 h-14 rounded-2xl hover:bg-gray-50 font-bold uppercase text-xs tracking-widest">
                <Download className="w-5 h-5 mr-3" /> Guardar Pase
              </Button>
              <Button onClick={enviarWhatsApp} className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] h-14 rounded-2xl font-bold uppercase text-xs tracking-widest shadow-lg">
                <MessageCircle className="w-5 h-5 mr-3" /> Notificar WhatsApp
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}