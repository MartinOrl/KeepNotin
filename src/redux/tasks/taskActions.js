export const TaskActionTypes = {
    ADD_TASK: 'ADD_TASK',
    REMOVE_TASK: 'REMOVE_TASK',
    COMPLETE_TASK: 'COMPLETE_TASK',
    SEED: 'SEED',
    SET_VISIBILITY: 'SET_VISIBILITY'
}

export const AddTask = todo => ({
    type: TaskActionTypes.ADD_TASK,
    payload: todo
})

export const Seed = todos => ({
    type: TaskActionTypes.SEED,
    payload: todos
})