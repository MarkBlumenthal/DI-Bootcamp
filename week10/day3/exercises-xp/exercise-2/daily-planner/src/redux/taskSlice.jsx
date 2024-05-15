import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: {}
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state.tasks[date]) {
        state.tasks[date] = [];
      }
      state.tasks[date].push(task);
    },
    editTask: (state, action) => {
      const { date, taskId, updatedTask } = action.payload;
      const tasksForDate = state.tasks[date];
      if (tasksForDate) {
        const index = tasksForDate.findIndex(task => task.id === taskId);
        if (index !== -1) {
          tasksForDate[index] = { ...tasksForDate[index], ...updatedTask };
        }
      }
    },
    deleteTask: (state, action) => {
      const { date, taskId } = action.payload;
      const tasksForDate = state.tasks[date];
      if (tasksForDate) {
        state.tasks[date] = tasksForDate.filter(task => task.id !== taskId);
      }
    }
  }
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;

