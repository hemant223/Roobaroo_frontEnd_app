import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import Header from '../../components/shared/header/Header';
import {ImagesAssets} from '../../components/shared/ImageAssets';
import FullSizeButtons from '../../components/shared/buttons/FullSizeButtons';
import Input from '../../components/shared/textInputs/Inputs';
import {
  useNavigation,
} from '@react-navigation/native';
const VerifyNumber = () => {
  const navigation = useNavigation()

  return (
    <>
      <Header
        // add
       
        stepText
        centerText
        // iconupdown
        stepBottom={21}
        verifyBottom={28}
        // addbottom={50}
        // DownBottom={36}
        // upBottom={70}
        backarrowIcon
      />
       

      <View style={{...styles.mainView}}>
        <ScrollView style={{marginTop:60,}}>

        <Video
          source={ImagesAssets.OTP_Gif}
          // source={props.VideosURL}
          style={{height: 400}}
          muted={true}
          resizeMode={'contain'}
          repeat={true}
          rate={2.0}
          ignoreSilentSwitch={'obey'}
          />
          </ScrollView>

          <View
            style={{
              ...styles.InputView,

            }}>
            <View style={{ alignItems: 'center',marginTop:30}}>
              <Input
                width="90%"
                borderWidth={0}
                borderBottomWidth={1.5}
                borderRadius={5}
                placeholder="Enter Visitors mobile"
                placeholderColor="#b6b9bf"
                textfontSize={16}
                keyboardType='numeric'
              />
            </View>
          </View>

          <View style={{alignSelf: 'center',bottom:'27%',marginTop:30}}>
            <FullSizeButtons onPress={()=>{navigation.navigate('VerifyOtp')}} titleColor="#fff" title="Verify" />
          </View>

      </View>
        
    </>
  );
};

export default VerifyNumber;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  InputView: {
    alignItems: 'center',

    height: '35%',
    width: '100%',
  },
});
