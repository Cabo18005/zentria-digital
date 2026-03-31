export default function Beneficios() {
  const items = [
    {
      titulo: "Ahorro de Tiempo",
      descripcion: "Olvida las entregas físicas. Envía tus invitaciones a todos tus contactos en segundos.",
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      )
    },
    {
      titulo: "RSVP Interactivo",
      descripcion: "Tus invitados confirman asistencia con un clic y recibes las respuestas al instante.",
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      )
    },
    {
      titulo: "Amigable con WhatsApp",
      descripcion: "Formato optimizado para compartir por mensaje con una previsualización elegante.",
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-4 p-6 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-gray-50">
            <div className="p-4 bg-blue-50 text-zentria-primary rounded-full">
              {item.icono}
            </div>
            <h3 className="text-xl font-bold text-zentria-dark">{item.titulo}</h3>
            <p className="text-gray-500 leading-relaxed">
              {item.descripcion}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}