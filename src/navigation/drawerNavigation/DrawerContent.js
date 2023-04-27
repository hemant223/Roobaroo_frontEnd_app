import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    ScrollView,
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
       


       <View>
        <Text>hemu</Text>
       </View>
       <View>
        <Text>Arun</Text>
       </View>
       <View>
        <Text>Lalvani</Text>
       </View>
  
      </DrawerContentScrollView>
    );
  }
  