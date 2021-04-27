import React from 'react';
import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import {width, height} from '@helpers';

export const Loader = ({isLoading}) => {
  return isLoading ? (
    <View style={inStyle.container}>
      <View style={inStyle.loader}>
        <Text style={inStyle.indicatorText}>Please wait</Text>
        <ActivityIndicator size="large" color="white" />
      </View>
    </View>
  ) : (
    <View />
  );
};

const inStyle = StyleSheet.create({
  loader: {
    position: 'absolute',
    top: height / 2,
  },
  container: {
    zIndex: 99,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width: width,
    height: height * 2,
  },
  indicatorText: {
    color: 'white',
    fontSize: 18,
  },
});
