import React from 'react';
import {Layout, StatusBar} from '@components';
import {styles} from './styles';
import {Text} from 'react-native';
export const ProfileScreen = () => {
  return (
    <Layout
      style={styles.container}
      StatusBar={
        <StatusBar
          backgroundColor="red"
          barStyle="light-content"
          showHideTransition="slide"
        />
      }>
      <Text>ProfileScreen</Text>
    </Layout>
  );
};
