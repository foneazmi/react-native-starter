import {begin, end} from '@actions';

export const getData = () => {
  return async dispatch => {
    dispatch(begin());
    await Promise.all([
      // dispatch(getSomeData()),
    ]);
    dispatch(end());
  };
};
