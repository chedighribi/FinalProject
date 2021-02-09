import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {boxReducer} from "./reducers/boxReducer"
const middleware = [thunk];
const store = createStore( boxReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
