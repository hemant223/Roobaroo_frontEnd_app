import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React, { useState } from 'react'
import SearchBar from './src/components/shared/searchbar/SearchBar';
import SingleBarChart from './src/components/shared/barChart/BarChart';
import UserDetail from './src/screens/profile/UserDetail';
import MainNavigationStack from './src/navigation/mainNavigationStack/MainNavigationStack';
import SuccessModal from './src/components/componentModals/SuccessModal';
import SubHeader from './src/components/shared/subHeader/SubHeader';


const App = (props) => {
  const [background, setBackGround] = useState(1);
  // alert(background)
  return (
    <>
    
    {/* <MainNavigationStack/> */}
    {/* <SuccessModal/> */}
<StatusBar hidden={false} translucent backgroundColor={'transparent'}/>
    <SubHeader  
    MenuIcon
    profile
    rightText
    rightContent='Tarun Bhadoriya'
    
    />
    </>
  )
}

export default App

const styles = StyleSheet.create({})