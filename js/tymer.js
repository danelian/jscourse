// ==================== СЕКУНДОМЕР ====================

const counterElement = document.querySelector('#counter');
let counter = 0;
let timerId;

// старт
const btnStart = document.querySelector('#start');
btnStart.onclick = function () {
  timerId = setInterval(function () {
    counter++;
    counterElement.innerText = counter;
  }, 1000)
}

// пауза
const btnPause = document.querySelector('#pause');
btnPause.onclick = function () {
  clearInterval(timerId);
}

// сброс
const btnReset = document.querySelector('#reset');
btnReset.onclick = function () {
  counter = 0;
  counterElement.innerText = counter;
  clearInterval(timerId);
}