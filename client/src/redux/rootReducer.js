import { combineReducers } from 'redux'

import userReducer from './user/userRedux'
import TaskReducer from './tasks/taskRedux'
import DisplayReducer from './display/displayReducer'

const rootReducer = combineReducers({
    user: userReducer,
    tasks: TaskReducer,
    display: DisplayReducer
})


export default rootReducer