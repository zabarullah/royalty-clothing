/* Redux Step 2 - create the reducer for currentUser State*/
const INITIAL_STATE = {
    currentUser: null
}

const UserReducer = (state = INITIAL_STATE, action) => {    // we set the initial state to INITIAL_STATE, otherwise it will have nothing to work with
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,                          // we pass in all the state and add or change the following
                currentUser: action.payload       // action.payload will grab the user from the payload of the user.actions file()
            }

        default:
            return state;                           // in all cases we will return back the state
    }
}

export default UserReducer;