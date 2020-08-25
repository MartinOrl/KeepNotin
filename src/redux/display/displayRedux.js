import { DisplayActionTypes } from './displayActions';

const INITIAL = {
    hidden: false
}

const DisplayReducer = (state = INITIAL, action) => {
    switch(action.type){
        case DisplayActionTypes.SET_VISIBILITY:
            return {
                ...state,
                hidden: !state.hidden
            }
        case DisplayActionTypes.GET_VISIBILITY:
            return state
        default:
            return state
    }
}

export default DisplayReducer