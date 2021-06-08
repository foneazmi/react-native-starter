import React from 'react';
import {Layout, AppBar, Input} from '@components';
import {styles} from './styles';
import {colors} from '@helpers';
import {StatusBar, Text} from 'react-native';
export const HomeScreen = () => {
  return (
    <Layout
      style={styles.container}
      AppBar={
        <AppBar title="khan" background={colors.primary} titleColor="white" />
      }>
      <Text>ProfileScreen</Text>
    </Layout>
  );
};
