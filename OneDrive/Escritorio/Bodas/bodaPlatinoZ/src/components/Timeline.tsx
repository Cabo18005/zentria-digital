// src/components/Timeline.tsx
import { FaChurch, FaGlassCheers, FaMusic } from 'react-icons/fa';

export default function Timeline() {
  return (
    <section className="timeline-section">
      <div className="timeline-item">
        <FaChurch className="timeline-icon" />
        <h4>Ceremonia</h4>
        <p>18:00 hrs</p>
      </div>
      <div className="timeline-item">
        <FaGlassCheers className="timeline-icon" />
        <h4>Recepción</h4>
        <p>20:00 hrs</p>
      </div>
      <div className="timeline-item">
        <FaMusic className="timeline-icon" />
        <h4>Cena y Baile</h4>
        <p>21:00 hrs</p>
      </div>
    </section>
  );
}