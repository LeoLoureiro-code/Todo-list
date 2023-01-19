
const task ={
    body: '',
    complete: '',
}

const todos = [];


let input = document.getElementById('input')
let form = document.getElementById('form')


//Event listener to add class when completed using a click
const createEventListenerClick = (element) =>{
    element.addEventListener('click', function(){
        element.classList.toggle('complete')
    })
}

//Event listener to remove element using double click

const createEventListenerDblClick = (element) =>{
    element.addEventListener('dblclick', function(){
        element.remove()
    })
}

let displayTodo = (newTodo) =>{
    let li = document.createElement('li')
    li.className = 'todo-list-item'
    createEventListenerClick(li)
    createEventListenerDblClick(li)
    let ul = document.querySelector('.todo-list')
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
}


form.addEventListener('submit', function(e){
    e.preventDefault()

    //Check if input have a value
    if(!input.value){
        input.placeholder = "You need to add a task"
    }else{
        createTodo(input.value);
        input.value = '';
    }
})


