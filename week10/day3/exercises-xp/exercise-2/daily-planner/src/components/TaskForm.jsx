import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../redux/taskSlice';

const TaskForm = ({ date, taskToEdit, onSave }) => {
  const [text, setText] = useState(taskToEdit ? taskToEdit.text : '');
  const dispatch = useDispatch();

  useEffect(() => {
    if (taskToEdit) {
      setText(taskToEdit.text);
    } else {
      setText('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      dispatch(editTask({ date, taskId: taskToEdit.id, updatedTask: { text } }));
    } else {
      dispatch(addTask({ date, task: { id: Date.now(), text } }));
    }
    setText('');
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter task"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {taskToEdit ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;

