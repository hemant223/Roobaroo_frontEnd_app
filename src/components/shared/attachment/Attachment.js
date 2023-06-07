import {View, Text, TouchableOpacity, PermissionsAndroid} from 'react-native';
import React, { useState } from 'react';
import ImgToBase64 from 'react-native-image-base64';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FA from 'react-native-vector-icons/FontAwesome';
import {FontFamily} from '../../../assets/fonts/FontFamily';
import { useSelector } from 'react-redux';
export default function Attachment(props) {
  var language = useSelector(state => state.languageNameReducer.language_name);

  // console.log('props---------->>>>>>>9', props)
  const [filePath, setFilePath] = React.useState('');
//   const[image,setImage]=React.useState('')
// console.log('image',image)
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.error('Error In Catch-->>',err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        // alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async (type, mediaby) => {
    // console.log('TYPE AND MUDEIA', type, mediaby);
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
      selectionLimit: 3,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    // console.log(
    //   'isCameraPermitted---->>>>',
    //   isCameraPermitted + '' + isStoragePermitted,
    // );
    if (isCameraPermitted && isStoragePermitted) {
      mediaby(options, response => {
        // console.log('Response = ', response);
        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        
      //  console.log('base64 -> ', response.assets[0].base64);
      //   console.log('uri -> ', response.assets[0].uri);
      //   console.log('totoal medias', response.assets);
      //   console.log('width -> ', response.assets[0].width);
      //   console.log('height -> ', response.assets[0].height);
      //   console.log('fileSize -> ', response.assets[0].fileSize);
      //   console.log('type -> ', response.assets[0].type);
      //   console.log('fileName -> ', response.assets[0].fileName);
      //   console.log('response.assets[0]-> ', response.assets);
        setFilePath(response);
        response.assets.map(i => {
          ImgToBase64.getBase64String(`${i.uri}`).then(base64String => {
            props.setImage(base64String)
            // console.log('Base 64 String ....', base64String);
            let body = {
              imgurl: base64String,
              id: i.fileName,
            };
            // setRefresh(!refresh);
            // setTemparr(temparr + response.assets.length);
          });
        });
      });
    }
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Text
          style={{
            color: '#aeaeae',
            fontFamily: FontFamily.Popinssemibold,
            fontSize: 15,
            left: props.left,
            right: props.right,
          }}>
          {language['Media']}
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => captureImage('photo', launchCamera)}>
        <View>
          <FA name="camera" size={25} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
Attachment.defaultProps = {
  left: 0,
  top: 10,
  margin: 0,
  right: 0,
};
