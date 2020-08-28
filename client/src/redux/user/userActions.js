export const userActionTypes = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
    LOG_OUT: 'LOG_OUT'
}

export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})

export const LogOut = () => ({
    type: userActionTypes.LOG_OUT
})