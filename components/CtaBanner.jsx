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
      <a href="tel:0742777989" className="btn-primary">
        ☏ 0742 777 989
      </a>
      <a href="tel:0752593893" className="btn-primary">
        ☏ 0752 593 893
      </a>
      <a href="#rezervare" className="btn-ghost" style={{borderColor: 'rgba(251,244,232,0.5)'}}>
        Formular rezervare →
      </a>
    </div>
  </section>
);

window.CtaBanner = CtaBanner;
