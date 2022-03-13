/* Redux Step 3 Combine the reducers into this root-reducer as you create individual reducers */
import { combineReducers } from "redux";

import cartReducer from "./cart/cart-reducer";
import UserReducer from "./user/user.reducer";

export default combineReducers({
    user: UserReducer,   //user here is the key to the currentUser state resulted from the UserReducer
    cart: cartReducer
})