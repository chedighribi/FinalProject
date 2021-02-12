import {combineReducers} from 'redux';
import {tataReducer} from './tataReducer';
import {boxReducer} from './boxReducer';
import {cardReducer} from './CardReducer'

export  const rootReducer= combineReducers({boxReducer,tataReducer,cardReducer})