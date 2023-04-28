import React from "react";
import { View,Text } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
function Visits(){
    return(
        <View style={{width:'90%',height:'15%',backgroundColor:'#d1e4fb',padding:10,borderRadius:15,flexDirection:'row'}}>
         <View style={{width:'21%',height:'78%',backgroundColor:'#3786eb',borderRadius:60,alignItems:'center',justifyContent:'center',marginTop:5}}>
         <AntDesign name='contacts'color='#fff'size={40}/>  
        </View>
         <View style={{width:'75%',height:'90%',alignSelf:'center',marginLeft:5}}>
        <View style={{marginLeft:8}}>
         <Text style={{fontSize:20,fontWeight:'bold'}}>Visits</Text>
         <Text style={{fontSize:15,}}>Loream ipsum is a simple dummy text using since 1960s</Text>
         </View>   
        </View>   
        </View>
    )
}
export default Visits;