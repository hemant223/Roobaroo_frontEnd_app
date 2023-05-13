import AsyncStorage from '@react-native-community/async-storage';

export const setLng = (data) => {
  data = JSON.stringify(data);
  return AsyncStorage.setItem('language', data);
};

export const getLng = async () => {
  const data = await AsyncStorage.getItem('language');
  if (data != null) {
    return JSON.parse(data);
  }
};

export const setAcceptTerms = async (data) => {
  data = JSON.stringify(data);
  return AsyncStorage.setItem('acceptterms', data);
  // alert(data);
};

export const getAcceptTerms = async () => {
  const data = await AsyncStorage.getItem('acceptterms');
  if (data != null) {
    return JSON.parse(data);
  }
};
