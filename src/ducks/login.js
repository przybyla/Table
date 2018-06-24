// @flow
import { Map } from 'immutable';

import { createAction, handleActions } from 'redux-actions';

export const actions = {
  SUCCESS: createAction('LOGIN/SUCCESS'),
  ERROR: createAction('LOGIN/ERROR'),
  REQUEST: createAction('LOGIN/REQUEST'),
  EMAIL: createAction('LOGIN/EMAIL'),
  PASSWORD: createAction('LOGIN/PASSWORD')
};

type StateType = Map<string, string | boolean | Map<string, any>>;

export type LoginActionType = {
  payload: string
};

export const initialState = Map({
  login: '',
  password: '',
  isProcessing: false,
  error: false
});

const reducer = handleActions(
  {
    [actions.SUCCESS]: (state: StateType, action: LoginActionType) =>
      state.set('isProcessing', false),
    [actions.REQUEST]: (state: StateType, action: LoginActionType) =>
      state.set('isProcessing', true),
    [actions.ERROR]: (state: StateType, action: LoginActionType) =>
      state.set('isProcessing', false).set('error', true),
    [actions.EMAIL]: (state: StateType, action: LoginActionType) =>
      state.set('email', action.payload),
    [actions.PASSWORD]: (state: StateType, action: LoginActionType) =>
      state.set('password', action.payload)
  },
  initialState
);

export default reducer;
