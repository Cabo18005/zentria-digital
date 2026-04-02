// src/components/TicketVIP.tsx
import { QRCodeSVG } from 'qrcode.react';

// Definimos qué datos necesita recibir este componente
interface TicketVIPProps {
  guestId: string;
  guestName: string;
  pasesTotales: number;
}

export default function TicketVIP({ guestId, guestName, pasesTotales }: TicketVIPProps) {
  return (
    <section className="vip-ticket-section">
      <div className="ticket-card">
        <div className="qr-container">
          {/* El QR se genera basado en el ID del invitado */}
          <QRCodeSVG value={`SCANNER_${guestId}`} size={100} fgColor="#4A4A4A" />
        </div>
        <div className="ticket-details">
          <h3 className="ticket-title">ACCESO CONFIRMADO</h3>
          <p className="ticket-info">Este código es único para la {guestName}.</p>
          <div className="ticket-data">
            <span><strong>Pases otorgados:</strong> {pasesTotales}</span>
          </div>
        </div>
      </div>
    </section>
  );
}