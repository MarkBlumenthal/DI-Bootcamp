import React, { useContext, useState } from 'react';
import { TaskContext } from './TaskContext';

function TaskList() {
  const { tasks, filter, addTask, removeTask, toggleTask, editTask, setFilter, editRef } = useContext(TaskContext);
  const [newTask, setNewTask] = useState('');

  const handleEdit = (task) => {
    editRef.current = task;
    setNewTask(task.text);  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editRef.current) {
      editTask(editRef.current.id, newTask);
      editRef.current = null;
    } else {
      addTask(newTask);
    }
    setNewTask('');
  };

  return (
    <div>
      <h2>Tasks</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Add new task"
        />
        <button type="submit">Add/Update Task</button>
      </form>
      <div>
        <button onClick={() => setFilter('ALL')}>Show All</button>
        <button onClick={() => setFilter('COMPLETED')}>Show Completed</button>
        <button onClick={() => setFilter('ACTIVE')}>Show Active</button>
      </div>
      <ul>
        {tasks.filter(task => {
          if (filter === 'COMPLETED') return task.completed;
          if (filter === 'ACTIVE') return !task.completed;
          return true;
        }).map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            {task.text}
            <button onClick={() => handleEdit(task)}>Edit</button>
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

