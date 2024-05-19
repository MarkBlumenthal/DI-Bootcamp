import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = state => state.tasks.tasks;
export const selectCategories = state => state.categories.categories;

export const selectTasksByCategory = createSelector(
  [selectTasks, (state, categoryId) => categoryId],
  (tasks, categoryId) => tasks.filter(task => task.categoryId === categoryId)
);

export const selectCompletedTasks = createSelector(
  [selectTasks],
  tasks => tasks.filter(task => task.progress === 100).length
);

export const selectCategoryById = createSelector(
  [selectCategories, (state, categoryId) => categoryId],
  (categories, categoryId) => categories.find(category => category.id === categoryId)
);




