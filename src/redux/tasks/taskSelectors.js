import { createSelector } from 'reselect';

const stateTasks = state => state.tasks;

const stateTasksFilter = state => state.tasksFilter;

export const selectTasks = createSelector(
    [stateTasks],
    tasks => tasks
);

export const selectTasksFilter = createSelector(
    [stateTasksFilter],
    filter => filter.filter
)
