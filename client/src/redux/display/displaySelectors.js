import { createSelector } from 'reselect'

const DisplayState = state => state.display;

export const SelectMode = createSelector(
    [DisplayState],
    display => display.dayMode
)