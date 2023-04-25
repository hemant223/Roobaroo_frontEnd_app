import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
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
import SuccessModal from './src/components/componentModals/SuccessModal'
import RadioButton from './src/components/shared/buttons/RadioButton'

const App = (props) => {
  const [background, setBackGround] = useState(1);
  // alert(background)
  return (
    <>
    <OtpInput />
    </>
  )
}

export default App

const styles = StyleSheet.create({})