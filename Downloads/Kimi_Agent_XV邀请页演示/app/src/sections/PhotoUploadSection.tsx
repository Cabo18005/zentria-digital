import { useState, useRef, useCallback } from 'react';
import { Upload, Camera, X, Check, TestTube } from 'lucide-react';
import { usePhotoGallery } from '@/hooks/usePhotoGallery';
import { eventConfig } from '@/config/event';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { showToast } from '@/components/Toast';

export function PhotoUploadSection() {
  const ref = useScrollReveal<HTMLDivElement>();
  // @ts-ignore
  const { addMultiplePhotos } = usePhotoGallery();
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [previewFiles, setPreviewFiles] = useState<{ file: File; preview: string }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const processFiles = useCallback((files: FileList | null) => {
    if (!files) return;

    const imageFiles = Array.from(files).filter(file => 
      eventConfig.fotos.tiposPermitidos.includes(file.type)
    );

    if (imageFiles.length === 0) {
      showToast('Por favor selecciona imágenes válidas (JPG, PNG, WebP)', 'error');
      return;
    }

    const oversizedFiles = imageFiles.filter(file => file.size > eventConfig.fotos.maxFileSize);
    if (oversizedFiles.length > 0) {
      showToast(`Algunas imágenes exceden el tamaño máximo de 10MB`, 'error');
      return;
    }

    const newPreviews = imageFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setPreviewFiles(prev => [...prev, ...newPreviews]);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    processFiles(e.dataTransfer.files);
  }, [processFiles]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    processFiles(e.target.files);
    e.target.value = '';
  }, [processFiles]);

  const removePreview = useCallback((index: number) => {
    setPreviewFiles(prev => {
      const newPreviews = [...prev];
      URL.revokeObjectURL(newPreviews[index].preview);
      newPreviews.splice(index, 1);
      return newPreviews;
    });
  }, []);

  const handleUpload = useCallback(async () => {
    if (previewFiles.length === 0) return;

    setIsUploading(true);
    const files = previewFiles.map(p => p.file);
    
    try {
      await addMultiplePhotos(files as unknown as FileList);
      showToast(`${previewFiles.length} foto(s) subida(s) correctamente`, 'success');
      
      previewFiles.forEach(p => URL.revokeObjectURL(p.preview));
      setPreviewFiles([]);
    } catch (error) {
      showToast('Error al subir las fotos', 'error');
    } finally {
      setIsUploading(false);
    }
  }, [previewFiles, addMultiplePhotos]);

  return (
    <section ref={ref} className="py-16 px-4">
      <div className="max-w-xl mx-auto">
        <div className="glass-card p-8">
          <div className="text-center mb-6">
            <Camera className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
            <h4 className="font-cinzel text-xl text-[#d4af37] mb-2">Sube tus Fotos</h4>
            <p className="text-white/60 text-sm">
              Arrastra fotos aquí o haz clic para seleccionar
            </p>
          </div>

          {eventConfig.fotos.habilitadoSiempre && (
            <div className="mb-6 bg-green-500/10 border border-green-500/30 rounded-lg p-3 flex items-center gap-2">
              <TestTube className="w-4 h-4 text-green-400 flex-shrink-0" />
              <p className="text-green-400 text-xs">
                Modo pruebas activado - Puedes subir fotos para probar
              </p>
            </div>
          )}

          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`drop-zone ${isDragging ? 'drag-over' : ''}`}
          >
            <Upload className="w-12 h-12 text-[#d4af37] mx-auto mb-3" />
            <p className="text-white/70">Arrastra fotos aquí</p>
            <p className="text-white/40 text-sm mt-1">o haz clic para seleccionar</p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>

          {previewFiles.length > 0 && (
            <div className="mt-6">
              <p className="text-sm text-white/60 mb-3">
                {previewFiles.length} foto(s) seleccionada(s)
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {previewFiles.map((preview, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                    <img
                      src={preview.preview}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => removePreview(index)}
                      className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    previewFiles.forEach(p => URL.revokeObjectURL(p.preview));
                    setPreviewFiles([]);
                  }}
                  className="flex-1 border-white/20 text-white hover:bg-white/10"
                  disabled={isUploading}
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancelar
                </Button>
                <Button
                  onClick={handleUpload}
                  className="flex-1 bg-[#d4af37] text-black hover:bg-[#f4e5c2]"
                  disabled={isUploading}
                >
                  {isUploading ? (
                    <span className="animate-spin">⏳</span>
                  ) : (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Subir
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
