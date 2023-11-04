// ============= Работа с CSS классами =============

/*
elsement.classList.add()
.add()
.remove()
.toggle()
.contains()
*/

const heading = document.querySelector('h2');
heading.classList.add('red-text');
heading.classList.remove('red-text');
heading.classList.toggle('green-text');
heading.classList.contains('green-text')

if (heading.classList.contains('green-text')) {
  // 
} else {
  //
}