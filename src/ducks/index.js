// @flow
import { combineReducers } from 'redux';
import login from './login';
import places from './places';
import placeDetails from './placeDetails';
import addEvent from './addEvent';
import profile from './profile';
import responsive from './responsive';

const rootReducer = combineReducers({
  login,
  places,
  placeDetails,
  addEvent,
  profile,
  responsive
});

export default rootReducer;
