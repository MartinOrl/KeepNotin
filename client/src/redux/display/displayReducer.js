import { DisplayActionTypes } from './displayActions'

const INITIAL = {
    dayMode: true
}

const DisplayReducer = (state = INITIAL, action) => {

    switch(action.type){
        case DisplayActionTypes.SET_MODE:
            return {
                ...state,
                dayMode: !state.dayMode
            }

        default:
            return state
    }

}

export default DisplayReducer;