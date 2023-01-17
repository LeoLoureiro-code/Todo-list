
const task ={
    body: '',
    complete: '',
}

const todos = [];

let displayTodo = (newTodo) =>{
    let li = document.createElement('li')
    let ul = document.querySelector('.todo-list')
    console.log(ul)
    let todoText = document.createTextNode(newTodo.body)
    li.appendChild(todoText)
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

let input = document.getElementById('input')
let form = document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    createTodo(input.value);
    input.value = '';
})

