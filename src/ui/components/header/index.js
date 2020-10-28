import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {t} from 'react-native-tailwindcss';
export const Header = () => (
  <View style={styles.container}>
    <Text>asdasd</Text>
    <Text>asdasd</Text>
    <Text>asdasd</Text>
  </View>
);

export const TitleHeader = ({title, subTitle, onPress}) => (
  <View style={t.flexRow}>
    <Text style={[styles.h1, t.flex1]}>{title}</Text>
    <Text onPress={onPress} style={styles.h1}>
      {subTitle}
    </Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'green',
  },
  h1: {
    marginVertical: 6,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});
