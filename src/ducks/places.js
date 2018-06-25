// @flow
import { Map } from 'immutable';

import { createAction, handleActions } from 'redux-actions';

export const actions = {
  SUCCESS: createAction('ADRESS_LIST/SUCCESS'),
  ERROR: createAction('ADRESS_LIST/ERROR'),
  REQUEST: createAction('ADRESS_LIST/REQUEST')
};

type StateType = Map<string, string | boolean | Map<string, any>>;

export type EventListActionType = {
  payload: string
};

export const initialState = Map({
  places: Map({}),
  isProcessing: false,
  error: false
});

const reducer = handleActions(
  {
    [actions.SUCCESS]: (state: StateType, action: EventListActionType) =>
      state.set('isProcessing', false).set('places', action.payload),
    [actions.REQUEST]: (state: StateType, action: EventListActionType) =>
      state.set('isProcessing', true),
    [actions.ERROR]: (state: StateType, action: EventListActionType) =>
      state.set('isProcessing', false).set('error', true)
  },
  initialState
);

export default reducer;
