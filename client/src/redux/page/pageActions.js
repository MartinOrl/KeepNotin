const PageActionTypes = {
    SET_PAGE: 'SET_PAGE'
}

export const SetPage = page => ({
    type: PageActionTypes.SET_PAGE,
    payload: page
})

export default PageActionTypes