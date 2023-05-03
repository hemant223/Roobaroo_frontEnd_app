import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import RadioButton from '../../components/shared/buttons/RadioButton';
import Header from '../../components/shared/header/Header';
import Input from '../../components/shared/textInputs/Inputs';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Dropdown from '../../components/shared/dropdowns/DropDownComponent';
import FullSizeButtons from '../../components/shared/buttons/FullSizeButtons';
import Attachment from '../../components/shared/attachment/Attachment';
import SuccessModal from '../../components/componentModals/SuccessModal';
import {useNavigation} from '@react-navigation/native';
import { postDataAxios } from '../../fetchNodeServices';


const data = [
  {type: 'Single', id: 1, color: false},
  {type: 'Group', id: 2, color: false},
];

const physicallyData = [
  {type: 'Yes', id: 1, color: false},
  {type: 'No', id: 2, color: false},
];

const VisitingForm = () => {
  const navigation = useNavigation();

  const [visitType, setVisitType] = React.useState(1);
  const [gender, setGender] = React.useState(1);
  const [physically, setPhysically] = React.useState(1);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = React.useState({
    firstName: '',
    LastName: '',
    Reasion: '',
    Reference: '',
  });
  const [errors, setErrors] = React.useState({});
  const [firstName, setFirstName] = React.useState('Mohit');
  const [LastName, setLastName] = React.useState('Jain');
  const [date_of_Birth,setDate_of_Birth]=React.useState('2/03/1998')
  const [vidhansabha,setVidhansabha]=React.useState('1')
  const [mantralaya,setMantralaya]=React.useState('1')
  const [reference,setReference]=React.useState('Normal')
  const [rision_to_Visit,setRision_to_Visit]=React.useState('Normal')
  const [picture,setPicture]=React.useState('')
  const [disabled,setDisabled]=React.useState(1)
  const [visitorType,setVisitorType]=React.useState(1)
  const [userid,setUserId]=React.useState(1)
  const [ministerId,setMinisterId]=React.useState(1)

  //check the validation

  const validate = async() => {
    let body = {
      firstname: firstName,
      lastname: LastName,
      date_of_Birth:date_of_Birth,
      vidhansabha:vidhansabha,
      mantralaya:mantralaya,
      reference:reference,
      rision_to_Visit:rision_to_Visit,
      physically_disabled:disabled,
      visitor_type:visitorType,
      user_id:userid,
      minister_id:ministerId

    };
// alert(JSON.stringify(body))

let response = await postDataAxios(`visitor/addVisitor`, body);

if(response.status==true){
alert('Done')
}

  
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
      alert(JSON.stringify(body));
    }
  }

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  setFirstName(text)
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  return (
    <View style={{...styles.mainView}}>
      <Header
        height={85}
        stepText
        stepBottom={12}
        centerText
        centerContent="Visiting Form"
        verifyBottom={20}
        backarrowIcon
      />
      <ScrollView>
        <View style={{...styles.visitTypeViewCss}}>
          <RadioButton
            label="Visit type"
            data={data}
            setId={setVisitType}
            getId={visitType}
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
              height={60}
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
              height={60}
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
            setId={setGender}
            getId={gender}
          />
        </View>

        <View
          style={{
            //   backgroundColor: 'yellowgreen',
            ...styles.Date_of_Brith_Css,
          }}>
          <Input label="Date of Brith" textLabel />
        </View>

        <View
          style={{
            //   backgroundColor: 'yellowgreen',
            ...styles.Disabled_View_Css,
          }}>
          <RadioButton
            label="Physicaly Disabled"
            data={physicallyData}
            getId={physically}
            setId={setPhysically}
            labelLeft={10}
          />
        </View>

        <View
          style={{
            //   backgroundColor: 'yellowgreen',
            ...styles.Vidhansabha_View_Css,
          }}>
          <Dropdown label={'Vidhansabha'} labelLeft={10} borderRadius={12} />
        </View>

        <View
          style={{
            //   backgroundColor: 'yellowgreen',
            ...styles.Mantralya_View_Css,
          }}>
          <Dropdown label={'Mantralaya'} labelLeft={10} borderRadius={12} />
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
            textfontSize={15}
            borderWidth={1}
            borderBottomWidth={1}
            onFocus={() => handleError(null, 'Reference')}
            error={errors.Reference}
            onChangeText={text => handleOnchange(text, 'Reference')}
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
          onPress={() => {
            navigation.navigate('Visits');
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
