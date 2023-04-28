import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import Header from '../../components/shared/header/Header';
import {ImagesAssets} from '../../components/shared/ImageAssets';
import FullSizeButtons from '../../components/shared/buttons/FullSizeButtons';
import Input from '../../components/shared/textInputs/Inputs';

const VerifyNumber = () => {
  return (
    <>
      <Header
        // add
        height={67}
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
        <ScrollView>

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
            <View style={{ alignItems: 'center',}}>
              <Input
                width="90%"
                borderWidth={0}
                borderBottomWidth={1.5}
                borderRadius={5}
                placeholder="Enter OTP sent on visitors phone"
                placeholderColor="#b6b9bf"
                textfontSize={16}
                keyboardType='numeric'
              />
            </View>
          </View>

          <View style={{alignSelf: 'center',bottom:'20%'}}>
            <FullSizeButtons titleColor="#fff" title="Verify" />
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

    height: '28%',
    width: '100%',
  },
});