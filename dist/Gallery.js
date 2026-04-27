const GALLERY_DATA = [{
  src: 'images/garden-01.webp',
  cat: 'Exterior',
  size: 'g-wide'
}, {
  src: 'images/princess-01.webp',
  cat: 'Decor',
  size: 'g-tall'
}, {
  src: 'images/tipi-01.webp',
  cat: 'Corturi',
  size: 'g-sm'
}, {
  src: 'images/balloons-01.webp',
  cat: 'Baloane',
  size: 'g-sm'
}, {
  src: 'images/kid-slide-01.webp',
  cat: 'Joacă',
  size: 'g-md'
}, {
  src: 'images/interior-01.webp',
  cat: 'Foișor',
  size: 'g-lg'
}, {
  src: 'images/princess-02.webp',
  cat: 'Decor',
  size: 'g-md'
}, {
  src: 'images/garden-02.webp',
  cat: 'Exterior',
  size: 'g-xl'
}, {
  src: 'images/tipi-02.webp',
  cat: 'Corturi',
  size: 'g-md'
}, {
  src: 'images/terrace-01.webp',
  cat: 'Terasă',
  size: 'g-md'
}, {
  src: 'images/princess-03.webp',
  cat: 'Decor',
  size: 'g-md'
}, {
  src: 'images/kid-slide-02.webp',
  cat: 'Joacă',
  size: 'g-md'
}];
const CATEGORIES = ['Toate', 'Exterior', 'Decor', 'Foișor', 'Corturi', 'Joacă', 'Baloane', 'Terasă'];
const Gallery = () => {
  const [cat, setCat] = React.useState('Toate');
  const [lightbox, setLightbox] = React.useState(-1);
  const filtered = cat === 'Toate' ? GALLERY_DATA : GALLERY_DATA.filter(g => g.cat === cat);
  const nav = dir => {
    setLightbox((lightbox + dir + filtered.length) % filtered.length);
  };
  React.useEffect(() => {
    if (lightbox === -1) return;
    const onKey = e => {
      if (e.key === 'Escape') setLightbox(-1);
      if (e.key === 'ArrowLeft') nav(-1);
      if (e.key === 'ArrowRight') nav(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, filtered.length]);
  return /*#__PURE__*/React.createElement("section", {
    id: "galerie",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-num"
  }, "03"), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Galerie")), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, "Din loca\u021Bia noastr\u0103."), /*#__PURE__*/React.createElement("p", {
    className: "trail"
  }, "Decor, joc, spa\u021Biu. C\xE2teva imagini din petrecerile pe care le-am g\u0103zduit.")), /*#__PURE__*/React.createElement("div", {
    className: "gallery-filter"
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: cat === c ? 'active' : '',
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    className: "gallery-grid"
  }, filtered.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: g.src + i,
    className: `gallery-item ${g.size}`,
    onClick: () => setLightbox(i)
  }, /*#__PURE__*/React.createElement("img", {
    src: g.src,
    alt: g.cat,
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("span", {
    className: "gallery-tag"
  }, g.cat)))), lightbox !== -1 && /*#__PURE__*/React.createElement("div", {
    className: "lightbox",
    onClick: () => setLightbox(-1)
  }, /*#__PURE__*/React.createElement("button", {
    className: "lightbox-close"
  }, "\u2715"), /*#__PURE__*/React.createElement("button", {
    className: "lightbox-nav prev",
    onClick: e => {
      e.stopPropagation();
      nav(-1);
    }
  }, "\u2039"), /*#__PURE__*/React.createElement("img", {
    src: filtered[lightbox].src,
    alt: "",
    onClick: e => e.stopPropagation()
  }), /*#__PURE__*/React.createElement("button", {
    className: "lightbox-nav next",
    onClick: e => {
      e.stopPropagation();
      nav(1);
    }
  }, "\u203A")));
};
window.Gallery = Gallery;