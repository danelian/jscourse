// =========== setInterval ===========

// const timerIntervalId = setInterval(function () {
//   console.log('Fired');
// }, 3000);

// clearInterval(timerIntervalId);


// =========== setTimeOut ===========

// const timerId = setTimeout(function () {
//   console.log('SetTimeOut fired!');
// }, 4000);

// clearInterval(timerId);


// =========== setInterval + setTimeOut ===========

const timerId = setInterval(function () {
  console.log('Fire!');
}, 1000);

setTimeout(function () {
  clearInterval(timerId);
}, 10000);