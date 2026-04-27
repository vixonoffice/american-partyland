const Booking = () => {
  const [data, setData] = React.useState({
    date: '',
    time: '10:00',
    kids: 10,
    age: 5,
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [done, setDone] = React.useState(false);
  const set = (k, v) => setData(d => ({
    ...d,
    [k]: v
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "rezervare",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-num"
  }, "04"), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Rezervare")), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, "Rezerv\u0103-\u021Bi ziua."), /*#__PURE__*/React.createElement("p", {
    className: "trail"
  }, "Completeaz\u0103 formularul \u0219i te contact\u0103m \xEEn maxim 24 de ore pentru confirmare.")), /*#__PURE__*/React.createElement("div", {
    className: "booking-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "booking-intro"
  }, /*#__PURE__*/React.createElement("p", null, "Spune-ne data, c\xE2\u021Bi copii \u0219i ce \xEE\u021Bi dore\u0219ti \u2014 revenim cu oferta personalizat\u0103 prin telefon sau email."), /*#__PURE__*/React.createElement("div", {
    className: "booking-contacts"
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:0742777989",
    className: "booking-contact-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, "\u260F"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Sun\u0103 direct"), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, "0742 777 989"))), /*#__PURE__*/React.createElement("a", {
    href: "tel:0752593893",
    className: "booking-contact-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, "\u260F"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Sun\u0103 direct"), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, "0752 593 893"))), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/40742777989",
    className: "booking-contact-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, "\u2709"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "WhatsApp"), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, "Mesaj instant"))), /*#__PURE__*/React.createElement("div", {
    className: "booking-contact-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, "\u23F1"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Program"), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, "10:00 \u2013 22:00"))))), /*#__PURE__*/React.createElement("div", {
    className: "booking-form"
  }, done ? /*#__PURE__*/React.createElement("div", {
    className: "booking-success"
  }, /*#__PURE__*/React.createElement("div", {
    className: "booking-success-icon"
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    className: "display"
  }, "Cererea ta a fost trimis\u0103!"), /*#__PURE__*/React.createElement("p", null, "Mul\u021Bumim, ", data.name || 'dragă părinte', ". Te contact\u0103m la ", data.phone || 'numărul tău', " \xEEn maxim 24 de ore."), /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    style: {
      marginTop: 28
    },
    onClick: () => setDone(false)
  }, "Trimite alt\u0103 cerere")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Data evenimentului"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: data.date,
    onChange: e => set('date', e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Ora de start"), /*#__PURE__*/React.createElement("select", {
    value: data.time,
    onChange: e => set('time', e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "10:00"), /*#__PURE__*/React.createElement("option", null, "11:00"), /*#__PURE__*/React.createElement("option", null, "12:00"), /*#__PURE__*/React.createElement("option", null, "13:00"), /*#__PURE__*/React.createElement("option", null, "14:00"), /*#__PURE__*/React.createElement("option", null, "15:00"), /*#__PURE__*/React.createElement("option", null, "16:00"), /*#__PURE__*/React.createElement("option", null, "17:00"), /*#__PURE__*/React.createElement("option", null, "18:00"), /*#__PURE__*/React.createElement("option", null, "19:00")))), /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Num\u0103r copii (max. 20)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "1",
    max: "20",
    value: data.kids,
    onChange: e => set('kids', Math.min(20, parseInt(e.target.value) || 1))
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "V\xE2rsta s\u0103rb\u0103toritului (1\u201310 ani)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "1",
    max: "10",
    value: data.age,
    onChange: e => set('age', Math.min(10, parseInt(e.target.value) || 1))
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Noti\u021Be suplimentare"), /*#__PURE__*/React.createElement("textarea", {
    rows: "3",
    placeholder: "Tem\u0103 preferat\u0103, cerin\u021Be speciale...",
    value: data.notes,
    onChange: e => set('notes', e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Numele t\u0103u"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: data.name,
    onChange: e => set('name', e.target.value),
    placeholder: "Ion Popescu"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Telefon"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    value: data.phone,
    onChange: e => set('phone', e.target.value),
    placeholder: "07..."
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: data.email,
    onChange: e => set('email', e.target.value),
    placeholder: "email@exemplu.ro"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream-2)',
      padding: 16,
      borderRadius: 14,
      fontSize: 13,
      color: 'var(--ink-soft)',
      lineHeight: 1.6,
      marginBottom: 8
    }
  }, "Vesela, m\xE2ncarea, gust\u0103rile \u0219i b\u0103uturile sunt \xEEn responsabilitatea dumneavoastr\u0103."), /*#__PURE__*/React.createElement("div", {
    className: "booking-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-next",
    onClick: () => setDone(true),
    disabled: !data.name || !data.phone || !data.date
  }, "Trimite cererea ", /*#__PURE__*/React.createElement("span", null, "\u2713")))))));
};
window.Booking = Booking;