const Portfolio = () => {
  const events = [{
    img: 'images/princess-02.webp',
    tag: 'Princess Party',
    name: 'Anastasia împlinește 6 ani',
    date: 'Septembrie 2025'
  }, {
    img: 'images/kid-slide-03.webp',
    tag: 'Adventure',
    name: 'Matei & pirații',
    date: 'August 2025'
  }, {
    img: 'images/tipi-02.webp',
    tag: 'Pajama Party',
    name: 'Unicorn Sleepover',
    date: 'Iulie 2025'
  }, {
    img: 'images/princess-03.webp',
    tag: 'Disney',
    name: 'Sărbătoarea Sofiei',
    date: 'Octombrie 2025'
  }, {
    img: 'images/balloons-01.webp',
    tag: 'Baby Shower',
    name: 'Primul an Emma',
    date: 'Noiembrie 2025'
  }, {
    img: 'images/garden-03.webp',
    tag: 'Garden Party',
    name: 'Clasa a II-a, final de an',
    date: 'Iunie 2025'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-num"
  }, "03"), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Evenimente recente")), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, "Pove\u0219ti pe care nu le mai uit\u0103 nimeni."), /*#__PURE__*/React.createElement("p", {
    className: "trail"
  }, "O selec\u021Bie din ultimele luni \u2014 anivers\u0103ri \u0219i momente de neuitat.")), /*#__PURE__*/React.createElement("div", {
    className: "events-grid"
  }, events.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "event-card"
  }, /*#__PURE__*/React.createElement("img", {
    src: e.img,
    alt: e.name,
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "event-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, e.tag), /*#__PURE__*/React.createElement("h4", null, e.name), /*#__PURE__*/React.createElement("div", {
    className: "date"
  }, e.date))))));
};
window.Portfolio = Portfolio;