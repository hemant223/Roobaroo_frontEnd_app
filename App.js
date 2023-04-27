import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from './src/components/shared/searchbar/SearchBar';
import SingleBarChart from './src/components/shared/barChart/BarChart';
import UserDetail from './src/screens/profile/UserDetail';


const App = (props) => {
  const [background, setBackGround] = useState(1);
  // alert(background)
  return (
    <>
    
    <UserDetail/>
    </>
  )
}

export default App

const styles = StyleSheet.create({})