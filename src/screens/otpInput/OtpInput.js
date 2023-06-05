import React, { useState, useRef, useEffect } from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Modal from 'react-native-modal';
import Input from '../../components/shared/textInputs/Inputs';
import FullSizeButtons from '../../components/shared/buttons/FullSizeButtons';
import { FontFamily } from '../../assets/fonts/FontFamily';
import { ImagesAssets } from '../../components/shared/ImageAssets';
import { getStoreData, storeData } from '../../helper/utils/AsyncStorageServices';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useSelector } from 'react-redux';

function OtpInput(props) {
  var language = useSelector(state => state.languageNameReducer.language_name);

  const [isModalVisible, setModalVisible] = useState(true);
  // const { otp } = props.route.params;
  const [otp, setOtp] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(30)


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  //   alert(otp);
  // const generateOtp = () => {
  //   var otpp = parseInt(Math.random() * 8999) + 10000;
  //   // alert(otpp)
  //   setOtp(otpp);
  // };
  // useEffect(() => {
  //   generateOtp();
  //   // alert(otp)
  // }, []);

  const handleSubmit = async () => {
    let userData = await getStoreData('userData');
    if (9999 == otp) {
      storeData('userData', { ...userData, loggedIn: true });
      setModalVisible(false)
      props.navigation.push('Dashboard');
    } else {
      alert('Enter correct Otp');
    }
  };


  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resendOTP = () => {
    setMinutes(0);
    setSeconds(30);
  };

  return (
    <View>
      <View style={{ height: '100%', width: '100%' }}>
        <ImageBackground
          source={ImagesAssets.login_background}
          resizeMode="cover"
          style={{ width: '100%', height: '80%' }}
        />
      </View>
      <Button title="Show modal" onPress={toggleModal} />
      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={styles.modalContainer}>
          <View style={{ padding: 5 }}>
            <Text style={styles.modalContainerTitle}>{language['Verify_OTP']}</Text>
          </View>
          <View style={{ padding: 5 }}>
            <Text style={styles.subTitle}>
            {language['We_have_sent_you_an_OTP_on_your_registered_mobile_number']}
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center'
            }}>
            <OTPInputView
              style={{ width: '80%', height: 50 }}
              pinCount={4}
              // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              onCodeChanged={(txt) => { setOtp(txt) }}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
            // onCodeFilled = {(code => {
            //     console.log(`Code is ${code}, you are good to go!`)
            // })}
            />

          </View>
          <View style={{ marginTop: 5, padding: 10, width: '100%' }}>
            <View style={{ alignSelf: 'center', width: '100%' }}>
              <FullSizeButtons
                onPress={() => {
                  handleSubmit();
                }}
                titleColor="#fff"
                title={language['Submit']}
                height={50}
                width={'100%'}
              />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15,flexDirection:'row' }}>
              <Text style={{fontFamily:FontFamily.Popinssemibold}}>Didn't received OTP ?</Text>
                {seconds > 0 || minutes > 0 ? (
                  <Text style={{marginLeft:5,color:'orange',fontSize:16,fontFamily:FontFamily.Popinssemibold}}>
                    {minutes < 10 ? `0${minutes}` : minutes}:
                    {seconds < 10 ? `0${seconds}` : seconds}
                  </Text>
                ) : (
                  <Text onPress={resendOTP} style={{color:'orange',marginLeft:10,fontSize:17,fontFamily:FontFamily.Popinssemibold}}>Resend</Text>
                )}
              
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default OtpInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1.5,
    color: '#000',
    fontSize: 20

  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
  modal: {
    width: '100%',
    marginLeft: 0,
    marginBottom: 0,
  },
  modalContainer: {
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    height: 310,
    bottom: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,
  },
  modalContainerTitle: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 15,
    color: '#071b3f',
    fontFamily: FontFamily.Popinsbold,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#858585',
  },
});
