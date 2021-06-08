import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '@helpers';

export const Input = props => {
  const [show, setShow] = useState(false);
  const [focus, setFocus] = useState(false);
  return (
    <View style={[styles.container, props.containerStyle]}>
      {props.title && (
        <Text style={[styles.titleStyle, props.titleStyle]}>{props.title}</Text>
      )}
      <View
        style={[
          styles.innerContainer,
          focus
            ? {
                borderColor: colors.primary,
              }
            : {
                borderColor: colors.secondary,
              },
          props.inputStyle,
        ]}>
        {props.prefix && props.prefix}
        <TextInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          secureTextEntry={!show && props.secureTextEntry}
          style={[
            styles.inputStyle,
            Platform.OS === 'ios' && styles.iosInnerContainer,
          ]}
          keyboardType={props.keyboardType}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          value={props.value}
        />
        {props.suffix && props.suffix}
        {props.secureTextEntry && (
          <Icon
            name={show ? 'eye-off' : 'eye'}
            size={20}
            onPress={() => setShow(!show)}
          />
        )}
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  titleStyle: {
    marginBottom: 4,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 4,
  },
  iosInnerContainer: {
    paddingVertical: 16,
  },
  inputStyle: {
    flex: 1,
    marginBottom: -3,
  },
});
