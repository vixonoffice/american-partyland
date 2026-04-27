const SocialIcon = ({
  kind
}) => {
  const icons = {
    instagram: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "5",
      stroke: "currentColor",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4",
      stroke: "currentColor",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17.5",
      cy: "6.5",
      r: "1.2",
      fill: "currentColor"
    })),
    facebook: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M13.5 22v-8.5h2.8l.4-3.3h-3.2V8c0-.95.3-1.6 1.65-1.6h1.75V3.4c-.3 0-1.34-.13-2.55-.13-2.52 0-4.25 1.55-4.25 4.38v2.55H7.3v3.3h2.8V22h3.4z"
    })),
    tiktok: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M19.6 7.25a5.5 5.5 0 0 1-3.35-1.13 5.6 5.6 0 0 1-2.2-3.62h-3v12.2a2.65 2.65 0 1 1-2.65-2.65c.3 0 .6.05.87.14V9.07a5.85 5.85 0 0 0-.87-.06 5.8 5.8 0 1 0 5.8 5.8V8.95a8.5 8.5 0 0 0 5.4 1.9V7.8c0-.2-.01-.4-.0-.55z"
    })),
    whatsapp: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M17.5 14.4c-.25-.12-1.5-.74-1.73-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.2-.55.06-.25-.12-1.07-.4-2.03-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.26-.02-.4.1-.52.11-.12.25-.3.37-.45.12-.15.17-.26.25-.43.08-.17.04-.32-.02-.45-.06-.12-.56-1.34-.77-1.84-.2-.48-.4-.42-.55-.42l-.5-.01c-.17 0-.43.06-.66.32-.23.26-.86.84-.86 2.05 0 1.2.88 2.37 1 2.54.13.17 1.75 2.66 4.22 3.73.59.25 1.05.4 1.4.51.58.18 1.12.16 1.54.1.47-.07 1.5-.6 1.72-1.2.2-.58.2-1.08.15-1.18-.05-.1-.22-.17-.47-.29M12 3a9 9 0 0 0-7.6 13.8L3 21l4.3-1.4A9 9 0 1 0 12 3"
    }))
  };
  return icons[kind];
};
const Footer = () => {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "footer-brand"
  }, "American", /*#__PURE__*/React.createElement("br", null), "Partyland", /*#__PURE__*/React.createElement("span", {
    className: "dot-accent"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "footer-lede"
  }, "Locul unde anivers\u0103rile copiilor devin pove\u0219ti. Rezerv\u0103ri deschise pentru 2026."), /*#__PURE__*/React.createElement("div", {
    className: "footer-socials",
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/american.partyland/",
    target: "_blank",
    rel: "noopener",
    "aria-label": "Instagram",
    className: "soc instagram"
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    kind: "instagram"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://www.facebook.com/people/American-Partyland/61577150607618/",
    target: "_blank",
    rel: "noopener",
    "aria-label": "Facebook",
    className: "soc facebook"
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    kind: "facebook"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://www.tiktok.com/@american.partyland",
    target: "_blank",
    rel: "noopener",
    "aria-label": "TikTok",
    className: "soc tiktok"
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    kind: "tiktok"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/40752592893",
    target: "_blank",
    rel: "noopener",
    "aria-label": "WhatsApp",
    className: "soc whatsapp"
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    kind: "whatsapp"
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Navigare"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#acasa"
  }, "Acas\u0103")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#despre"
  }, "Despre noi")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#servicii"
  }, "Servicii")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#galerie"
  }, "Galerie")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, "Contact")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Servicii"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#servicii"
  }, "Anivers\u0103ri clasice")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#tarife"
  }, "Tarife")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Contact"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Strada Clo\u0219ca 12B"), /*#__PURE__*/React.createElement("li", null, "R\xE2mnicu V\xE2lcea"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "tel:0742777989"
  }, "0742 777 989")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "tel:0752593893"
  }, "0752 593 893"))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 American Partyland. Toate drepturile rezervate."), /*#__PURE__*/React.createElement("div", null, "R\xE2mnicu V\xE2lcea \xB7 Loca\u021Bia unde copil\u0103ria se s\u0103rb\u0103tore\u0219te."), /*#__PURE__*/React.createElement("a", {
    href: "https://vixonlab.ro",
    target: "_blank",
    rel: "noopener",
    className: "footer-madeby"
  }, "Creat de ", /*#__PURE__*/React.createElement("span", null, "VixonLab"))));
};
window.Footer = Footer;