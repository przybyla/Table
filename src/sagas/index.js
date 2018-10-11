// @flow
import { all, fork, takeLatest } from 'redux-saga/effects';
import { actions as EVENTS_ACTIONS } from '../ducks/events';
import { actions as EVENT_DETAILS_ACTIONS } from '../ducks/eventDetails';
import { actions as ADD_EVENT_ACTIONS } from '../ducks/addEvent';
import { actions as USER_ACTIONS } from '../ducks/user';
import { events } from './events';
import { eventDetails } from './eventDetails';
import { addEvent } from './addEvent';
import { login } from './login';

function* watchEvents(): Generator<*, *, *> {
  yield takeLatest(EVENTS_ACTIONS.REQUEST, events);
}
function* watchEventDetails(): Generator<*, *, *> {
  yield takeLatest(EVENT_DETAILS_ACTIONS.REQUEST, eventDetails);
}
function* watchAddEvent(): Generator<*, *, *> {
  yield takeLatest(ADD_EVENT_ACTIONS.PUT, addEvent);
}
function* watchLogin(): Generator<*, *, *> {
  yield takeLatest(USER_ACTIONS.LOG_IN, login);
}

function* rootSaga(): Generator<*, *, *> {
  yield all([
    fork(watchEvents),
    fork(watchEventDetails),
    fork(watchAddEvent),
    fork(watchLogin)
  ]);
}

export default rootSaga;
