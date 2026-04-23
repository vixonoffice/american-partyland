const SOCIAL_POSTS = [
  { type: 'img', src: 'images/princess-01.jpg' },
  { type: 'img', src: 'images/tipi-01.jpg' },
  { type: 'video', src: 'videos/video-2_fast.mp4' },
  { type: 'img', src: 'images/balloons-01.jpg' },
  { type: 'img', src: 'images/garden-01.jpg' },
  { type: 'img', src: 'images/princess-girl.jpg' },
];

const Contact = () => {
  const [faqOpen, setFaqOpen] = React.useState(0);
  const faqs = [
    {
      q: 'Cu cât timp înainte trebuie să rezerv?',
      a: 'Recomandăm 3–6 săptămâni pentru weekend, iar pentru perioadele aglomerate (mai, iunie, septembrie) chiar 2 luni. Pentru zilele lucrătoare putem găsi date și cu o săptămână înainte.',
    },
    {
      q: 'Aduceți voi mâncarea și băuturile?',
      a: 'Vesela (farfurii de unică folosință, tacâmuri, pahare), mâncarea, gustările și băuturile sunt în responsabilitatea dumneavoastră.',
    },
    {
      q: 'Câți copii putem aduce?',
      a: 'Locația poate găzdui maximum 20 de copii.',
    },
    {
      q: 'Ce vârste sunt potrivite?',
      a: 'Locația este dedicată copiilor cu vârste între 1 și 10 ani.',
    },
    {
      q: 'Cât durează o petrecere și cât costă?',
      a: 'Tariful standard este 750 lei pentru 3 ore. Prelungirea se face cu 200 lei/oră, cu rezervare în prealabil și în funcție de disponibilitate.',
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="section-head">
        <div className="label">
          <span className="label-num">05</span>
          <span className="eyebrow">Contact & Locație</span>
        </div>
        <h2 className="display">Ne găsești aici.</h2>
        <p className="trail">
          Sună-ne sau dă-ne un mesaj și răspundem la toate întrebările tale.
        </p>
      </div>

      <div className="contact-block">
        <div className="map-wrap">
          <div className="map-pin">
            <span>📍</span> Strada Cloșca 12B, Râmnicu Vâlcea
          </div>
          <iframe
            src="https://www.google.com/maps?q=Strada+Closca+12B+Ramnicu+Valcea&output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Harta American Partyland">
          </iframe>
        </div>
        <div className="contact-cards">
          <div className="contact-card">
            <div className="icon">📍</div>
            <div>
              <h4>Adresă</h4>
              <p>Strada Cloșca 12B<br/>Râmnicu Vâlcea</p>
            </div>
          </div>
          <a href="tel:0742777989" className="contact-card">
            <div className="icon">☏</div>
            <div>
              <h4>Telefon & WhatsApp</h4>
              <p>0742 777 989<br/>0752 593 893<br/>Luni–Duminică, 10:00 – 22:00</p>
            </div>
          </a>
          <div className="contact-card">
            <div className="icon">⏱</div>
            <div>
              <h4>Program</h4>
              <p>Luni–Duminică, 10:00 – 22:00</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{marginTop: 80}}>
        <div className="section-head">
          <div className="label">
            <span className="label-num">06</span>
            <span className="eyebrow">Social Media</span>
          </div>
          <h2 className="display">@americanpartyland</h2>
          <p className="trail">
            Urmărește-ne pe Instagram, TikTok și Facebook pentru momente live și inspirație.
          </p>
        </div>
        <div className="social-feed">
          {SOCIAL_POSTS.map((post, i) => (
            <a key={i} href="https://www.instagram.com/american.partyland/" className="social-post" target="_blank" rel="noopener">
              {post.type === 'img' ? (
                <img src={post.src} alt={`Post ${i+1}`} loading="lazy" />
              ) : (
                <video src={post.src} muted loop autoPlay playsInline />
              )}
              <span className="social-post-icon">◉</span>
            </a>
          ))}
        </div>
      </div>

      <div style={{marginTop: 80}}>
        <div className="section-head">
          <div className="label">
            <span className="label-num">07</span>
            <span className="eyebrow">Întrebări frecvente</span>
          </div>
          <h2 className="display">Ce ne întreabă părinții.</h2>
          <p className="trail">Dacă nu găsești răspunsul, scrie-ne și îți răspundem în aceeași zi.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item ${faqOpen === i ? 'open' : ''}`} onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}>
              <div className="faq-q">
                <span>{f.q}</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-a"><p style={{paddingTop: 4}}>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Contact = Contact;
