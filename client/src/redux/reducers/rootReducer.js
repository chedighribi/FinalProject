import {combineReducers} from 'redux';
import {tataReducer} from './tataReducer';
import {boxReducer} from './boxReducer';

export  const rootReducer= combineReducers({boxReducer,tataReducer})