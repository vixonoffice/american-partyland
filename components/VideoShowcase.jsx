const VideoShowcase = () => {
  const videoRefs = React.useRef([]);

  const togglePlay = (i) => {
    const v = videoRefs.current[i];
    if (!v) return;
    if (v.paused) v.play(); else v.pause();
  };

  return (
    <section className="video-showcase">
      <div className="video-showcase-head">
        <div>
          <div className="eyebrow" style={{color: 'var(--sun)', marginBottom: 16}}>✦ În mișcare</div>
          <h2 className="display">Locația noastră, în imagini vii.</h2>
        </div>
        <p>
          Trei momente surprinse din grădina American Partyland — atmosfera reală,
          decorul, energia. Apasă pentru sunet.
        </p>
      </div>

      <div className="video-grid">
        <div className="video-tile" onClick={() => togglePlay(0)}>
          <video ref={el => videoRefs.current[0] = el} autoPlay muted loop playsInline preload="metadata">
            <source src="videos/video-1_noaudio.mp4" type="video/mp4" />
          </video>
          <div className="video-play-btn">▶</div>
          <div className="video-tile-label">
            <small>Grădina</small>
            Spațiul de joacă
          </div>
        </div>
        <div className="video-column-stack">
          <div className="video-tile" onClick={() => togglePlay(1)}>
            <video ref={el => videoRefs.current[1] = el} autoPlay muted loop playsInline preload="metadata">
              <source src="videos/video-2_noaudio.mp4" type="video/mp4" />
            </video>
            <div className="video-play-btn">▶</div>
            <div className="video-tile-label">
              <small>Decor</small>
              Princess Party
            </div>
          </div>
          <div className="video-tile" onClick={() => togglePlay(2)}>
            <video ref={el => videoRefs.current[2] = el} autoPlay muted loop playsInline preload="metadata">
              <source src="videos/video-3_noaudio.mp4" type="video/mp4" />
            </video>
            <div className="video-play-btn">▶</div>
            <div className="video-tile-label">
              <small>Atmosferă</small>
              Ziua petrecerii
            </div>
          </div>
        </div>
        <div className="video-tile" style={{position: 'relative'}}>
          <img src="images/princess-01.jpg" alt="Preview" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          <div className="video-tile-label">
            <small>Galerie</small>
            Vezi toate momentele
          </div>
        </div>
      </div>
    </section>
  );
};

window.VideoShowcase = VideoShowcase;
