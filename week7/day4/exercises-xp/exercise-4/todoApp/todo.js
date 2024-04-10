// export class TodoList {
//     constructor() {
//       this.todos = [];
//     }
  
//     addTask(task) {
//       this.todos.push({ task, completed: false });
//     }
  
//     markComplete(taskName) {
//       const task = this.todos.find(todo => todo.task === taskName);
//       if (task) {
//         task.completed = true;
//       }
//     }
  
//     listTasks() {
//       this.todos.forEach(todo => {
//         console.log(`${todo.task}: ${todo.completed ? 'Completed' : 'Pending'}`);
//       });
//     }
//   }
  