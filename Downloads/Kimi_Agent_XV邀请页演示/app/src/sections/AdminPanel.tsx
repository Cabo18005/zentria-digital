import { useState } from 'react';
import { usePhotoGallery } from '@/hooks/usePhotoGallery';
import { Trash2, Users, Image as ImageIcon, CheckCircle, XCircle } from 'lucide-react';
import { eventConfig } from '@/config/event';
import { showToast } from '@/components/Toast';

export function AdminPanel() {
  const [activeTab, setActiveTab] = useState<'fotos' | 'invitados'>('fotos');
  const { photos, deletePhoto } = usePhotoGallery();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 pb-20">
      {/* Header del Panel */}
      <header className="max-w-6xl mx-auto mb-10 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 pb-6">
        <div>
          <h1 className="font-cinzel text-2xl text-[#d4af37]">Panel de Control</h1>
          <p className="text-white/40 text-sm italic">XV Años - {eventConfig.nombre} {eventConfig.apellidos}</p>
        </div>
        
        {/* Switcher de Pestañas */}
        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
          <button 
            onClick={() => setActiveTab('fotos')}
            className={`px-6 py-2 rounded-lg transition-all flex items-center gap-2 ${activeTab === 'fotos' ? 'bg-[#d4af37] text-black font-bold' : 'hover:bg-white/5'}`}
          >
            <ImageIcon className="w-4 h-4" /> Fotos
          </button>
          <button 
            onClick={() => setActiveTab('invitados')}
            className={`px-6 py-2 rounded-lg transition-all flex items-center gap-2 ${activeTab === 'invitados' ? 'bg-[#d4af37] text-black font-bold' : 'hover:bg-white/5'}`}
          >
            <Users className="w-4 h-4" /> Invitados
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        {/* SECCIÓN DE FOTOS */}
        {activeTab === 'fotos' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-cinzel mb-6 flex items-center gap-2">
              Moderación de Galería <span className="text-[#d4af37] text-sm">({photos.length} fotos)</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {photos.map((photo) => (
                <div key={photo.id} className="relative aspect-square group rounded-lg overflow-hidden border border-white/10">
                  <img src={photo.url} className="w-full h-full object-cover" alt="Galería" />
                  <button 
                    onClick={() => {
                      if(window.confirm('¿Borrar definitivamente?')) {
                        deletePhoto(photo.id);
                        showToast('Foto eliminada', 'success');
                      }
                    }}
                    className="absolute top-2 right-2 p-2 bg-red-600 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECCIÓN DE INVITADOS */}
        {activeTab === 'invitados' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 overflow-x-auto">
              <h2 className="text-xl font-cinzel mb-6">Lista de Confirmación (Google Sheets)</h2>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-[#d4af37] text-sm uppercase tracking-wider">
                    <th className="pb-4 pr-4">Familia/Invitado</th>
                    <th className="pb-4 pr-4 text-center">Pases</th>
                    <th className="pb-4 pr-4 text-center">Mesa</th>
                    <th className="pb-4 text-right">Estatus</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  {/* Ejemplo de fila usando los iconos CheckCircle y XCircle para que TS no de error */}
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 font-medium text-white">Familia Bacelis</td>
                    <td className="py-4 text-center text-lg">4</td>
                    <td className="py-4 text-center font-bold text-[#d4af37]">5</td>
                    <td className="py-4 text-right">
                      <div className="flex items-center justify-end gap-2 text-green-400">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-xs uppercase font-bold">Confirmado</span>
                      </div>
                    </td>
                  </tr>
                  {/* Ejemplo de fila con XCircle para cubrir el otro icono */}
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors opacity-50">
                    <td className="py-4 font-medium text-white">Familia Desconocida</td>
                    <td className="py-4 text-center text-lg">2</td>
                    <td className="py-4 text-center font-bold">-</td>
                    <td className="py-4 text-right">
                      <div className="flex items-center justify-end gap-2 text-red-400">
                        <XCircle className="w-4 h-4" />
                        <span className="text-xs uppercase font-bold">Cancelado</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-8 p-4 bg-[#d4af37]/5 rounded-xl border border-[#d4af37]/20 text-center">
                <p className="text-sm text-[#d4af37]">
                  Tip: Para editar mesas o pases, abre directamente el archivo de Google Sheets.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}