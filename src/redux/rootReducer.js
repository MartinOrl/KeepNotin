import { combineReducers } from 'redux'

import userReducer from './user/userRedux'
import TaskReducer, { TaskFilterReducer } from './tasks/taskRedux'
import DisplayReducer from './display/displayRedux'
import CategoryReducer from './category/categoryRedux'

const rootReducer = combineReducers({
    user: userReducer,
    tasks: TaskReducer,
    tasksFilter: TaskFilterReducer,
    visibility: DisplayReducer,
    category: CategoryReducer
})


export default rootReducer