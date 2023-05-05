import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from './src/components/shared/searchbar/SearchBar';
import SingleBarChart from './src/components/shared/barChart/BarChart';
import UserDetail from './src/screens/profile/UserDetail';
import MainNavigationStack from './src/navigation/mainNavigationStack/MainNavigationStack';
import SuccessModal from './src/components/componentModals/SuccessModal';
import VisitAndProfileButton from './src/components/visit_and_myProfile/VisitAndProfileButton';

import TestComponent from './src/components/TestComponent';
import SelectLanguage from './src/components/selectLanguage/SelectLanguage';
import { getDataAxios } from './src/fetchNodeServices';
import FullSizeButtons from './src/components/shared/buttons/FullSizeButtons';
import { LogBox } from 'react-native';
// import { removeStoreData } from './src/helper/utils/AsyncStorageServices';
const App = (props) => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
    // removeStoreData('VisitorData')
  }, [])

  // const [showModal, setShowModal] = useState(true)
  // alert(background)


  return (
    <>
{/* <StatusBar hidden={true} translucent backgroundColor="transparent" /> */}
    
    <OtpInput/>
    {/* <SuccessModal setShowModal={setShowModal} showModal={showModal}/> */}
   {/* <FullSizeButtons onPress={()=>{handleClick()}} /> */}
    
    </>
  )
}

export default App

const styles = StyleSheet.create({})