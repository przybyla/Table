import { call, put } from 'redux-saga/effects';
import { actions as EVENTS_ACTIONS } from '../ducks/events';
import { fetch } from './utils';

export function* events(
  action: any,
  api: (a: string, b: Object) => {} = fetch
): Generator<any, any, any> {
  const { response, error } = yield call(
    api,
    'http://demo3890494.mockable.io/events',
    {
      method: 'get'
    }
  );
  if (response) {
    const json = yield response.json();
    yield put(EVENTS_ACTIONS.SUCCESS(json));
  } else if (error.status < 500 && error.status >= 400) {
    yield put(EVENTS_ACTIONS.ERROR());
  }
}
