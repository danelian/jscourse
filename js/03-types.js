// ============== 2.2. Типы данных ===============
let myName = "Danil"; // Строка - string
let myAge = 21; // Число - number
let isMarried = true; // Логическое значение true / false. Булевый - boolean

// Динамическая типизация
let someVariable = "Some value"; // сейчас типа string
someVariable = 50; // а сейчас типа number
someVariable = true; // теперь типа boolean
// Значение null
// "ничего", "пусто" или "значение неизвестно"
let number = null;
// Значение undefined
// Означает что "значение не было присвоено"
// Если переменная объявлена, но ей не было присвоено никакого значения, то её значение будет undefined
let varUndefined;
console.log(varUndefined);

// Объекты
// Массивы

// Оператор typeof
const someName = "Bob";
console.log(typeof someName);

// Bigint
console.log(Number.MAX_SAFE_INTEGER);
// приводим очень большое число в тип bigint
console.log(594045903493049394309439493493493n);

// Symbol
// Позволяет добавлять уникальное свойство к объекту, с уверенностью что он не перезапишет никакое другое свойство.