import { createSelector } from 'reselect';

const stateTasks = state => state.tasks;


export const selectTasks = createSelector(
    [stateTasks],
    tasks => tasks.tasks
);

export const selectTasksFilter = createSelector(
    [stateTasks],
    tasks => tasks.filter
)

export const selectCategories = createSelector(
    [stateTasks],
    tasks => tasks.categories
)

export const selectCategory = createSelector(
    [stateTasks],
    tasks => tasks.currentCategory
)

export const selectSearch = createSelector(
    [stateTasks],
    tasks => tasks.searchTerm
)