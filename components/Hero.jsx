const PARTICLES = [
  { cls: '',      left: '12%',  top: '22%', delay: '0s',    w: 8,  h: 8  },
  { cls: 'star',  left: '72%',  top: '18%', delay: '1.4s',  w: 13, h: 13 },
  { cls: 'pink',  left: '88%',  top: '58%', delay: '0.8s',  w: 7,  h: 7  },
  { cls: '',      left: '6%',   top: '68%', delay: '2.2s',  w: 5,  h: 5  },
  { cls: 'star',  left: '52%',  top: '78%', delay: '1.7s',  w: 11, h: 11 },
  { cls: 'mint',  left: '38%',  top: '12%', delay: '0.4s',  w: 6,  h: 6  },
  { cls: 'star',  left: '24%',  top: '82%', delay: '3.1s',  w: 10, h: 10 },
  { cls: '',      left: '94%',  top: '35%', delay: '1.9s',  w: 8,  h: 8  },
  { cls: 'pink',  left: '62%',  top: '90%', delay: '2.6s',  w: 5,  h: 5  },
  { cls: 'star',  left: '80%',  top: '72%', delay: '0.6s',  w: 9,  h: 9  },
];

const Hero = () => {
  return (
    <section id="acasa" className="hero">
      <div className="hero-video-wrap">
        <video
          id="hero-video"
          autoPlay muted loop playsInline
          webkit-playsinline=""
          disableRemotePlayback
          preload="auto"
          poster="images/garden-01.jpg"
        >
          <source src="videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span key={i} className={`hero-particle ${p.cls}`}
            style={{left: p.left, top: p.top, animationDelay: p.delay, width: p.w, height: p.h}} />
        ))}
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span className="dot"></span>
            <span>Acceptăm rezervări pentru 2026</span>
          </div>
          <h1 className="display">
            Copilăria se<br/>
            <span className="accent">sărbătorește</span><br/>
            <span className="accent-2">sub cerul liber</span>.
          </h1>
          <p className="hero-lede">
            American Partyland este locul unde aniversările copiilor devin amintiri.
            Spațiu generos de joacă, decor personalizat și foișor —
            în inima Râmnicului Vâlcea.
          </p>
          <div className="hero-ctas">
            <a href="#rezervare" className="btn-primary">
              Contactează-ne <span className="arrow">→</span>
            </a>
          </div>
        </div>
        <div className="hero-side">
          <div className="hero-badge-card">
            <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--magenta)', marginBottom: 10}}>Locația noastră</div>
            <div className="big" style={{fontSize: 'clamp(20px, 3vw, 34px)', lineHeight: 1.15, marginBottom: 8}}>Spațiu generos</div>
            <div className="label">Aer liber · Foișor modern · Sezon întreg</div>
          </div>
          <div className="hero-badge-card">
            <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--sky-deep)', marginBottom: 10}}>Vârste recomandate</div>
            <div className="big" style={{color: 'var(--sky-deep)'}}>1 – 10 ani</div>
            <div className="label">Petreceri dedicate exclusiv copiilor</div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
      </div>
    </section>
  );
};

window.Hero = Hero;
