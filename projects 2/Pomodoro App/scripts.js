const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

let countdown;
let secondsLeft = 1500; // 25 minutes in seconds

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function startTimer() {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + secondsLeft * 1000;
  displayTimeLeft(secondsLeft);
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      startBreak();
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function startBreak() {
  clearInterval(countdown);
  secondsLeft = 300; // 5 minutes in seconds
  const now = Date.now();
  const then = now + secondsLeft * 1000;
  displayTimeLeft(secondsLeft);
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      startTimer();
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function resetTimer() {
  clearInterval(countdown);
  secondsLeft = 1500; // 25 minutes in seconds
  displayTimeLeft(secondsLeft);
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
