const FooterBronce = () => {
  return (
    <footer className="py-10 bg-rose-950 text-center flex flex-col items-center justify-center border-t border-rose-900/50">
      <p className="text-rose-200/60 text-xs font-light tracking-widest uppercase mb-2">
        Diseñado con ♥ por
      </p>
      <a 
        href="https://www.facebook.com/expresmid" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-rose-50 text-sm font-serif italic tracking-wide hover:text-rose-300 transition-colors"
      >
        Zentria Digital
      </a>
      <p className="text-rose-200/40 text-[10px] mt-6">
        © {new Date().getFullYear()} Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default FooterBronce;