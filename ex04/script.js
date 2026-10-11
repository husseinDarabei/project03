const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");

let totalTasks = 0;

function updateCounter() {
    totalTasks = taskList.children.length;
    taskCounter.textContent = totalTasks;
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.classList.add("task-text");

    taskSpan.addEventListener("click", function() {
        taskSpan.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click", function() {
        li.remove();
        updateCounter();
    });

    li.appendChild(taskSpan);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";

    updateCounter();
    taskInput.focus();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
