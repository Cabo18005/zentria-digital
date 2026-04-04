import React from 'react';

// Definimos qué propiedades va a recibir nuestro componente
interface PhoneMockupProps {
  demoUrl: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ demoUrl }) => {
  return (
    <div className="flex justify-center items-center py-10">
      {/* Contenedor del teléfono */}
      <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[650px] w-[320px] shadow-2xl">
        
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 w-40 mx-auto rounded-b-3xl z-20"></div>

        {/* Pantalla del teléfono */}
        <div className="overflow-hidden rounded-[1.5rem] bg-white h-full w-full relative">
          <iframe
            src={demoUrl}
            className="w-full h-full border-none"
            title="Demo Invitación Zentria"
          ></iframe>
        </div>
        
      </div>
    </div>
  );
};

export default PhoneMockup;