// @flow
import { all, fork, takeLatest } from 'redux-saga/effects';
import { actions as LOGIN_ACTIONS } from '../ducks/login';
import { login } from './login';

function* watchLogin(): Generator<*, *, *> {
  yield takeLatest(LOGIN_ACTIONS.REQUEST, login);
}

function* rootSaga(): Generator<*, *, *> {
  yield all([fork(watchLogin)]);
}

export default rootSaga;
