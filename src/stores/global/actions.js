import {api, navigator} from '@services';
import {setAuth, clearStorage} from '@helpers';
import Snackbar from 'react-native-snackbar';

import {BEGIN, END, SET_USER} from './type';

export const login = (payload) => {
  return (dispatch) => {
    dispatch(begin());
    api
      .login(payload)
      .then((res) => {
        console.log('login', res);
      })
      .catch((err) => {
        console.log('login', err);
      })
      .finally(() => dispatch(end()));
  };
};

export const register = (payload) => {
  return (dispatch) => {
    dispatch(begin());
    api
      .register(payload)
      .then(() => {
        navigator.reset('login');
      })
      .catch((err) => {
        let errors = Object.keys(err.data.message);
        errors.length &&
          Snackbar.show({
            text: err.data.message[errors[0]][0],
            duration: Snackbar.LENGTH_SHORT,
          });
      })
      .finally(() => dispatch(end()));
  };
};

// export const reloadData = () => {
//   return (dispatch) => {
//     dispatch(begin());
//     // dispatch(getProfile());
//     // dispatch(getCategories());
//     // dispatch(getVendors());
//     // dispatch(getProducts());
//     dispatch(end());
//   };
// };

export const logout = () => {
  return async (dispatch) => {
    await clearStorage();
    navigator.reset('splash');
    dispatch({type: SET_USER, payload: ''});
  };
};

export const begin = () => {
  return (dispatch) => {
    dispatch({type: BEGIN});
  };
};
export const end = () => {
  return (dispatch) => {
    dispatch({type: END});
  };
};
