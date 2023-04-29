import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/shared/header/Header'
import SegmentedTab from '../../components/shared/segment_tab/SegmentedTabs'
import VisitorDetails from '../visitorDetails/VisitorDetails'
import {
  useNavigation,
} from '@react-navigation/native';
import { goBackTwoScreen } from '../../navigation/NavigationDrw/NavigationServices'

const Visits = () => {
  const navigation = useNavigation()       
  return (
    <>

    <View>
    <Header
    BackonPress={()=>{navigation.goBack()}}
    addonPress={()=>{navigation.navigate('VerifyNumber')}}
        add
        height={90}
        rightText
        backarrowIcon
       
      />
    </View>
    <ScrollView>

    <View style={{padding:5,margin:5 ,top:10}}>
   <SegmentedTab/>
  </View>
<View>
  <VisitorDetails/>
</View>

    </ScrollView>
    </>
  
  )
}

export default Visits

const styles = StyleSheet.create({})