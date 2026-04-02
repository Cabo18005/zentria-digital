// src/components/ImportantDetails.tsx
export default function ImportantDetails() {
  return (
    <section className="details-section">
      <div className="detail-box">
        <h4 className="detail-title">CÓDIGO DE VESTIMENTA</h4>
        <p className="detail-text">Formal / Etiqueta Rigurosa</p>
        <p className="detail-subtext">Nos reservamos el color blanco.</p>
      </div>
      <div className="detail-box">
        <h4 className="detail-title">MESA DE REGALOS</h4>
        <p className="detail-text">Tu presencia es nuestro mejor regalo, pero si deseas tener un detalle con nosotros:</p>
        <a href="https://mesaderegalos.liverpool.com.mx/?gclsrc=aw.ds&gad_source=1&gad_campaignid=23556451624&gclid=Cj0KCQjwp7jOBhDGARIsABe7C4fZme_V-2z4rUH-c45gIpDGvZXpuAzH5DXzfbfea5FU6sfAnZ3n-aoaAm8MEALw_wcB" className="btn-gift">Ver Opciones de Regalo</a>
      </div>
    </section>
  );
}