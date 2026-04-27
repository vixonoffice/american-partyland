const PARTICLES = [{
  cls: '',
  left: '12%',
  top: '22%',
  delay: '0s',
  w: 8,
  h: 8
}, {
  cls: 'star',
  left: '72%',
  top: '18%',
  delay: '1.4s',
  w: 13,
  h: 13
}, {
  cls: 'pink',
  left: '88%',
  top: '58%',
  delay: '0.8s',
  w: 7,
  h: 7
}, {
  cls: '',
  left: '6%',
  top: '68%',
  delay: '2.2s',
  w: 5,
  h: 5
}, {
  cls: 'star',
  left: '52%',
  top: '78%',
  delay: '1.7s',
  w: 11,
  h: 11
}, {
  cls: 'mint',
  left: '38%',
  top: '12%',
  delay: '0.4s',
  w: 6,
  h: 6
}, {
  cls: 'star',
  left: '24%',
  top: '82%',
  delay: '3.1s',
  w: 10,
  h: 10
}, {
  cls: '',
  left: '94%',
  top: '35%',
  delay: '1.9s',
  w: 8,
  h: 8
}, {
  cls: 'pink',
  left: '62%',
  top: '90%',
  delay: '2.6s',
  w: 5,
  h: 5
}, {
  cls: 'star',
  left: '80%',
  top: '72%',
  delay: '0.6s',
  w: 9,
  h: 9
}];
const Hero = () => {
  return /*#__PURE__*/React.createElement("section", {
    id: "acasa",
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-video-wrap"
  }, /*#__PURE__*/React.createElement("video", {
    id: "hero-video",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    "webkit-playsinline": "",
    disableRemotePlayback: true,
    preload: "metadata",
    poster: "images/garden-01.webp"
  }, /*#__PURE__*/React.createElement("source", {
    src: "videos/hero.mp4",
    type: "video/mp4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hero-particles",
    "aria-hidden": "true"
  }, PARTICLES.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: `hero-particle ${p.cls}`,
    style: {
      left: p.left,
      top: p.top,
      animationDelay: p.delay,
      width: p.w,
      height: p.h
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hero-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", null, "Accept\u0103m rezerv\u0103ri pentru 2026")), /*#__PURE__*/React.createElement("h1", {
    className: "display"
  }, "Copil\u0103ria se", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "s\u0103rb\u0103tore\u0219te"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "accent-2"
  }, "sub cerul liber"), "."), /*#__PURE__*/React.createElement("p", {
    className: "hero-lede"
  }, "American Partyland este locul unde anivers\u0103rile copiilor devin amintiri. Spa\u021Biu generos de joac\u0103, decor personalizat \u0219i foi\u0219or \u2014 \xEEn inima ora\u0219ului, \xEEntr-un cadru verde \u0219i aerisit, departe de agita\u021Bia urban\u0103, am creat un spa\u021Biu \xEEn care copiii se bucur\u0103 de joac\u0103 \xEEn aer curat, iar fiecare aniversare devine o experien\u021B\u0103 plin\u0103 de energie, s\u0103n\u0103tate \u0219i momente de neuitat."), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#rezervare",
    className: "btn-primary"
  }, "Contacteaz\u0103-ne ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "hero-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-badge-card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--magenta)',
      marginBottom: 10
    }
  }, "Loca\u021Bia noastr\u0103"), /*#__PURE__*/React.createElement("div", {
    className: "big",
    style: {
      fontSize: 'clamp(20px, 3vw, 34px)',
      lineHeight: 1.15,
      marginBottom: 8
    }
  }, "Spa\u021Biu generos"), /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "Aer liber \xB7 Foi\u0219or modern \xB7 Sezon \xEEntreg")), /*#__PURE__*/React.createElement("div", {
    className: "hero-badge-card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--sky-deep)',
      marginBottom: 10
    }
  }, "V\xE2rste recomandate"), /*#__PURE__*/React.createElement("div", {
    className: "big",
    style: {
      color: 'var(--sky-deep)'
    }
  }, "1 \u2013 10 ani"), /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "Petreceri dedicate exclusiv copiilor")))), /*#__PURE__*/React.createElement("div", {
    className: "hero-scroll"
  }, /*#__PURE__*/React.createElement("span", null, "Scroll")));
};
window.Hero = Hero;