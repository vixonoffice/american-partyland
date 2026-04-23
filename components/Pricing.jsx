const Pricing = () => {
  return (
    <section id="tarife" className="section">
      <div className="section-head">
        <div className="label">
          <span className="label-num">03</span>
          <span className="eyebrow">Tarife</span>
        </div>
        <h2 className="display">Petreceri între 1–10 ani.</h2>
        <p className="trail">
          Un spațiu sigur, colorat și dedicat 100% copiilor — rezervat exclusiv petrecerilor pentru cei mici.
        </p>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28, maxWidth: 900, margin: '0 auto'}}>
        <div className="service-card magenta" style={{textAlign: 'center'}}>
          <div className="service-icon" style={{fontSize: 48}}>🎉</div>
          <h3 style={{fontSize: 'clamp(28px, 4vw, 44px)', fontFamily: 'Fraunces, serif', fontStyle: 'italic', margin: '12px 0 8px'}}>750 lei</h3>
          <p style={{fontWeight: 700, marginBottom: 8}}>3 ore de distracție</p>
          <p style={{fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.6}}>
            Acces complet la spațiul de joacă în aer liber și foișorul închis, modern.
          </p>
          <div className="service-features" style={{marginTop: 16}}>
            <span>Max. 20 copii</span>
            <span>Vârste 1–10 ani</span>
            <span>Spațiu privat</span>
          </div>
        </div>

        <div className="service-card sun" style={{textAlign: 'center'}}>
          <div className="service-icon" style={{fontSize: 48}}>⏰</div>
          <h3 style={{fontSize: 'clamp(28px, 4vw, 44px)', fontFamily: 'Fraunces, serif', fontStyle: 'italic', margin: '12px 0 8px'}}>+200 lei/oră</h3>
          <p style={{fontWeight: 700, marginBottom: 8}}>Prelungire</p>
          <p style={{fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.6}}>
            Cu rezervare în prealabil, în funcție de disponibilitate.
          </p>
          <div className="service-features" style={{marginTop: 16}}>
            <span>Program 10:00–22:00</span>
            <span>La cerere</span>
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: 700,
        margin: '40px auto 0',
        background: 'var(--cream-2)',
        borderRadius: 20,
        padding: '24px 28px',
        fontSize: 14,
        color: 'var(--ink-soft)',
        lineHeight: 1.8,
        textAlign: 'center',
      }}>
        <strong style={{color: 'var(--ink)'}}>Important:</strong> Vesela (farfurii de unică folosință, tacâmuri, pahare),
        mâncarea, gustările și băuturile sunt în responsabilitatea dumneavoastră.
        Locația este rezervată exclusiv petrecerilor pentru copii.
      </div>
    </section>
  );
};

window.Pricing = Pricing;
