// src/components/TaskList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, completeTask, editTask } from '../redux/actions/taskActions';
import './TaskList.css';  // Import CSS for styling

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? 'completed-task' : ''}>
          {task.day}, Task: {task.task}
          <button onClick={() => dispatch(deleteTask(index))}>Delete</button>
          <button onClick={() => dispatch(completeTask(index))}>
            {task.completed ? 'Unmark Complete' : 'Mark Complete'}
          </button>
          <button onClick={() => dispatch(editTask(index, { task: 'New Task Details' }))}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;







