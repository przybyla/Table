// @flow
import { Map } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

type StateType = Map<string, *>;

export const actions = {
  SHOW_MENU: createAction('RESPONSIVE/SHOW_MENU'),
  HIDE_MENU: createAction('RESPONSIVE/HIDE_MENU')
};

export const initialState: StateType = Map({
  menuVisible: false
});

const reducer = handleActions(
  {
    [actions.SHOW_MENU]: (state: StateType) => state.set('menuVisible', true),
    [actions.HIDE_MENU]: (state: StateType) => state.set('menuVisible', false)
  },
  initialState
);

export default reducer;
