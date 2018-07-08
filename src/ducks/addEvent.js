// @flow
import { Map } from 'immutable';

import { createAction, handleActions } from 'redux-actions';

export const actions = {
  PUT: createAction('ADD_EVENT/PUT'),
  SUCCESS: createAction('ADD_EVENT/SUCCESS'),
  ERROR: createAction('ADD_EVENT/ERROR'),
  INPUT: createAction('ADD_EVENT/INPUT')
};

type StateType = Map<string, string | boolean | Map<string, any>>;

export type AddEventActionType = {
  payload: string | number | boolean
};

export const initialState = Map({
  newEvent: Map({
    address: '',
    time: '',
    game: '',
    players: '',
    begginers: false,
    private: true
  }),
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
      state.setIn(['newEvent', action.payload[0]], action.payload[1])
  },
  initialState
);

export default reducer;
