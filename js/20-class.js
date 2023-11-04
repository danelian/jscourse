class Person {
  constructor(userName, age, isMarried) {
    this.userName = userName;
    this.age = age;
    this.isMarried = isMarried;
  }

  sayHi(name) {
    console.log(`Barev, ${name}! Im anune ${this.userName}.`)
  }
}

const person1 = new Person('Danil', 21, false);
const person2 = new Person('Armen', 25, true);

person1.sayHi('Ashot')

console.log(person1);
console.log(person2);