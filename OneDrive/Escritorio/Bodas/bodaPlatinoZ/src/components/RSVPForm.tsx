// src/components/RSVPForm.tsx
import { useState } from 'react';

interface RSVPFormProps {
  guestId: string;
  guestName: string;
  pasesTotales: number;
  onSuccess: () => void;
}

export default function RSVPForm({ guestId, guestName, pasesTotales, onSuccess }: RSVPFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rsvpData, setRsvpData] = useState({
    asistencia: 'si',
    pasesConfirmados: pasesTotales,
    restricciones: ''
  });

  const handleRsvpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://sheetdb.io/api/v1/i5tqs3tes8png/id/${guestId}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: {
            asistencia: rsvpData.asistencia,
            pases_confirmados: rsvpData.asistencia === 'si' ? rsvpData.pasesConfirmados : 0,
            restricciones: rsvpData.restricciones || 'Ninguna'
          }
        })
      });

      if (response.ok) {
        onSuccess();
      } else {
        alert("Error al conectar con el servidor de Zentria.");
      }
    } catch (error) {
      console.error(error);
      alert("Error de red. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="rsvp-section">
      <h3 className="section-title">CONFIRMA TU ASISTENCIA</h3>
      
      {/* INTEGRACIÓN DE GUESTNAME PARA PERSONALIZACIÓN Y FIX DE TS */}
      <p className="rsvp-subtitle">
        Hola <strong>{guestName}</strong>, por favor indícanos si podrás acompañarnos.
      </p>
      
      <form className="rsvp-form" onSubmit={handleRsvpSubmit}>
        <div className="form-group">
          <label>¿Asistirán al evento?</label>
          <select 
            value={rsvpData.asistencia}
            onChange={(e) => setRsvpData({...rsvpData, asistencia: e.target.value})}
            disabled={isSubmitting}
          >
            <option value="si">¡Sí, ahí estaremos!</option>
            <option value="no">Lo siento, no podremos asistir</option>
          </select>
        </div>

        {rsvpData.asistencia === 'si' && (
          <>
            <div className="form-group">
              <label>Confirmar pases (Máximo: {pasesTotales})</label>
              <select 
                value={rsvpData.pasesConfirmados}
                onChange={(e) => setRsvpData({...rsvpData, pasesConfirmados: parseInt(e.target.value)})}
                disabled={isSubmitting}
              >
                {[...Array(pasesTotales)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1} pases</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>¿Alguna restricción alimenticia?</label>
              <input 
                type="text" 
                placeholder="Ej. Sin mariscos, vegano..."
                value={rsvpData.restricciones}
                onChange={(e) => setRsvpData({...rsvpData, restricciones: e.target.value})}
                disabled={isSubmitting}
              />
            </div>
          </>
        )}

        <button type="submit" className="btn-submit" disabled={isSubmitting}>
          {isSubmitting ? 'GUARDANDO...' : 'CONFIRMAR Y VER MI PASE'}
        </button>
      </form>
    </section>
  );
}