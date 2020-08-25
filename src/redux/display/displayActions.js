export const DisplayActionTypes = {
    SET_VISIBILITY: 'SET_VISIBILITY',
    GET_VISIBILITY: 'GET_VISIBILITY'
};

export const setVisibility = () => ({
    type: DisplayActionTypes.SET_VISIBILITY,
});

export const getVisibility = () => ({
    type: DisplayActionTypes.GET_VISIBILITY
}); 