const App = () => React.createElement(React.Fragment, null,
  React.createElement(GlobalParticles, null),
  React.createElement(Nav, null),
  React.createElement(Hero, null),
  React.createElement(Marquee, null),
  React.createElement(About, null),
  React.createElement(Services, null),
  React.createElement(VideoShowcase, null),
  React.createElement(Pricing, null),
  React.createElement(Gallery, null),
  React.createElement(Testimonials, null),
  React.createElement(Booking, null),
  React.createElement(Contact, null),
  React.createElement(CtaBanner, null),
  React.createElement(Footer, null),
  React.createElement(FloatingSocials, null)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, null));

// Reveal on scroll
setTimeout(() => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.section, .about, .video-showcase, .xp-strip, .testimonials, .cta-banner').forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  });
}, 1000);

// Robust video autoplay — IntersectionObserver + interaction fallback
setTimeout(() => {
  const allVideos = document.querySelectorAll('video[autoplay]');

  allVideos.forEach(v => {
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute('muted', '');
    v.setAttribute('playsinline', '');
  });

  const videoIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const v = entry.target;
      if (entry.isIntersecting) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, { threshold: 0.25 });

  allVideos.forEach(v => videoIO.observe(v));

  const forcePlay = () => {
    allVideos.forEach(v => {
      v.muted = true;
      v.play().catch(() => {});
    });
  };
  document.addEventListener('touchstart', forcePlay, { once: true, passive: true });
  document.addEventListener('click', forcePlay, { once: true });
  document.addEventListener('scroll', forcePlay, { once: true, passive: true });
}, 800);
