/* Redux Step 4 Create the store and add middleware*/
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middleware = [logger]; /* the middleware is an array, note we only have one middleware, if we had more than one, they would be added here inside this array*/

const store = createStore(rootReducer, applyMiddleware(...middleware))   /*All of the values from inside of the middleware array are spread into the applyMmiddleware method */

export default store;