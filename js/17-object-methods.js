// ============ 13. Методы в объектах ===========
// Метод - это функция которая является свойством объекта. Функция принадллежащая объекту.

const person = {
  userName: 'Danil',
  age: 21,
  isMarried: false,
  // method + ключевое слов this
  sayHi: function (name) {
    console.log(`Barev, ${name}! Im anune ${this.userName}.`);
  }
};

// добавление метода извне
// person.sayHi = function (name) {
//   console.log(`Barev, ${name}!`);
// }

person.sayHi('Danil');