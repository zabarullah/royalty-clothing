import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
    hidden: true                                                            /* So that the cart initially is hidden */
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden                                       /* if its true then turn it to false, if its false turn it to true. Note a payload is not being used in this case */
            }
            default: 
            return state;
    }
}

export default cartReducer;