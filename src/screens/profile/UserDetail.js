import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../components/shared/header/Header';
import { ImagesAssets } from '../../components/shared/ImageAssets';


const UserDetail = props => {

  return (

    <View style={{ width: '100%', height: '100%', }}>
      <View style={{
        position: 'relative', width: '100%'
        // ,backgroundColor:'red'
        , height: '29%'
      }}>
        <Header backarrowIcon height={'100%'} />
        <View style={{ position: 'absolute', zIndex: 1, height: '100%', borderRadius: 0, alignSelf: 'center', justifyContent: 'center' }}>
          <Image source={require("../../assets/images/User.png")} resizeMode='cover' style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center' }} />
          <Text style={{ fontSize: 20, fontWeight: '500', color: '#fff', marginTop: 5, textAlign: 'center' }}>Ankit Mundra</Text>
        </View>
      </View>


      <View style={{ marginTop: 10 }}>
        <View style={{ padding: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={ImagesAssets.profile_organistation} resizeMode='contain' style={{ height: 20, width: 20 }} />

            <Text style={{ color: '#e67e22', marginLeft: 7 }}>Organization/Party</Text>
          </View>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Republic Nation Of India</Text>
          </View>
        </View>


        <View style={{ padding: 15 }}>
          <View style={{ flexDirection: 'row', }}>
            <Image source={ImagesAssets.profile_mobile} resizeMode='contain' style={{ height: 20, width: 20 }} />
            <Text style={{ color: '#e67e22', marginLeft: 7 }}>Mobile Number</Text>
          </View>
          <View>
            <Text style={{ fontWeight: 'bold' }}>9638693123</Text>
          </View>

        </View>
        <View style={{ padding: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={ImagesAssets.profile_email} resizeMode='contain' style={{ height: 20, width: 20 }} />

            <Text style={{ color: '#e67e22', marginLeft: 7 }}>Email</Text>
          </View>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Ankit@plus91labs.com</Text>
          </View>
        </View>



        <View style={{ padding: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={ImagesAssets.profile_address} resizeMode='contain' style={{ height: 20, width: 20 }} />

            <Text style={{ color: '#e67e22', marginLeft: 7 }}>Address</Text>
          </View>
          <View >
            <Text style={{ fontWeight: 'bold', }}>01 Shitalnath,Vikas Gruh Rd,Paldi Ahemdabad,Gujrat 380007</Text>
          </View>

        </View>


      </View>
    </View>


  );

};




export default UserDetail;



