interface ProductProps {
  titulo: string;
  categoria: string;
  imagen: string;
  esNuevo?: boolean;
}

export default function ProductCard({ titulo, categoria, imagen, esNuevo }: ProductProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
      <div className="relative h-64 overflow-hidden bg-gray-200">
        {/* Placeholder de imagen con degradado elegante */}
        <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-zentria-dark to-zentria-primary opacity-90 group-hover:scale-110 transition-transform duration-500`}>
          <span className="text-white font-serif text-lg opacity-50">{imagen}</span>
        </div>
        {esNuevo && (
          <span className="absolute top-4 left-4 bg-zentria-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
            Nuevo
          </span>
        )}
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold text-zentria-primary uppercase tracking-widest mb-2">{categoria}</p>
        <h3 className="text-xl font-bold text-zentria-dark mb-4 group-hover:text-zentria-primary transition-colors">{titulo}</h3>
        <button className="w-full py-3 border-2 border-zentria-dark text-zentria-dark font-bold rounded-xl hover:bg-zentria-dark hover:text-white transition-all duration-300">
          Ver Detalles
        </button>
      </div>
    </div>
  );
}