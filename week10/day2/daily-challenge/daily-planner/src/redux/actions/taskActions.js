// src/redux/actions/taskActions.js

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export const addTask = (taskDetails) => ({
  type: ADD_TASK,
  payload: taskDetails
});

export const deleteTask = (index) => ({
  type: DELETE_TASK,
  payload: index
});

export const completeTask = (index) => ({
  type: COMPLETE_TASK,
  payload: index
});

export const editTask = (index, newTaskDetails) => ({
  type: EDIT_TASK,
  payload: { index, newTaskDetails }
});


