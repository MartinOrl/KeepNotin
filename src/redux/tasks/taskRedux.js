import { TaskActionTypes } from './taskActions'

const TaskReducer = (state = [], action) => {
    switch(action.type){
        case TaskActionTypes.ADD_TASK:
            return [
                ...state,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    priority: action.payload.priority,
                    text: action.payload.text,
                    status: action.payload.status
                }
            ]
        case TaskActionTypes.SEED:
            const tasks = action.payload
            return [
                ...state,
                ...tasks
            ]
        default:
            return state
    }
}

export default TaskReducer;