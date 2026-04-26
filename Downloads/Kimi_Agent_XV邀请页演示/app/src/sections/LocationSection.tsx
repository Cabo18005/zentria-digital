import { useState } from 'react';
import { MapPin, Clock, Navigation, Church, PartyPopper } from 'lucide-react';
import { eventConfig, formatHora } from '@/config/event';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function LocationSection() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [activeTab, setActiveTab] = useState('ceremonia');

  const openInMaps = (lat: number, lng: number) => {
    // La URL debe ser EXACTAMENTE así para que el GPS no falle
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_blank');
  };
  return (
    <section ref={ref} className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h3 className="font-cinzel text-2xl md:text-3xl text-[#d4af37] text-center mb-4">
          Ubicaciones
        </h3>
        <p className="text-white/60 text-center mb-10">
          Te compartimos las ubicaciones del evento
        </p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-white/5 mb-8">
            <TabsTrigger 
              value="ceremonia" 
              className="data-[state=active]:bg-[#d4af37] data-[state=active]:text-black"
            >
              <Church className="w-4 h-4 mr-2" />
              Ceremonia
            </TabsTrigger>
            <TabsTrigger 
              value="recepcion"
              className="data-[state=active]:bg-[#d4af37] data-[state=active]:text-black"
            >
              <PartyPopper className="w-4 h-4 mr-2" />
              Recepción
            </TabsTrigger>
          </TabsList>

          {/* Ceremonia */}
          <TabsContent value="ceremonia">
            <div className="glass-card p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Info */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
                        <Church className="w-6 h-6 text-[#d4af37]" />
                      </div>
                      <div>
                        <h4 className="font-cinzel text-xl text-[#d4af37]">Ceremonia Religiosa</h4>
                        <p className="text-white/60 text-sm">Misa de Acción de Gracias</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">{eventConfig.ceremonia.nombre}</p>
                        <p className="text-white/60 text-sm">{eventConfig.ceremonia.direccion}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                      <p className="text-white">{formatHora(eventConfig.ceremonia.hora)}</p>
                    </div>
                  </div>

                  <Button
                    onClick={() => openInMaps(eventConfig.ceremonia.latitud, eventConfig.ceremonia.longitud)}
                    className="w-full bg-[#d4af37] text-black hover:bg-[#f4e5c2]"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Cómo llegar
                  </Button>
                </div>

                {/* Mapa */}
                <div className="rounded-xl overflow-hidden border border-[#d4af37]/20 h-[300px] md:h-auto min-h-[300px]">
                  <iframe
                    src={eventConfig.ceremonia.mapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '300px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de la Iglesia"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Recepción */}
          <TabsContent value="recepcion">
            <div className="glass-card p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Info */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
                        <PartyPopper className="w-6 h-6 text-[#d4af37]" />
                      </div>
                      <div>
                        <h4 className="font-cinzel text-xl text-[#d4af37]">Recepción</h4>
                        <p className="text-white/60 text-sm">Cena y Celebración</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">{eventConfig.recepcion.nombre}</p>
                        <p className="text-white/60 text-sm">{eventConfig.recepcion.direccion}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                      <p className="text-white">{formatHora(eventConfig.recepcion.hora)}</p>
                    </div>
                  </div>

                  <Button
                    onClick={() => openInMaps(eventConfig.recepcion.latitud, eventConfig.recepcion.longitud)}
                    className="w-full bg-[#d4af37] text-black hover:bg-[#f4e5c2]"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Cómo llegar
                  </Button>
                </div>

                {/* Mapa */}
                <div className="rounded-xl overflow-hidden border border-[#d4af37]/20 h-[300px] md:h-auto min-h-[300px]">
                  <iframe
                    src={eventConfig.recepcion.mapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '300px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de la Recepción"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
