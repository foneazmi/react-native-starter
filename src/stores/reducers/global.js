import {BEGIN, END, LOGOUT, SET_USER} from '@types';

const INITIAL_STATE = {
  loading: false,
  user: false,
};

export const globalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, user: action.payload};
    case BEGIN:
      return {...state, loading: true};
    case END:
      return {...state, loading: false};
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
