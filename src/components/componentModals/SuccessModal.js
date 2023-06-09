import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ModalRoot from '../shared/modals/ModalRoot';
import Video from 'react-native-video';
import {ImagesAssets} from '../shared/ImageAssets';
import FullSizeButtons from '../shared/buttons/FullSizeButtons';
import {FontFamily} from '../../assets/fonts/FontFamily';

const SuccessModal = props => {
  const [engadeTime,setEngadeTime]=useState()
 
  // alert (engadeTime)
  const SuccessModalShow = ({onpress}) => {
    
    return (
      <View style={{width: '100%'}}>
        {/* <View style={{}}> */}
        <Video
          source={ImagesAssets.Sucessful}
          // source={props.VideosURL}
          style={{height:250}}
          muted={true}
          resizeMode={'contain'}
          repeat={true}
          rate={2.0}
          ignoreSilentSwitch={'obey'}
        />

        {/* </View> */}
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: '#000',
              fontFamily: FontFamily.Popinssemibold,
              fontSize: 15,
            }}>
            {props.title}
          </Text>
        </View>

        <View style={{marginTop: 10, alignItems: 'center'}}>
          <FullSizeButtons
            onPress={onpress}
            titleColor={'#fff'}
            title={'Thank You'}
            width={100}
            
          />
        </View>
      </View>
    );
  };

  return (
    <>
      {/* <Video
          source={require('../../assets/images/otpvideo/otpvideo.mp4')}
          // source={props.VideosURL}
          style={{height: 200,width:200}}
          muted={true}
          resizeMode={'center'}
          repeat={true}
          rate={2.0}
          ignoreSilentSwitch={'obey'}
        /> */}
      <ModalRoot
        // width={'90%'}
        // height={'30%'}
        padding={15}
        showModal={props.showModal}
        setShowModal={props.setShowModal}
        content={<SuccessModalShow onpress={props.onPress}
         />}
      />
    </>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({});
