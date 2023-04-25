import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ModalRoot from '../shared/modals/ModalRoot';
import Video from 'react-native-video';

const SuccessModal = () => {
  const [showModal, setShowModal] = useState(true);

  const SuccessModalShow = () => {
    return (
      <View>
        <Video
          source={{uri: '../'}} // Can be a URL or a local file.
          ref={ref => {
            this.player = ref;
          }} // Store reference
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.videoError} // Callback when video cannot be loaded
          style={{height:300}}
        />
        <Text style={{color: 'red'}}>kkkkkkkkkkk</Text>
      </View>
    );
  };

  return (
    <ModalRoot
      // width={'90%'}
      // height={'30%'}
      padding={15}
      showModal={showModal}
      setShowModal={setShowModal}
      content={<SuccessModalShow />}
    />
  );
};

export default SuccessModal;

const styles = StyleSheet.create({});
