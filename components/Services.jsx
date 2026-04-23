const Services = () => {
  return (
    <section id="servicii" className="section">
      <div className="section-head">
        <div className="label">
          <span className="label-num">01</span>
          <span className="eyebrow">Servicii</span>
        </div>
        <h2 className="display">
          Aniversări clasice pentru copii fericiți.
        </h2>
        <p className="trail">
          Fiecare petrecere e construită în jurul copilului sărbătorit — trei ore de bucurie,
          joacă în aer liber și momente pe care le vor povesti mult timp.
        </p>
      </div>

      <div className="services-grid" style={{justifyContent: 'center'}}>
        <div className="service-card sun" style={{maxWidth: 520}}>
          <div className="service-num">01</div>
          <div className="service-icon">🎪</div>
          <h3>Aniversări clasice</h3>
          <p>Trei ore de bucurie cu acces integral la spațiul exterior și foișor. Echipamente de joacă, tobogane gonflabile, masă cu scăunele colorate.</p>
          <div className="service-features">
            <span>3h petrecere</span>
            <span>Exterior + foișor</span>
            <span>Max 20 copii</span>
          </div>
          <div className="service-arrow">→</div>
        </div>
      </div>
    </section>
  );
};

window.Services = Services;
