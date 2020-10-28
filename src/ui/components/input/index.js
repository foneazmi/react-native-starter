import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import { color } from "react-native-tailwindcss";
import Icon from "react-native-vector-icons/Feather";

export const InputSearch = (props) => (
  <View style={styles.container}>
    <Icon name="search" size={18} color={color.green900} />
    <TextInput {...props} style={[styles.input, styles.ffp]} />
  </View>
);
export const Input = (props) => (
  <TextInput
    {...props}
    style={[styles.container, styles.pv, styles.ffp, props.inputStyle]}
  />
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: color.green900,
    borderWidth: 1,
    backgroundColor: color.green100,
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: Platform.OS === "ios" ? 10 : 0,
  },
  pv: {
    paddingVertical: 10,
  },
  input: {
    flex: 1,
  },
  ffp: {
    fontFamily: "Poppins-Regular",
  },
});
