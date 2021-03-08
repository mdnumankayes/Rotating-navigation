//selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterTodo = document.querySelector('.filter-todo');

//eventlisners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterTodo.addEventListener('click', addfilter);

//function

function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();
    empty = todoInput.value;
    if (empty == "") {
        alert('Input field Empty');
    } else {

        //create todo div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        //creat li
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        //Add todo in localstorage
        saveLocalTodos(todoInput.value);

        //create button and check mark
        const completeButton = document.createElement('button');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        completeButton.classList.add('complete-btn');
        todoDiv.appendChild(completeButton);

        const TrashButton = document.createElement('button');
        TrashButton.innerHTML = '<i class="fas fa-trash"></i>';
        TrashButton.classList.add('trash-btn');
        todoDiv.appendChild(TrashButton);


        //append to list
        todoList.appendChild(todoDiv);

        //clear todo input value
        todoInput.value = "";
    }
}

function deleteCheck(e) {
    const item = e.target;
    //delete todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;

        //animation
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })

    }
    //check mark
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}

function addfilter(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
                break;


        }
    })
}

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

}

function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.forEach(function (todo) {
        //create todo div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        //creat li
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        //create button and check mark
        const completeButton = document.createElement('button');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        completeButton.classList.add('complete-btn');
        todoDiv.appendChild(completeButton);

        const TrashButton = document.createElement('button');
        TrashButton.innerHTML = '<i class="fas fa-trash"></i>';
        TrashButton.classList.add('trash-btn');
        todoDiv.appendChild(TrashButton);


        //append to list
        todoList.appendChild(todoDiv);

    })
}

function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}
