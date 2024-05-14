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
      state.tasks[date][index] = newTask;
    },
    deleteTask(state, action) {
      const { date, index } = action.payload;
      state.tasks[date].splice(index, 1);
      // Check if the tasks array for that date is empty
      if (state.tasks[date].length === 0) {
        delete state.tasks[date]; // Delete the date if no tasks are left
      }
    }
  }
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;


