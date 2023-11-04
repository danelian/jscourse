// ============== 8. Циклы ===============
// console.log('Start');

// for (let i = 0; i < 10; i = i + 3 ) {
//   console.log(i);
// }

// console.log('Finish');


// Обход массива циклом for
const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota', 'Volvo'];

for (i = 0; i < autoBrands.length; i++) {
  console.log(i);
  console.log(autoBrands[i]);
}


// Обход массива циклом for of
// item - может называться как угодно
for (let brand of autoBrands) {
  console.log(brand)
}


// Обход массива циклом for each
// autoBrands.forEach(function(item, index) {
//   console.log(`${item} => ${index}`);
// })


// передача функции извне
autoBrands.forEach(printBrand);

function printBrand (item, index) {
  console.log(`${item} => ${index}`);
}