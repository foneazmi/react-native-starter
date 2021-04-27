import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {StatusBar} from '@components';
// import {navigator} from '@services';
import {useDispatch} from 'react-redux';
import {end} from '@actions';

export const SplashScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(end());
    const timer = setTimeout(async () => {
      // navigator.reset('dashboard');
    }, 1000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        showHideTransition="slide"
      />
      <View style={styles.container}>
        <Text>Starter</Text>
      </View>
    </>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo1: {
    height: 200,
    width: 200,
  },
});
