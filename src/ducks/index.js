// @flow
import { combineReducers } from 'redux';
import events from './events';
import eventDetails from './eventDetails';
import addEvent from './addEvent';
import responsive from './responsive';
import user from './user';

const rootReducer = combineReducers({
  events,
  eventDetails,
  addEvent,
  responsive,
  user
});

export default rootReducer;
