import { call, put } from 'redux-saga/effects';
import { actions as ADRESS_LIST_ACTIONS } from '../ducks/adressList';
import { fetch } from './utils';

export function* adressList(
  action: any,
  api: (a: string, b: Object) => {} = fetch
): Generator<any, any, any> {
  const { response, error } = yield call(
    api,
    'http://demo2832403.mockable.io/event-list',
    {
      method: 'get'
    }
  );
  if (response) {
    const json = yield response.json();
    yield put(ADRESS_LIST_ACTIONS.SUCCESS(json));
  } else if (error.status < 500 && error.status >= 400) {
    yield put(ADRESS_LIST_ACTIONS.ERROR());
  }
}
