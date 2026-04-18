const SOCIAL_POSTS = [
  { type: 'img', src: 'images/princess-01.jpg' },
  { type: 'img', src: 'images/tipi-01.jpg' },
  { type: 'video', src: 'videos/video-2_noaudio.mp4' },
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
      q: 'Ce se întâmplă dacă plouă?',
      a: 'Salonul interior poate găzdui până la 40 de copii confortabil. Mutăm tot decorul din grădină înăuntru în aprox. 20 de minute, fără costuri suplimentare.',
    },
    {
      q: 'Aduceți voi tortul și mâncarea?',
      a: 'Putem colabora cu cofetăria noastră parteneră sau puteți aduce tortul de acasă. Pentru mâncare oferim catering la cerere sau permitem catering extern.',
    },
    {
      q: 'Câți copii putem aduce?',
      a: 'Între 8 și 30 de copii este intervalul ideal. Putem găzdui până la 40 de copii cu supliment pentru animatori.',
    },
    {
      q: 'Ce vârste sunt potrivite?',
      a: 'Locația e proiectată pentru copii 3–12 ani. Avem echipamente separate pentru cei mici și cei mai mari.',
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="section-head">
        <div className="label">
          <span className="label-num">05</span>
          <span className="eyebrow">Contact & Locație</span>
        </div>
        <h2 className="display">Ne găsești aici. Vino să vezi locația.</h2>
        <p className="trail">
          Programează o vizită gratuită. Te plimbăm prin grădină, prin salon și răspundem
          la toate întrebările.
        </p>
      </div>

      <div className="contact-block">
        <div className="map-wrap">
          <div className="map-pin">
            <span>📍</span> Strada Cloșca, Râmnicu Vâlcea
          </div>
          <iframe
            src="https://www.google.com/maps?q=Strada+Closca+Ramnicu+Valcea&output=embed"
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
              <p>Strada Cloșca<br/>240157 Râmnicu Vâlcea<br/>Vâlcea, România</p>
            </div>
          </div>
          <a href="tel:0752592893" className="contact-card">
            <div className="icon">☏</div>
            <div>
              <h4>Telefon & WhatsApp</h4>
              <p>0752 592 893<br/>Luni–Duminică, 9:00 – 20:00</p>
            </div>
          </a>
          <div className="contact-card">
            <div className="icon">⏱</div>
            <div>
              <h4>Program vizite</h4>
              <p>Marți–Vineri, 10:00 – 17:00<br/>Cu programare prealabilă</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{marginTop: 140}}>
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

      <div style={{marginTop: 140}}>
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
