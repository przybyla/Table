// @flow
import { Map } from 'immutable';

import { createAction, handleActions } from 'redux-actions';

export const actions = {
  SUCCESS: createAction('EVENTS/SUCCESS'),
  ERROR: createAction('EVENTS/ERROR'),
  REQUEST: createAction('EVENTS/REQUEST')
};

type StateType = Map<string, string | boolean | Map<string, any>>;

export type EventListActionType = {
  payload: string
};

export const initialState = Map({
  events: Map({}),
  isProcessing: false,
  error: false
});

const reducer = handleActions(
  {
    [actions.SUCCESS]: (state: StateType, action: EventListActionType) =>
      state.set('isProcessing', false).set('events', action.payload),
    [actions.REQUEST]: (state: StateType, action: EventListActionType) =>
      state.set('isProcessing', true),
    [actions.ERROR]: (state: StateType, action: EventListActionType) =>
      state.set('isProcessing', false).set('error', true)
  },
  initialState
);

export default reducer;
