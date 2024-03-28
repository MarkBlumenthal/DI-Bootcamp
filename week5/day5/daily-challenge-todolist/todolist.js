let taskIdCounter = 0;
const tasks = [];

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
});

document.getElementById('clearButton').addEventListener('click', clearTasks);

function addTask() {
    const taskInput = document.getElementById('newTask');
    if (taskInput.value.trim() !== '') {
        const task = {
            task_id: taskIdCounter++,
            text: taskInput.value.trim(),
            done: false
        };
        tasks.push(task);
        appendTaskToDOM(task);
        taskInput.value = '';
    }
}

function appendTaskToDOM(task) {
    const list = document.querySelector('.listTasks');
    const taskElement = document.createElement('li'); // changed from 'div' to 'li'
    taskElement.className = 'task';
    taskElement.innerHTML = `
        <button class="deleteTask" onclick="deleteTask(${task.task_id})"><i class="fas fa-times"></i></button>
        <input type="checkbox" id="task-${task.task_id}" data-task-id="${task.task_id}" onchange="doneTask(this, ${task.task_id})">
        <label for="task-${task.task_id}">${task.text}</label>
    `;
    list.appendChild(taskElement);
}

function doneTask(checkbox, taskId) {
    const task = tasks.find(t => t.task_id === taskId);
    task.done = checkbox.checked;
    const taskElement = checkbox.closest('.task'); // changed from parentNode to closest
    if (task.done) {
        taskElement.classList.add('done');
    } else {
        taskElement.classList.remove('done');
    }
}

function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(t => t.task_id === taskId);
    if (taskIndex > -1) {
        tasks.splice(taskIndex, 1);
        document.querySelector(`[data-task-id="${taskId}"]`).closest('.task').remove(); // changed from getElementById
    }
}

function clearTasks() {
    // Clear the tasks array
    tasks.length = 0;
    taskIdCounter = 0; // Reset the task ID counter if needed
    // Remove all task elements from the DOM
    const list = document.querySelector('.listTasks');
    list.innerHTML = ''; // Clears the list
}



  