const GALLERY_DATA = [
  { src: 'images/garden-01.jpg', cat: 'Grădină', size: 'g-wide' },
  { src: 'images/princess-01.jpg', cat: 'Decor', size: 'g-tall' },
  { src: 'images/tipi-01.jpg', cat: 'Corturi', size: 'g-sm' },
  { src: 'images/balloons-01.jpg', cat: 'Baloane', size: 'g-sm' },
  { src: 'images/kid-slide-01.jpg', cat: 'Joacă', size: 'g-md' },
  { src: 'images/interior-01.jpg', cat: 'Salon', size: 'g-lg' },
  { src: 'images/princess-02.jpg', cat: 'Decor', size: 'g-md' },
  { src: 'images/garden-02.jpg', cat: 'Grădină', size: 'g-xl' },
  { src: 'images/tipi-02.jpg', cat: 'Corturi', size: 'g-md' },
  { src: 'images/terrace-01.jpg', cat: 'Terasă', size: 'g-md' },
  { src: 'images/princess-03.jpg', cat: 'Decor', size: 'g-md' },
  { src: 'images/kid-slide-02.jpg', cat: 'Joacă', size: 'g-md' },
];
const CATEGORIES = ['Toate', 'Grădină', 'Decor', 'Salon', 'Corturi', 'Joacă', 'Baloane', 'Terasă'];

const Gallery = () => {
  const [cat, setCat] = React.useState('Toate');
  const [lightbox, setLightbox] = React.useState(-1);

  const filtered = cat === 'Toate' ? GALLERY_DATA : GALLERY_DATA.filter(g => g.cat === cat);

  const nav = (dir) => {
    setLightbox((lightbox + dir + filtered.length) % filtered.length);
  };

  React.useEffect(() => {
    if (lightbox === -1) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(-1);
      if (e.key === 'ArrowLeft') nav(-1);
      if (e.key === 'ArrowRight') nav(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, filtered.length]);

  return (
    <section id="galerie" className="section">
      <div className="section-head">
        <div className="label">
          <span className="label-num">03</span>
          <span className="eyebrow">Galerie</span>
        </div>
        <h2 className="display">Din grădina noastră.</h2>
        <p className="trail">Decor, joc, spațiu. Câteva imagini din petrecerile pe care le-am găzduit.</p>
      </div>

      <div className="gallery-filter">
        {CATEGORIES.map(c => (
          <button key={c} className={cat === c ? 'active' : ''} onClick={() => setCat(c)}>
            {c}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filtered.map((g, i) => (
          <div key={g.src + i} className={`gallery-item ${g.size}`} onClick={() => setLightbox(i)}>
            <img src={g.src} alt={g.cat} loading="lazy" />
            <span className="gallery-tag">{g.cat}</span>
          </div>
        ))}
      </div>

      {lightbox !== -1 && (
        <div className="lightbox" onClick={() => setLightbox(-1)}>
          <button className="lightbox-close">✕</button>
          <button className="lightbox-nav prev" onClick={(e) => {e.stopPropagation(); nav(-1);}}>‹</button>
          <img src={filtered[lightbox].src} alt="" onClick={e => e.stopPropagation()} />
          <button className="lightbox-nav next" onClick={(e) => {e.stopPropagation(); nav(1);}}>›</button>
        </div>
      )}
    </section>
  );
};

window.Gallery = Gallery;
