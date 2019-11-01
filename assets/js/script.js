//IIFE
//procedural programming
(function() {
  let p1ScoreDisplay = document.getElementById('p1Score');
  let p2ScoreDisplay = document.getElementById('p2Score');
  let p1 = document.querySelector('.p1');
  let p2 = document.querySelector('.p2');
  const wScoreDisplay = document.querySelector('p span');
  const inputScore = document.getElementById('inputScore');
  const p1Btn = document.getElementById('p1Btn');
  const p2Btn = document.getElementById('p2Btn');
  const resetBtn = document.getElementById('resetBtn');
  let span = document.createElement('span');
  let randomScoreP1, randomScoreP2;
  let winingScore = inputScore;
  let gameOver = false;

  //initials
  p1Btn.setAttribute('disabled', 'disabled');
  p2Btn.setAttribute('disabled', 'disabled');
  resetBtn.setAttribute('disabled', 'disabled');

  function reset() {
    gameOver = false;
    p1ScoreDisplay.textContent = 0;
    p2ScoreDisplay.textContent = 0;
    p1ScoreDisplay.classList.remove('winner');
    p2ScoreDisplay.classList.remove('winner');
    p1Btn.setAttribute('disabled', 'disabled');
    p2Btn.setAttribute('disabled', 'disabled');
    wScoreDisplay.textContent = '';
    document.querySelector('span').remove('span');
    resetBtn.setAttribute('disabled', 'disabled');
    inputScore.removeAttribute('disabled');
  }

  p1Btn.addEventListener('click', () => {
    if (!gameOver) {
      randomScoreP1 = Math.floor(Math.random() * winingScore) + 1;

      if (randomScoreP1 === winingScore) {
        p1ScoreDisplay.classList.add('winner');
        gameOver = true;
        p1Btn.setAttribute('disabled', 'disabled');
        p2Btn.setAttribute('disabled', 'disabled');
        p1.appendChild(span).textContent = 'WINNER';
      }
    }
    if (gameOver) {
      inputScore.setAttribute('disabled', 'disabled');
    }

    p1ScoreDisplay.textContent = randomScoreP1;
  });
  p2Btn.addEventListener('click', () => {
    if (!gameOver) {
      randomScoreP2 = Math.floor(Math.random() * winingScore) + 1;
      if (randomScoreP2 === winingScore) {
        p2ScoreDisplay.classList.add('winner');
        gameOver = true;
        p1Btn.setAttribute('disabled', 'disabled');
        p2Btn.setAttribute('disabled', 'disabled');
        p2.appendChild(span).textContent = 'WINNER';
      }
    }
    if (gameOver) {
      inputScore.setAttribute('disabled', 'disabled');
    }
    p2ScoreDisplay.textContent = randomScoreP2;
  });
  inputScore.addEventListener('change', () => {
    winingScore = Number(inputScore.value);
    wScoreDisplay.textContent = inputScore.value;
    inputScore.value = '';
    p1Btn.removeAttribute('disabled');
    p2Btn.removeAttribute('disabled');
    resetBtn.removeAttribute('disabled');
  });

  resetBtn.addEventListener('click', reset);
})();
