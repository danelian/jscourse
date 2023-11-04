// ============ 7.1. Методы массивов ============
/**
 * .push(), .pop(), .shift(), .unshift(), .splice(), .slide(),
 * .forEach(), .indexOf(), .includes()
 */

/*
arr.push(...items) – Добавить элемент в конец массива
arr.pop() – Удалить элемент из конца массива
arr.shift() – Удалить элемент из начала массива
arr.unshift(...items) – Добавить элемент в начало массива
arr.splice([start]], [deleteCount, newElements])
*/

const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
console.log(autoBrands);

autoBrands.push('lada');
console.log(autoBrands);

autoBrands.pop()
console.log(autoBrands);

autoBrands.unshift('Volvo');
console.log(autoBrands);

autoBrands.shift();
console.log(autoBrands);

autoBrands.splice(2, 3);
console.log(autoBrands);