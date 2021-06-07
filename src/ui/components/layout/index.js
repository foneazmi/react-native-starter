import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {StatusBar, Loader, Header} from '@components';
import {useSelector} from 'react-redux';

export const Layout = props => {
  const {loading} = useSelector(state => state.globalReducer);
  return (
    <>
      {props.AppBar ? (
        props.AppBar
      ) : (
        <StatusBar translucent backgroundColor="transparent" />
      )}
      <Loader isLoading={loading} />
      <View style={[styles.container, props.style]}>{props.children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
