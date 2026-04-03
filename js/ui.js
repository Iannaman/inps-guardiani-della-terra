(function(){
  const questions = window.GDTContent.questions;
  const elements = { startScreen: document.getElementById('start-screen'), quizScreen: document.getElementById('quiz-screen'), finalScreen: document.getElementById('final-screen'), healthBar: document.getElementById('health-bar'), infoHeader: document.getElementById('info-header'), questionText: document.getElementById('question-text'), optionsContainer: document.getElementById('options-container'), explanation: document.getElementById('explanation'), goalTag: document.getElementById('goal-tag'), explanationText: document.getElementById('explanation-text'), finalResult: document.getElementById('final-result'), wrongRecap: document.getElementById('wrong-recap') };
  function showStartScreen(){ elements.startScreen.classList.remove('hidden'); elements.quizScreen.classList.add('hidden'); elements.finalScreen.classList.add('hidden'); }
  function showQuizScreen(){ 
    elements.startScreen.classList.add('hidden');
    elements.quizScreen.classList.remove('hidden');
    elements.finalScreen.classList.add('hidden');
    toggleLogoPosition();
    
    // Attiva l'animazione di movimento e salita del container
    document.getElementById('game-container').classList.add('mission-active');
  }
  function showFinalScreen(){ elements.startScreen.classList.add('hidden'); elements.quizScreen.classList.add('hidden'); elements.finalScreen.classList.remove('hidden'); toggleLogoPosition();  }
  function resetUI(){ elements.healthBar.style.width='0%'; elements.explanation.style.display='none'; elements.wrongRecap.style.display='none'; elements.wrongRecap.innerHTML=''; elements.optionsContainer.innerHTML=''; }
  function updateQuestionUI(question,currentIndex){ elements.infoHeader.innerText=`TAPPA ${currentIndex+1} DI ${questions.length}`; elements.questionText.innerText=question.q; elements.explanation.style.display='none'; elements.optionsContainer.innerHTML=''; }
  function renderOptions(question,onOptionClick){ question.options.forEach((opt,i)=>{ const btn=document.createElement('button'); btn.className='option-btn'; btn.innerHTML=`${opt}<br><small>(Alza la mano per ${String.fromCharCode(65+i)})</small>`; btn.addEventListener('click',()=>onOptionClick(i)); elements.optionsContainer.appendChild(btn); }); }
  function lockOptions(){ document.querySelectorAll('.option-btn').forEach((b)=>{ b.style.pointerEvents='none'; }); }
  function markAnswer(selectedIndex,correctIndex){ const btns=document.querySelectorAll('.option-btn'); if(selectedIndex===correctIndex) btns[selectedIndex].classList.add('correct'); else { btns[selectedIndex].classList.add('wrong'); btns[correctIndex].classList.add('correct'); } }
  function updateHealthBar(score){ elements.healthBar.style.width=`${(score/questions.length)*100}%`; }
  function showExplanation(question){ elements.goalTag.innerText=question.goal; elements.explanationText.innerText=question.exp; elements.explanation.style.display='block'; }
  function renderFinalResult(score,wrongAnswers){ elements.finalResult.innerText=`Salute del Pianeta: ${Math.round((score/questions.length)*100)}%`; if(wrongAnswers.length===0){ elements.wrongRecap.style.display='block'; elements.wrongRecap.style.borderColor='var(--md-success)'; elements.wrongRecap.innerHTML=`<h3 style="color:var(--md-success); margin:0;">PERCORSO PERFETTO!</h3><p>Non avete sbagliato nessuna domanda. Siete eccezionali!</p>`; return; } elements.wrongRecap.style.display='block'; elements.wrongRecap.style.borderColor='var(--md-danger)'; let htmlRecap=`<h3 style="color:var(--md-danger); margin-top:0;">Lezioni Imparate (Domande Sbagliate):</h3>`; wrongAnswers.forEach((item)=>{ htmlRecap += `<div class="recap-item"><b style="font-size:1.2rem;">${item.domanda}</b><br>Risposta corretta: <span style="color:var(--md-success); font-weight:bold; font-size:1.2rem;">${item.rispostaEsatta}</span></div>`; }); elements.wrongRecap.innerHTML=htmlRecap; }
  function toggleLogoPosition() { const logo = document.querySelector('.persistent-logo');  if(logo) { logo.classList.toggle('logo-top-right'); }  }
  window.GDTUI = { showStartScreen, showQuizScreen, showFinalScreen, resetUI, updateQuestionUI, renderOptions, lockOptions, markAnswer, updateHealthBar, showExplanation, renderFinalResult, toggleLogoPosition };
})();
