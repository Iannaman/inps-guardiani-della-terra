(function(){
  const config = window.GDTConfig.audio;
  const sfxCache = {};
  let bgAudio = null;
  let currentTrackId = config.defaultTrackId || null;
  let lyricsVisible = false;
  let lyricsTimer = null;
  let controlsReady = false;

  function getTrackById(trackId){
    return config.backgroundTracks.find((track) => track.id === trackId) || null;
  }

  function getSfx(name){
    if(!sfxCache[name]){
      sfxCache[name] = new Audio(config.sfx[name]);
      sfxCache[name].preload = 'auto';
    }
    return sfxCache[name];
  }

  function playSfx(name){
    const audio = getSfx(name);
    audio.currentTime = 0;
    audio.play().catch((error) => console.warn('SFX non riproducibile:', name, error.message));
  }

  function ensureBackgroundAudio(){
    if(!bgAudio){
      bgAudio = new Audio();
      bgAudio.preload = 'auto';
      bgAudio.loop = false;
      bgAudio.addEventListener('ended', () => updateMusicButton(false));
      bgAudio.addEventListener('timeupdate', renderCurrentLyrics);
      bgAudio.addEventListener('loadedmetadata', renderCurrentLyrics);
    }
    return bgAudio;
  }

  function updateMusicButton(isPlaying){
    const btn = document.getElementById('music-toggle-btn');
    if(btn) btn.textContent = isPlaying ? '⏸ Musica' : '▶ Musica';
  }

  function updateTrackButtons(){
    document.querySelectorAll('.track-btn').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.trackId === currentTrackId);
    });
  }

  function renderLyricsPlaceholder(text){
    const panel = document.getElementById('lyrics-panel');
    const textBox = document.getElementById('lyrics-text');
    if(!panel || !textBox) return;
    textBox.innerHTML = text;
    if(lyricsVisible) panel.classList.remove('hidden');
  }

  function renderCurrentLyrics(){
    const panel = document.getElementById('lyrics-panel');
    const title = document.getElementById('lyrics-title');
    const textBox = document.getElementById('lyrics-text');
    if(!panel || !title || !textBox) return;

    const track = getTrackById(currentTrackId);
    if(!track){
      title.textContent = 'Lyrics';
      renderLyricsPlaceholder('Seleziona una traccia per visualizzare il testo.');
      textBox.dataset.trackId = '';
      return;
    }

    title.textContent = `Lyrics — ${track.title}`;

    if(!track.lyrics || !track.lyrics.length){
      renderLyricsPlaceholder('Per questa traccia non sono state configurate lyrics.');
      textBox.dataset.trackId = '';
      return;
    }

    const currentTime = bgAudio ? bgAudio.currentTime : 0;
    
    // 1. Trova l'indice della frase corrente
    let newActiveIndex = -1;
    for(let i = 0; i < track.lyrics.length; i++){
      const line = track.lyrics[i];
      const next = track.lyrics[i + 1];
      if(currentTime >= line.time && (!next || currentTime < next.time)) {
        newActiveIndex = i;
        break;
      }
    }

    // 2. Se è una nuova traccia, genera l'HTML
    if (textBox.dataset.trackId !== currentTrackId) {
      const html = track.lyrics.map((line, index) => {
        const isCurrent = (index === newActiveIndex);
        return `<div class="lyrics-line${isCurrent ? ' is-current' : ''}">${line.text}</div>`;
      }).join('');

      textBox.innerHTML = html;
      textBox.dataset.trackId = currentTrackId;
      
      // Auto-scroll iniziale se la canzone è già iniziata
      const currentLine = textBox.querySelector('.is-current');
      if (currentLine) {
         currentLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      // 3. Ottimizzazione: la traccia è la stessa, aggiorniamo solo la classe per permettere l'animazione
      const lines = textBox.querySelectorAll('.lyrics-line');
      const currentActiveNode = textBox.querySelector('.is-current');
      const targetActiveNode = newActiveIndex !== -1 ? lines[newActiveIndex] : null;

      // Se la riga attiva è cambiata rispetto al frame precedente
      if (currentActiveNode !== targetActiveNode) {
        if (currentActiveNode) currentActiveNode.classList.remove('is-current');
        
        if (targetActiveNode) {
          targetActiveNode.classList.add('is-current');
          // --- EFFETTUA L'AUTO SCROLL ---
          targetActiveNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  }

function setLyricsVisible(visible){
    lyricsVisible = visible;
    const panel = document.getElementById('lyrics-panel');
    const btn = document.getElementById('lyrics-toggle-btn');
    const logo = document.querySelector('.persistent-logo'); 

    if(btn) btn.textContent = visible ? '📝 Lyrics ON' : '📝 Lyrics OFF';
    
    // --- GESTIONE LOGO KARAOKE E RITORNO ---
    if(logo) {
      // Pulisce tutte le animazioni precedenti prima di applicare la nuova
      logo.classList.remove('karaoke-entrance', 'karaoke-live', 'logo-return');

      if(visible) {
        // Entrata scenografica del logo Karaoke
        logo.src = './assets/images/Logo Inps - Guardiani della terra - Karaoke.png'; 
        logo.classList.add('karaoke-entrance');
        
        // Passaggio alla fase "Live" dopo l'animazione di entrata
        setTimeout(() => {
          if (lyricsVisible) {
              logo.classList.remove('karaoke-entrance');
              logo.classList.add('karaoke-live');
          }
        }, 600);

      } else {
        // Ritorno animato al logo Inps normale
        logo.src = './assets/images/Inps-logo.png';
        logo.classList.add('logo-return');
      }
    }
    // --- FINE GESTIONE LOGO ---

    if(!panel) return;
    if(visible){
      panel.classList.remove('hidden');
      renderCurrentLyrics();
    } else {
      panel.classList.add('hidden');
    }
  }

  function setBackgroundTrack(trackId, autoplay){
    const track = getTrackById(trackId);
    if(!track) return;
    currentTrackId = track.id;
    updateTrackButtons();
    const audio = ensureBackgroundAudio();
    audio.pause();
    audio.src = track.file;
    audio.currentTime = 0;
    renderCurrentLyrics();
    if(autoplay){
      audio.play().then(() => updateMusicButton(true)).catch((error) => {
        console.warn('Traccia non riproducibile:', track.file, error.message);
        updateMusicButton(false);
      });
    } else {
      updateMusicButton(false);
    }
  }

  function toggleBackgroundPlayback(){
    const audio = ensureBackgroundAudio();
    if(!audio.src){
      setBackgroundTrack(currentTrackId, true);
      return;
    }
    if(audio.paused){
      audio.play().then(() => updateMusicButton(true)).catch((error) => {
        console.warn('Riproduzione bloccata:', error.message);
      });
    } else {
      audio.pause();
      updateMusicButton(false);
    }
  }

  function stopBackground(){
    if(!bgAudio) return;
    bgAudio.pause();
    bgAudio.currentTime = 0;
    updateMusicButton(false);
    renderCurrentLyrics();
  }

  function buildTrackButtons(){
    const container = document.getElementById('track-buttons');
    if(!container || controlsReady) return;
    container.innerHTML = '';
    config.backgroundTracks.forEach((track) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'track-btn';
      btn.dataset.trackId = track.id;
      btn.textContent = track.title;
      btn.addEventListener('click', () => setBackgroundTrack(track.id, true));
      container.appendChild(btn);
    });
    controlsReady = true;
    updateTrackButtons();
  }

  function initAudioControls(){
    buildTrackButtons();
    const musicToggle = document.getElementById('music-toggle-btn');
    const lyricsToggle = document.getElementById('lyrics-toggle-btn');
    if(musicToggle){
      musicToggle.addEventListener('click', toggleBackgroundPlayback);
      updateMusicButton(false);
    }
    if(lyricsToggle){
      lyricsToggle.addEventListener('click', () => setLyricsVisible(!lyricsVisible));
      lyricsToggle.textContent = '📝 Lyrics OFF';
    }
    renderCurrentLyrics();
  }

  window.GDTAudio = {
    initAudioControls,
    playSound: playSfx,
    playAmbient: function(){ if(currentTrackId) setBackgroundTrack(currentTrackId, true); },
    stopAmbient: stopBackground,
    setBackgroundTrack,
    toggleBackgroundPlayback,
    setLyricsVisible
  };
})();
