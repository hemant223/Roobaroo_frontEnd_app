import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../components/shared/header/Header';
import { ImagesAssets } from '../../components/shared/ImageAssets';
import strings from '../../components/selectLanguage/constant/LocalizedStrings';
import {
  useNavigation,
} from '@react-navigation/native';
import { getStoreData } from '../../helper/utils/AsyncStorageServices';
import { ServerURL } from '../../fetchNodeServices';
import Hindi from '../../components/selectLanguage/constant/Hindi';
import Tamil from '../../components/selectLanguage/constant/Tamil';
import Bhojpuri from '../../components/selectLanguage/constant/Bhojpuri';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translation } from '../../components/selectLanguage/constant/utils';
import ChangeLanguage from '../../components/selectLanguage/ChangeLanguage';


const UserDetail = props => {
  const [usedata, setUsedata] = useState('')
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false);
  const [langModalVisible, setLangModalVisible] = useState(false);
  const [selectedLang, setSelectedLang] = useState(0);
  useEffect(() => {
    getLang();
  }, []);
  const getLang = async () => {
    console.log(await AsyncStorage.getItem('LANG'));
    setSelectedLang(parseInt(await AsyncStorage.getItem('LANG')));
  };
 
  const saveSelectedLang = async index => {
    await AsyncStorage.setItem('LANG', index + '');
  };

  return (
    <View style={{ width: '100%', height: '100%', }}>
      <View style={{
        position: 'relative', width: '100%'
        // ,backgroundColor:'red'
        , height: '29%'
      }}>
        <Header
         BackonPress={()=>{navigation.goBack()}}
        bottom={70} backarrowIcon height={'100%'} />
        <View style={{ position: 'absolute', zIndex: 1, height: '100%', borderRadius: 0, alignSelf: 'center', justifyContent: 'center' }}>
         {props?.route?.params?.userData.picture? <Image source={{uri:`${ServerURL}/images/${props?.route?.params?.userData.picture}`}} resizeMode='cover' style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center' }} />:
          <Image source={ImagesAssets.hemu} resizeMode='cover' style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center' }} />}
          <Text style={{ fontSize: 20, fontWeight: '500', color: '#fff', marginTop: 5, textAlign: 'center' }}>{props?.route?.params?.userData.firstname} {props?.route?.params?.userData.lastname}</Text>
        </View>
      </View>


      <View style={{ marginTop: 10 }}>
        <View style={{ padding: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={ImagesAssets.profile_organistation} resizeMode='contain' style={{ height: 20, width: 20 }} />            
            <Text style={{ color: '#e67e22', marginLeft: 7 }}>
          {selectedLang == 0
          ? translation[0].English
          : selectedLang == 1
          ? translation[0].Hindi
          : selectedLang == 2
          ? translation[0].Tamil
          : null}
          </Text>
          </View>
          <View>
            <Text style={{ fontWeight: 'bold' ,color:'#000'}}>{props?.route?.params?.userData.user_organization}</Text>
          </View>
        </View>


        <View style={{ padding: 15 }}>
          <View style={{ flexDirection: 'row', }}>
            <Image source={ImagesAssets.profile_mobile} resizeMode='contain' style={{ height: 20, width: 20 }} />
            <Text style={{ color: '#e67e22', marginLeft: 7 }}>
            {selectedLang == 0
          ? translation[1].English
          : selectedLang == 1
          ? translation[1].Hindi
          : selectedLang == 2
          ? translation[1].Tamil
          : null}
          </Text>
          </View>
          <View>
            <Text style={{ fontWeight: 'bold',color:'#000' }}> {props?.route?.params?.userData.mobile_number}</Text>
          </View>

        </View>
        <View style={{ padding: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={ImagesAssets.profile_email} resizeMode='contain' style={{ height: 20, width: 20 }} />

            <Text style={{ color: '#e67e22', marginLeft: 7 }}>
            {selectedLang == 0
          ? translation[2].English
          : selectedLang == 1
          ? translation[2].Hindi
          : selectedLang == 2
          ? translation[2].Tamil
          : null}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: 'bold',color:'#000' }}>{props?.route?.params?.userData.email}</Text>
          </View>
        </View>



        <View style={{ padding: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={ImagesAssets.profile_address} resizeMode='contain' style={{ height: 20, width: 20 }} />

            <Text style={{ color: '#e67e22', marginLeft: 7 }}>
            {selectedLang == 0
          ? translation[0].English
          : selectedLang == 1
          ? translation[0].Hindi
          : selectedLang == 2
          ? translation[0].Tamil
          : null}
          </Text>
          </View>
          <View >
            <Text style={{ fontWeight: 'bold',color:'#000' }}>{props?.route?.params?.userData.user_address}</Text>
          </View>

        </View>


      </View>
      {/* <TouchableOpacity
        style={styles.selectLangaugeBtn}
        onPress={() => {
          setLangModalVisible(!langModalVisible);
        }}>
        <Text>Select Language</Text>
      </TouchableOpacity> */}
      {/* <ChangeLanguage
        langModalVisible={langModalVisible}
        setLangModalVisible={setLangModalVisible}
        onSelectLang={x => {
          setSelectedLang(x);
          saveSelectedLang(x);
        }}
      /> */}
    </View>


  );

};




export default UserDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  btn: {
    backgroundColor: 'purple',
    height: 50,
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  selectLangaugeBtn: {
    width: '50%',
    height: 50,
    borderWidth: 0.2,
    borderRadius: 10,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});




