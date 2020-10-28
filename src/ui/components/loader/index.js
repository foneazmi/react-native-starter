import React from 'react';
import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import {fullWidth, fullHeight} from '@helpers';
import {color} from 'react-native-tailwindcss';

export const Loader = ({isLoading}) => {
  return isLoading ? (
    <View style={inStyle.container}>
      <View style={inStyle.loader}>
        <Text style={inStyle.indicatorText}>Please wait</Text>
        <ActivityIndicator size="large" color={color.red100} />
      </View>
    </View>
  ) : (
    <View />
  );
};

const inStyle = StyleSheet.create({
  loader: {
    position: 'absolute',
    top: fullHeight / 2,
  },
  container: {
    zIndex: 99,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width: fullWidth,
    height: fullHeight * 2,
  },
  indicatorText: {
    fontFamily: 'Poppins-Regular',
    color: color.red100,
    fontSize: 18,
  },
});
