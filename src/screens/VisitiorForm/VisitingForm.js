import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import RadioButton from '../../components/shared/buttons/RadioButton';
import Header from '../../components/shared/header/Header';
import Input from '../../components/shared/textInputs/Inputs';

import Dropdown from '../../components/shared/dropdowns/DropDownComponent';
import FullSizeButtons from '../../components/shared/buttons/FullSizeButtons';
import Attachment from '../../components/shared/attachment/Attachment';
import SuccessModal from '../../components/componentModals/SuccessModal';
import {useNavigation} from '@react-navigation/native';
import {postDataAxios} from '../../fetchNodeServices';
import {getStoreData, storeData} from '../../helper/utils/AsyncStorageServices';
import moment from 'moment';
import CenterHeader from '../../components/shared/header/CenterHeader';
import {Colors} from '../../assets/config/Colors';
import DateTimePicker from '../../components/shared/date/DateTimePicker';

options = [
  {label: 'Gwalior VidhanSabha', value: 1},
  {label: 'East Gwalior ', value: 2},
  {label: 'Morena ', value: 3},
];
options2 = [
  {label: 'Shiksha Mantri', value: 1},
  {label: 'Urja Mantri ', value: 2},
  {label: 'Krshi Mantri ', value: 3},
];

const data = [
  {type: 'Single', id: 1, color: false},
  {type: 'Group', id: 2, color: false},
];

const physicallyData = [
  {type: 'Yes', id: 1, color: false},
  {type: 'No', id: 2, color: false},
];

