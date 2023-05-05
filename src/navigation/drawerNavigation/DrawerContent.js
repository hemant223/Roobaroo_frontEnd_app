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
import { getStoreData, storeData } from '../../helper/utils/AsyncStorageServices';
  

  
  export default function DrawerContent(props) {
   
    const navigation = useNavigation();
    const [refresh, setRefresh] = React.useState(false);
    const [currentVersion, setCurrentVersion] = React.useState('');
    const [userData, setUserData] = useState({});
    const [modalVisible1, setModalVisible1] = React.useState(false);
    const [showHome, setShowHome] = useState(false)
    const [showVisits, setShowVisits] = useState(false)
    const [showLang, setShowLang] = useState(false)
    const [showLogout, setShowLogout] = useState(false)
    const [getUserData, setUserDataByAsync] = useState([])

      const getUserDataByAsyncStorage=async()=>{
        const userData = await getStoreData('userData');
        setUserDataByAsync(userData)
      }
      useEffect(() => {
        getUserDataByAsyncStorage()
      }, [])
      

    const handleHome=()=>{
        navigation.navigate('home')
        setShowHome(true)
        setShowVisits(false)
        setShowLang(false)
        setShowLogout(false)
    }
    const handleVisit=()=>{
        navigation.navigate('Visit')
        setShowHome(false)
        setShowVisits(true)
        setShowLang(false)
        setShowLogout(false)
    }
    const handleLang=()=>{
        // navigation.navigate('home')
        setShowHome(false)
        setShowVisits(false)
        setShowLang(true)
        setShowLogout(false)
    }
    const handleLogout=async()=>{
        const userData = await getStoreData('userData');
        setShowHome(false)
        setShowVisits(false)
        setShowLang(false)
        setShowLogout(true)
        if(userData){
        storeData(
            'userData',
            ({ ...userData, loggedIn: false }),
        );
        navigation.navigate('Login')
        }
    }
  
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
       <Image source={ImagesAssets.roobaroo_logo} resizeMode='contain' style={{ height: 50, width: 220,/* backgroundColor:'red', */alignSelf:'center',marginTop:15 }} />
       </View>

       <View  style={{marginTop:20,flexDirection:'row',alignItems:'center'/* ,justifyContent:'center' */}}>
       <View  style={{width:60,height:60,borderRadius:30,backgroundColor:'red',marginLeft:25}}>
       <Image source={ImagesAssets.hemu} resizeMode='cover' style={{width:60,height:60,borderRadius:30}} />
       </View>
       <View>
        <Text style={{color:'#000',marginLeft:10,fontFamily:FontFamily.Popinssemibold,fontSize:18}}>{getUserData.firstname} {getUserData.lastname}</Text>
       </View>
       </View>


      
     <TouchableOpacity onPress={()=>{handleHome()}}  style={{marginTop:25,marginLeft:25,flexDirection:'row',alignItems:'center'/* ,justifyContent:'center' */}}>
    { showHome?<Image source={ImagesAssets.home_sel}  style={{width:16,height:16}} />:
     <Image source={ImagesAssets.home_un}  style={{width:16,height:16}} />}
     <Text style={{color:showHome?'#f47216':'#000',marginLeft:20,fontFamily:FontFamily.Popinssemibold,fontSize:16}}>Home</Text>
      </TouchableOpacity>
     <TouchableOpacity onPress={()=>{handleVisit()}} style={{marginTop:25,marginLeft:25,flexDirection:'row',alignItems:'center'/* ,justifyContent:'center' */}}>
     {showVisits?<Image source={ImagesAssets.profile_sel}  style={{width:18,height:18}} />:
     <Image source={ImagesAssets.profile_un}  style={{width:18,height:18}} />}
     <Text style={{color:showVisits?'#f47216':'#000',marginLeft:20,fontFamily:FontFamily.Popinssemibold,fontSize:16}}>Visits</Text>
      </TouchableOpacity>
     <TouchableOpacity  onPress={()=>{handleLang()}} style={{marginTop:25,marginLeft:25,flexDirection:'row',alignItems:'center'/* ,justifyContent:'center' */}}>
     {showLang?<Image source={ImagesAssets.lang_sel}  style={{width:17,height:15}} />:
     <Image source={ImagesAssets.lang_un}  style={{width:17,height:15}} />}
     <Text style={{color:showLang?'#f47216':'#000',marginLeft:20,fontFamily:FontFamily.Popinssemibold,fontSize:16}}>Change Language</Text>
      </TouchableOpacity>
     <TouchableOpacity  onPress={()=>{handleLogout()}} style={{marginTop:25,marginLeft:25,flexDirection:'row',alignItems:'center'/* ,justifyContent:'center' */}}>
     {showLogout?<Image source={ImagesAssets.logout_sel}  style={{width:19,height:16}} />:
     <Image source={ImagesAssets.logout_un}  style={{width:19,height:16}} />}
     <Text style={{color:showLogout?'#f47216':'#000',marginLeft:20,fontFamily:FontFamily.Popinssemibold,fontSize:16}}>Logout</Text>
      </TouchableOpacity>
  
      </DrawerContentScrollView>
    );
  }
  