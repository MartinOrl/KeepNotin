import { TaskActionTypes } from './taskActions'
import uid from 'uid'

const INITIAL = {
    tasks: null
}

const TaskReducer = (state = INITIAL, action) => {
    switch(action.type){
        case TaskActionTypes.ADD_TASK:
            return [
                ...state,
                {
                    id: uid(9),
                    title: action.payload.title,
                    priority: action.payload.priority,
                    text: action.payload.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}

export default TaskReducer;