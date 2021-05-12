//create variables
var buttonE1 = document.querySelector("#save-task");
console.log(buttonE1);

var buttonE1 = document.querySelector("#save-task");
var tasksToDoE1 = document.querySelector("#tasks-to-do")
//ad createTaskHandler()
var createTaskHandler = function() {
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";
    listItemE1.textContent = "This is a new task.";
    tasksToDoE1.appendChild(listItemE1);
}

//add eventListener
buttonE1.addEventListener("click", createTaskHandler);

buttonE1.addEventListener("click", createTaskHandler); {
}

