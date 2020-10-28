import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Loader, StatusBar} from '@components';

export const Pages = (props) =>
  props.view ? <Pages1 {...props} /> : <Pages2 {...props} />;

const Pages1 = (props) => (
  <View style={[{backgroundColor: props.barColor, flex: 1}, props.pagesStyle]}>
    <Loader isLoading={props.isLoading} />
    <StatusBar
      backgroundColor={props.barColor}
      translucent={props.translucent}
      barStyle={props.dark ? 'dark-content' : 'light-content'}
    />
    {props.children}
  </View>
);

const Pages2 = (props) => (
  <SafeAreaView
    style={[{backgroundColor: props.barColor, flex: 1}, props.pagesStyle]}>
    <Loader isLoading={props.isLoading} />
    <StatusBar
      backgroundColor={props.barColor}
      barStyle={props.dark ? 'dark-content' : 'light-content'}
    />
    {props.children}
  </SafeAreaView>
);
