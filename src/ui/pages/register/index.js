import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Pages, Input} from '@components';
import {register} from '@stores/global/actions';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from './styles';
import {navigator} from '@services';
import {APPNAME} from '@root/env';

export const RegisterPage = () => {
  const {loading} = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [telp, setTelp] = useState('');
  const [password, setPassword] = useState('');

  const submitRegister = () => {
    dispatch(
      register({email, password, name, username, telp, c_password: password}),
    );
  };

  return (
    <Pages
      dark
      isLoading={loading}
      barColor="white"
      pagesStyle={styles.pagesStyle}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.loginContainer}>
          <Text style={styles.brandName}>{APPNAME}</Text>

          <Input
            placeholder="Nama"
            inputStyle={styles.mb10}
            onChangeText={(e) => setName(e)}
            value={name}
          />
          <Input
            placeholder="Username"
            inputStyle={styles.mb10}
            onChangeText={(e) => setUsername(e)}
            value={username}
          />
          <Input
            placeholder="Telp"
            keyboardType="numeric"
            inputStyle={styles.mb10}
            onChangeText={(e) => setTelp(e)}
            value={telp}
          />
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
          <TouchableOpacity onPress={submitRegister} style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <Text style={styles.text1}>
            Already have an account ?
            <Text style={styles.text2} onPress={() => navigator.reset('login')}>
              {' '}
              Login
            </Text>
          </Text>
        </View>
      </ScrollView>
    </Pages>
  );
};
