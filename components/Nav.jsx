const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#acasa', label: 'Acasă' },
    { href: '#despre', label: 'Despre' },
    { href: '#servicii', label: 'Servicii' },
    { href: '#galerie', label: 'Galerie' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#acasa" className="nav-logo">
          <span className="nav-logo-mark">A</span>
          American Partyland
        </a>
        <div className="nav-links">
          {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>
        <a href="#rezervare" className="nav-cta">
          Rezervă <span>→</span>
        </a>
        <button className="nav-burger" onClick={() => setOpen(true)} aria-label="Meniu">
          <span></span><span></span><span></span>
        </button>
      </nav>
      {open && (
        <div className="mobile-menu">
          <button className="mobile-menu-close" onClick={() => setOpen(false)}>✕</button>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#rezervare" onClick={() => setOpen(false)}>Rezervă →</a>
        </div>
      )}
    </>
  );
};

window.Nav = Nav;
