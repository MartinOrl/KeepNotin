export const TaskActionTypes = {
    ADD_TASK: 'ADD_TASK',
    REMOVE_TASK: 'REMOVE_TASK',
    STATUS_CHANGE: 'STATUS_CHANGE',
    SET_FILTER: 'SET_FILTER',
    SET_CURRENT_CATEGORY: 'SET_CURRENT_CATEGORY',
    ADD_CATEGORY: 'ADD_CATEGORY',
    SET_SEARCH: 'SET_SEARCH',
    UP_IMPORTANCE: 'UP_IMPORTANCE',
};

export const AddTask = task => ({
    type: TaskActionTypes.ADD_TASK,
    payload: task
});

export const RemoveTask = task => ({
    type: TaskActionTypes.REMOVE_TASK,
    payload: task
})

export const SetTaskCompleted = task => ({
    type: TaskActionTypes.STATUS_CHANGE,
    payload: task
});

export const SetTasksFilter = filter => ({
    type: TaskActionTypes.SET_FILTER,
    payload: filter
});

export const SetCurrentCategory = category => ({
    type: TaskActionTypes.SET_CURRENT_CATEGORY,
    payload: category
});

export const AddCategory = category => ({
    type: TaskActionTypes.ADD_CATEGORY,
    payload: category
});

export const setSeachTerm = term => ({
    type: TaskActionTypes.SET_SEARCH,
    payload: term
});

export const UpImportance = task => ({
    type: TaskActionTypes.UP_IMPORTANCE,
    payload: task.id
})