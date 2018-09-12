import { call, put } from 'redux-saga/effects';
import { actions as USER_ACTIONS } from '../ducks/user';
import { fetch } from './utils';

export function* login(
  action: any,
  api: (a: string, b: Object) => {} = fetch
): Generator<any, any, any> {
  debugger;
  const { response, error } = yield call(
    api,
    'http://demo2832403.mockable.io/login',
    {
      method: 'POST',
      body: JSON.stringify(action.payload)
    }
  );
  if (response) {
    yield put(USER_ACTIONS.SUCCESS());
  } else if (error.status < 500 && error.status >= 400) {
    yield put(USER_ACTIONS.ERROR());
  }
}
