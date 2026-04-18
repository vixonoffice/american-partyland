const CtaBanner = () => (
  <section className="cta-banner">
    <h2 className="display">
      Să facem <span className="accent">magie</span> împreună.
    </h2>
    <p>
      Sună-ne, dă-ne un mesaj pe WhatsApp sau completează formularul de rezervare.
      Te ascultăm și construim ziua perfectă împreună.
    </p>
    <div className="cta-banner-ctas">
      <a href="tel:0752592893" className="btn-primary">
        ☏ 0752 592 893
      </a>
      <a href="#rezervare" className="btn-ghost" style={{borderColor: 'rgba(251,244,232,0.5)'}}>
        Formular rezervare →
      </a>
    </div>
  </section>
);

window.CtaBanner = CtaBanner;
