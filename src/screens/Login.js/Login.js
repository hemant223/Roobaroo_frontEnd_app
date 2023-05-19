import React, {useEffect, useState} from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Keyboard,
} from 'react-native';
import Modal from 'react-native-modal';
import Input from '../../components/shared/textInputs/Inputs';
import FullSizeButtons from '../../components/shared/buttons/FullSizeButtons';
import {FontFamily} from '../../assets/fonts/FontFamily';
import {ImagesAssets} from '../../components/shared/ImageAssets';
import {getDataAxios, postDataAxios, postDataAxiosWithoutToken} from '../../fetchNodeServices';
import {storeData} from '../../helper/utils/AsyncStorageServices';
import {useDispatch} from 'react-redux';
import { userDataFun } from '../../helper/utils/redux/slices/userDataSlice';

function Login(props) {
  var dispatch = useDispatch();

  const [isModalVisible, setModalVisible] = useState(true);
  const [inputs, setInputs] = React.useState({
    mobileNumber: '',
  });
  const [errors, setErrors] = React.useState({});
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  // alert(opt)
  //   const generateOtp = () => {
  //     var otpp = parseInt(Math.random() * 8999) + 1000;
  //   alert(otpp);
  // setOpt(otpp);
  //   };
  //   useEffect(() => {
  //     generateOtp;
  //   }, []);

  const handleSubmit = async () => {
    let isValid = true;
    Keyboard.dismiss();
    if (!inputs.mobileNumber) {
      handleError('Please Input Mobile No. ', 'mobileNumber');
      isValid = false;
    }
    if (!inputs.mobileNumber.match(/\d{10}/)) {
      handleError('Please Input  Mobile No.', 'mobileNumber');
      isValid = false;
    }

    if (isValid) {
      var body = {mobile: inputs.mobileNumber};
      // var response = await postDataAxiosWithoutToken('users/authenticate', body);
      var response = await postDataAxios('users/authenticate', body);
    // console.log('responseee>>>>',response);
      if (response.status) {
        storeData('userData', response.data);
        storeData('token', response.token);
        dispatch(userDataFun(response.data));
        setModalVisible(false)
        props.navigation.navigate('OtpInput');
      } else {
        handleError('This User is not exists', 'mobileNumber');
      }
    }
  };
  // alert(mobNumber)
  return (
    <View>
      <View style={{height: '100%', width: '100%'}}>
        <ImageBackground
          source={ImagesAssets.login_background}
          resizeMode="cover"
          style={{width: '100%', height: '80%'}}
        />
      </View>
      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={styles.modalContainer}>
          <View style={{padding: 5}}>
            <Text style={styles.modalContainerTitle}>LOGIN</Text>
          </View>
          <View style={{padding: 5}}>
            <Text style={styles.subTitle}>
              Please enter your registered mobile number to login
            </Text>
          </View>
          <View style={{padding: 10}}>
            <Input
              maxLength={10}
              width="100%"
              borderWidth={0}
              borderBottomWidth={1}
              borderRadius={5}
              onFocus={() => handleError(null, 'mobileNumber')}
              error={errors.mobileNumber}
              onChangeText={text => handleOnchange(text, 'mobileNumber')}
              placeholder="Mobile number"
              placeholderColor="grey"
              keyboardType="numeric"
            />
          </View>
          <View style={{marginTop: 5, padding: 10, width: '100%'}}>
            <View style={{alignSelf: 'center', width: '100%'}}>
              <FullSizeButtons
                onPress={() => {
                  handleSubmit();
                }}
                titleColor="#fff"
                title="Send OTP"
                height={50}
                width={'100%'}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {},
  modal: {
    width: '100%',
    marginLeft: 0,
    marginBottom: 0,
  },
  modalContainer: {
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    height: 300,
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
    fontSize: 18,
    fontWeight: '500',
    color: '#858585',
  },
});
