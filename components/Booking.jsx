const Booking = () => {
  const [data, setData] = React.useState({
    date: '',
    time: '10:00',
    kids: 10,
    age: 5,
    name: '',
    phone: '',
    email: '',
    notes: '',
  });
  const [done, setDone] = React.useState(false);

  const set = (k, v) => setData(d => ({ ...d, [k]: v }));

  return (
    <section id="rezervare" className="section">
      <div className="section-head">
        <div className="label">
          <span className="label-num">04</span>
          <span className="eyebrow">Rezervare</span>
        </div>
        <h2 className="display">Rezervă-ți ziua.</h2>
        <p className="trail">
          Completează formularul și te contactăm în maxim 24 de ore pentru confirmare.
        </p>
      </div>

      <div className="booking-wrap">
        <div className="booking-intro">
          <p>
            Spune-ne data, câți copii și ce îți dorești — revenim cu oferta personalizată prin telefon sau email.
          </p>
          <div className="booking-contacts">
            <a href="tel:0742777989" className="booking-contact-row">
              <div className="icon">☏</div>
              <div>
                <div className="lbl">Sună direct</div>
                <div className="val">0742 777 989</div>
              </div>
            </a>
            <a href="tel:0752593893" className="booking-contact-row">
              <div className="icon">☏</div>
              <div>
                <div className="lbl">Sună direct</div>
                <div className="val">0752 593 893</div>
              </div>
            </a>
            <a href="https://wa.me/40742777989" className="booking-contact-row">
              <div className="icon">✉</div>
              <div>
                <div className="lbl">WhatsApp</div>
                <div className="val">Mesaj instant</div>
              </div>
            </a>
            <div className="booking-contact-row">
              <div className="icon">⏱</div>
              <div>
                <div className="lbl">Program</div>
                <div className="val">10:00 – 22:00</div>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-form">
          {done ? (
            <div className="booking-success">
              <div className="booking-success-icon">✓</div>
              <h3 className="display">Cererea ta a fost trimisă!</h3>
              <p>
                Mulțumim, {data.name || 'dragă părinte'}. Te contactăm la {data.phone || 'numărul tău'} în maxim 24 de ore.
              </p>
              <button className="btn-primary" style={{marginTop: 28}} onClick={() => setDone(false)}>
                Trimite altă cerere
              </button>
            </div>
          ) : (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label>Data evenimentului</label>
                  <input type="date" value={data.date} onChange={e => set('date', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Ora de start</label>
                  <select value={data.time} onChange={e => set('time', e.target.value)}>
                    <option>10:00</option>
                    <option>11:00</option>
                    <option>12:00</option>
                    <option>13:00</option>
                    <option>14:00</option>
                    <option>15:00</option>
                    <option>16:00</option>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Număr copii (max. 20)</label>
                  <input type="number" min="1" max="20" value={data.kids}
                    onChange={e => set('kids', Math.min(20, parseInt(e.target.value) || 1))} />
                </div>
                <div className="form-group">
                  <label>Vârsta sărbătoritului (1–10 ani)</label>
                  <input type="number" min="1" max="10" value={data.age}
                    onChange={e => set('age', Math.min(10, parseInt(e.target.value) || 1))} />
                </div>
              </div>

              <div className="form-group">
                <label>Notițe suplimentare</label>
                <textarea rows="3" placeholder="Temă preferată, cerințe speciale..."
                  value={data.notes} onChange={e => set('notes', e.target.value)}></textarea>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Numele tău</label>
                  <input type="text" value={data.name}
                    onChange={e => set('name', e.target.value)} placeholder="Ion Popescu" />
                </div>
                <div className="form-group">
                  <label>Telefon</label>
                  <input type="tel" value={data.phone}
                    onChange={e => set('phone', e.target.value)} placeholder="07..." />
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" value={data.email}
                  onChange={e => set('email', e.target.value)} placeholder="email@exemplu.ro" />
              </div>

              <div style={{background: 'var(--cream-2)', padding: 16, borderRadius: 14, fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: 8}}>
                Vesela, mâncarea, gustările și băuturile sunt în responsabilitatea dumneavoastră.
              </div>

              <div className="booking-actions">
                <button className="btn-next" onClick={() => setDone(true)}
                  disabled={!data.name || !data.phone || !data.date}>
                  Trimite cererea <span>✓</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

window.Booking = Booking;
