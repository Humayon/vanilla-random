//IIFE
//procedural programming
(function() {
  const p1ScoreDisplay = document.getElementById('p1Score');
  const p2ScoreDisplay = document.getElementById('p2Score');
  const wScoreDisplay = document.querySelector('p span');
  const inputScore = document.getElementById('inputScore');
  const p1Btn = document.getElementById('p1Btn');
  const p2Btn = document.getElementById('p2Btn');
  const resetBtn = document.getElementById('resetBtn');
  let primaryNo = document.querySelector('#primary-no');
  let winingScore = 5;
  let randomScore;
  let gameOver = false;

  function winner(finalScore, winingScore) {
    if (finalScore === winingScore) {
      if (finalScore === winingScore) {
        p1ScoreDisplay.classList.add('winner');
      } else {
        //not working
        p2ScoreDisplay.classList.add('winner');
      }
      gameOver = true;
      p1Btn.setAttribute('disabled', 'disabled');
      p2Btn.setAttribute('disabled', 'disabled');
    }
  }
  function reset() {
    randomScore = 0;
    //Not Working
    primaryNo.textContent = winingScore;
    gameOver = false;
    p1ScoreDisplay.textContent = 0;
    p2ScoreDisplay.textContent = 0;
    p1ScoreDisplay.classList.remove('winner');
    p2ScoreDisplay.classList.remove('winner');
    p1Btn.removeAttribute('disabled');
    p2Btn.removeAttribute('disabled');
  }

  p1Btn.addEventListener('click', () => {
    if (!gameOver) {
      randomScore = Math.floor(Math.random() * winingScore) + 1;
      winner(randomScore, winingScore);
    }

    p1ScoreDisplay.textContent = randomScore;
  });
  p2Btn.addEventListener('click', () => {
    if (!gameOver) {
      randomScore = Math.floor(Math.random() * winingScore) + 1;
      winner(randomScore, winingScore);

      p2ScoreDisplay.textContent = randomScore;
    }
  });
  inputScore.addEventListener('change', () => {
    winingScore = Number(inputScore.value);
    wScoreDisplay.textContent = inputScore.value;
    inputScore.value = '';
    reset();
  });

  resetBtn.addEventListener('click', reset);
})();
