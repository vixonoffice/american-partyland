const FloatingSocials = () => {
  return (
    <div className="floating-socials">
      <a href="https://wa.me/40752592893" target="_blank" rel="noopener" aria-label="WhatsApp" className="whatsapp">
        <SocialIcon kind="whatsapp" />
      </a>
      <a href="https://www.instagram.com/american.partyland/" target="_blank" rel="noopener" aria-label="Instagram" className="instagram">
        <SocialIcon kind="instagram" />
      </a>
      <a href="https://www.tiktok.com/@american.partyland" target="_blank" rel="noopener" aria-label="TikTok" className="tiktok">
        <SocialIcon kind="tiktok" />
      </a>
      <a href="https://www.facebook.com/people/American-Partyland/61577150607618/" target="_blank" rel="noopener" aria-label="Facebook" className="facebook">
        <SocialIcon kind="facebook" />
      </a>
    </div>
  );
};

const Marquee = () => (
  <div className="marquee">
    <div className="marquee-track">
      {Array.from({length: 2}).map((_, k) => (
        <React.Fragment key={k}>
          <span className="marquee-item">Aniversări</span>
          <span className="marquee-item">Petreceri tematice</span>
          <span className="marquee-item">Party Premium</span>
          <span className="marquee-item">Copii 1–10 ani</span>
          <span className="marquee-item">Foișor modern</span>
          <span className="marquee-item">Râmnicu Vâlcea</span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

// Global floating particles — stars & balloons across entire page
const GLOBAL_PARTICLES = (() => {
  const items = [];
  const types = ['star', 'dot', 'balloon', 'sparkle'];
  const colors = ['--sun', '--magenta-light', '--mint', '--lilac', '--sky-light', '--coral'];
  for (let i = 0; i < 30; i++) {
    items.push({
      type: types[i % types.length],
      left: (Math.random() * 96 + 2).toFixed(1) + '%',
      delay: (Math.random() * 20).toFixed(1) + 's',
      dur: (12 + Math.random() * 16).toFixed(1) + 's',
      size: type => type === 'balloon' ? (14 + Math.random() * 12) : (5 + Math.random() * 9),
      color: colors[i % colors.length],
      drift: (-40 + Math.random() * 80).toFixed(0),
    });
  }
  return items;
})();

const GlobalParticles = () => (
  <div className="global-particles" aria-hidden="true">
    {GLOBAL_PARTICLES.map((p, i) => {
      const sz = typeof p.size === 'function' ? p.size(p.type) : p.size;
      return (
        <span
          key={i}
          className={`gp gp-${p.type}`}
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.dur,
            width: sz, height: sz,
            '--color': `var(${p.color})`,
            '--drift': p.drift + 'px',
          }}
        />
      );
    })}
  </div>
);

window.FloatingSocials = FloatingSocials;
window.Marquee = Marquee;
window.GlobalParticles = GlobalParticles;
