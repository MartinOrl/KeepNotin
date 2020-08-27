import { TaskActionTypes } from './taskActions'

const INITIAL = {
    tasks: [],
    filter: '',
    categories: [],
    currentCategory: 'My Day'
}


const TaskReducer = (state = INITIAL, action) => {
    switch(action.type){
        case TaskActionTypes.ADD_TASK:
            if(Array.isArray(action.payload)){
                return {
                    ...state,
                    tasks: [...state.tasks, ...action.payload]
                }
            }
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: action.payload.id,
                    title: action.payload.title,
                    priority: action.payload.priority,
                    text: action.payload.text,
                    category: action.payload.category,
                    completed: false
                }]
            }
        case TaskActionTypes.STATUS_CHANGE:
            return {
                ...state,
                tasks: state.tasks.map(todo => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo)
            }
        case TaskActionTypes.SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }
        case TaskActionTypes.SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.payload
            }
        case TaskActionTypes.ADD_CATEGORY:
            if(Array.isArray(action.payload)){
                return {
                    ...state,
                    categories: [
                        ...state.categories,
                        ...action.payload
                    ]
                }
            }
            return {
                ...state,
                categories: [
                    ...state.categories,
                    action.payload
                ]
            }

        default:
            return state
    }
}


export default TaskReducer;