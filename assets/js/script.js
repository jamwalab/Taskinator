var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    //Check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }
    formEl.reset();
    //Package the data in an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    //Send it as an argument
    createTaskEl(taskDataObj);
}
var createTaskEl = function(taskDataObj) {
    //Create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    //Create the div to hold task infor and add it to the list
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    //Add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    listItemEl.appendChild(taskInfoEl);

    //add entire list item to list
    taskToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", taskFormHandler);
