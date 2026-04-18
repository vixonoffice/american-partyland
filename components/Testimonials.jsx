const TESTIMONIALS = [
  { name: 'Andreea M.', detail: 'mamă a Sofiei, 6 ani', quote: 'Cele mai mari râsete pe care le-am auzit de la fetița mea. Decorul princess a fost exact cum ni-l imaginam, iar copiii au avut spațiu să alerge până la apusul soarelui.', initial: 'A' },
  { name: 'Mihai P.', detail: 'tatăl lui David, 4 ani', quote: 'Am stresat până în ultima clipă din cauza vremii. A plouat — și s-au descurcat în 20 de minute să mute tot în salon. Petrecerea n-a avut niciun moment mort.', initial: 'M' },
  { name: 'Roxana B.', detail: 'mamă a gemenilor, 7 ani', quote: 'Doi copii, două teme diferite, un animator care a jonglat cu ambele. American Partyland a făcut imposibilul să pară ușor.', initial: 'R' },
];

const Testimonials = () => {
  const [active, setActive] = React.useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section className="testimonials">
      <div className="testimonial-carousel">
        <div>
          <div className="eyebrow" style={{color: 'rgba(255,255,255,0.7)', marginBottom: 24}}>
            ✦ Recenzii părinți
          </div>
          <blockquote className="testimonial-quote">
            "{t.quote}"
          </blockquote>
          <div className="testimonial-author">
            <div className="testimonial-avatar">{t.initial}</div>
            <div>
              <div className="testimonial-name">{t.name}</div>
              <div className="testimonial-detail">{t.detail}</div>
            </div>
          </div>
          <div className="testimonial-nav">
            <button onClick={() => setActive((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}>‹</button>
            <button onClick={() => setActive((active + 1) % TESTIMONIALS.length)}>›</button>
          </div>
        </div>
        <div className="testimonial-pill-stack">
          {TESTIMONIALS.map((ts, i) => (
            <div key={i} className={`testimonial-pill ${i === active ? 'active' : ''}`} onClick={() => setActive(i)}>
              <strong>{ts.name}</strong>
              {ts.detail}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceStrip = () => {
  const list = [
    { num: '01', title: 'Pregătim spațiul', kind: 'Înainte de sosire' },
    { num: '02', title: 'Întâmpinăm copiii cu recuzită tematică', kind: 'Minuta 0' },
    { num: '03', title: 'Jocuri, activități, atelier creativ', kind: '30–90 min' },
    { num: '04', title: 'Gustări, sucuri, pauza dulce', kind: 'La jumătate' },
    { num: '05', title: 'Tort, lumânări, cântec', kind: 'Momentul cheie' },
    { num: '06', title: 'Joacă liberă + foto de grup', kind: 'Finalul petrecerii' },
  ];
  return (
    <section className="xp-strip">
      <div>
        <div className="eyebrow" style={{color: 'var(--sun)', marginBottom: 18}}>
          ✦ Cum se întâmplă
        </div>
        <h2 className="display">O petrecere American Partyland, minut cu minut.</h2>
        <p>Patru ore construite cu atenție la detalii, conduse de o echipă care a făcut asta de sute de ori.</p>
      </div>
      <div className="xp-list">
        {list.map((x, i) => (
          <div key={i} className="xp-row">
            <div className="xp-num">{x.num}</div>
            <div className="xp-title">{x.title}</div>
            <div className="xp-kind">{x.kind}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

window.Testimonials = Testimonials;
window.ExperienceStrip = ExperienceStrip;
