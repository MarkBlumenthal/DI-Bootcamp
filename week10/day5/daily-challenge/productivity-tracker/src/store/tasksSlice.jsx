import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, newTask } = action.payload;
      const index = state.tasks.findIndex(task => task.id === id);
      if (index !== -1) {
        state.tasks[index] = newTask;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    deleteTasksByCategory: (state, action) => {
      const categoryId = action.payload;
      state.tasks = state.tasks.filter(task => task.categoryId !== categoryId);
    },
    updateTaskProgress: (state, action) => {
      const { id, progress } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.progress = progress;
      }
    },
  },
});

export const { addTask, editTask, deleteTask, deleteTasksByCategory, updateTaskProgress } = tasksSlice.actions;
export default tasksSlice.reducer;









