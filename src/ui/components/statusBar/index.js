import React from 'react';
import {StatusBar as SB} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

export const StatusBar = (props) => {
  const isFocused = useIsFocused();
  return isFocused ? <SB {...props} /> : null;
};
