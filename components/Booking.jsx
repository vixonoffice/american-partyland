const PACKAGES = [
  { id: 'classic', name: 'Aniversare clasică' },
  { id: 'themed', name: 'Petrecere tematică' },
  { id: 'premium', name: 'Party Premium' },
  { id: 'christening', name: 'Botez' },
  { id: 'workshop', name: 'Atelier creativ' },
  { id: 'photo', name: 'Ședință foto' },
];
const EXTRAS = [
  { id: 'anim', name: 'Animator' },
  { id: 'face', name: 'Facepainting' },
  { id: 'cake', name: 'Tort personalizat' },
  { id: 'dj', name: 'DJ' },
  { id: 'photo', name: 'Fotograf' },
  { id: 'costume', name: 'Costum prințesă/pirat' },
];
const THEMES = [
  'Prințese Disney', 'Pirați', 'Supereroi', 'Unicorni', 'Jungla', 'Spațiu', 'Cars', 'Altceva',
];

const Booking = () => {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState({
    package: 'themed',
    theme: 'Prințese Disney',
    date: '',
    time: '12:00',
    kids: 15,
    age: 5,
    extras: [],
    name: '',
    phone: '',
    email: '',
    notes: '',
  });
  const [done, setDone] = React.useState(false);

  const pkg = PACKAGES.find(p => p.id === data.package);
  const set = (k, v) => setData(d => ({ ...d, [k]: v }));
  const toggleExtra = (id) => setData(d => ({
    ...d,
    extras: d.extras.includes(id) ? d.extras.filter(e => e !== id) : [...d.extras, id],
  }));

  return (
    <section id="rezervare" className="section">
      <div className="section-head">
        <div className="label">
          <span className="label-num">04</span>
          <span className="eyebrow">Rezervare</span>
        </div>
        <h2 className="display">Rezervă-ți ziua.</h2>
        <p className="trail">
          Trei pași. Primești confirmarea în maxim 24 de ore. Gratuit, fără avans.
        </p>
      </div>

      <div className="booking-wrap">
        <div className="booking-intro">
          <p>
            Spune-ne ce temă vrei, câți copii, ce extras te interesează — iar noi revenim cu
            oferta personalizată prin telefon sau email.
          </p>
          <div className="booking-contacts">
            <a href="tel:0752592893" className="booking-contact-row">
              <div className="icon">☏</div>
              <div>
                <div className="lbl">Sună direct</div>
                <div className="val">0752 592 893</div>
              </div>
            </a>
            <a href="https://wa.me/40752592893" className="booking-contact-row">
              <div className="icon">✉</div>
              <div>
                <div className="lbl">WhatsApp</div>
                <div className="val">Mesaj instant</div>
              </div>
            </a>
            <div className="booking-contact-row">
              <div className="icon">⏱</div>
              <div>
                <div className="lbl">Răspundem în</div>
                <div className="val">Maxim 24 de ore</div>
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
                Mulțumim, {data.name || 'dragă părinte'}. Te contactăm la {data.phone || 'numărul tău'} în maxim 24 de ore
                pentru confirmarea datei de {data.date || '__'}.
              </p>
              <button className="btn-primary" style={{marginTop: 28}} onClick={() => {setDone(false); setStep(1);}}>
                Trimite altă cerere
              </button>
            </div>
          ) : (
            <>
              <div className="booking-step-header">
                <div className="booking-step-pills">
                  <div className={`booking-step-pill ${step >= 1 ? 'active' : ''}`}></div>
                  <div className={`booking-step-pill ${step >= 2 ? 'active' : ''}`}></div>
                  <div className={`booking-step-pill ${step >= 3 ? 'active' : ''}`}></div>
                </div>
                <div className="booking-step-label">Pasul {step} din 3</div>
              </div>

              {step === 1 && (
                <>
                  <div className="form-group">
                    <label>Alege pachetul</label>
                    <div className="chip-group">
                      {PACKAGES.map(p => (
                        <button key={p.id}
                          className={`chip magenta ${data.package === p.id ? 'selected' : ''}`}
                          onClick={() => set('package', p.id)}>
                          {p.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Tema preferată</label>
                    <div className="chip-group">
                      {THEMES.map(t => (
                        <button key={t}
                          className={`chip ${data.theme === t ? 'selected' : ''}`}
                          onClick={() => set('theme', t)}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Data evenimentului</label>
                      <input type="date" value={data.date} onChange={e => set('date', e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label>Ora de start</label>
                      <select value={data.time} onChange={e => set('time', e.target.value)}>
                        <option>10:00</option><option>12:00</option><option>14:00</option>
                        <option>16:00</option><option>18:00</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Număr copii</label>
                      <input type="number" min="1" max="50" value={data.kids}
                        onChange={e => set('kids', parseInt(e.target.value) || 1)} />
                    </div>
                    <div className="form-group">
                      <label>Vârsta sărbătoritului</label>
                      <input type="number" min="1" max="14" value={data.age}
                        onChange={e => set('age', parseInt(e.target.value) || 1)} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Extras (opțional)</label>
                    <div className="chip-group">
                      {EXTRAS.map(ex => (
                        <button key={ex.id}
                          className={`chip ${data.extras.includes(ex.id) ? 'selected' : ''}`}
                          onClick={() => toggleExtra(ex.id)}>
                          {data.extras.includes(ex.id) ? '✓ ' : '+ '}{ex.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Notițe suplimentare</label>
                    <textarea rows="3" placeholder="Alergii, cerințe speciale, surprize..."
                      value={data.notes} onChange={e => set('notes', e.target.value)}></textarea>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
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
                  <div style={{background: 'var(--cream-2)', padding: 20, borderRadius: 14, fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.6}}>
                    <strong style={{color: 'var(--ink)'}}>Rezumat:</strong> {pkg.name} · {data.theme} · {data.date || '___'} la {data.time} · {data.kids} copii · {data.extras.length} extras
                  </div>
                </>
              )}

              <div className="booking-actions">
                {step > 1 && (
                  <button className="btn-back" onClick={() => setStep(step - 1)}>← Înapoi</button>
                )}
                {step < 3 ? (
                  <button className="btn-next" onClick={() => setStep(step + 1)}>
                    Continuă <span>→</span>
                  </button>
                ) : (
                  <button className="btn-next" onClick={() => setDone(true)}
                    disabled={!data.name || !data.phone}>
                    Trimite cererea <span>✓</span>
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

window.Booking = Booking;
