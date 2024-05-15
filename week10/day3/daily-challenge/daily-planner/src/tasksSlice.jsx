import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state[date]) {
        state[date] = [];
      }
      state[date].push(task);
    },
    editTask: (state, action) => {
      const { date, taskId, newTask } = action.payload;
      const tasks = state[date];
      if (tasks) {
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
          tasks[taskIndex] = newTask;
        }
      }
    },
    deleteTask: (state, action) => {
      const { date, taskId } = action.payload;
      const tasks = state[date];
      if (tasks) {
        state[date] = tasks.filter(task => task.id !== taskId);
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
