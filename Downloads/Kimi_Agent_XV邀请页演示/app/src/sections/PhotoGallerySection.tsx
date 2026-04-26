import React, { useState, useRef } from 'react';
import { Trash2, Expand, Sparkles, X, Lock } from 'lucide-react';
import { usePhotoGallery } from '@/hooks/usePhotoGallery';
import { eventConfig, esHoraDeMisa } from '@/config/event';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { showToast } from '@/components/Toast';
import { Button } from '@/components/ui/button';

interface Photo {
  id: string;
  url: string;
}

// 1. Añadimos datosInvitado como propiedad
interface PhotoGallerySectionProps {
  datosInvitado?: any;
}

export function PhotoGallerySection({ datosInvitado }: PhotoGallerySectionProps) {
  const ref = useScrollReveal<HTMLDivElement>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { photos, isLoaded, deletePhoto, uploadPhoto } = usePhotoGallery();
  
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  
  // 2. Evaluamos si es hora de la misa (basado en event.ts)
  const esHoraPermitida = esHoraDeMisa();
  
  // 3. Evaluamos si el invitado actual es el Administrador (ej. ID 'Fam-Cabo')
  const esAdmin = datosInvitado?.['ID'] === eventConfig.adminConfig.idAdministrador;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) { // Límite de 5MB por ejemplo
      showToast('La imagen es muy pesada', 'error');
      return;
    }

    setIsUploading(true);
    try {
      await uploadPhoto(file);
      showToast('¡Foto compartida!', 'success');
    } catch (error) {
      console.error(error);
      showToast('Error al subir la foto', 'error');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    // 4. Modal de seguridad para pedir la contraseña
    const passwordIngresada = window.prompt('Introduce la contraseña de Administrador para borrar:');
    
    if (passwordIngresada === eventConfig.adminConfig.passwordBorrado) {
        deletePhoto(id);
        showToast('Foto eliminada permanentemente', 'success');
    } else if (passwordIngresada !== null) { // Si no le dio a "Cancelar"
        showToast('Contraseña incorrecta', 'error');
    }
  };

  if (!isLoaded) return (
    <div className="py-20 text-center text-[#d4af37] animate-pulse font-serif tracking-widest uppercase">
      Revelando recuerdos...
    </div>
  );

  return (
    <section ref={ref} className="py-20 px-4 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          
          <div className="inline-block p-4 rounded-full mb-6 bg-[#d4af37]/10 text-[#d4af37]">
            <Sparkles className="w-8 h-8" />
          </div>
          
          <h3 className="font-serif text-3xl md:text-5xl text-[#d4af37] mb-6 tracking-[0.2em] uppercase">
            Álbum de Recuerdos
          </h3>
          <p className="text-white/60 max-w-lg mx-auto font-light mb-10 italic text-sm md:text-base">
            {/* SOLUCIÓN AL CRASH: Validación del hashtag */}
            #{eventConfig.nombre ? eventConfig.nombre.replace(/\s+/g, '') : 'XV'} — Ayúdanos a capturar cada momento especial de esta noche.
          </p>

          <div className="flex justify-center mb-16">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            
            {/* 5. Lógica de renderizado condicional según la hora */}
            {esHoraPermitida ? (
              <Button
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className="bg-[#d4af37] text-black hover:bg-[#bfa032] px-10 py-7 rounded-full text-lg font-bold transition-all shadow-lg"
              >
                {isUploading ? "Subiendo..." : "COMPARTIR MOMENTO"}
              </Button>
            ) : (
              <div className="flex flex-col items-center p-8 bg-[#0a0a0a] border border-[#d4af37]/20 rounded-[2rem] max-w-sm">
                 <Lock className="w-10 h-10 text-[#d4af37]/50 mb-3" />
                 <p className="text-[#d4af37]/80 text-sm tracking-widest uppercase font-semibold mb-2">
                   Cámara Bloqueada
                 </p>
                 <p className="text-white/50 text-xs text-center">
                   El álbum se habilitará al inicio de la misa. ¡Prepara tus mejores tomas!
                 </p>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo: Photo) => (
            <div 
              key={photo.id} 
              className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-white/5 border border-white/10"
            >
              <img 
                src={photo.url} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt="Recuerdo de la fiesta" 
              />
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                <button 
                  onClick={() => setSelectedPhoto(photo.url)} 
                  className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-[#d4af37] hover:text-black transition-all transform hover:scale-110"
                >
                  <Expand className="w-6 h-6" />
                </button>
                
                {/* 6. El botón de borrar solo aparece si eres el administrador */}
                {esAdmin && (
                  <button 
                    onClick={(e) => handleDelete(photo.id, e)} 
                    className="p-4 bg-red-500/80 backdrop-blur-md rounded-full text-white hover:bg-red-600 transition-all transform hover:scale-110"
                  >
                    <Trash2 className="w-6 h-6" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
          <DialogContent className="max-w-[95vw] md:max-w-4xl bg-black/95 border-none p-0 overflow-hidden flex items-center justify-center">
            {selectedPhoto && (
              <div className="relative w-full h-full flex items-center justify-center">
                <button 
                  onClick={() => setSelectedPhoto(null)} 
                  className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <img 
                  src={selectedPhoto} 
                  className="max-w-full max-h-[85vh] object-contain shadow-2xl" 
                  alt="Vista ampliada" 
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}