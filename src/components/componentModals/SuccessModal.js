import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ModalRoot from '../shared/modals/ModalRoot';
import Video from 'react-native-video';
import {ImagesAssets} from '../shared/ImageAssets';
import FullSizeButtons from '../shared/buttons/FullSizeButtons';
import { FontFamily } from '../../assets/fonts/FontFamily';

const SuccessModal = (props) => {

  const SuccessModalShow = ({onpress}) => {
    return (
      <View style={{width:'100%'}}>
        {/* <View style={{}}> */}
        <Video

source={ImagesAssets.Product}
          // source={props.VideosURL}
          style={{ position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          justifyContent: 'center',height:240,width:250}}
          // muted={true}
          // resizeMode={'contain'}
          // repeat={true}
          // rate={2.0}
          // ignoreSilentSwitch={'obey'}
        />
       
        {/* </View> */}
         <View style={{alignItems:'center'}}>
          <Text style={{color:'#000',fontFamily:FontFamily.Popinssemibold,fontSize:15}}>Your Visiting record request has been Successfully Submitted</Text>
        </View>

        <View style={{marginTop:10,alignItems:'center'}}>
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
        content={<SuccessModalShow onpress={props.onPress} />}
      />
    </>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({});
