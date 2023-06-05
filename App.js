import {StyleSheet, Text, View, StatusBar, FlatList,ActivityIndicator} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import SearchBar from './src/components/shared/searchbar/SearchBar';
import SingleBarChart from './src/components/shared/barChart/BarChart';
import UserDetail from './src/screens/profile/UserDetail';
import MainNavigationStack from './src/navigation/mainNavigationStack/MainNavigationStack';
import SuccessModal from './src/components/componentModals/SuccessModal';
import VisitAndProfileButton from './src/components/visit_and_myProfile/VisitAndProfileButton';
import VisitingForm from './src/screens/visitiorForm/VisitingForm';
import TestComponent from './src/components/TestComponent';
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
import {ToastProvider} from 'react-native-toast-notifications';
// import ChangeLanguage from './src/components/selectLanguage/constant/ChangeLanguage';


export const newStore = store;
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
    const [getdata1, setData1] = useState([]);
  const [getdata, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  // alert(threeMonthsAgo)

//   const getData = async () => {
//     var data = await getDataAxios(
//       `visitors/displayAppVisitors/${1}/${5}/${offset}`,
//     );

// if(data.status){
//   // data.result.map((item)=>{
//   //   alert(item.id)
//   // })
    
//    const combineArray=[...getdata,...data.result]
//     setData(combineArray);
//     setLoading(true)
//   }
//   else{
//    setLoading(false)
//   }
//   }

//   useEffect(() => {
//     getData()
//   }, [offset]);

//  console.log('====================================');
//  console.log('getDataaaaa>>>>>',getdata);
//  console.log('====================================');

  return (
    <Provider store={store}>
      <ToastProvider swipeEnabled={true} offsetTop={30}>
        <MainNavigationStack />
      </ToastProvider>
    </Provider>
    // <ChangeLanguage/>
    // <FlatList
    //   data={getdata}
    //   keyExtractor={item => item.id}
    //   onEndReached={() => {
    //     setOffset(offset + 5);
    //     // onEndReached
    //   }}
     
    //   renderItem={({item}) => (
    //     <View style={{height: 200, backgroundColor: 'yellow', margin: 10}}>
    //       <Text style={{color: 'red'}}>{item.firstname}</Text>
    //       <Text style={{color: 'red'}}>{item.id}</Text>
    //     </View>
    //   )}

    //   ListFooterComponent={() => {
    //     if (loading) {
    //       return (
    //         <ActivityIndicator
    //           color={'red'}
    //           style={{margin: 20}}
    //         />
    //       );
    //     } else {
    //       return null;
    //     }
    //   }}

    // />
  );
};

export default App;

const styles = StyleSheet.create({});
