document.addEventListener('DOMContentLoaded', function() {
    const tasks = [];
    let taskId = 0;

      // Create the heading element
  const headerDiv = document.getElementById('header');
  const heading = document.createElement('h2');
  heading.textContent = 'TO-DO LIST';
  headerDiv.appendChild(heading);
  
    const taskForm = document.getElementById('taskForm');
    const listTasks = document.querySelector('.listTasks');
  
    taskForm.addEventListener('submit', function(e) {
      e.preventDefault();
      addTask();
    });
  
    function addTask() {
      const newTaskInput = document.getElementById('newTask');
      const taskText = newTaskInput.value.trim();
  
      if (taskText !== "") {
        const task = {
          task_id: taskId++,
          text: taskText,
          done: false
        };
        tasks.push(task);
        const taskElement = document.createElement('div');
        taskElement.innerHTML = `
          <button onclick="deleteTask(${task.task_id})"><i class="fas fa-times"></i></button>
          <input type="checkbox" id="task-${task.task_id}" data-task-id="${task.task_id}" />
          <label for="task-${task.task_id}">${task.text}</label>
        `;
        listTasks.appendChild(taskElement);
        newTaskInput.value = "";
      }
    }
  
    window.deleteTask = function(taskId) {
      tasks.splice(tasks.findIndex(task => task.task_id === taskId), 1);
      document.getElementById(`task-${taskId}`).parentNode.remove();
    };
  
    listTasks.addEventListener('change', function(e) {
      if (e.target.type === 'checkbox') {
        const taskId = e.target.dataset.taskId;
        const task = tasks.find(task => task.task_id == taskId);
        task.done = e.target.checked;
        if (task.done) {
          e.target.nextSibling.style.textDecoration = 'line-through';
          e.target.nextSibling.style.color = 'red';
        } else {
          e.target.nextSibling.style.textDecoration = 'none';
          e.target.nextSibling.style.color = 'black';
        }
      }
    });

    document.getElementById('clearTasks').addEventListener('click', clearAllTasks);

    function clearAllTasks() {
      tasks.length = 0; // Clear the array
      listTasks.innerHTML = ''; // Clear the tasks from the DOM
      taskId = 0; // Reset task id counter
    }

  });
  



  