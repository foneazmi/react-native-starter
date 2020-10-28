import AsyncStorage from '@react-native-community/async-storage';

const setAuth = async (token) => {
  await AsyncStorage.setItem('authorization', token);
};

const getAuth = async () => {
  const auth = await AsyncStorage.getItem('authorization');
  return auth;
};

const clearStorage = () => {
  AsyncStorage.clear();
};

export {setAuth, getAuth, clearStorage};
