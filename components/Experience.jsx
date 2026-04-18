const Experience = () => {
  const steps = [
    { n: '01', title: 'Rezervă data', kind: 'Formular online' },
    { n: '02', title: 'Alegem împreună tema', kind: 'Apel de 15 min' },
    { n: '03', title: 'Pregătim decorul', kind: 'Cu o zi înainte' },
    { n: '04', title: 'Voi veniți doar cu tortul', kind: 'Ziua petrecerii' },
    { n: '05', title: 'Trimitem fotografiile', kind: 'După eveniment' },
  ];
  return (
    <section className="xp-strip">
      <div>
        <div className="eyebrow" style={{color: 'var(--magenta)', marginBottom: 16}}>✦ Cum funcționează</div>
        <h2 className="display">De la rezervare la primul „La mulți ani!"</h2>
        <p>
          Organizarea unei petreceri de copii nu ar trebui să fie o bătaie de cap.
          Cu noi, tot ce ai de făcut este să alegi data și tema. Restul se întâmplă
          natural.
        </p>
        <a href="#rezervare" className="btn-primary">Începe acum →</a>
      </div>
      <div className="xp-list">
        {steps.map((s, i) => (
          <div key={i} className="xp-row">
            <span className="xp-num">{s.n}</span>
            <span className="xp-title">{s.title}</span>
            <span className="xp-kind">{s.kind}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

window.Experience = Experience;
