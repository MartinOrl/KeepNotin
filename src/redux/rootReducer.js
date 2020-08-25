import { combineReducers } from 'redux'

import userReducer from './user/userRedux'
import TaskReducer from './tasks/taskRedux'
import DisplayReducer from './display/displayRedux'

const rootReducer = combineReducers({
    user: userReducer,
    tasks: TaskReducer,
    visibility: DisplayReducer
})


export default rootReducer