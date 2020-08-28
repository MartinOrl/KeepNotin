import { TaskActionTypes } from './taskActions'

const INITIAL = {
    tasks: [],
    filter: '',
    categories: [],
    currentCategory: 'My Day',
    searchTerm: ''
}


const TaskReducer = (state = INITIAL, action) => {
    switch(action.type){
        case TaskActionTypes.ADD_TASK:
            if(Array.isArray(action.payload)){
                return {
                    ...state,
                    tasks: [...state.tasks, ...action.payload],
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
        case TaskActionTypes.REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload.id)
            }

        case TaskActionTypes.STATUS_CHANGE:
            return {
                ...state,
                tasks: state.tasks.map(todo => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo)
            }
        case TaskActionTypes.UP_IMPORTANCE:
            var target = state.tasks.filter(todo => todo.id === action.payload)[0]
            switch(target.priority){
                case 'Low':
                    return {
                        ...state,
                        tasks: state.tasks.map(todo => todo.id === action.payload ? {...todo, priority: 'Medium'} : todo)
                    }
                case 'Medium':
                    return {
                        ...state,
                        tasks: state.tasks.map(todo => todo.id === action.payload ? {...todo, priority: 'High'} : todo)
                    }
                case 'High':
                    return {
                        ...state,
                        tasks: state.tasks.map(todo => todo.id === action.payload ? {...todo, priority: 'Low'} : todo)
                    }
                default:
                    return state
            }
        
        case TaskActionTypes.SET_SEARCH:
            return {
                ...state,
                searchTerm: action.payload
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