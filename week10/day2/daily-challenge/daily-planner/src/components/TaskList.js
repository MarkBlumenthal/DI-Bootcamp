// src/components/TaskList.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/actions/taskActions'; // Make sure this import is correct

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks); // Adjust based on your actual state structure
  const dispatch = useDispatch(); // Provides the Redux dispatch function

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => dispatch(deleteTask(index))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;



