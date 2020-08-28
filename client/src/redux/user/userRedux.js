import { userActionTypes } from './userActions'

const INITIAL = {
    currentUser: null
};

const userReducer = (state = INITIAL, action) => {
    switch(action.type){
        case userActionTypes.SET_CURRENT_USER:
            console.log('Setting User')
            return{
                ...state,
                currentUser: action.payload
            };
        case userActionTypes.LOG_OUT:
            return {
                ...state,
                currentUser: null
            }
        default:
            return state
    }
};

export default userReducer