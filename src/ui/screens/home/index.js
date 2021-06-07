import React from 'react';
import {Text, View} from 'react-native';
import {Layout, AppBar} from '@components';
import {styles} from './styles';

export const HomeScreen = () => {
  return (
    <Layout
      style={styles.container}
      AppBar={<AppBar title="khan" style={{backgroundColor: 'white'}} />}>
      <Text>HomeScreen</Text>
    </Layout>
  );
};
