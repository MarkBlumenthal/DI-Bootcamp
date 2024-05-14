import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, editTask, deleteTask } from '../features/tasks/tasksSlice';

function Tasks() {
    const [taskInput, setTaskInput] = useState('');
    const [dateInput, setDateInput] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [editDate, setEditDate] = useState('');
    const tasks = useSelector(state => state.tasks.tasks);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            dispatch(editTask({ date: editDate, index: editIndex, newTask: taskInput }));
            setIsEditing(false);
            setEditIndex(null);
            setEditDate('');
        } else {
            dispatch(addTask({ date: dateInput, task: taskInput }));
        }
        setTaskInput('');
        setDateInput('');
    };

    const handleEdit = (task, index, date) => {
        setIsEditing(true);
        setEditIndex(index);
        setEditDate(date);
        setTaskInput(task);
    };

    return (
        <div className="container mt-3">
            <form onSubmit={handleSubmit} className="mb-3">
                {!isEditing && (
                    <div className="mb-3">
                        <label htmlFor="dateInput" className="form-label">Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="dateInput"
                            value={dateInput}
                            onChange={(e) => setDateInput(e.target.value)}
                        />
                    </div>
                )}
                <div className="mb-3">
                    <label htmlFor="taskInput" className="form-label">{isEditing ? 'Edit Task' : 'Add Task'}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="taskInput"
                        placeholder={isEditing ? "Edit task" : "Add task"}
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">{isEditing ? 'Update Task' : 'Add Task'}</button>
                {isEditing && (
                    <button type="button" className="btn btn-secondary ms-2" onClick={() => setIsEditing(false)}>Cancel</button>
                )}
            </form>
            {Object.keys(tasks).map(date => (
                <div key={date} className="card mb-2">
                    <div className="card-header">
                        <h5>{date}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        {tasks[date].map((task, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {task}
                                <div>
                                    <button onClick={() => handleEdit(task, index, date)} className="btn btn-warning btn-sm">Edit</button>
                                    <button onClick={() => dispatch(deleteTask({ date, index }))} className="btn btn-danger btn-sm ms-2">Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Tasks;


