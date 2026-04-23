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

      <div className="service-showcase">
        <div className="service-showcase-left">
          <div className="service-showcase-badge">
            <span>✦</span> Serviciu principal
          </div>
          <h3>Aniversări<br/>clasice</h3>
          <p>Trei ore de bucurie cu acces integral la spațiul exterior și foișor. Echipamente de joacă, tobogane gonflabile, masă cu scăunele colorate — totul pregătit pentru copilul tău.</p>
          <div className="service-showcase-features">
            <span>3h petrecere exclusivă</span>
            <span>Spațiu generos exterior</span>
            <span>Foișor modern</span>
            <span>Max 20 copii</span>
            <span>Echipamente joacă incluse</span>
          </div>
          <div className="service-showcase-cta">
            <a href="#rezervare" className="btn-primary">Rezervă acum <span className="arrow">→</span></a>
          </div>
        </div>
        <div className="service-showcase-right">
          <img src="images/garden-01.jpg" alt="Spațiu exterior American Partyland" />
        </div>
      </div>
    </section>
  );
};

window.Services = Services;
