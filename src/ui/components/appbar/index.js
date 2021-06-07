import React from 'react';
import {View, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {colors} from '@helpers';

export const AppBar = props => (
  <SafeAreaView
    style={{
      backgroundColor: props.style?.backgroundColor
        ? props.style?.backgroundColor
        : colors.background,
    }}>
    <StatusBar
      backgroundColor={
        props.style?.backgroundColor
          ? props.style?.backgroundColor
          : colors.background
      }
      barStyle={props.dark ? 'light-content' : 'dark-content'}
      showHideTransition="slide"
    />
    <View style={[styles.container, props.style]}>
      <View style={styles.menu}>{props.leftMenu && props.leftMenu}</View>
      {props.title && (
        <Text numberOfLines={1} style={[{color: colors.text1}, styles.title]}>
          {props.title}
        </Text>
      )}
      <View style={styles.menu}>
        <View style={styles.menuRight}>
          {props.rightMenu && props.rightMenu}
        </View>
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  menu: {
    width: 50,
  },
  menuRight: {
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 50,
    flexDirection: 'row',
  },
});
