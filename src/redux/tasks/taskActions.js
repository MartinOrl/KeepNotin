export const TaskActionTypes = {
    ADD_TASK: 'ADD_TASK',
    REMOVE_TASK: 'REMOVE_TASK',
    STATUS_CHANGE: 'STATUS_CHANGE',
    SET_FILTER: 'SET_FILTER'
}

export const AddTask = task => ({
    type: TaskActionTypes.ADD_TASK,
    payload: task
})

export const SetTaskCompleted = task => ({
    type: TaskActionTypes.STATUS_CHANGE,
    payload: task
})

export const SetTasksFilter = filter => ({
    type: TaskActionTypes.SET_FILTER,
    payload: filter
})