(function() {
	//console.log("Cosa c'è in GDTAudio?", window.GDTAudio); // Aggiungi questa riga
	const {
		setBackgroundLayer,
		generateBackground
	} = window.GDTScenes;
	const {
		startGame,
		nextQuestion,
		restartGame
	} = window.GDTQuiz;
	const {
		showStartScreen,
		toggleLogoPosition
	} = window.GDTUI;
	const {
		initAudioControls
	} = window.GDTAudio;

	function bindMainButtons() {
		document.getElementById('start-btn').addEventListener('click', startGame);
		document.getElementById('next-btn').addEventListener('click', nextQuestion);
		document.getElementById('restart-btn').addEventListener('click', restartGame);
	}

	function bindSecretBackgroundControls() {
		document.querySelectorAll('#secret-bg-controls .secret-btn').forEach((button) => {
			button.addEventListener('click', () => generateBackground(button.dataset.bg))
		});
		const moveLogoBtn = document.getElementById('move-logo-btn');
		if (moveLogoBtn) {
			moveLogoBtn.addEventListener('click', toggleLogoPosition)
		}
	}

function initStartingGuide() {
    const bgControls = document.getElementById('secret-bg-controls');
    const musicControls = document.getElementById('music-controls');
    const guideTooltip = document.getElementById('starting-guide-tooltip');
    
    // Mostra i controlli in basso e il tooltip
    if (bgControls) bgControls.classList.add('reveal-guide');
    if (musicControls) musicControls.classList.add('reveal-guide');
    if (guideTooltip) guideTooltip.classList.remove('hidden');
    
    // Rimuove la guida dopo 8.5 secondi (dà il tempo di leggere)
    setTimeout(() => {
      // 1. Avvia la transizione di scomparsa
      if (bgControls) bgControls.classList.remove('reveal-guide');
      if (musicControls) musicControls.classList.remove('reveal-guide');
      if (guideTooltip) guideTooltip.classList.add('fade-out');
      
      // 2. Nasconde definitivamente l'HTML del tooltip per non pesare sulla pagina
      setTimeout(() => {
        if (guideTooltip) guideTooltip.classList.add('hidden');
      }, 1000); // Attende la fine dell'animazione CSS di fadeOut

    }, 8500); 
  }

	function init() {
		setBackgroundLayer(document.getElementById('bg-layer'));
		bindMainButtons();
		bindSecretBackgroundControls();
		initAudioControls();
		showStartScreen();
		generateBackground('wind');
    initStartingGuide();
	}
	window.addEventListener('load', init);
})();