const FloatingSocials = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "floating-socials"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/40752592893",
    target: "_blank",
    rel: "noopener",
    "aria-label": "WhatsApp",
    className: "whatsapp"
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    kind: "whatsapp"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/american.partyland/",
    target: "_blank",
    rel: "noopener",
    "aria-label": "Instagram",
    className: "instagram"
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    kind: "instagram"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://www.tiktok.com/@american.partyland",
    target: "_blank",
    rel: "noopener",
    "aria-label": "TikTok",
    className: "tiktok"
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    kind: "tiktok"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://www.facebook.com/people/American-Partyland/61577150607618/",
    target: "_blank",
    rel: "noopener",
    "aria-label": "Facebook",
    className: "facebook"
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    kind: "facebook"
  })));
};
const Marquee = () => /*#__PURE__*/React.createElement("div", {
  className: "marquee"
}, /*#__PURE__*/React.createElement("div", {
  className: "marquee-track"
}, Array.from({
  length: 2
}).map((_, k) => /*#__PURE__*/React.createElement(React.Fragment, {
  key: k
}, /*#__PURE__*/React.createElement("span", {
  className: "marquee-item"
}, "Anivers\u0103ri"), /*#__PURE__*/React.createElement("span", {
  className: "marquee-item"
}, "Copii 1\u201310 ani"), /*#__PURE__*/React.createElement("span", {
  className: "marquee-item"
}, "Foi\u0219or modern"), /*#__PURE__*/React.createElement("span", {
  className: "marquee-item"
}, "R\xE2mnicu V\xE2lcea")))));

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
      size: type => type === 'balloon' ? 14 + Math.random() * 12 : 5 + Math.random() * 9,
      color: colors[i % colors.length],
      drift: (-40 + Math.random() * 80).toFixed(0)
    });
  }
  return items;
})();
const GlobalParticles = () => /*#__PURE__*/React.createElement("div", {
  className: "global-particles",
  "aria-hidden": "true"
}, GLOBAL_PARTICLES.map((p, i) => {
  const sz = typeof p.size === 'function' ? p.size(p.type) : p.size;
  return /*#__PURE__*/React.createElement("span", {
    key: i,
    className: `gp gp-${p.type}`,
    style: {
      left: p.left,
      animationDelay: p.delay,
      animationDuration: p.dur,
      width: sz,
      height: sz,
      '--color': `var(${p.color})`,
      '--drift': p.drift + 'px'
    }
  });
}));
window.FloatingSocials = FloatingSocials;
window.Marquee = Marquee;
window.GlobalParticles = GlobalParticles;