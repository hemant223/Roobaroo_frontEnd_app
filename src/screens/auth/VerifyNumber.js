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
import {getDataAxios, postDataAxios} from '../../fetchNodeServices';
const VerifyNumber = () => {
  const navigation = useNavigation();
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

  // const [getVisitorData, setVisitorData] = useState([]);
  // const [getUserData, setUserDataByAsync] = useState([]);

  // const getUserDataByAsyncStorage = async () => {
  //   const userData = await getStoreData('userData');
  //   setUserDataByAsync(userData);
  // };
  // const fetchAllVisitorData = async () => {
  //   var data = await getDataAxios(
  //     `visitors/displayVisitors/${getUserData?.minister_id}`,
  //   );
  //   if (data.status) {
  //     setVisitorData(data.result);
  //   } else {
  //     alert('data fetch error');
  //   }

  // };
  // useEffect(() => {
  //   getUserDataByAsyncStorage();
  //   fetchAllVisitorData();
  // }, []);
  //  alert(JSON.stringify(getVisitorData))

  const handleMobileNumber = async () => {
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
      // navigation.navigate('VerifyOtp', {mobileNo: inputs.mobileNumber});

      // var visitorMob = await getStoreData('VisitorsMobileNo');
      // const userData = await getStoreData('userData');
      var body = {mobile_number: inputs.mobileNumber};

      // let response = await postDataAxios(`visitors/addVisitor`,body)
      // alert(response.status)
      // if (response.status == false) {
      //   handleError('Mobile no already registerrrrr', 'mobileNumber');
      // } else {
      navigation.navigate('VerifyOtp', {mobileNo: inputs.mobileNumber});
      // }
      // //   // alert('hh'):
      //  }
      // alert(JSON.stringify(data.result[0]))
      // {
      // var rr=  data.result.map(item => {
      //
      //     return inputs.mobileNumber == item.mobile_number;
      //  matchNo

      // : // storeData('VisitorsMobileNo', inputs.mobileNumber);
      //   navigation.push('VerifyOtp', {mobileNo: inputs.mobileNumber})

      //   });
      // }
      // alert(rr)
      // alert(matchNo)
    }
  };
  return (
    <>
      {/* <Header
        // add
       
        stepText
        centerText
        // iconupdown
        stepBottom={21}
        verifyBottom={28}
        // addbottom={50}
        // DownBottom={36}
        // upBottom={70}
        backarrowIcon
      /> */}
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
              onFocus={() => handleError(null, 'mobileNumber')}
              error={errors.mobileNumber}
              onChangeText={text => handleOnchange(text, 'mobileNumber')}
              width="90%"
              borderWidth={0}
              maxLength={10}
              borderBottomWidth={1.5}
              borderRadius={5}
              placeholder="Enter Visitors mobile"
              placeholderColor="#b6b9bf"
              textfontSize={13}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={{alignSelf: 'center', height: '24%', bottom: 14}}>
          <FullSizeButtons
            onPress={() => {
              // navigation.navigate('VerifyOtp');
              handleMobileNumber();
            }}
            titleColor="#fff"
            title="Verify"
          />
        </View>
      </View>
    </>
  );
};

export default VerifyNumber;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  InputView: {
    alignItems: 'center',

    // height: 'auto',
    width: '100%',
  },
});
