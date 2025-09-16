// Select the form and input elements from the DOM
const form = document.querySelector("form");
const inputEl = document.querySelector("input");

// Select the container for the tasks
const taskContainer = document.querySelector(".task-container");

let tasksArray = null;
// Initialize an array to store the tasks
if (localStorage.getItem("task")) {
  tasksArray = JSON.parse(localStorage.getItem("task"));
  renderTasks();

} 
else {
  tasksArray = [];
}

// Add an event listener to the form for when it is submitted
form.addEventListener("submit", (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();
  // Get the value of the input field
  const taskToAdd = inputEl.value;
  // Add the new task to the tasksArray as an object with the task and a completed status
  if (taskToAdd.length > 0) {
    tasksArray.push({ task: taskToAdd, completed: false, isEdit: false });
    localStorage.setItem("task", JSON.stringify(tasksArray));
  }
  // Clear the input field
  inputEl.value = "";

  // Re-render the tasks to display the new task
  renderTasks();
});

// Function to render the tasks in the task container
function renderTasks() {
  console.log(tasksArray);
  // Clear the task container before rendering the tasks
  taskContainer.textContent = "";
  // Map over the tasksArray to create and display each task
  tasksArray.map((task, index) => {
    // Create a new div for the task
    const taskDiv = document.createElement("div");
    // Create a checkbox for marking the task as completed
    const checkBox = document.createElement("input");
    // Add an event listener to the checkbox to mark the task as completed
    checkBox.addEventListener("change", () => {
      markCompleted(index);
    });
    checkBox.type = "checkbox";
    checkBox.className = "check";
    // Create an input field to display the task text
    const text = document.createElement("input");
    text.value = task.task;
    text.disabled = !task.isEdit;
    text.className = "text";
    // Create an edit button
    const edit = document.createElement("button");
    // If the task is completed, check the checkbox and change the styling
    if (task.completed) {
      checkBox.checked = true;
      text.style.backgroundColor = "gray";
      text.style.color = "white";
    }
    edit.textContent = "edit";
    edit.className = "edit";
    edit.addEventListener('click', ()=>{
        editTask
    })
    // Create a delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "delete";
    delBtn.className = "delete";
    // Append the checkbox, text, edit button, and delete button to the task div
    taskDiv.append(checkBox, text, edit, delBtn);

    // Append the task div to the task container
    taskContainer.append(taskDiv);
  });
}

// Function to mark a task as completed
function markCompleted(index) {
  // Map over the tasksArray to find the task that was clicked
  tasksArray.map((item, i) => {
    // If the index of the task matches the index of the clicked task, toggle the completed status
    if (index === i) {
      item.completed = !item.completed;
    }
  });
  localStorage.setItem("task", JSON.stringify(tasksArray));

  // Re-render the tasks to reflect the change in completed status
  renderTasks();
}


function editTask(index){
    tasksArray.map
}