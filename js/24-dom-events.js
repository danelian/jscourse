// ===================  Работа c прослушкой событий ==================
const button = document.querySelector('#button');
const img = document.querySelector('#logo');
button.value = 'Delete';

button.addEventListener('click', function() {
  console.log('Click');
  img.remove();
})

button.onClick = function () {
  console.log('Click');
  img.remove();
}


// ---------------------------------------

const inputText = document.querySelector('#input-text');
const textBlock = document.querySelector('#text-block');

inputText.addEventListener(
	'input',
	function () {
		console.log(inputText.value);
		textBlock.innerText = inputText.value;
	},
	{ once: true }
);

inputText.addEventListener('input', inputHandler, { once: true });

function inputHandler() {
	console.log(inputText.value);
	textBlock.innerText = inputText.value;
}