import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';

// Memoized selector to get tasks for the selected date
const selectTasksForDate = createSelector(
  (state, selectedDate) => state.tasks[selectedDate],
  tasks => tasks || []
);

const TaskList = ({ selectedDate }) => {
  const tasks = useSelector(state => selectTasksForDate(state, selectedDate));
  const [editingTaskId, setEditingTaskId] = useState(null);

  return (
    <div>
      <h2>Tasks for {selectedDate}</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {editingTaskId === task.id ? (
              <EditTask selectedDate={selectedDate} task={task} setEditingTaskId={setEditingTaskId} />
            ) : (
              <>
                {task.text}
                <button onClick={() => setEditingTaskId(task.id)}>Edit</button>
                <DeleteTask selectedDate={selectedDate} taskId={task.id} />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;



