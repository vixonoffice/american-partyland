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
  );
};

window.Testimonials = Testimonials;
window.ExperienceStrip = () => null;
