import { createSelector } from 'reselect';

const select = state => state.tasks;

export const selectTasks = createSelector(
    [select],
    tasks => tasks
);
