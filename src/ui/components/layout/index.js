import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {StatusBar, Loader, Header} from '@components';
import {useSelector} from 'react-redux';

export const Layout = props => {
  const {loading} = useSelector(state => state.globalReducer);

  const AppBar = () => {
    if (props.AppBar) {
      return props.AppBar;
    } else if (props.StatusBar) {
      return props.StatusBar;
    } else if (props.hidden) {
      return <StatusBar hidden />;
    } else {
      return (
        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
          showHideTransition="slide"
        />
      );
    }
  };

  return (
    <>
      <AppBar />
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
