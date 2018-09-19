// @flow
import { all, fork, takeLatest } from 'redux-saga/effects';
import { actions as PLACES_ACTIONS } from '../ducks/places';
import { actions as EVENT_DETAILS_ACTIONS } from '../ducks/eventDetails';
import { actions as ADD_EVENT_ACTIONS } from '../ducks/addEvent';
import { actions as USER_ACTIONS } from '../ducks/user';
import { places } from './places';
import { eventDetails } from './eventDetails';
import { addEvent } from './addEvent';
import { login } from './login';

function* watchPlaces(): Generator<*, *, *> {
  yield takeLatest(PLACES_ACTIONS.REQUEST, places);
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
    fork(watchPlaces),
    fork(watchEventDetails),
    fork(watchAddEvent),
    fork(watchLogin)
  ]);
}

export default rootSaga;
