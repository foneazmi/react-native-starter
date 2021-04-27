import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '@helpers';
export const Input = props => {
  const [show, setShow] = useState(false);
  const [focus, setFocus] = useState(false);
  return (
    <View style={[{marginBottom: 16}, props.containerStyle]}>
      {props.title && (
        <Text
          style={[
            {marginBottom: 4, fontFamily: 'Poppins-Regular'},
            props.titleStyle,
          ]}>
          {props.title}
        </Text>
      )}
      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            borderRadius: 4,
          },
          focus
            ? {
                borderColor: colors.primary,
                borderWidth: 1,
              }
            : {
                borderColor: 'black',
                borderWidth: 0.2,
              },
          props.inputStyle,
        ]}>
        {props.leftIcon && <Icon name={props.leftIcon} size={20} />}
        <TextInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          secureTextEntry={!show && props.secureTextEntry}
          style={{
            fontFamily: 'Poppins-Regular',
            flex: 1,
            marginBottom: -3,
          }}
          keyboardType={props.keyboardType}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          value={props.value}
        />
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
    backgroundColor: 'white',
    padding: 16,
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'Poppins-Bold',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 20,
  },
});
