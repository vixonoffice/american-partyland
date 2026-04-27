const VideoShowcase = () => {
  const videoRefs = React.useRef([]);
  const togglePlay = i => {
    const v = videoRefs.current[i];
    if (!v) return;
    if (v.paused) v.play();else v.pause();
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "video-showcase"
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-showcase-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--sun)',
      marginBottom: 16
    }
  }, "\u2726 In miscare"), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, "Locatia noastra, in imagini vii.")), /*#__PURE__*/React.createElement("p", null, "Trei momente surprinse din loca\u021Bia American Partyland \u2014 atmosfera reala, decorul, energia. Apasa pentru sunet.")), /*#__PURE__*/React.createElement("div", {
    className: "video-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-tile",
    onClick: () => togglePlay(0)
  }, /*#__PURE__*/React.createElement("video", {
    ref: el => videoRefs.current[0] = el,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    "webkit-playsinline": "",
    disableRemotePlayback: true,
    preload: "none",
    poster: "images/garden-01.webp"
  }, /*#__PURE__*/React.createElement("source", {
    src: "videos/video-1_fast.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "video-play-btn"
  }, "\u25B6"), /*#__PURE__*/React.createElement("div", {
    className: "video-tile-label"
  }, /*#__PURE__*/React.createElement("small", null, "Gradina"), "Spatiul de joaca")), /*#__PURE__*/React.createElement("div", {
    className: "video-column-stack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-tile",
    onClick: () => togglePlay(1)
  }, /*#__PURE__*/React.createElement("video", {
    ref: el => videoRefs.current[1] = el,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    "webkit-playsinline": "",
    disableRemotePlayback: true,
    preload: "none",
    poster: "images/interior-01.webp"
  }, /*#__PURE__*/React.createElement("source", {
    src: "videos/video-2_fast.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "video-play-btn"
  }, "\u25B6"), /*#__PURE__*/React.createElement("div", {
    className: "video-tile-label"
  }, /*#__PURE__*/React.createElement("small", null, "Interior"), "Foi\u0219orul nostru")), /*#__PURE__*/React.createElement("div", {
    className: "video-tile",
    onClick: () => togglePlay(2)
  }, /*#__PURE__*/React.createElement("video", {
    ref: el => videoRefs.current[2] = el,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    "webkit-playsinline": "",
    disableRemotePlayback: true,
    preload: "none",
    poster: "images/kid-slide-01.webp"
  }, /*#__PURE__*/React.createElement("source", {
    src: "videos/video-3_fast.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "video-play-btn"
  }, "\u25B6"), /*#__PURE__*/React.createElement("div", {
    className: "video-tile-label"
  }, /*#__PURE__*/React.createElement("small", null, "Aniversare"), "8 ani de neuitat"))), /*#__PURE__*/React.createElement("div", {
    className: "video-tile",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/princess-01.webp",
    alt: "Preview",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "video-tile-label"
  }, /*#__PURE__*/React.createElement("small", null, "Galerie"), "Vezi toate momentele"))));
};
window.VideoShowcase = VideoShowcase;