// =============== Работа с элементами ================

/*
// Создать элемент
document.createElement('tag-name')

// Изменить HTML содержимое внутри элемента
element.innerHTML = ''

// Изменить Текстовое  содержимое внутри элемента
node.innerText = ''

// Клонирование элемента
node.cloneNode() // true c внутренним содержимым (текст и теги), false - без внутреннего содержимого

// вставить элемент внутрь другого элемента
element.append(nodesOrDOMStrings)

// Удалить элемент
element.remove()
*/


// выбор контейнера
const container = document.querySelector('#elementsContainer');

// cоздание заголовка
const newHeader = document.createElement('h1');
newHeader.innerText = 'НОВЫЙ ЗАГОЛОВОК';
container.append(newHeader);

// клонирование элементов
const mainHeader = document.querySelector('header');
const headerCopy = mainHeader.cloneNode(true);
container.append(headerCopy);

// вставка разметки через строки
// const htmlExample = '<h2>Ещё один заголовок</h2>'; 
// container.insertAdjacentHTML('beforeend', htmlExample);

// вставка разметки через шаблонные строки
const title = 'Текст заголовка 2';
const htmlExample = `<h2>${title}</h2>`;
container.insertAdjacentHTML('afterend', htmlExample);