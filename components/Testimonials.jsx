const TESTIMONIALS = [
  { name: 'Andreea M.', detail: 'mamă a Sofiei, 6 ani', quote: 'Cele mai mari râsete pe care le-am auzit de la fetița mea. Decorul princess a fost exact cum ni-l imaginam, iar copiii au avut spațiu să alerge până la apusul soarelui.', initial: 'A' },
  { name: 'Mihai P.', detail: 'tatăl lui David, 4 ani', quote: 'Spațiul e frumos amenajat, copiii s-au simțit ca acasă. Totul a decurs perfect, fără niciun moment mort. Recomandăm cu drag!', initial: 'M' },
  { name: 'Roxana B.', detail: 'mamă a gemenilor, 7 ani', quote: 'Am ales American Partyland pentru că e un spațiu dedicat 100% copiilor. Atmosfera e veselă, colorată și sigură. Băieții au vorbit despre petrecere săptămâni întregi!', initial: 'R' },
];

const Testimonials = () => {
  const [active, setActive] = React.useState(0);
  const t = TESTIMONIALS[active];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActive(a => (a + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials">
      <div className="testimonial-carousel">
        <div>
          <div className="eyebrow" style={{color: 'rgba(255,255,255,0.7)', marginBottom: 24}}>
            ✦ Recenzii părinți
          </div>
          <blockquote key={active} className="testimonial-quote testimonial-quote-anim">
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
    <div className="review-strip">
      <div className="review-strip-inner">
        <div className="review-strip-stars">
          {[1,2,3,4,5].map(i => (
            <svg key={i} width="28" height="28" viewBox="0 0 24 24" fill="#FFC64D">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </div>
        <div className="review-strip-text">
          <strong>Ai fost la noi?</strong>
          <span>Lasă o recenzie pe Google și ajuți alți părinți să descopere locul.</span>
        </div>
        <a
          href="https://share.google/exSDrM8t9Scu802Q3"
          target="_blank"
          rel="noopener noreferrer"
          className="review-strip-btn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{flexShrink:0}}>
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Scrie o recenzie Google
        </a>
      </div>
    </div>
  );
};

window.Testimonials = Testimonials;
window.ExperienceStrip = () => null;
