// Variablen, die nicht neu zugewiesen/befüllt/erweitert werden
const todoForm = document.getElementById("todo-form")
const todoInput = document.getElementById("todo-input")
const todoList = document.getElementById("todo-list")
const todoCheck = document.getElementById("todo-checkbox")
const todoDel = document.getElementById("todo-delete")

// Variablen, die dynamisch sein sollen und neu zugewiesen/beschrieben werden können
let toDos = []

//Eventlistener, der auf das klicken des Hinzufügen Knopfes reagieren soll
todoForm.addEventListener ("click", (event) => {
    event.preventDefault();
    if (todoInput.value === "") {
        console.log("return");
        return;
    };
    console.log(todoInput.value.trim());
    const todo = todoInput.value.trim();
    console.log(todo);
    addTodo();
});

function addTodo(todo) {
    const taskTitle = todo;
    var date = Date.now();
    const task = {
        status: false,
        taskTitle: todo,
        date: date
    };
    toDos.push(task);
    console.log(task);
    console.log(toDos);
};