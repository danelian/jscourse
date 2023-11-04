// ============ Выбор DOM элементов =============

// Выбор одного элемента по селектору
// document.querySelector('selector');

// document.querySelector('h2').classList.add('red');
// или
// const heading2 = document.querySelector('h2');
// heading2.classList.add('red');

// document.querySelector('.heading-3').classList.add('green');


// Выбор коллекции элементов
const headings = document.querySelectorAll('h2');
console.log(headings);
// прохожу по циклу и добавляю класс
for (let heading of headings) {
  console.log(heading);
  heading.classList.add('red-text');
}

const paragraphs = document.querySelectorAll('p');
// for (let p of paragraphs) {
//   p.classList.add('green-text');
// }
paragraphs.forEach(function (item) {
  item.classList.add('green-text');
})