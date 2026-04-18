const Portfolio = () => {
  const events = [
    { img: 'images/princess-02.jpg', tag: 'Princess Party', name: 'Anastasia împlinește 6 ani', date: 'Septembrie 2025' },
    { img: 'images/kid-slide-03.jpg', tag: 'Adventure', name: 'Matei & pirații', date: 'August 2025' },
    { img: 'images/tipi-02.jpg', tag: 'Pajama Party', name: 'Unicorn Sleepover', date: 'Iulie 2025' },
    { img: 'images/princess-03.jpg', tag: 'Disney', name: 'Sărbătoarea Sofiei', date: 'Octombrie 2025' },
    { img: 'images/balloons-01.jpg', tag: 'Baby Shower', name: 'Primul an Emma', date: 'Noiembrie 2025' },
    { img: 'images/garden-03.jpg', tag: 'Garden Party', name: 'Clasa a II-a, final de an', date: 'Iunie 2025' },
  ];
  return (
    <section className="section">
      <div className="section-head">
        <div className="label">
          <span className="label-num">03</span>
          <span className="eyebrow">Evenimente recente</span>
        </div>
        <h2 className="display">Povești pe care nu le mai uită nimeni.</h2>
        <p className="trail">
          O selecție din ultimele luni — aniversări, botezuri, party-uri tematice.
        </p>
      </div>
      <div className="events-grid">
        {events.map((e, i) => (
          <div key={i} className="event-card">
            <img src={e.img} alt={e.name} loading="lazy" />
            <div className="event-meta">
              <span className="tag">{e.tag}</span>
              <h4>{e.name}</h4>
              <div className="date">{e.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

window.Portfolio = Portfolio;
