import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Image
  } from 'react-native';
  import React, { useState, useEffect, useCallback } from 'react';
//   import { MainNavigatorstyle } from '../../assets/css/MainNavigatorstyle';
  import { DrawerContentScrollView } from '@react-navigation/drawer';
  import { Image as ImageR } from 'react-native';
  import { navigate } from '../NavigationDrw/NavigationService';
//   import { Colors } from '../../assets/config/Colors';
  import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
//   import { useSelector } from 'react-redux';
  import {
    DrawerActions,
    useNavigation,
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme,
    DarkTheme,
    DefaultTheme,
  } from '@react-navigation/native';
  // import {store} from '../../../App';
  
  import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImagesAssets } from '../../components/shared/ImageAssets';
import { FontFamily } from '../../assets/fonts/FontFamily';
  

  
  export default function DrawerContent(props) {
   
    const navigation = useNavigation();
    const [refresh, setRefresh] = React.useState(false);
    const [currentVersion, setCurrentVersion] = React.useState('');
    const [userData, setUserData] = useState({});
    const [modalVisible1, setModalVisible1] = React.useState(false);
  
   
  
    return (
      <DrawerContentScrollView
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: '#000',
          borderTopRightRadius: 35,
          borderBottomRightRadius: 35,
          overflow: 'hidden',
          width: '100%',
          backgroundColor: '#fff',
          borderColor: '#fff',
          borderWidth: 1,
        }}
        {...props}>
       


       <View style={{/* backgroundColor:'yellow' */}}>
       <Image source={ImagesAssets.roobaroo_logo} resizeMode='contain' style={{ height: 50, width: 220,/* backgroundColor:'red', */alignSelf:'center',marginTop:30 }} />
       </View>

       <View  style={{marginTop:20,flexDirection:'row',alignItems:'center'/* ,justifyContent:'center' */}}>
       <View  style={{width:60,height:60,borderRadius:30,backgroundColor:'red',marginLeft:20}}>
       <Image source={ImagesAssets.hemu} resizeMode='cover' style={{width:60,height:60,borderRadius:30}} />
       </View>
       <View>
        <Text style={{color:'#000',marginLeft:10,fontFamily:FontFamily.Popinssemibold,fontSize:18}}>Hemu Singh</Text>
       </View>
       </View>


      
     <TouchableOpacity onPress={()=>{navigation.navigate('home')}}  style={{marginTop:20,marginLeft:20,flexDirection:'row',alignItems:'center'/* ,justifyContent:'center' */}}>
     <Image source={ImagesAssets.home_colored}  style={{width:22,height:22}} />
     <Text style={{color:'#000',marginLeft:20,fontFamily:FontFamily.Popinssemibold,fontSize:16}}>Home</Text>
      </TouchableOpacity>
     <TouchableOpacity onPress={()=>{navigation.navigate('Visit')}} style={{marginTop:20,marginLeft:20,flexDirection:'row',alignItems:'center'/* ,justifyContent:'center' */}}>
     <Image source={ImagesAssets.visit_black}  style={{width:22,height:22}} />
     <Text style={{color:'#000',marginLeft:20,fontFamily:FontFamily.Popinssemibold,fontSize:16}}>Visits</Text>
      </TouchableOpacity>
     <TouchableOpacity  style={{marginTop:20,marginLeft:20,flexDirection:'row',alignItems:'center'/* ,justifyContent:'center' */}}>
     <Image source={ImagesAssets.calander_blue}  style={{width:22,height:22}} />
     <Text style={{color:'#000',marginLeft:20,fontFamily:FontFamily.Popinssemibold,fontSize:16}}>Change Language</Text>
      </TouchableOpacity>
     <TouchableOpacity  style={{marginTop:20,marginLeft:20,flexDirection:'row',alignItems:'center'/* ,justifyContent:'center' */}}>
     <Image source={ImagesAssets.home_colored}  style={{width:22,height:22}} />
     <Text style={{color:'#000',marginLeft:20,fontFamily:FontFamily.Popinssemibold,fontSize:16}}>Logout</Text>
      </TouchableOpacity>
  
      </DrawerContentScrollView>
    );
  }
  