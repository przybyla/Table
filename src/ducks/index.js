// @flow
import { combineReducers } from 'redux';
import places from './places';
import eventDetails from './eventDetails';
import addEvent from './addEvent';
import responsive from './responsive';
import user from './user';

const rootReducer = combineReducers({
  places,
  eventDetails,
  addEvent,
  responsive,
  user
});

export default rootReducer;
