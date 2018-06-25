// @flow
import { combineReducers } from 'redux';
import login from './login';
import places from './places';

const rootReducer = combineReducers({ login, places });

export default rootReducer;
