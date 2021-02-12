import { combineReducers } from "redux";
import { tataReducer } from "./tataReducer";
import { boxReducer } from "./boxReducer";
import { ContactUsReducer } from "./ContactUsReducer";
import {cardReducer} from './cardReducer'

export  const rootReducer= combineReducers({boxReducer,tataReducer,cardReducer, ContactUsReducer})


