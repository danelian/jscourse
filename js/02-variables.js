// ============== 2. Переменные =================
let userName = 'Danil';
console.log(userName);

// ============== 2.1. Типы переменных ===============
userName = 'Armen';
console.log(userName);

// const - не может менять значение
const yearOfBirth = 2002;
// yearOfBirth = 2007;

// после ошибок ничего не работает
console.log('после ошибок ничего не работает');

/* -------------------------- */
// переменные можно объявить, а потом инициализировать
let userName2, age;
userName2 = 'Danial';

// а с константами так нельзя
// const profession;
// profession = 'developer';

// старый формат
// имеет не блочную, а функциональную область видимости, в отличие от let и const
var city = 'Moscow';
city = 'Kiev';
city = 'Erevan';
console.log(city);


// функциональная область видимости
{
  let someText = "Bob";
  console.log(someText);

  var someNumber = 10;
  console.log(someNumber)
}

// console.log(someText);
console.log(someNumber);