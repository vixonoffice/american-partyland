const Marquee = () => {
  const items = ['Aniversări copii', 'Botez & Mărțișor', 'Decor personalizat', 'Spațiu exterior 1.000 m²', 'Foișor modern', 'Animatori & facepainting', 'Catering la cerere'];
  const all = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    className: "marquee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee-track"
  }, all.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "marquee-item"
  }, t))));
};
window.Marquee = Marquee;