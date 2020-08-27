import { createSelector } from 'reselect'

const select = state => state.category;

export const selectCategories = createSelector(
    [select],
    categories => categories.categories
)

export const selectCategory = createSelector(
    [select],
    categories => categories.current
)