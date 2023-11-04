// ==== 15. Объекты. Обход циклом for in (не путать с for of) ====

const person = {
  userName: 'Danil',
  age: 21,
  isMarried: false,
  sayHi: function (name) {
    console.log(`Barev, ${name}! Im anune ${this.userName}.`);
  }
}

for (let key in person) {
  // console.log(key);
  console.log(key, ':', person[key]);
}