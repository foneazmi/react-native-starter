import React, {useEffect} from 'react';
import {Text, ActivityIndicator} from 'react-native';
import {color} from 'react-native-tailwindcss';
import {Pages} from '@components';
import {navigator} from '@services';
import {styles} from './styles';
import {getAuth} from '@helpers';
import {useDispatch} from 'react-redux';
import {end} from '@stores/global/actions';
import {APPNAME} from '@root/env';

export const SplashPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(end());
    const timer = setTimeout(async () => {
      let token = await getAuth();
      if (token) {
        navigator.reset('dashboard');
      } else {
        navigator.reset('login');
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <Pages barColor={color.green700} pagesStyle={styles.pagesStyle}>
      <Text style={styles.brand}>{APPNAME}</Text>
      <ActivityIndicator size="large" color={color.green100} />
    </Pages>
  );
};
