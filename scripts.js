const THEMES = {
    light: "light",
    dark: "dark",
};

const FILTERS = {
    ALL: "all",
    ACTIVE: "active",
    COMPLETED: "completed",
};

const STATE = {
    Theme: THEMES.light,
    InputValue: "",
    Todos: [],
    filter: FILTERS.ALL,
    error: false
};

const body = document.querySelector('body');
const form = document.querySelector('form');
const themeIcon = document.querySelector('.theme_img');
const completeButton = document.querySelector('.clear_complete');

let draggedTodoId = null;

function CreateTodo(todoContent) {

    if (todoContent.trim() === "") {
        STATE.error = true;
        Render();
        return;
    }

    STATE.error = false;

    const newTodo = {
        id: Date.now(),
        text: todoContent,
        completed: false,
    };

    STATE.Todos.push(newTodo);

    Render();
}


function DeleteCompleteTodos(){

    const UncompleteTodos = STATE.Todos.filter(todo => todo.completed === false);
    STATE.Todos =  UncompleteTodos;
}

function RenderTheme() {

    if (STATE.Theme === THEMES.light) {
        themeIcon.src = "./images/icon-sun.svg";
        STATE.Theme = THEMES.dark;
    }
    else {
        themeIcon.src = "./images/icon-moon.svg";
        STATE.Theme = THEMES.light;
    }

    body.className = STATE.Theme;
}

function RenderError() {

    const formInput = document.querySelector('#todo_input');

    if (STATE.error) {
        formInput.placeholder = "Todo cannot be empty";
        formInput.classList.add("input_error");
    }
    else {
        formInput.placeholder = "Create a new todo...";
        formInput.classList.remove("input_error");
    }
}

function RenderFilters() {

    const buttons = document.querySelectorAll('.filter_button');

    buttons.forEach(button => {

        button.classList.remove("filter_button_selected");

        if (button.dataset.filter === STATE.filter) {
            button.classList.add("filter_button_selected");
        }

    });
}

function RenderTodos() {

    const todoList = document.querySelector('.todos_list');

    todoList.innerHTML = "";

    STATE.Todos.forEach(todo => {

        const todoItem = document.createElement('li');
        todoItem.className = "todos_item";

        todoItem.draggable = true;

        todoItem.addEventListener("dragstart", () => {
            draggedTodoId = todo.id;
        });

        todoItem.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        todoItem.addEventListener("drop", () => {

            const draggedIndex = STATE.Todos.findIndex(
                currentTodo => currentTodo.id === draggedTodoId
            );

            const targetIndex = STATE.Todos.findIndex(
                currentTodo => currentTodo.id === todo.id
            );

            const draggedTodo = STATE.Todos.splice(draggedIndex, 1)[0];

            STATE.Todos.splice(targetIndex, 0, draggedTodo);

            Render();
        });

        const newTodo = document.createElement('div');
        newTodo.className = "todos_content";

        const completeDiv = document.createElement('div');
        completeDiv.className = "todos_complete";

        const completeImg = document.createElement('img');
        completeImg.className = "check_icon";
        completeImg.src = "images/icon-check.svg";

        completeDiv.appendChild(completeImg);

        completeDiv.addEventListener("click", () => {

            todo.completed = !todo.completed;

            Render();
        });

        const todoContent = document.createElement('p');
        todoContent.textContent = todo.text;
        todoContent.className = "todos_paragraph";

        if (todo.completed) {
            todoContent.classList.add("completed");
            completeDiv.classList.add("completed_circle");
        }

        const eliminateButton = document.createElement('img');
        eliminateButton.className = "todos_eliminate";
        eliminateButton.src = "images/icon-cross.svg";

        eliminateButton.addEventListener("click", () => {

            STATE.Todos = STATE.Todos.filter(
                currentTodo => currentTodo.id !== todo.id
            );

            Render();
        });

        newTodo.appendChild(completeDiv);
        newTodo.appendChild(todoContent);
        newTodo.appendChild(eliminateButton);

        todoItem.appendChild(newTodo);

        todoList.appendChild(todoItem);
    });
}

function Render() {
    RenderTodos();
    RenderError();
    RenderFilters();
}

themeIcon.addEventListener("click", function (event) {

    RenderTheme();

    event.stopPropagation();
});

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const todoInput = document.querySelector('#todo_input');

    CreateTodo(todoInput.value);

    todoInput.value = "";
});

document.querySelectorAll('.filter_button').forEach(button => {

    button.addEventListener("click", () => {

        STATE.filter = button.dataset.filter;

        Render();
    });

});

completeButton.addEventListener("click", function(){
    DeleteCompleteTodos();
    Render();
})

Render();