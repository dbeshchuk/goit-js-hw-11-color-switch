const body = document.querySelector('body');
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

let timerID = null;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function enableSwitcher() {
  timerID = setInterval(() => {
    body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  
  startBtn.disabled = 'true';
};

function disableSwitcher() {
  clearTimeout(timerID);
  startBtn.removeAttribute('disabled');
};

startBtn.addEventListener('click', enableSwitcher);
stopBtn.addEventListener('click', disableSwitcher);
