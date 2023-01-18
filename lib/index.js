
const task ={
    body: '',
    complete: '',
}

const todos = [];


let input = document.getElementById('input')
let form = document.getElementById('form')

let displayTodo = (newTodo) =>{
    let li = document.createElement('li')
    li.className = 'todo-list-item'
    let button = document.createElement('button')
    button.setAttribute('id', 'btn')
    let ul = document.querySelector('.todo-list')
    let todoText = document.createTextNode(newTodo.body)
    button.innerHTML = '&#128473;'
    li.appendChild(todoText)
    li.appendChild(button)
    ul.appendChild(li)


}

let createTodo = (value) => {
    const newTodo = Object.create(task)
    newTodo.body = value;
    newTodo.complete = false;
    todos.unshift(newTodo);
    displayTodo(newTodo)
    console.log(todos)
}


form.addEventListener('submit', function(e){
    e.preventDefault()
    if(!input.value){
        input.placeholder = "You need to add a task"
    }else{
        createTodo(input.value);
        input.value = '';
    }
})


