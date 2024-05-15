import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../tasksSlice';

const EditTask = ({ selectedDate, task, setEditingTaskId }) => {
  const [taskText, setTaskText] = useState(task.text);
  const dispatch = useDispatch();

  const handleEditTask = () => {
    const newTask = { ...task, text: taskText };
    dispatch(editTask({ date: selectedDate, taskId: task.id, newTask }));
    setEditingTaskId(null);
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleEditTask}>Save</button>
      <button onClick={() => setEditingTaskId(null)}>Cancel</button>
    </div>
  );
};

export default EditTask;

