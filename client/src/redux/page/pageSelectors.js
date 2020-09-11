import { createSelector } from 'reselect'

const PageState = state => state.page

export const SelectCurrentPage = createSelector(
    [PageState],
    page => page
)