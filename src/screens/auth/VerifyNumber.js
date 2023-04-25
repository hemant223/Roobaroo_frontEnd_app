import {StyleSheet, Text, View} from 'react-native';
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
        stepText
        centerText
        // iconupdown
        stepBottom={21}
        verifyBottom={20}
        // addbottom={50}
        // DownBottom={36}
        // upBottom={70}
      />
      <View style={{backgroundColor: '#fff', width: '100%', height: '100%'}}>
        <Video
          source={ImagesAssets.OTP_Gif}
          // source={props.VideosURL}
          style={{height: 410}}
          muted={true}
          resizeMode={'contain'}
          repeat={true}
          rate={2.0}
          ignoreSilentSwitch={'obey'}
        />

        <View style={{alignSelf: 'center', alignItems: 'center'}}>
          <Input
            width="96%"
            borderWidth={0}
            borderBottomWidth={1}
            borderRadius={5}
          />
        </View>
        {/* <View>
          <FullSizeButtons />
        </View> */}
      </View>
    </>
  );
};

export default VerifyNumber;

const styles = StyleSheet.create({});
