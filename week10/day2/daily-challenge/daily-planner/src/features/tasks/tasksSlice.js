import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: {}
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      const { date, task } = action.payload;
      if (!state.tasks[date]) {
        state.tasks[date] = [];
      }
      state.tasks[date].push(task);
    },
    editTask(state, action) {
      const { date, index, newTask } = action.payload;
      if (state.tasks[date] && state.tasks[date][index]) {
        state.tasks[date][index] = newTask;
      }
    },
    deleteTask(state, action) {
      const { date, index } = action.payload;
      if (state.tasks[date] && state.tasks[date][index]) {
        state.tasks[date].splice(index, 1);
      }
    }
  }
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;

