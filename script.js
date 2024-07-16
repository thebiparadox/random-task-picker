// get elements from DOM //

const openTaskFormBtn = document.getElementById("open-task-form-btn");
const taskForm = document.getElementById("task-form");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const taskTitleInput = document.getElementById("task-title-input");
const taskDescriptionInput = document.getElementById("task-description-input");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks=container");
const randomizeTasksContainer = document.getElementById("randomize-tasks-container");
const randomizeTasksBtn = document.getElementById("randomize-tasks-btn");
const randomTaskOutput = document.getElementById("random-task-output");

// create tasks //

const taskData = [];
let currentTask = {};
const reset = () => {
    taskTitleInput = "";
    taskDescriptionInput = "";
    taskForm.classList.toggle("hidden");
    currentTask = {};
}

// edit or delete tasks //

// randomize tasks //

// random task output //

// button functionality //
openTaskFormBtn.addEventListener("click", (e) => taskForm.classList.toggle("hidden"));
closeTaskFormBtn.addEventListener("click", (e) => {
    const formInputsContainValues = taskTitleInput.value || taskDescriptionInput.value;
    if (formInputsContainValues) {
        confirmCloseDialog.showModal();
    } else {
        reset();
    }
});
cancelBtn.addEventListener("click", (e) => confirmCloseDialog.close());
discardBtn.addEventListener("click", (e) => {
    confirmCloseDialog.close();
    reset();
});
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
    taskObj = {
        taskId: `${taskTitleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
        taskTitle: `${taskTitleInput.value}`,
        taskDescription: `${taskDescriptionInput.value}`,
    };
    if (dataArrIndex === -1) {
        taskData.unshift(taskObj);
    }
    taskData.forEach(({ taskId, taskTitle, taskDescription }) => {
        tasksContainer.innerText += `
        <div id="${taskId}" class="task">
        <p><strong>Title:</strong> ${taskTitle}</p>
        <p><strong>Description:</strong> ${taskDescription}</p>
        <button class="btn" type="button">Edit</button>
        <button class="btn" type="button">Delete</button>
        </div>
        `;
    })
    reset();
});