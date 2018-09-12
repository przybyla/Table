// @flow
import { Map } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

type StateType = Map<string, *>;

export const actions = {
  LOG_IN: createAction('USER/LOG_IN'),
  SUCCESS: createAction('USER/SUCCESS'),
  ERROR: createAction('USER/ERROR')
};

export const initialState: StateType = Map({ isProcessing: false });

const reducer = handleActions(
  {
    [actions.LOG_IN]: (state: StateType, action: AddEventActionType) =>
      state.set('isProcessing', true),
    [actions.SUCCESS]: (state: StateType, action: AddEventActionType) =>
      state.set('isProcessing', false),
    [actions.ERROR]: (state: StateType, action: AddEventActionType) =>
      state.set('isProcessing', false).set('error', true)
  },
  initialState
);

export default reducer;
