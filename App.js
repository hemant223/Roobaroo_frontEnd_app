import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LocationModal from './src/components/componentModals/LocationModal'
import Inputs from './src/components/shared/textInputs/Inputs'
import SegmentedTabs from './src/components/shared/segment_tab/SegmentedTabs'
import Header from './src/components/shared/header/Header'
import DropDownComponent from './src/components/shared/dropdowns/DropDownComponent'
const App = (props) => {
  return (
    <>
    {/* <Header add  stepText iconupdown centerText DownBottom={20} /> */}
    <DropDownComponent/>
    </>
  )
}

export default App

const styles = StyleSheet.create({})