const genderdata = [
  {type: 'Male', id: 1, color: false},
  {type: 'Female', id: 2, color: false},
  {type: 'Others', id: 3, color: false},
];
const VisitingForm = props => {
  const navigation = useNavigation();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = React.useState({
    firstName: '',
    LastName: '',
    Reasion: '',
    Reference: '',
  });
  const [errors, setErrors] = React.useState({});

  const [date_of_Birth, setDate_of_Birth] = React.useState('');
  const [vidhansabha, setVidhansabha] = React.useState('');
  const [mantralaya, setMantralaya] = React.useState('');
  const [dob, setDob] = useState(moment().format('YYYY-MM-DD'));
  const [picture, setPicture] = React.useState('');
  const [disabled, setDisabled] = React.useState(1);

  // const [userid, setUserId] = React.useState(1);
  const [visitorname, setVisitorName] = useState('Single');
  const [gender, setGender] = React.useState('Male');
  const [physically_disabled_Name, setPhysically_disabled_Name] =
    useState('Yes');

  //check the validation
  const [getUserData, setUserDataByAsync] = useState([]);

  const getUserDataByAsyncStorage = async () => {
    const userData = await getStoreData('userData');
    setUserDataByAsync(userData);
  };
  useEffect(() => {
    getUserDataByAsyncStorage();
  }, []);
  // alert(JSON.stringify(getUserData));

  // alert(dob)
  const validate = async () => {
    // const visitorMob = await getStoreData('VisitorsMobileNo');

    // // alert(response.status)

    let isValid = true;
    if (!inputs.firstName) {
      handleError('Please input First Name ', 'firstName');
      isValid = false;
    }
    if (!inputs.LastName) {
      handleError('Please input Last Name', 'LastName');
      isValid = false;
    }
    if (!inputs.Reasion) {
      handleError('Please input Resasion to Visit', 'Reasion');
      isValid = false;
    }
    if (!inputs.Reference) {
      handleError('Please input Reference', 'Reference');
      isValid = false;
    }
    if (isValid) {
      let body = {
        firstname: inputs.firstName,
        lastname: inputs.LastName,
        mobile_number: props?.route?.params?.mobileNo,
        gender: gender,
        physically_disabled: physically_disabled_Name,
        date_of_birth: dob,
        visitor_type: visitorname,
        vidhansabha_id: vidhansabha,
        mantralya_id: mantralaya,
        refernce: inputs.Reference,
        reason_to_visit: inputs.Reasion,
        picture: '',
        user_id: getUserData.id,
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        minister_id: getUserData.MinisterId,
        group_member: 'hemu raju',
        visitor_status: 'ongoing',
      };

      let response = await postDataAxios(`visitors/addVisitor`, body);
// alert(response.status)
      if (response.status) {
        setShowModal(true);
      } else {
        alert('Error in data Submissin');
      }

      // const oldDataVisitor = await getStoreData('VisitorData');
      // if(!oldDataVisitor){
      //   storeData('VisitorData',[body]);
      // }
      // else{
      //   oldDataVisitor.push(body)
      //   await storeData('VisitorData', oldDataVisitor);
      // }
      // alert(JSON.stringify(body));
    }
  };

  const visitor = async () => {
    var visitors = await getStoreData('VisitorData');
    // console.log('fffffffff', JSON.stringify(visitors));
  };

  useEffect(() => {
    visitor();
  }, []);

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  return (
    <View style={{...styles.mainView}}>
      <CenterHeader
        centerText
        stepContent="Step 02"
        stepText
        centerContent="Visiting Form"
        onPressBackArrow={() => {
          navigation.push('Dashboard');
        }}
      />
      <ScrollView>
        <View style={{...styles.visitTypeViewCss}}>
          <RadioButton
            label="Visit type"
            data={data}
            setType={setVisitorName}
            getType={visitorname}
            labelLeft={10}
          />
        </View>

        <View
          style={{
            ...styles.NameViewCss,
            // width: '100%',
            flexDirection: 'row',
            // backgroundColor:'red',
            alignSelf: 'center',
          }}>
          <View style={{width: '49%', marginRight: 5}}>
            <Input
              placeholder=""
              label={'First name'}
              textLabel
              width="100%"
              height={45}
              borderWidth={1}
              borderBottomWidth={1}
              onFocus={() => handleError(null, 'firstName')}
              error={errors.firstName}
              onChangeText={text => handleOnchange(text, 'firstName')}
              // value={firstName}
            />
          </View>
          <View style={{width: '49%', marginRight: 5}}>
            <Input
              placeholder=""
              label={'Last name'}
              textLabel
              width="100%"
              height={45}
              borderWidth={1}
              borderBottomWidth={1}
              onFocus={() => handleError(null, 'LastName')}
              error={errors.LastName}
              onChangeText={text => handleOnchange(text, 'LastName')}
            />
          </View>
        </View>

        <View
          style={{
            // backgroundColor: 'yellowgreen',
            ...styles.genderCss,
          }}>
          <RadioButton
            labelLeft={10}
            label="Gender"
            data={genderdata}
            setType={setGender}
            getType={gender}
          />
        </View>

        <View
          style={{
            //   backgroundColor: 'yellowgreen',
            ...styles.Date_of_Brith_Css,
          }}>
          <DateTimePicker
            borderRadius={30}
            backgroundColor={Colors.Textinputbg}
            height={40}
            setDate={setDob}
            label="Date of Brith"
          />
        </View>

        <View
          style={{
            //   backgroundColor: 'yellowgreen',
            ...styles.Disabled_View_Css,
          }}>
          <RadioButton
            label="Physicaly Disabled"
            data={physicallyData}
            getType={physically_disabled_Name}
            setType={setPhysically_disabled_Name}
            labelLeft={10}
          />
        </View>

        <View
          style={{
            //   backgroundColor: 'yellowgreen',
            ...styles.Vidhansabha_View_Css,
          }}>
          <Dropdown
            label={'Vidhansabha'}
            labelLeft={10}
            borderRadius={12}
            options={options}
            onSelect={setVidhansabha}
          />
        </View>

        <View
          style={{
            //   backgroundColor: 'yellowgreen',
            ...styles.Mantralya_View_Css,
          }}>
          <Dropdown
            label={'Mantralaya'}
            labelLeft={10}
            borderRadius={12}
            onSelect={setMantralaya}
            options={options2}
          />
        </View>

        <View
          style={{
            // backgroundColor: 'yellowgreen',
            ...styles.Reference_View_Css,
          }}>
          <Input
            placeholder="Enter reference name if any "
            label={'Reference'}
            textLabel
            width={'100%'}
            textfontSize={14}
            borderWidth={1}
            borderBottomWidth={1}
            onFocus={() => handleError(null, 'Reference')}
            error={errors.Reference}
            onChangeText={text => {
              handleOnchange(text, 'Reference');
            }}
          />
        </View>

        <View
          style={{
            // backgroundColor: 'yellowgreen',
            ...styles.Resion_View_Css,
            // height: '19%',
          }}>
          <Input
            placeholder=" "
            label={'Reasion to visit'}
            textLabel
            width={'100%'}
            borderWidth={1}
            borderBottomWidth={1}
            height={100}
            onFocus={() => handleError(null, 'Reasion')}
            error={errors.Reasion}
            onChangeText={text => handleOnchange(text, 'Reasion')}
            textfontSize={14}
          />
        </View>

        <View
          style={{
            ...styles.Media_View_Css,
          }}>
          <Attachment />
        </View>

        <View
          style={{
            // backgroundColor: 'yellowgreen',
            ...styles.Button_View_Css,
            alignItems: 'center',
            // bottom:19
          }}>
          <FullSizeButtons
            /* onPress={()=>{setShowModal(true)}} */ onPress={validate}
            titleColor="#fff"
          />
        </View>
      </ScrollView>
      {
        <SuccessModal
          title="Your Visiting record request has been Successfully Submitted"
          onPress={() => {
            navigation.push('Visits');
          }}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      }
    </View>
  );
};

export default VisitingForm;

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    backgroundColor: '#fff',
  },

  visitTypeViewCss: {
    padding: 3,
    margin: 4,
  },
  NameViewCss: {
    padding: 3,
    margin: 5,
  },
  genderCss: {
    padding: 3,
    margin: 5,
  },
  Date_of_Brith_Css: {
    padding: 3,
    margin: 5,
  },
  Disabled_View_Css: {
    padding: 3,
    margin: 5,
  },
  Vidhansabha_View_Css: {
    padding: 3,
    margin: 5,

    zIndex: 2,
  },
  Mantralya_View_Css: {
    padding: 3,
    margin: 5,

    zIndex: 1,
  },
  Reference_View_Css: {
    padding: 3,
    margin: 5,
  },
  Resion_View_Css: {
    padding: 3,
    margin: 5,
  },
  Media_View_Css: {
    backgroundColor: '#ebebeb',

    width: '16%',
    borderRadius: 10,
    padding: 3,
    margin: 5,

    // backgroundColor: 'red',
  },
  Button_View_Css: {
    padding: 3,
    margin: 5,

    width: '100%',
  },
});
