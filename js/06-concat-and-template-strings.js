// ======== 5. Конкатенация строк и шаблонные строки =========

// console.log('Barev, Danil! Vonc es?');

let greeting = 'Barev, Danil!';
let howAreYou = ' Vonc es?';

// concat 
// просто сложение переменных
let sayHi = greeting + howAreYou;
console.log(sayHi);
// практический пример использования
const userName = 'Danil Djan';
console.log('Barev, ' + userName + '! Vonc es, ahper?');

// шаблонные строки ` ` и интерполяция
console.log(`Barev, ${userName}! Vonc es, expayr?`);