// @flow
import { Map } from 'immutable';

import { createAction, handleActions } from 'redux-actions';

export const actions = {
  PUT: createAction('PROFILE/PUT'),
  SUCCESS: createAction('PROFILE/SUCCESS'),
  ERROR: createAction('PROFILE/ERROR'),
  INPUT: createAction('PROFILE/INPUT')
};

type StateType = Map<string, string | boolean | Map<string, any>>;

export type AddEventActionType = {
  payload: string | number | boolean
};

export const initialState = Map({
  firstName: '',
  lastName: '',
  experience: '',
  about: '',
  isProcessing: false,
  error: false
});

const reducer = handleActions(
  {
    [actions.SUCCESS]: (state: StateType, action: AddEventActionType) =>
      state.set('isProcessing', false),
    [actions.PUT]: (state: StateType, action: AddEventActionType) =>
      state.set('isProcessing', true),
    [actions.ERROR]: (state: StateType, action: AddEventActionType) =>
      state.set('isProcessing', false).set('error', true),
    [actions.INPUT]: (state: StateType, action: AddEventActionType) =>
      state.set(action.payload[0], action.payload[1])
  },
  initialState
);

export default reducer;
