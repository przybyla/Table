// @flow
import { Map } from 'immutable';

import { createAction, handleActions } from 'redux-actions';

export const actions = {
  PUT: createAction('ADD_EVENT/PUT'),
  SHOW_MODAL: createAction('ADD_EVENT/SHOW_MODAL'),
  SUCCESS: createAction('ADD_EVENT/SUCCESS'),
  ERROR: createAction('ADD_EVENT/ERROR'),
  INPUT: createAction('ADD_EVENT/INPUT'),
  GET_COORDS: createAction('ADD_EVENT/GET_COORDS')
};

type StateType = Map<string, string | boolean | Map<string, any>>;

export type AddEventActionType = {
  payload: string | number | boolean
};

export const initialState = Map({
  newEvent: Map({
    street: '',
    city: '',
    time: '',
    game: '',
    players: '',
    lat: '',
    lng: ''
  }),
  isProcessing: false,
  error: false,
  showModal: false
});

const reducer = handleActions(
  {
    [actions.SUCCESS]: (state: StateType, action: AddEventActionType) =>
      state.set('isProcessing', false),
    [actions.SHOW_MODAL]: (state: StateType, action: AddEventActionType) =>
      state.set('showModal', true),
    [actions.PUT]: (state: StateType, action: AddEventActionType) =>
      state.set('isProcessing', true).set('showModal', false),
    [actions.GET_COORDS]: (state: StateType, action: AddEventActionType) =>
      state
        .setIn(['newEvent', 'lat'], action.payload.lat)
        .setIn(['newEvent', 'lng'], action.payload.lng),
    [actions.ERROR]: (state: StateType, action: AddEventActionType) =>
      state.set('isProcessing', false).set('error', true),
    [actions.INPUT]: (state: StateType, action: AddEventActionType) =>
      state.setIn(['newEvent', action.payload[0]], action.payload[1])
  },
  initialState
);

export default reducer;
