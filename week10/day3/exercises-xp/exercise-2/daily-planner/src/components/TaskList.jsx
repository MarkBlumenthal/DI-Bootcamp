// src/components/TaskList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';

const TaskList = ({ date, onEdit }) => {
  const tasks = useSelector(state => state.tasks.tasks[date] || []);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      {tasks.map(task => (
        <li key={task.id} className="list-group-item">
          <div className="d-flex justify-content-between align-items-center">
            <span>{task.text}</span>
            <div>
              <button className="btn btn-primary btn-sm mr-2" onClick={() => onEdit(task)}>
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => dispatch(deleteTask({ date, taskId: task.id }))}
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

