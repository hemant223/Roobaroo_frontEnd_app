import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';
import Header from '../../components/shared/header/Header';
import {ImagesAssets} from '../../components/shared/ImageAssets';
import FullSizeButtons from '../../components/shared/buttons/FullSizeButtons';
import Input from '../../components/shared/textInputs/Inputs';
import {useNavigation} from '@react-navigation/native';
import CenterHeader from '../../components/shared/header/CenterHeader';
import {getStoreData, storeData} from '../../helper/utils/AsyncStorageServices';
const VerifyOtp = props => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');
  const [inputs, setInputs] = React.useState({
    otp: '',
  });
  const [errors, setErrors] = React.useState({});
  // alert(JSON.stringify(props?.route?.params?.mobileNo));
  const generateOtp = () => {
    var otpp = parseInt(Math.random() * 8999) + 10000;
  
    setOtp(otpp);
  };
  useEffect(() => {
    generateOtp();
    // alert(otp);
  }, []);
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  const handleSubmit = () => {
    let isValid = true;
    Keyboard.dismiss();
    if (!inputs.otp) {
      handleError('Please Input Otp', 'otp');
      isValid = false;
    }

    if (isValid) {
      // alert(inputs.otp)
      if (inputs.otp == 99999) {
        // storeData('VisitorsMobileNo',props?.route?.params?.mobileNo)
        navigation.navigate('VisitingForm',{mobileNo:props?.route?.params?.mobileNo});
      } else {
        handleError('Please Input Correct Otp', 'otp');
      }
    }
  };

  return (
    <>
      <CenterHeader
        centerText
        stepText
        onPressBackArrow={() => {
          navigation.goBack();
        }}
      />

      <View style={{...styles.mainView}}>
        <ScrollView style={{}}>
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
       <View style={{alignItems: 'center', height: '10%'}}>
            <Input
              onFocus={() => handleError(null, 'otp')}
              error={errors.otp}
              onChangeText={text => handleOnchange(text, 'otp')}
              width="90%"
              borderWidth={0}
              borderBottomWidth={1.5}
              borderRadius={5}
              placeholder="Enter OTP sent on visitors phone"
              placeholderColor="#b6b9bf"
              textfontSize={13}
              keyboardType="numeric"
              maxLength={5}
            />
          </View>
        </View>

        <View style={{alignSelf: 'center', height: '24%', bottom: 0}}>
          <FullSizeButtons
            onPress={() => {
              handleSubmit();
            }}
            titleColor="#fff"
            title="Verify"
          />
        </View>
      </View>
    </>
  );
};

export default VerifyOtp;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#fff',
    width: '100%',
    height: '94%',
  },
  InputView: {
    alignItems: 'center',

    // height: 'auto',
    width: '100%',
  },
});
