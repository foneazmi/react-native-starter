import React from 'react';
import {Layout, StatusBar} from '@components';
import {styles} from './styles';
import {Text} from 'react-native';
export const LoremScreen = () => {
  return (
    <Layout
      style={styles.container}
      StatusBar={
        <StatusBar
          backgroundColor="red"
          barStyle="dark-content"
          showHideTransition="slide"
        />
      }>
      <Text>LoremScreen</Text>
    </Layout>
  );
};
