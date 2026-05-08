const THEMES = {
    light: "light",
    dark: "dark",
}


const STATE = {
    Theme: THEMES.light,
    InputValue: "",
    Todos: []
}

const body = document.querySelector('body');
const form = document.querySelector('form');
const themeIcon = document.querySelector('.theme_img');

function CreateTodo(todoContent){
    
    newTodo ={
        id: Date.now(),
        text: todoContent,
        completed: false,
    }

    STATE.Todos.push(newTodo);
    Render();
}



function RenderTheme(){

     if(STATE.Theme === THEMES.light){
        themeIcon.src = "./images/icon-sun.svg";
        STATE.Theme = THEMES.dark;
    }
    else if(STATE.Theme === THEMES.dark){
        themeIcon.src = "./images/icon-moon.svg";
        STATE.Theme = THEMES.light;
    }

    body.className = STATE.Theme;
}

function RenderTodos() {

    const todoList = document.querySelector('.todos_list');

    todoList.innerHTML = "";

    STATE.Todos.forEach(todo => {

        const todoItem = document.createElement('li');
        todoItem.className = "todos_item";

        const newTodo = document.createElement('div');
        newTodo.className = "todos_content";

        const completeDiv = document.createElement('div');
        completeDiv.className = "todos_complete";

        const completeImg = document.createElement('img');
        completeImg.className = "check_icon";
        completeImg.src = "images/icon-check.svg";

        const todoContent = document.createElement('p');
        todoContent.textContent = todo.text;
        todoContent.className = "todos_paragraph";

        const eliminateButton = document.createElement('img');
        eliminateButton.className = "todos_eliminate";
        eliminateButton.src = "images/icon-cross.svg";

        completeDiv.appendChild(completeImg);

        newTodo.appendChild(completeDiv);
        newTodo.appendChild(todoContent);
        newTodo.appendChild(eliminateButton);

        todoItem.appendChild(newTodo);

        todoList.appendChild(todoItem);
    });
}

function Render(){
    RenderTodos();
}

themeIcon.addEventListener("click", function (){
    RenderTheme();
    event.stopPropagation();
});

form.addEventListener("submit", function(){
    const todoValue = document.querySelector('#todo_input'); 
    CreateTodo(todoValue.value);
    todoValue.value = "";
    event.preventDefault();
})