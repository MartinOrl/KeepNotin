import { createSelector } from 'reselect'

const select = state => state.category;

export const selectCategories = createSelector(
    [select],
    categories => categories.categories
)