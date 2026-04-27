const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [{
    href: '#acasa',
    label: 'Acasă'
  }, {
    href: '#despre',
    label: 'Despre'
  }, {
    href: '#servicii',
    label: 'Servicii'
  }, {
    href: '#galerie',
    label: 'Galerie'
  }, {
    href: '#contact',
    label: 'Contact'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    className: `nav ${scrolled ? 'scrolled' : ''}`
  }, /*#__PURE__*/React.createElement("a", {
    href: "#acasa",
    className: "nav-logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/logo.png",
    alt: "American Party Land",
    className: "nav-logo-img"
  }), /*#__PURE__*/React.createElement("span", {
    className: "nav-logo-text"
  }, "American", /*#__PURE__*/React.createElement("br", null), "Party Land")), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href
  }, l.label))), /*#__PURE__*/React.createElement("a", {
    href: "#rezervare",
    className: "nav-cta"
  }, "Rezerv\u0103 ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("button", {
    className: "nav-burger",
    onClick: () => setOpen(true),
    "aria-label": "Meniu"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))), open && /*#__PURE__*/React.createElement("div", {
    className: "mobile-menu"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mobile-menu-close",
    onClick: () => setOpen(false)
  }, "\u2715"), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    onClick: () => setOpen(false)
  }, l.label)), /*#__PURE__*/React.createElement("a", {
    href: "#rezervare",
    onClick: () => setOpen(false)
  }, "Rezerv\u0103 \u2192")));
};
window.Nav = Nav;