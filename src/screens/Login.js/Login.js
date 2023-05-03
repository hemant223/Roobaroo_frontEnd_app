import React, {useEffect, useState} from 'react';
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
import {FontFamily} from '../../assets/fonts/FontFamily';
import {ImagesAssets} from '../../components/shared/ImageAssets';
import {getDataAxios, postDataAxios} from '../../fetchNodeServices';
import {storeData} from '../../helper/utils/AsyncStorageServices';

function Login(props) {
  const [isModalVisible, setModalVisible] = useState(true);
  const [mobNumber, setMobNumber] = useState('');

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
    body = {mobile: mobNumber};
    var response = await postDataAxios('users/authenticate', body);
    if (response.status) {
     storeData('userData', response.data)

      props.navigation.navigate('OtpInput');

    } else {
      alert('Enter Correct mobbile no.');
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
              width="100%"
              borderWidth={0}
              borderBottomWidth={1}
              borderRadius={5}
              onChangeText={text => {
                setMobNumber(text);
              }}
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
