import {api, navigator} from '@services';
import {clearStorage} from '@helpers';
import {BEGIN, END, LOGOUT} from '@types';

export const login = payload => {
  return dispatch => {
    dispatch(begin());
    api
      .login(payload)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => dispatch(end()));
  };
};

export const register = payload => {
  return dispatch => {
    dispatch(begin());
    api
      .register(payload)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => dispatch(end()));
  };
};

export const logout = () => {
  return async dispatch => {
    navigator.reset('splash');
    await clearStorage();
    dispatch({type: LOGOUT});
  };
};

export const begin = () => {
  return dispatch => {
    dispatch({type: BEGIN});
  };
};
export const end = () => {
  return dispatch => {
    dispatch({type: END});
  };
};
