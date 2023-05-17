import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import SearchBar from './src/components/shared/searchbar/SearchBar';
import SingleBarChart from './src/components/shared/barChart/BarChart';
import UserDetail from './src/screens/profile/UserDetail';
import MainNavigationStack from './src/navigation/mainNavigationStack/MainNavigationStack';
import SuccessModal from './src/components/componentModals/SuccessModal';
import VisitAndProfileButton from './src/components/visit_and_myProfile/VisitAndProfileButton';

import TestComponent from './src/components/TestComponent';
import SelectLanguage from './src/components/selectLanguage/SelectLanguage';
import {getDataAxios} from './src/fetchNodeServices';
import FullSizeButtons from './src/components/shared/buttons/FullSizeButtons';
import {LogBox} from 'react-native';
import SearchScreen from './src/screens/search/SearchScreen';
import MultipleTextField from './src/components/multiple_text_field/MultipleTextField';
import RbeSheet from './src/components/shared/rbesheet/RbeSheet';
import moment from 'moment';
import {Provider} from 'react-redux';
import store from './src/helper/utils/redux/store';
import RootReducer from './src/helper/utils/redux/RootReducer';
// import { removeStoreData } from './src/helper/utils/AsyncStorageServices';
const App = props => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
    // removeStoreData('VisitorData')
  }, []);

  // const [showModal, setShowModal] = useState(true)
  // alert(background)
  const [textFields, setTextFields] = useState([{value: ''}, {value: ''}]);
  // alert(JSON.stringify(textFields))
  const [name, setName] = useState('');
  // alert(name)

  // alert(threeMonthsAgo)

  return (
    <Provider store={store}>
      <MainNavigationStack />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
