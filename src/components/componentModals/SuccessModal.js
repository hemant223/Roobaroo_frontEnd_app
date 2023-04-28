import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ModalRoot from '../shared/modals/ModalRoot';
import Video from 'react-native-video';
import {ImagesAssets} from '../shared/ImageAssets';
import FullSizeButtons from '../shared/buttons/FullSizeButtons';
import { FontFamily } from '../../assets/fonts/FontFamily';

const SuccessModal = () => {
  const [showModal, setShowModal] = useState(true);

  const SuccessModalShow = () => {
    return (
      <View style={{width:'100%'}}>
        <View style={{}}>
        <Video
          source={ImagesAssets.sucessful}
          // source={props.VideosURL}
          style={{height: 250}}
          muted={true}
          resizeMode={'contain'}
          repeat={true}
          rate={2.0}
          ignoreSilentSwitch={'obey'}
        />
       
        </View>
         <View style={{alignItems:'center'}}>
          <Text style={{color:'#000',fontFamily:FontFamily.Popinssemibold,fontSize:15}}>Your Visiting record request has been Successfully Submitted</Text>
        </View>

        <View style={{marginTop:10,alignItems:'center'}}>
          <FullSizeButtons
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
        showModal={showModal}
        setShowModal={setShowModal}
        content={<SuccessModalShow />}
      />
    </>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({});
