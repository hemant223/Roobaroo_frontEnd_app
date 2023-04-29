import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from './src/components/shared/searchbar/SearchBar';
import SingleBarChart from './src/components/shared/barChart/BarChart';
import UserDetail from './src/screens/profile/UserDetail';
import MainNavigationStack from './src/navigation/mainNavigationStack/MainNavigationStack';
import SuccessModal from './src/components/componentModals/SuccessModal';
import SelectLanguage from './src/components/selectLanguage/SelectLanguage';
import RbeSheet from './src/components/shared/rbesheet/RbeSheet';


const App = (props) => {
  const [background, setBackGround] = useState(1);
  // alert(background)
  return (
    <>
    
    {/* <MainNavigationStack/> */}
    {/* <SuccessModal/> */}
<SelectLanguage/>
    </>
  )
}

export default App

const styles = StyleSheet.create({})