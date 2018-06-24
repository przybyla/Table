// @flow
import { combineReducers } from 'redux';
import login from './login';
import adressList from './adressList';

const rootReducer = combineReducers({ login, adressList });

export default rootReducer;
