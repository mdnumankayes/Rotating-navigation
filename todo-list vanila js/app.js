//selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//eventlisners
todoButton.addEventListener('click', addTodo);

//function

function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();

    //create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //creat li
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //create button and check mark
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);

    const TrushButton = document.createElement('button');
    TrushButton.innerHTML = '<i class="fas fa-trash"></i>';
    TrushButton.classList.add('trush-btn');
    todoDiv.appendChild(TrushButton);


    //append to list
    todoList.appendChild(todoDiv);
}