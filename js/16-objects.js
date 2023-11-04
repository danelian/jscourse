// ============== 12. Объекты ==============

// свойства объектов
let userName = 'Danil';
let age = 21;
let isMarried = false;

const person = {
  userName: 'Danil',
  age: 21,
  isMarried: false,
  profession: 'Developer'
}

console.log(person);
console.log(person.userName);
console.log(person['age']);

let propertyName = 'profession';
console.log(person[propertyName]);

// создание нового свойства
person.nationality = 'Armenian';
console.log(person.nationality);

// delete
delete person.age;
console.log(person);