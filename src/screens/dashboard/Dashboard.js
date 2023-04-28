import { StyleSheet, Text, View ,StatusBar} from 'react-native'
import React from 'react'
import Header from '../../components/shared/header/Header'
import SpeedoMeter from './speedometer/SpeedoMeter'
import SingleBarChart from '../../components/shared/barChart/BarChart'
import VisitAndProfileButton from '../../components/visit_and_myProfile/VisitAndProfileButton'


const Dashboard = () => {
  return (
    <View style={{backgroundColor:'#fff',height:'100%'}}>
<StatusBar hidden={false} translucent backgroundColor="transparent" />

<Header height={'20%'}/>

<View style={{backgroundColor:'#fff',width:'100%',height:'25%',marginTop:12,alignItems:'center'}}>
<View style={{backgroundColor:'#fff',width:'95%',height:'100%',borderRadius:12,borderWidth:1,borderColor:'#e4e4e4',alignItems:'center',alignContent:'center',paddingVertical:20}}>
    <SpeedoMeter />
</View>
</View>

<View style={{width:'100%',height:'30%',backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
    <SingleBarChart/>
</View>
<View  style={{width:'100%',height:'12%',alignItems:'center',backgroundColor:'#fff'}}>
   <VisitAndProfileButton/>
</View>
<View  style={{width:'100%',height:'12%',alignItems:'center',backgroundColor:'#fff'}}>
   <VisitAndProfileButton heading="My Profile" circleColor={'#f9aa4b'} backgroundColor={'#fdead2'}/>
</View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})