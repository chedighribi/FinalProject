import { combineReducers } from "redux";
import { tataReducer } from "./tataReducer";
import { boxReducer } from "./boxReducer";
import { ContactUsReducer } from "./ContactUsReducer";
import {cardReducer} from './cardReducer'
import authReducer from './userReducer'
import {traiteurReducer} from './traiteurReducer'
import {myorderReducer} from './myorderReducer'
import {usersReducer} from './alluserReducer'

export  const rootReducer= combineReducers({usersReducer,myorderReducer,boxReducer,tataReducer,cardReducer,authReducer, ContactUsReducer,traiteurReducer})


