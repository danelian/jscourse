// =============== 6.5. Стрелочные функции ================

function sayHi(name) {
  console.log(`Barev, ${name}! Vonc es?`);
}
sayHi('Danil');

// const arrSayHi = (name) => {
//   console.log(`Barev, ${name}! Vonc es?`);
// }

const arrSayHi = (name) => console.log(`Barev, ${name}! Vonc es?`);
arrSayHi('Armen');


// example
// function summ(a, b) {
//   const result = a + b;
// }

const summ = (a, b) => a + b;
const res = summ(50, 60);
console.log(res);