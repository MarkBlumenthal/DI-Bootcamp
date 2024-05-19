import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasksByCategory } from '../store/selectors';
import { addTask, editTask, deleteTask, updateTaskProgress } from '../store/tasksSlice';

const TaskList = ({ categoryId }) => {
  const tasks = useSelector(state => selectTasksByCategory(state, categoryId));
  const dispatch = useDispatch();
  const [newTaskName, setNewTaskName] = useState('');
  const [editTaskName, setEditTaskName] = useState('');
  const [taskIdBeingEdited, setTaskIdBeingEdited] = useState(null);

  const handleAddTask = useCallback(() => {
    if (newTaskName) {
      const newTask = { id: Date.now().toString(), name: newTaskName, categoryId, progress: 0 };
      dispatch(addTask(newTask));
      setNewTaskName('');
    }
  }, [newTaskName, categoryId, dispatch]);

  const handleEdit = useCallback((id, name) => {
    setTaskIdBeingEdited(id);
    setEditTaskName(name);
  }, []);

  const handleSaveEdit = useCallback((id) => {
    dispatch(editTask({ id, newTask: { id, name: editTaskName, categoryId, progress: 0 } }));
    setTaskIdBeingEdited(null);
    setEditTaskName('');
  }, [editTaskName, categoryId, dispatch]);

  const handleComplete = useCallback((id) => {
    dispatch(updateTaskProgress({ id, progress: 100 }));
  }, [dispatch]);

  const handleDelete = useCallback((id) => {
    dispatch(deleteTask(id));
  }, [dispatch]);

  return (
    <div>
      <h2>Tasks</h2>
      <input 
        type="text" 
        value={newTaskName} 
        onChange={e => setNewTaskName(e.target.value)} 
        placeholder="New task name" 
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {taskIdBeingEdited === task.id ? (
              <div>
                <input 
                  type="text" 
                  value={editTaskName} 
                  onChange={e => setEditTaskName(e.target.value)} 
                  placeholder="Edit task name" 
                />
                <button onClick={() => handleSaveEdit(task.id)}>Save</button>
                <button onClick={() => setTaskIdBeingEdited(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                {task.name}
                <div>
                  <button onClick={() => handleEdit(task.id, task.name)}>Edit</button>
                  <button onClick={() => handleComplete(task.id)}>Complete</button>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;








