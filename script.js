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
const tasksContainer = document.getElementById("tasks-container");
const randomizeTasksContainer = document.getElementById("randomize-tasks-container");
const randomizeTasksBtn = document.getElementById("randomize-tasks-btn");
const randomTaskOutput = document.getElementById("random-task-output");

// create tasks //

const taskData = [];
let currentTask = {};

const addOrUpdateTask = () => {
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
    taskObj = {
        id: `${taskTitleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
        taskTitle: taskTitleInput.value,
        taskDescription: taskDescriptionInput.value,
    };
    if (dataArrIndex === -1) {
        taskData.unshift(taskObj);
    }
};

const updateTaskContainer = () => {
    taskData.forEach(({ id, taskTitle, taskDescription }) => {
        tasksContainer.innerHTML += `
        <div id="${id}" class="task">
        <p><strong>Title:</strong> ${taskTitle}</p>
        <p><strong>Description:</strong> ${taskDescription}</p>
        <button class="btn" type="button">Edit</button>
        <button class="btn" type="button">Delete</button>
        </div>
        `
    })
}

const reset = () => {
    taskTitleInput.value = "";
    taskDescriptionInput.value = "";
    taskForm.classList.toggle("hidden");
    currentTask = {};
};

// edit or delete tasks //

// randomize tasks //

// random task output //

// button functionality //
openTaskFormBtn.addEventListener("click", () => taskForm.classList.toggle("hidden"));

closeTaskFormBtn.addEventListener("click", () => {
    const formInputsContainValues = taskTitleInput.value || taskDescriptionInput.value;
    if (formInputsContainValues) {
        confirmCloseDialog.showModal();
    } else {
        reset();
    }
});

cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
    reset();
});

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    reset();
});