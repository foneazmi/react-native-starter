import axios from 'axios';
import {BASEURL} from '@root/env';
import {navigator} from '@services';
import {getToken, clearStorage} from '@helpers';
import {Alert} from 'react-native';

const request = async options => {
  const client = axios.create({
    baseURL: BASEURL,
  });

  const token = await getToken();
  if (token && options.data && options.data.type === 'file') {
    options.options.headers = {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    };
  } else if (token) {
    options.headers = {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
    };
  } else {
    options.headers = {
      Accept: 'application/json',
    };
  }

  const onSuccess = response => {
    return response.data;
  };

  const onError = error => {
    if (error.response) {
      if (
        error.response.status === 422 &&
        (error.config.method === 'post' || error.config.method === 'put')
      ) {
        // ServerValidation(error.response.data.errors);
      }
      if (error.response.status === 401) {
        if (error.config.method === 'post') {
          if (error.response.data.error === 'invalid_credentials') {
            // CustomAlert(null, 'Nomor Ponsel / Password salah.', [{text: 'OK'}]);
          } else {
            clearStorage();
            navigator.reset('login');
            Alert.alert(
              'Opss..',
              'Session anda telah habis.\nSilahkan login kembali!',
            );
          }
        } else if (error.config.method === 'get') {
          clearStorage();
          navigator.reset('login');
          Alert.alert(
            'Opss..',
            'Session anda telah habis.\nSilahkan login kembali!',
          );
        } else {
          console.warn('Error Message:', error.message);
        }
      }
    }
    return Promise.reject(error.response || error.message);
  };

  if (options.data && options.data.type === 'file') {
    return client(options.options).then(onSuccess).catch(onError);
  }

  return client(options).then(onSuccess).catch(onError);
};

export default request;
