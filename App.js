import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LocationModal from './src/components/componentModals/LocationModal'
import SuccessModal from './src/components/componentModals/SuccessModal'
import RadioButton from './src/components/shared/buttons/RadioButton'

const App = (props) => {
  const [background, setBackGround] = useState(1);
  // alert(background)
  return (
    <>
    <RadioButton  getId={background} setId={setBackGround} />
    </>
  )
}

export default App

const styles = StyleSheet.create({})