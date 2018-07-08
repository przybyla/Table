// @flow
import { combineReducers } from 'redux';
import login from './login';
import places from './places';
import placeDetails from './placeDetails';
import addEvent from './addEvent';

const rootReducer = combineReducers({
  login,
  places,
  placeDetails,
  addEvent
});

export default rootReducer;
