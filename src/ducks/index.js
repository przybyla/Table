// @flow
import { combineReducers } from 'redux';
import login from './login';
import places from './places';
import placeDetails from './placeDetails';

const rootReducer = combineReducers({ login, places, placeDetails });

export default rootReducer;
