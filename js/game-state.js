window.GDTGameState = {
  gameState: { currentQuestionIndex: 0, score: 0, wrongAnswers: [], started: false, completed: false },
  resetGameState() {
    this.gameState.currentQuestionIndex = 0;
    this.gameState.score = 0;
    this.gameState.wrongAnswers = [];
    this.gameState.started = false;
    this.gameState.completed = false;
  }
};
