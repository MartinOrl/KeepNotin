import PageActionTypes from './pageActions'

const PageReducer = (state = 'Home', action) => {
    switch(action.type){
        case PageActionTypes.SET_PAGE:
            return action.payload
        default:
            return state
    }
}

export default PageReducer