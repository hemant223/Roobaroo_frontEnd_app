import AsyncStorage from '@react-native-async-storage/async-storage';


const ShowData = async lng => {
  var obj = {};
  console.log('<>><><><><><>>', lng);
  let storage = await AsyncStorage.getItem(`${lng}`);
  storage = JSON.parse(storage);
  console.log('Storage Hai Show Label Me', storage);
  
  storage.map(item => {
    obj[item.label] = item.label_translation;
  });
  //   return obj;
  AsyncStorage.setItem('@lastlng', lng);

//   store.dispatch({type: 'SET_LANGUAGE', payload: obj});
  let dataaa = JSON.stringify(obj);
  AsyncStorage.setItem('OBJ', dataaa);
};

export {ShowData};