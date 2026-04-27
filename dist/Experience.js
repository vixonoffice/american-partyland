const Experience = () => {
  const steps = [{
    n: '01',
    title: 'Rezervă data',
    kind: 'Formular online'
  }, {
    n: '02',
    title: 'Alegem împreună tema',
    kind: 'Apel de 15 min'
  }, {
    n: '03',
    title: 'Pregătim decorul',
    kind: 'Cu o zi înainte'
  }, {
    n: '04',
    title: 'Voi veniți doar cu tortul',
    kind: 'Ziua petrecerii'
  }, {
    n: '05',
    title: 'Trimitem fotografiile',
    kind: 'După eveniment'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "xp-strip"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--magenta)',
      marginBottom: 16
    }
  }, "\u2726 Cum func\u021Bioneaz\u0103"), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, "De la rezervare la primul \u201ELa mul\u021Bi ani!\""), /*#__PURE__*/React.createElement("p", null, "Organizarea unei petreceri de copii nu ar trebui s\u0103 fie o b\u0103taie de cap. Cu noi, tot ce ai de f\u0103cut este s\u0103 alegi data \u0219i tema. Restul se \xEEnt\xE2mpl\u0103 natural."), /*#__PURE__*/React.createElement("a", {
    href: "#rezervare",
    className: "btn-primary"
  }, "\xCEncepe acum \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "xp-list"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "xp-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "xp-num"
  }, s.n), /*#__PURE__*/React.createElement("span", {
    className: "xp-title"
  }, s.title), /*#__PURE__*/React.createElement("span", {
    className: "xp-kind"
  }, s.kind)))));
};
window.Experience = Experience;