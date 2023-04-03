export const loggedInAction = (value) => async dispatch => {
    dispatch({
        type:'LOGGED_IN',
        payload:value
    })
}