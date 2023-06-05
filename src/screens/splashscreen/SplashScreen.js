import React, {useEffect} from 'react';
import {ImageBackground, Image, View} from 'react-native';
import {ImagesAssets} from '../../components/shared/ImageAssets';
import {getStoreData} from '../../helper/utils/AsyncStorageServices';
import {languageData} from '../../components/selectLanguage/constant/data';
import {Hindi} from '../../components/selectLanguage/constant/Hindi';
import {English} from '../../components/selectLanguage/constant/English';
import {Gujrati} from '../../components/selectLanguage/constant/Gujrati';
import {allLabels} from '../../components/selectLanguage/constant/allLanguages';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ShowData} from '../../components/selectLanguage/constant/ShowLabels';
import {newStore} from '../../../App';
export default function SplashScreen(props) {
//   console.log('languageData', languageData);

  const authUser = async () => {
    const userData = await getStoreData('userData');
    if (userData) {
      if (userData.loggedIn) {
        props.navigation.navigate('Dashboard');
      } else {
        props.navigation.navigate('Login');
      }
    } else {
      props.navigation.navigate('change_language');
    }
  };

  const insertLabels = async () => {
    let lng = await AsyncStorage.getItem('@lastlng');
    console.log('lng----', lng);
    try {
      languageData.map(lngItem => {
        // obj[lngItem.name] = allLabels[lngItem.name]
        // let obj = {}
        // allLabels[lngItem.name].map(newItem=>{
        //   obj[lngItem.name] = allLabels[lngItem.name]
        AsyncStorage.setItem(
          `${lngItem.name}`,
          JSON.stringify(allLabels[lngItem.name]),
        );
        // })
      });

      // newStore.dispatch()

      let lng = await AsyncStorage.getItem('@lastlng');
      ShowData(lng);

      // console.log("obj===============>",obj)
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      insertLabels();
      authUser();
    }, 500);
  }, []);
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={ImagesAssets.splash_background}
        resizeMode="stretch"
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{bottom: '12%'}}>
          <Image source={ImagesAssets.logo} />
        </View>
      </ImageBackground>
    </View>
  );
}
