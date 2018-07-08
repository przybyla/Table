// @flow
import { all, fork, takeLatest } from 'redux-saga/effects';
import { actions as LOGIN_ACTIONS } from '../ducks/login';
import { actions as PLACES_ACTIONS } from '../ducks/places';
import { actions as PLACE_DETAILS_ACTIONS } from '../ducks/placeDetails';
import { actions as ADD_EVENT_ACTIONS } from '../ducks/addEvent';
import { login } from './login';
import { places } from './places';
import { placeDetails } from './placeDetails';
import { addEvent } from './addEvent';

function* watchLogin(): Generator<*, *, *> {
  yield takeLatest(LOGIN_ACTIONS.REQUEST, login);
}
function* watchPlaces(): Generator<*, *, *> {
  yield takeLatest(PLACES_ACTIONS.REQUEST, places);
}
function* watchPlaceDetails(): Generator<*, *, *> {
  yield takeLatest(PLACE_DETAILS_ACTIONS.REQUEST, placeDetails);
}
function* watchAddEvent(): Generator<*, *, *> {
  yield takeLatest(ADD_EVENT_ACTIONS.PUT, addEvent);
}

function* rootSaga(): Generator<*, *, *> {
  yield all([
    fork(watchLogin),
    fork(watchPlaces),
    fork(watchPlaceDetails),
    fork(watchAddEvent)
  ]);
}

export default rootSaga;
