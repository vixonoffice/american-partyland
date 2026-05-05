const SocialIcon = ({ kind }) => {
  const icons = {
    instagram: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
      </svg>
    ),
    facebook: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 22v-8.5h2.8l.4-3.3h-3.2V8c0-.95.3-1.6 1.65-1.6h1.75V3.4c-.3 0-1.34-.13-2.55-.13-2.52 0-4.25 1.55-4.25 4.38v2.55H7.3v3.3h2.8V22h3.4z"/>
      </svg>
    ),
    tiktok: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.6 7.25a5.5 5.5 0 0 1-3.35-1.13 5.6 5.6 0 0 1-2.2-3.62h-3v12.2a2.65 2.65 0 1 1-2.65-2.65c.3 0 .6.05.87.14V9.07a5.85 5.85 0 0 0-.87-.06 5.8 5.8 0 1 0 5.8 5.8V8.95a8.5 8.5 0 0 0 5.4 1.9V7.8c0-.2-.01-.4-.0-.55z"/>
      </svg>
    ),
    whatsapp: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 14.4c-.25-.12-1.5-.74-1.73-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.2-.55.06-.25-.12-1.07-.4-2.03-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.26-.02-.4.1-.52.11-.12.25-.3.37-.45.12-.15.17-.26.25-.43.08-.17.04-.32-.02-.45-.06-.12-.56-1.34-.77-1.84-.2-.48-.4-.42-.55-.42l-.5-.01c-.17 0-.43.06-.66.32-.23.26-.86.84-.86 2.05 0 1.2.88 2.37 1 2.54.13.17 1.75 2.66 4.22 3.73.59.25 1.05.4 1.4.51.58.18 1.12.16 1.54.1.47-.07 1.5-.6 1.72-1.2.2-.58.2-1.08.15-1.18-.05-.1-.22-.17-.47-.29M12 3a9 9 0 0 0-7.6 13.8L3 21l4.3-1.4A9 9 0 1 0 12 3"/>
      </svg>
    ),
  };
  return icons[kind];
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-brand">
            American<br/>Partyland<span className="dot-accent">.</span>
          </div>
          <p className="footer-lede">
            Locul unde aniversările copiilor devin povești. Rezervări deschise pentru 2026.
          </p>
          <div className="footer-socials" style={{marginTop: 22}}>
            <a href="https://www.instagram.com/american.partyland/" target="_blank" rel="noopener" aria-label="Instagram" className="soc instagram">
              <SocialIcon kind="instagram" />
            </a>
            <a href="https://www.facebook.com/people/American-Partyland/61577150607618/" target="_blank" rel="noopener" aria-label="Facebook" className="soc facebook">
              <SocialIcon kind="facebook" />
            </a>
            <a href="https://www.tiktok.com/@american.partyland" target="_blank" rel="noopener" aria-label="TikTok" className="soc tiktok">
              <SocialIcon kind="tiktok" />
            </a>
            <a href="https://wa.me/40752592893" target="_blank" rel="noopener" aria-label="WhatsApp" className="soc whatsapp">
              <SocialIcon kind="whatsapp" />
            </a>
          </div>
        </div>
        <div>
          <h4>Navigare</h4>
          <ul>
            <li><a href="#acasa">Acasă</a></li>
            <li><a href="#despre">Despre noi</a></li>
            <li><a href="#servicii">Servicii</a></li>
            <li><a href="#galerie">Galerie</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Servicii</h4>
          <ul>
            <li><a href="#servicii">Aniversări clasice</a></li>
            <li><a href="#tarife">Tarife</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>Strada Cloșca 12B</li>
            <li>Râmnicu Vâlcea</li>
            <li><a href="tel:0742777989">0742 777 989</a></li>
            <li><a href="tel:0752593893">0752 593 893</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 American Partyland. Toate drepturile rezervate.</div>
        <div>Râmnicu Vâlcea · Locația unde copilăria se sărbătorește.</div>
        <a href="https://vixonlab.ro" target="_blank" rel="noopener" className="footer-madeby">
          <span className="fmb-inner">
            <span className="fmb-star">✦</span>
            <span>Designed by <strong>VixonLab</strong></span>
          </span>
        </a>
      </div>
    </footer>
  );
};

window.Footer = Footer;
