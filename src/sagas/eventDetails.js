import { call, put } from 'redux-saga/effects';
import { actions as EVENT_DETAILS_ACTIONS } from '../ducks/eventDetails';
import { fetch } from './utils';

export function* eventDetails(
  action: any,
  api: (a: string, b: Object) => {} = fetch
): Generator<any, any, any> {
  const id = action.payload;
  const { response, error } = yield call(
    api,
    `http://demo3890494.mockable.io/event-details/${id.toLowerCase()}`,
    {
      method: 'get'
    }
  );
  if (response) {
    const json = yield response.json();
    console.log('dupa');
    yield put(EVENT_DETAILS_ACTIONS.SUCCESS(json));
  } else if (error.status < 500 && error.status >= 400) {
    yield put(EVENT_DETAILS_ACTIONS.ERROR());
  }
}
