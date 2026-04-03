(function(){
  const questions = window.GDTContent.questions;
  const gameState = window.GDTGameState.gameState;
  const resetGameState = window.GDTGameState.resetGameState.bind(window.GDTGameState);
  const { playSound, playAmbient, stopAmbient } = window.GDTAudio;
  const UI = window.GDTUI;
  const { generateBackground } = window.GDTScenes;
  function startGame(){ resetGameState(); UI.resetUI(); gameState.started=true; playSound('start'); playAmbient(); UI.showQuizScreen(); showQuestion(); }
  function showQuestion(){ const question = questions[gameState.currentQuestionIndex]; generateBackground(question.bg); UI.updateQuestionUI(question, gameState.currentQuestionIndex); UI.renderOptions(question, checkAnswer); }
  function checkAnswer(selectedIndex){ const question = questions[gameState.currentQuestionIndex]; UI.lockOptions(); if(selectedIndex===question.correct){ playSound('correct'); gameState.score += 1; UI.updateHealthBar(gameState.score); } else { playSound('wrong'); gameState.wrongAnswers.push({ domanda: question.q, rispostaEsatta: question.options[question.correct] }); } UI.markAnswer(selectedIndex, question.correct); UI.showExplanation(question); }
  function nextQuestion(){ gameState.currentQuestionIndex += 1; if(gameState.currentQuestionIndex < questions.length){ showQuestion(); return; } finishGame(); }
  function finishGame(){ gameState.completed=true; stopAmbient(); UI.showFinalScreen(); UI.renderFinalResult(gameState.score, gameState.wrongAnswers); generateBackground('rome-finale'); startConfetti(); }
  function restartGame(){ window.location.reload(); }
  function startConfetti(){ const canvas=document.getElementById('confetti-canvas'); const ctx=canvas.getContext('2d'); canvas.width=window.innerWidth; canvas.height=window.innerHeight; const particles=[]; const colors=['#2f6dd5','#00c853','#00e5ff','#ffeb3b','#d50000']; for(let i=0;i<150;i++) particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height-canvas.height,c:colors[Math.floor(Math.random()*colors.length)],s:Math.random()*12+6,d:Math.random()*4+2}); function draw(){ ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach((p)=>{ ctx.fillStyle=p.c; ctx.fillRect(p.x,p.y,p.s,p.s); p.y+=p.d; if(p.y>canvas.height) p.y=-20; }); requestAnimationFrame(draw);} draw(); }
  window.GDTQuiz = { startGame, nextQuestion, restartGame, showQuestion, checkAnswer };
})();
