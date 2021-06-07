import React, {useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Layout} from '@components';
import {navigator} from '@services';
import {useDispatch} from 'react-redux';
import {end} from '@actions';

export const SplashScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(end());
    const timer = setTimeout(async () => {
      navigator.reset('dashboard');
    }, 1000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <Layout style={styles.container}>
      <Text>Starter</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
