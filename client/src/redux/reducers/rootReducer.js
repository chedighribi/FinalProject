import { combineReducers } from "redux";
import { tataReducer } from "./tataReducer";
import { boxReducer } from "./boxReducer";
import { ContactUsReducer } from "./ContactUsReducer";

export const rootReducer = combineReducers({
  boxReducer,
  tataReducer,
  ContactUsReducer,
});
