/* Redux Step 6 Create the acctions that will trigger th correct case scenarios inside the switch statements of the reducers, in this case for user reducer. Note this could have been create along with Step 2 when creating the reducers*/
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',  
    payload: user
});