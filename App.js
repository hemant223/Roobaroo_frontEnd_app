import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from './src/components/shared/searchbar/SearchBar';
import SingleBarChart from './src/components/shared/barChart/BarChart';
import UserDetail from './src/screens/profile/UserDetail';
import MainNavigationStack from './src/navigation/mainNavigationStack/MainNavigationStack';
import SuccessModal from './src/components/componentModals/SuccessModal';
import OtpInput from './src/screens/otpInput/OtpInput';
import Dashboard from './src/screens/dashboard/Dashboard';


const App = (props) => {
  const [background, setBackGround] = useState(1);
  // alert(background)
  return (
    <>
    
    <MainNavigationStack/>
    {/* <Dashboard/> */}
    {/* <SuccessModal/> */}
    </>
  )
}

export default App

const styles = StyleSheet.create({})