import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import { languageNameFun } from '../../../helper/utils/redux/slices/languageNameSlice';
import { newStore } from '../../../../App';
const ShowData = async lng => {
  // var dispatch = useDispatch();
// alert(lng)
  var obj = {};
  console.log('<>><><><><><>>', lng);
  let storage = await AsyncStorage.getItem(`${lng}`);
  console.log("STORAGE===>",storage)
  storage = JSON.parse(storage);
  console.log('Storage Hai Show Label Me', storage);
  
  storage.map(item => {
    obj[item.label] = item.label_translation;
  });
  //   return obj;
  AsyncStorage.setItem('@lastlng', lng);
  newStore.dispatch(languageNameFun(obj));
  // store.dispatch({type: 'SET_LANGUAGE', payload: obj});
  let dataaa = JSON.stringify(obj);
  AsyncStorage.setItem('OBJ', dataaa);
};

export {ShowData};
