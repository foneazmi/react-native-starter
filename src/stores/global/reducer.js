import {BEGIN, END, SET_USER} from './type';

const INITIAL_STATE = {
  loading: false,
  user: false,
};

const globalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, user: action.payload};
    case BEGIN:
      return {...state, loading: true};
    case END:
      return {...state, loading: false};
    default:
      return state;
  }
};

export default globalReducer;
