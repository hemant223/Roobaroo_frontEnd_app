import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React, { useState } from 'react'
import SearchBar from './src/components/shared/searchbar/SearchBar';
import SingleBarChart from './src/components/shared/barChart/BarChart';
import UserDetail from './src/screens/profile/UserDetail';
import MainNavigationStack from './src/navigation/mainNavigationStack/MainNavigationStack';
import SuccessModal from './src/components/componentModals/SuccessModal';
import VisitAndProfileButton from './src/components/visit_and_myProfile/VisitAndProfileButton';


const App = (props) => {
  const [background, setBackGround] = useState(1);
  // const [showModal, setShowModal] = useState(true)
  // alert(background)
  return (
    <>
{/* <StatusBar hidden={true} translucent backgroundColor="transparent" /> */}
    
    <MainNavigationStack/>
    {/* <SuccessModal setShowModal={setShowModal} showModal={showModal}/> */}
    </>
  )
}

export default App

const styles = StyleSheet.create({})