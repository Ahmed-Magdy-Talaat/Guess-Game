'use strict';

let trueNumber = Math.trunc(Math.random() * 20) + 1;

let highScore = 0;
let currentScore = 20;

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number');
  } else if (guess === trueNumber) {
    document.querySelector('.number').textContent = trueNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    displayMessage('Your Guess is Correct 🎉🎉');
    if (currentScore > highScore) {
      highScore = currentScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    currentScore--;
    if (currentScore < 1) {
      displayMessage(' 🔴 Game Over ');
      document.querySelector('.score').textContent = '0';
    } else {
      document.querySelector('.score').textContent = currentScore;
      displayMessage(guess < trueNumber ? 'Too Low' : 'Too High');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').style.width = '15rem';
  trueNumber = Math.trunc(Math.random() * 20) + 1;
  currentScore = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
