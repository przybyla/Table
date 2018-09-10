import { call, put } from 'redux-saga/effects';
import { actions as ADD_EVENT_ACTIONS } from '../ducks/addEvent';
import { fetch } from './utils';

export function* addEvent(
  action: any,
  api: (a: string, b: Object) => {} = fetch
): Generator<any, any, any> {
  const { response, error } = yield call(
    api,
    'http://demo2832403.mockable.io/add-event',
    {
      method: 'POST',
      body: action.payload
    }
  );
  if (response) {
    yield put(ADD_EVENT_ACTIONS.SUCCESS());
  } else if (error.status < 500 && error.status >= 400) {
    yield put(ADD_EVENT_ACTIONS.ERROR());
  }
}
