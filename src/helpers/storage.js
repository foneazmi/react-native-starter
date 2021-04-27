import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = async token => {
  await AsyncStorage.setItem('token', token);
};

export const getToken = async () => {
  const auth = await AsyncStorage.getItem('token');
  return auth;
};

export const clearStorage = () => {
  AsyncStorage.clear();
};
