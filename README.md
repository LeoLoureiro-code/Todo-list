# TODO App

Vanilla JavaScript todo web app built to practice state management, DOM manipulation and rendering. This app allows users to create, read, update and delete todo taks.

---

## Overview

### The challenge

Users should be able to:

- Create todos
- Complete todos by clicking on them
- Filter complete, active and all todos
- Delete todos
- Save state in local storage for persistent state

---

### Screenshot

![App Screenshot](./images/screenshots/todo_desktop.png)
![App Screenshot](./images/screenshots/todo_mobile.png)

---

### Links

- Solution URL: https://github.com/LeoLoureiro-code/Todo-list
- Live Site URL: https://leoloureiro-code.github.io/Todo-list/

---

## My Process

### Built with

- Semantic HTML5
- CSS custom properties (variables)
- Flexbox
- Vanilla JavaScript (no frameworks)
- State-based UI rendering
- Local Storage

---

### What I learned

This project helped reinforce key frontend concepts without relying on frameworks:

- How to manage global state manually:
  
```
const STATE = {
    Theme: THEMES.light,
    InputValue: "",
    Todos: [],
    filter: FILTERS.ALL,
    error: false
};

// UI
Render();

- DOM manipulation:

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

- Persistent data

function SaveState() {

    localStorage.setItem(
        "state",
        JSON.stringify(STATE)
    );

}

function LoadState() {

    const savedState = localStorage.getItem("state");

    if (savedState) {

        Object.assign(
            STATE,
            JSON.parse(savedState)
        );

    }

}
```
