import { CategoryActionTypes } from './categoryActions'

const INITIAL = {
    current: 'My Day',
    categories: []
}

const CategoryReducer = (state = INITIAL, action) => {
    switch(action.type){
        case CategoryActionTypes.SET_CURRENT_CATEGORY:
            return {
                ...state,
                current: action.payload
            }
        case CategoryActionTypes.ADD_CATEGORY:
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

export default CategoryReducer;