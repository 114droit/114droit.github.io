// Variablen, die nicht neu zugewiesen/befüllt/erweitert werden sondern fest sind
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const todoCheck = document.getElementById("todo-checkbox");
const todoDel = document.getElementById("todo-delete");

// Variablen, die dynamisch sein sollen und neu zugewiesen/beschrieben/editiert werden können
let toDos = [];

//Eventlistener, der auf das klicken des Hinzufügen Knopfes reagieren soll
todoForm.addEventListener ("click", (event) => {
    // verhindert neu laden der seite durch Formular
    event.preventDefault();
    // Falls input leer beenden der Funktion mit return, damit keine überflüssigen Manipulationen am DOM ausgeführt werden
    if (todoInput.value === "") {
        return;
    };
    // auf value vom eingabefeld (todoInput/"todo-input") zugreifen
    const todo = todoInput.value.trim();
    // definieren eines objektes todoData mit den properties status, todoText und id
    const todoData = {
        status: false,
        todoText: todo,
        id: Date.now()
    };
    // pushen des objektes in das oben definierte array toDos
    toDos.push(todoData);
    // eingabefeld leeren
    todoInput.value = "";
    createList();
});

// Funktion zum rendern der todos
function createList() {
    for (todoData in toDos) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input type="checkbox"");
    todoList.appendChild(li);
    };
};

console.log(toDos);