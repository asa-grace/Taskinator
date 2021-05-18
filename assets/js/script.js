var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
  
  event.preventDefault();
  
  var listItemE1 = document.createElement("li");
  listItemE1.className = "task-item";
  listItemE1.textContent = "This is a new task.";
  tasksToDoE1.appendChild(listItemE1);

  formEl.addEventListener("submit", createTaskHandler);
}
