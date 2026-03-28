const GalleryBronce = () => {
  // Arreglo con fotos de prueba elegantes.
  // Cuando tengas a tu cliente real, solo cambias estas URLs por sus fotos locales.
 const photos = [
// 1. EL VESTIDO: Close-up detallado de un majestuoso vestido de princesa rosa brillante.
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgz4zt-63vYpx3tZclNSkPpgE_1N8z_cCBdQ&s",
// 2. EL SALÓN: Vista panorámica de un salón de eventos elegantemente decorado con iluminación rosa y arreglos florales.
   "https://vestidos15.com/wp-content/uploads/2023/11/50-scaled.jpg",
 // 3. LOS DETALLES: Una composición delicada con la corona de cristales, los tacones de fiesta y el ramo de la quinceañera.
"https://i.pinimg.com/736x/81/c8/04/81c8048d279e7b51a392a5b1fedc2178.jpg",
// 4. EL PASTEL: Un espectacular pastel de XV años de varios pisos, decorado con flores de azúcar y detalles dorados.
"https://vestidos15.com/wp-content/uploads/2023/11/18-scaled.jpg"
 ];
  return (
    <section className="py-20 bg-rose-50 px-6 border-t border-rose-100/50">
      {/* Título corregido: Alta legibilidad, color vino oscuro, sin fondo azul */}
{/* La Frase o Declaración - ¡Forzado con Inline Style! */}
        <h2 
          className="text-2xl md:text-3xl font-serif italic mb-10 leading-relaxed"
          style={{ color: '#4c0519' }} /* <-- ¡Fuerza Bruta Directa! */
        >
          "Hay momentos inolvidables..."
        </h2>
      
      {/* Cuadrícula responsiva: 2 columnas en celular, 4 en computadora */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((url, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-xl shadow-sm aspect-[3/4] group cursor-pointer"
          >
            <img 
              src={url} 
              alt={`Sesión de fotos ${index + 1}`} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryBronce;