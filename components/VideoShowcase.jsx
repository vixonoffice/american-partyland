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
          <div className="eyebrow" style={{color: 'var(--sun)', marginBottom: 16}}>✦ In miscare</div>
          <h2 className="display">Locatia noastra, in imagini vii.</h2>
        </div>
        <p>
          Trei momente surprinse din locația American Partyland — atmosfera reala,
          decorul, energia. Apasa pentru sunet.
        </p>
      </div>

      <div className="video-grid">
        <div className="video-tile" onClick={() => togglePlay(0)}>
          <video ref={el => videoRefs.current[0] = el} autoPlay muted loop playsInline webkit-playsinline="" disableRemotePlayback preload="auto">
            <source src="videos/video-1_fast.mp4" type="video/mp4" />
          </video>
          <div className="video-play-btn">▶</div>
          <div className="video-tile-label">
            <small>Gradina</small>
            Spatiul de joaca
          </div>
        </div>
        <div className="video-column-stack">
          <div className="video-tile" onClick={() => togglePlay(1)}>
            <video ref={el => videoRefs.current[1] = el} autoPlay muted loop playsInline webkit-playsinline="" disableRemotePlayback preload="auto">
              <source src="videos/video-2_fast.mp4" type="video/mp4" />
            </video>
            <div className="video-play-btn">▶</div>
            <div className="video-tile-label">
              <small>Interior</small>
              Foișorul nostru
            </div>
          </div>
          <div className="video-tile" onClick={() => togglePlay(2)}>
            <video ref={el => videoRefs.current[2] = el} autoPlay muted loop playsInline webkit-playsinline="" disableRemotePlayback preload="auto">
              <source src="videos/video-3_fast.mp4" type="video/mp4" />
            </video>
            <div className="video-play-btn">▶</div>
            <div className="video-tile-label">
              <small>Aniversare</small>
              8 ani de neuitat
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
