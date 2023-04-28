import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { ImagesAssets } from '../shared/ImageAssets'
import { FontFamily } from '../../assets/fonts/FontFamily'

const VisitAndProfileButton = (props) => {
  return (
    <View style={{width:'90%',backgroundColor:props.backgroundColor,height:85,borderRadius:15,padding:10,alignItems:'center',flexDirection:'row'}}>
       <View  style={{width:60,height:60,borderRadius:30,backgroundColor:props.circleColor,marginLeft:20,justifyContent:'center',alignItems:'center'}}>
       <Image source={ImagesAssets.visit_profile} resizeMode='contain' style={{width:25,height:30}} />
       </View>
       <View style={{marginLeft:10,width:'65%',flexWrap:'wrap'}}>
       <View>
        <Text style={{fontFamily:FontFamily.Popinssemibold,color:'#000',fontSize:18}}>{props.heading}</Text>
       </View>
       <View >
        <Text style={{fontFamily:FontFamily.PopinsRegular,color:'#000',fontSize:12,}}>{props.data}</Text>
       </View>
       </View>
      
    </View>
  )
}

export default VisitAndProfileButton
VisitAndProfileButton.defaultProps = {
heading:'Visits',
data:'data kfjvh fjh fkj kshfk skfjh ksfuh srktyuh',
backgroundColor:'#d1e4fb',
circleColor:'#3786eb'
}

const styles = StyleSheet.create({})