const Marquee = () => {
  const items = [
    'Aniversări copii', 'Botez & Mărțișor', 'Petreceri tematice',
    'Decor personalizat', 'Spațiu exterior 1.000 m²', 'Saloane interioare',
    'Animatori & facepainting', 'Catering la cerere',
  ];
  const all = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {all.map((t, i) => <span key={i} className="marquee-item">{t}</span>)}
      </div>
    </div>
  );
};

window.Marquee = Marquee;
