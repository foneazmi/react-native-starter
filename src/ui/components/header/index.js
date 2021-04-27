import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {navigator} from '@services';
import {colors} from '@helpers';

export const Header = props => (
  <View style={styles.container}>
    <View style={styles.addOns}>
      {props.back && (
        <TouchableOpacity
          onPress={() => navigator.goBack()}
          style={styles.actionContainer}>
          <Icon name="chevron-left" size={20} color="white" />
        </TouchableOpacity>
      )}
    </View>
    {props.title ? (
      <Text numberOfLines={1} style={styles.title}>
        {props.title}
      </Text>
    ) : (
      <View style={{flex: 1, alignItems: 'center'}}>
        {/* <Image source={LOGO} style={{height: 50, width: 100}} /> */}
      </View>
    )}
    <View
      style={[
        styles.addOns,
        {
          alignItems: 'flex-end',
        },
      ]}>
      {props.menu && (
        <TouchableOpacity
          onPress={props.menu.onPress}
          style={styles.actionContainer}>
          <Icon name={props.menu.name} size={20} color="white" />
        </TouchableOpacity>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  addOns: {
    width: 50,
  },
  actionContainer: {
    height: 40,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 40,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    textAlign: 'center',
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  h1: {
    marginVertical: 6,
    fontSize: 16,
  },
});
