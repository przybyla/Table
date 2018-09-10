// @flow
import { combineReducers } from 'redux';
import places from './places';
import placeDetails from './placeDetails';
import addEvent from './addEvent';
import responsive from './responsive';

const rootReducer = combineReducers({
  places,
  placeDetails,
  addEvent,
  responsive
});

export default rootReducer;
