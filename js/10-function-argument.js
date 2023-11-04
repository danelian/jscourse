// ================= 6.3. Функция как аргумент ================

function summ(a, b) {
  return a + b;
}

function diff(a, b) {
  return a - b;
}

// console.log(summ(10, 15));

// const result = summ(summ(15, 20), summ(20, 25));
// console.log(result);


function doSomething(func) {
  let x = 10;
  let y = 15;
  const result = func(x,y);
  console.log(result);
}

doSomething(summ); // 25
doSomething(diff); // -5