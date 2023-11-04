// ============== ToDo список задач ===============

const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);

function formHandler (event) {
  event.preventDefault();

  // Получаем текст задачи из инпута
  const taskText = todoInput.value;

  // Создаем тег li с помощью создания элемента
  const newTask = document.createElement('li');
  newTask.innerText = taskText;

  // Создаем кнопку Удалить
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('role', 'button');
  deleteBtn.innerText = 'Удалить';
  deleteBtn.style['margin-left'] = '15px';
  newTask.append(deleteBtn);

  // Добавление события на кнопку
  deleteBtn.addEventListener('click', function () {
    this.closest('li').remove();
  });

  // Добавление элемента на страницу
  todoList.append(newTask);

  // Очищение поля ввода
  todoInput.value = '';

  // Фокус на поле
  todoInput.focus();
}