import { useState, useCallback, useEffect } from 'react';

export interface Photo {
  id: string;
  url: string;
  timestamp: number;
  uploadedBy?: string;
}

const STORAGE_KEY = 'xv-photos-gallery';
// TU API KEY DE IMGBB ACTIVADA:
const IMGBB_API_KEY = "78633cfc3fbd5a89578a7b9571d07b4b"; 

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Cargar fotos guardadas en el navegador
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          setPhotos(JSON.parse(stored));
        }
      } catch (error) {
        console.warn('Error loading photos:', error);
      }
      setIsLoaded(true);
    }
  }, []);

  const savePhotos = useCallback((newPhotos: Photo[]) => {
    setPhotos(newPhotos);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newPhotos));
    }
  }, []);

  const addPhoto = useCallback(async (file: File, uploadedBy?: string): Promise<Photo> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = async (e) => {
        // Extraemos solo el base64 puro (sin el prefijo data:image/...)
        const base64 = (e.target?.result as string).split(',')[1];
        
        try {
          // --- ENVÍO A IMGBB (ALTA CALIDAD) ---
          const formData = new FormData();
          formData.append("image", base64);

          const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
            method: "POST",
            body: formData
          });

          const resData = await response.json();

          if (resData.success) {
            // Creamos el objeto con la URL REAL de internet que nos da ImgBB
            const newPhoto: Photo = {
              id: resData.data.id,
              url: resData.data.url, 
              timestamp: Date.now(),
              uploadedBy,
            };

            // Actualizamos el estado y el almacenamiento local
            const updatedPhotos = [newPhoto, ...photos];
            savePhotos(updatedPhotos);
            resolve(newPhoto);
          } else {
            throw new Error("Error en la respuesta de ImgBB");
          }
        } catch (error) {
          console.error('Error subiendo a ImgBB:', error);
          reject(error);
        }
      };

      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }, [photos, savePhotos]);

  const deletePhoto = useCallback((id: string) => {
    const filtered = photos.filter(p => p.id !== id);
    savePhotos(filtered);
  }, [photos, savePhotos]);

  return {
    photos,
    isLoaded,
    addPhoto,
    uploadPhoto: addPhoto,
    deletePhoto,
  };
}