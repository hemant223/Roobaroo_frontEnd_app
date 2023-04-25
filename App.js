import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LocationModal from './src/components/componentModals/LocationModal'
import Inputs from './src/components/shared/textInputs/Inputs'
import SegmentedTabs from './src/components/shared/segment_tab/SegmentedTabs'
import Header from './src/components/shared/header/Header'
import DropDownComponent from './src/components/shared/dropdowns/DropDownComponent'
import SpeedoMeter from './src/components/shared/speedometer/SpeedoMeter'
import Login from './src/screens/Login.js/Login'
import VerifyNumber from './src/screens/auth/VerifyNumber'
import SplashScreen from './src/screens/splashscreen/SplashScreen'
import OtpInput from './src/screens/otpInput/OtpInput'
const App = (props) => {
  return (
    <>
    {/* <Header add  stepText iconupdown centerText DownBottom={20} /> */}
  <OtpInput/>
    </>
  )
}

export default App

const styles = StyleSheet.create({})