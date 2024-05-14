import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, editTask, deleteTask } from '../features/tasks/tasksSlice';

function Tasks() {
  const [taskInput, setTaskInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex >= 0 && dateInput) {
      dispatch(editTask({ date: dateInput, index: editIndex, newTask: taskInput }));
      setEditIndex(-1);
    } else {
      dispatch(addTask({ date: dateInput, task: taskInput }));
    }
    setTaskInput('');
    setDateInput('');
  };

  const handleEdit = (date, index) => {
    setDateInput(date);
    setTaskInput(tasks[date][index]);
    setEditIndex(index);
  };

  const handleDelete = (date, index) => {
    dispatch(deleteTask({ date, index }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={dateInput}
          onChange={(e) => setDateInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add/Edit task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button type="submit">{editIndex >= 0 ? 'Edit Task' : 'Add Task'}</button>
      </form>
      {Object.keys(tasks).map(date => (
        <div key={date}>
          <h2>{date}</h2>
          {tasks[date].map((task, index) => (
            <div key={index}>
              <p>{task}</p>
              <button onClick={() => handleEdit(date, index)}>Edit</button>
              <button onClick={() => handleDelete(date, index)}>Delete</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Tasks;

