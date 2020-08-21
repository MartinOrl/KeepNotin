import { combineReducers } from 'redux'

import userReducer from './user/userRedux'
import TaskReducer from './tasks/taskRedux'

const rootReducer = combineReducers({
    user: userReducer,
    tasks: TaskReducer
})


export default rootReducer