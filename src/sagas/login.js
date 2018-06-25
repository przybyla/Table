import { call, put } from 'redux-saga/effects';
import { actions as LOGIN_ACTIONS } from '../ducks/login';
import { fetch } from './utils';
import history from '../scenes/history';

export function* login(
  action: any,
  api: (a: string, b: Object) => {} = fetch
): Generator<any, any, any> {
  const { response, error } = yield call(
    api,
    'http://demo2832403.mockable.io/login',
    {
      method: 'POST'
    }
  );
  if (response) {
    yield put(LOGIN_ACTIONS.SUCCESS());
    yield call(history.push, '/places/');
  } else if (error.status < 500 && error.status >= 400) {
    yield put(LOGIN_ACTIONS.ERROR());
  }
}
