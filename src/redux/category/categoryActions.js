export const CategoryActionTypes = {
    SET_CURRENT_CATEGORY: 'SET_CURRENT_CATEGORY',
    ADD_CATEGORY: 'ADD_CATEGORY'
}

export const AddCategory = category => ({
    type: CategoryActionTypes.ADD_CATEGORY,
    payload: category
})

export const SetCurrentCategory = category => ({
    type: CategoryActionTypes.SET_CURRENT_CATEGORY,
    payload: category
})