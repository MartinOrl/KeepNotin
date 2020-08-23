export const TaskActionTypes = {
    ADD_TASK: 'ADD_TASK',
    REMOVE_TASK: 'REMOVE_TASK',
    COMPLETE_TASK: 'COMPLETE_TASK',
}

export const AddTask = todo => ({
    type: TaskActionTypes.ADD_TASK,
    payload: todo
})
