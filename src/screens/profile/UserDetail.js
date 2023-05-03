import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../components/shared/header/Header';
import { ImagesAssets } from '../../components/shared/ImageAssets';
import {
  useNavigation,
} from '@react-navigation/native';
import { getStoreData } from '../../helper/utils/AsyncStorageServices';




const UserDetail = props => {
  const [usedata, setUsedata] = useState('')
  const navigation = useNavigation()
  // alert(JSON.stringify(props?.route?.params?.userData))
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
          <Image source={require("../../assets/images/User.png")} resizeMode='cover' style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center' }} />
          <Text style={{ fontSize: 20, fontWeight: '500', color: '#fff', marginTop: 5, textAlign: 'center' }}>{props?.route?.params?.userData.firstname} {props?.route?.params?.userData.lastname}</Text>
        </View>
      </View>


      <View style={{ marginTop: 10 }}>
        <View style={{ padding: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={ImagesAssets.profile_organistation} resizeMode='contain' style={{ height: 20, width: 20 }} />

            <Text style={{ color: '#e67e22', marginLeft: 7 }}>Organization/Party</Text>
          </View>
          <View>
            <Text style={{ fontWeight: 'bold' ,color:'#000'}}>Republic Nation Of India</Text>
          </View>
        </View>


        <View style={{ padding: 15 }}>
          <View style={{ flexDirection: 'row', }}>
            <Image source={ImagesAssets.profile_mobile} resizeMode='contain' style={{ height: 20, width: 20 }} />
            <Text style={{ color: '#e67e22', marginLeft: 7 }}>Mobile Number</Text>
          </View>
          <View>
            <Text style={{ fontWeight: 'bold',color:'#000' }}> {props?.route?.params?.userData.mobile_number}</Text>
          </View>

        </View>
        <View style={{ padding: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={ImagesAssets.profile_email} resizeMode='contain' style={{ height: 20, width: 20 }} />

            <Text style={{ color: '#e67e22', marginLeft: 7 }}>Email</Text>
          </View>
          <View>
            <Text style={{ fontWeight: 'bold',color:'#000' }}>{props?.route?.params?.userData.email}</Text>
          </View>
        </View>



        <View style={{ padding: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={ImagesAssets.profile_address} resizeMode='contain' style={{ height: 20, width: 20 }} />

            <Text style={{ color: '#e67e22', marginLeft: 7 }}>Address</Text>
          </View>
          <View >
            <Text style={{ fontWeight: 'bold',color:'#000' }}>01 Shitalnath,Vikas Gruh Rd,Paldi Ahemdabad,Gujrat 380007</Text>
          </View>

        </View>


      </View>
    </View>


  );

};




export default UserDetail;




