import { call, put } from 'redux-saga/effects';
import { actions as PLACE_DETAILS_ACTIONS } from '../ducks/places';
import { fetch } from './utils';

export function* places(
  action: any,
  api: (a: string, b: Object) => {} = fetch
): Generator<any, any, any> {
  const { response, error } = yield call(
    api,
    'http://demo2832403.mockable.io/places',
    {
      method: 'get'
    }
  );
  if (response) {
    const json = yield response.json();
    yield put(PLACE_DETAILS_ACTIONS.SUCCESS(json));
  } else if (error.status < 500 && error.status >= 400) {
    yield put(PLACE_DETAILS_ACTIONS.ERROR());
  }
}
