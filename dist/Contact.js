const SOCIAL_POSTS = [{
  type: 'img',
  src: 'images/princess-01.webp'
}, {
  type: 'img',
  src: 'images/tipi-01.webp'
}, {
  type: 'video',
  src: 'videos/video-2_fast.mp4'
}, {
  type: 'img',
  src: 'images/balloons-01.webp'
}, {
  type: 'img',
  src: 'images/garden-01.webp'
}, {
  type: 'img',
  src: 'images/princess-girl.webp'
}];
const Contact = () => {
  const [faqOpen, setFaqOpen] = React.useState(0);
  const faqs = [{
    q: 'Cu cât timp înainte trebuie să rezerv?',
    a: 'Recomandăm 3–6 săptămâni pentru weekend, iar pentru perioadele aglomerate (mai, iunie, septembrie) chiar 2 luni. Pentru zilele lucrătoare putem găsi date și cu o săptămână înainte.'
  }, {
    q: 'Aduceți voi mâncarea și băuturile?',
    a: 'Vesela (farfurii de unică folosință, tacâmuri, pahare), mâncarea, gustările și băuturile sunt în responsabilitatea dumneavoastră.'
  }, {
    q: 'Câți copii putem aduce?',
    a: 'Locația poate găzdui maximum 20 de copii.'
  }, {
    q: 'Ce vârste sunt potrivite?',
    a: 'Locația este dedicată copiilor cu vârste între 1 și 10 ani.'
  }, {
    q: 'Cât durează o petrecere și cât costă?',
    a: 'Tariful standard este 750 lei pentru 3 ore. Prelungirea se face cu 200 lei/oră, cu rezervare în prealabil și în funcție de disponibilitate.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-num"
  }, "05"), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Contact & Loca\u021Bie")), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, "Ne g\u0103se\u0219ti aici."), /*#__PURE__*/React.createElement("p", {
    className: "trail"
  }, "Sun\u0103-ne sau d\u0103-ne un mesaj \u0219i r\u0103spundem la toate \xEEntreb\u0103rile tale.")), /*#__PURE__*/React.createElement("div", {
    className: "contact-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "map-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "map-pin"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCCD"), " Strada Clo\u0219ca 12B, R\xE2mnicu V\xE2lcea"), /*#__PURE__*/React.createElement("iframe", {
    src: "https://www.google.com/maps?q=Strada+Closca+12B+Ramnicu+Valcea&output=embed",
    allowFullScreen: "",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
    title: "Harta American Partyland"
  })), /*#__PURE__*/React.createElement("div", {
    className: "contact-cards"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, "\uD83D\uDCCD"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Adres\u0103"), /*#__PURE__*/React.createElement("p", null, "Strada Clo\u0219ca 12B", /*#__PURE__*/React.createElement("br", null), "R\xE2mnicu V\xE2lcea"))), /*#__PURE__*/React.createElement("a", {
    href: "tel:0742777989",
    className: "contact-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, "\u260F"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Telefon & WhatsApp"), /*#__PURE__*/React.createElement("p", null, "0742 777 989", /*#__PURE__*/React.createElement("br", null), "0752 593 893", /*#__PURE__*/React.createElement("br", null), "Luni\u2013Duminic\u0103, 10:00 \u2013 22:00"))), /*#__PURE__*/React.createElement("div", {
    className: "contact-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, "\u23F1"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Program"), /*#__PURE__*/React.createElement("p", null, "Luni\u2013Duminic\u0103, 10:00 \u2013 22:00"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-num"
  }, "06"), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Social Media")), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, "@americanpartyland"), /*#__PURE__*/React.createElement("p", {
    className: "trail"
  }, "Urm\u0103re\u0219te-ne pe Instagram, TikTok \u0219i Facebook pentru momente live \u0219i inspira\u021Bie.")), /*#__PURE__*/React.createElement("div", {
    className: "social-feed"
  }, SOCIAL_POSTS.map((post, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "https://www.instagram.com/american.partyland/",
    className: "social-post",
    target: "_blank",
    rel: "noopener"
  }, post.type === 'img' ? /*#__PURE__*/React.createElement("img", {
    src: post.src,
    alt: `Post ${i + 1}`,
    loading: "lazy"
  }) : /*#__PURE__*/React.createElement("video", {
    src: post.src,
    muted: true,
    loop: true,
    autoPlay: true,
    playsInline: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "social-post-icon"
  }, "\u25C9"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-num"
  }, "07"), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "\xCEntreb\u0103ri frecvente")), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, "Ce ne \xEEntreab\u0103 p\u0103rin\u021Bii."), /*#__PURE__*/React.createElement("p", {
    className: "trail"
  }, "Dac\u0103 nu g\u0103se\u0219ti r\u0103spunsul, scrie-ne \u0219i \xEE\u021Bi r\u0103spundem \xEEn aceea\u0219i zi.")), /*#__PURE__*/React.createElement("div", {
    className: "faq-list"
  }, faqs.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `faq-item ${faqOpen === i ? 'open' : ''}`,
    onClick: () => setFaqOpen(faqOpen === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-q"
  }, /*#__PURE__*/React.createElement("span", null, f.q), /*#__PURE__*/React.createElement("span", {
    className: "faq-toggle"
  }, "+")), /*#__PURE__*/React.createElement("div", {
    className: "faq-a"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      paddingTop: 4
    }
  }, f.a)))))));
};
window.Contact = Contact;