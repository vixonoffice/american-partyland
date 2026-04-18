const FloatingSocials = () => {
  return (
    <div className="floating-socials">
      <a href="https://wa.me/40752592893" target="_blank" rel="noopener" aria-label="WhatsApp" className="whatsapp">
        <SocialIcon kind="whatsapp" />
      </a>
      <a href="https://www.instagram.com/american.partyland/" target="_blank" rel="noopener" aria-label="Instagram" className="instagram">
        <SocialIcon kind="instagram" />
      </a>
      <a href="https://www.tiktok.com/@american.partyland" target="_blank" rel="noopener" aria-label="TikTok" className="tiktok">
        <SocialIcon kind="tiktok" />
      </a>
      <a href="https://www.facebook.com/people/American-Partyland/61577150607618/" target="_blank" rel="noopener" aria-label="Facebook" className="facebook">
        <SocialIcon kind="facebook" />
      </a>
    </div>
  );
};

const Marquee = () => (
  <div className="marquee">
    <div className="marquee-track">
      {Array.from({length: 2}).map((_, k) => (
        <React.Fragment key={k}>
          <span className="marquee-item">Aniversări</span>
          <span className="marquee-item">Botezuri</span>
          <span className="marquee-item">Petreceri tematice</span>
          <span className="marquee-item">Ateliere creative</span>
          <span className="marquee-item">Ședințe foto</span>
          <span className="marquee-item">Party Premium</span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

window.FloatingSocials = FloatingSocials;
window.Marquee = Marquee;
