import { createSelector } from 'reselect'

const selectDisplay = state => state.visibility

export const selectAddTodoDisplay = createSelector(
    [selectDisplay],
    display => display.hidden
)