(function(){
  //console.log("Cosa c'è in GDTAudio?", window.GDTAudio); // Aggiungi questa riga
  const { setBackgroundLayer, generateBackground } = window.GDTScenes;
  const { startGame, nextQuestion, restartGame } = window.GDTQuiz;
  const { showStartScreen, toggleLogoPosition } = window.GDTUI;
  const { initAudioControls } = window.GDTAudio;
  function bindMainButtons(){ document.getElementById('start-btn').addEventListener('click', startGame); document.getElementById('next-btn').addEventListener('click', nextQuestion); document.getElementById('restart-btn').addEventListener('click', restartGame); }
  function bindSecretBackgroundControls(){document.querySelectorAll('#secret-bg-controls .secret-btn').forEach((button)=>{button.addEventListener('click',()=>generateBackground(button.dataset.bg))});const moveLogoBtn=document.getElementById('move-logo-btn');if(moveLogoBtn){moveLogoBtn.addEventListener('click',toggleLogoPosition)}}
  function init(){ setBackgroundLayer(document.getElementById('bg-layer')); bindMainButtons(); bindSecretBackgroundControls(); initAudioControls(); showStartScreen(); generateBackground('wind'); }
  window.addEventListener('load', init);
})();
