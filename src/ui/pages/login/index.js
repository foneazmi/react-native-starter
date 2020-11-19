import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Pages, Input} from '@components';
import {login} from '@stores/global/actions';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from './styles';
import {navigator} from '@services';

import {APPNAME} from '@root/env';

export const LoginPage = () => {
  const {loading} = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = () => {
    dispatch(login({email, password}));
  };

  return (
    <Pages dark isLoading={loading} barColor="white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.loginContainer}>
          <Text style={styles.brandName}>{APPNAME}</Text>
          <Input
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(e) => setEmail(e)}
            inputStyle={styles.mb10}
            value={email}
          />
          <Input
            secureTextEntry
            placeholder="Password"
            inputStyle={styles.mb10}
            onChangeText={(e) => setPassword(e)}
            value={password}
          />
          <TouchableOpacity onPress={submitLogin} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.text1}>
            Dont’t have an account ?
            <Text
              style={styles.text2}
              onPress={() => navigator.navigate('register')}>
              {' '}
              Register
            </Text>
          </Text>
        </View>
      </ScrollView>
    </Pages>
  );
};
