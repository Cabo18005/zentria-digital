// src/components/Header.tsx
interface HeaderProps {
  guestName?: string; // El signo '?' indica que puede ser opcional
}

export default function Header({ guestName = "" }: HeaderProps) {
  return (
    <header>
      <div className="header-brand">ZENTRIA DIGITAL</div>
      <h1 className="header-title">BODA PLATINO</h1>
      {/* Usamos un condicional: si hay nombre, lo muestra, si no, pone un espacio */}
      <div className="header-subtitle">
        PARA: {guestName ? guestName.toUpperCase() : "CARGANDO..."}
      </div>
    </header>
  );
}