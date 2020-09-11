import { combineReducers } from 'redux'

import userReducer from './user/userRedux'
import TaskReducer from './tasks/taskRedux'
import DisplayReducer from './display/displayReducer'
import PageReducer from './page/pageRedux'


const rootReducer = combineReducers({
    user: userReducer,
    tasks: TaskReducer,
    display: DisplayReducer,
    page: PageReducer
})


export default rootReducer