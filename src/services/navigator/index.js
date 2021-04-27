import React from 'react';

export const navigationRef = React.createRef();

const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

const reset = name => {
  navigationRef.current?.resetRoot({
    index: 0,
    routes: [{name: name}],
  });
};

const goBack = () => {
  navigationRef.current?.goBack();
};

const navigator = {
  reset,
  goBack,
  navigate,
};

export default navigator;
