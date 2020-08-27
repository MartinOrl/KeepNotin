import { TaskActionTypes } from './taskActions'


const TaskReducer = (state = [], action) => {
    switch(action.type){
        case TaskActionTypes.ADD_TASK:

            if(Array.isArray(action.payload)){
                return [
                    ...state,
                    ...action.payload
                ]
            }

            return [
                ...state,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    priority: action.payload.priority,
                    text: action.payload.text,
                    completed: false
                }
            ]
            
        case TaskActionTypes.STATUS_CHANGE:
            const {id} = action.payload;
            console.log()
            return state.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )

        default:
            return state
    }
}

const INITIAL_FILTER = {
    categories: ['My Day', 'Tasks']
}

export const TaskFilterReducer = (state= INITIAL_FILTER, action) => {
    switch(action.type){
        case TaskActionTypes.SET_FILTER:
            return {...state, filter: action.payload}
        default:
            return state
    }
}

export default TaskReducer;