const Services = () => {
  const services = [
    {
      cls: 'magenta', num: '01', icon: '👑',
      title: 'Petreceri tematice',
      desc: 'Prințese, pirați, supereroi, unicorni sau jungla. Construim povestea și decorul pentru tema aleasă de copilul tău.',
      features: ['Decor complet', 'Recuzită', 'Favors'],
    },
    {
      cls: 'sun', num: '02', icon: '🎪',
      title: 'Aniversări clasice',
      desc: 'Patru ore de bucurie cu acces integral la grădină și salon. Echipamente de joacă, tobogane gonflabile, masă cu scăunele colorate.',
      features: ['4h petrecere', 'Animator', 'Grădină + salon'],
    },
    {
      cls: 'sky', num: '03', icon: '🏰',
      title: 'Party Premium',
      desc: 'Pachetul all-inclusive cu DJ, foto/video profesional, make-up pentru sărbătorit și experiențe memorabile pentru oaspeți.',
      features: ['DJ', 'Foto/video', 'Costumație'],
    },
    {
      cls: 'dark', num: '04', icon: '🎈',
      title: 'Botez & Mărțișor',
      desc: 'Locație cu două saloane, decor rafinat și meniu personalizat. Atmosfera perfectă pentru cei mai mici invitați ai familiei.',
      features: ['Până la 50 pers', 'Meniu personalizat', 'Decor rafinat'],
    },
    {
      cls: 'grass', num: '05', icon: '🎨',
      title: 'Ateliere creative',
      desc: 'Pictură pe față, modelaj, gătit pentru pitici, atelier de prăjituri. Momente de plăcere care îmbină distracția cu învățarea.',
      features: ['Materiale incluse', '2h atelier', 'Grup 8–15'],
    },
    {
      cls: 'lilac', num: '06', icon: '📸',
      title: 'Ședințe foto',
      desc: 'Închiriere pentru ședințe foto cu copii, maternitate sau family. Decor de sezon, pergole, corturi tipi, recuzită variată.',
      features: ['1–3 ore', 'Recuzită', 'Decor sezonier'],
    },
  ];

  return (
    <section id="servicii" className="section">
      <div className="section-head">
        <div className="label">
          <span className="label-num">01</span>
          <span className="eyebrow">Servicii</span>
        </div>
        <h2 className="display">
          Alege pachetul. Noi ne ocupăm de restul.
        </h2>
        <p className="trail">
          Fiecare petrecere e construită în jurul copilului sărbătorit — nu în jurul unei
          liste standard. Pachetele sunt punctul de plecare.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className={`service-card ${s.cls}`}>
            <div className="service-num">{s.num}</div>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="service-features">
              {s.features.map((f, j) => <span key={j}>{f}</span>)}
            </div>
            <div className="service-arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  );
};

window.Services = Services;
