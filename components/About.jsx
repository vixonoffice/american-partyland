const About = () => {
  return (
    <section id="despre" className="about">
      <div className="about-grid">
        <div className="about-copy">
          <div className="eyebrow" style={{color: 'var(--magenta)', marginBottom: 16}}>
            ✦ Despre noi
          </div>
          <h2 className="display">
            Un loc construit pentru râsetele lor.
          </h2>
          <p>
            American Partyland s-a născut dintr-o idee simplă: copiii au nevoie de spațiu.
            Spațiu să alerge pe iarbă, să se urce pe tobogane, să se ascundă în corturi și
            să-și închipuie că sunt prinți și prințese — fără grija timpului.
          </p>
          <p>
            Avem un spațiu generos în aer liber, amenajat cu pergole, mese cu scăunele colorate,
            tobogane gonflabile, trambuline și echipamente de joacă, plus un foișor închis și
            modern — perfect pentru orice vreme.
          </p>
          <div className="about-stats">
            <div>
              <div className="stat-num" style={{fontSize: 'clamp(22px, 3vw, 34px)'}}>Generos</div>
              <div className="stat-label">Spațiu privat + foișor</div>
            </div>
            <div>
              <div className="stat-num">120+</div>
              <div className="stat-label">Petreceri organizate</div>
            </div>
            <div>
              <div className="stat-num">1–10</div>
              <div className="stat-label">Ani, vârste recomandate</div>
            </div>
          </div>
        </div>
        <div className="about-media">
          <div className="about-media-main">
            <img src="images/house-01.jpg" alt="Casa American Partyland" />
          </div>
          <div className="about-media-float">
            <img src="images/tipi-01.jpg" alt="Cort tipi" />
          </div>
          <div className="about-caption">
            <span className="ball"></span>
            Deschis tot anul
          </div>
        </div>
      </div>
    </section>
  );
};

window.About = About;
