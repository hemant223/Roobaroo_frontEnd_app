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
const data = [
  {type: 'Single', id: 1, color: false},
  {type: 'Group', id: 2, color: false},
];

const physicallyData = [
  {type: 'Yes', id: 1, color: false},
  {type: 'No', id: 2, color: false},
];

const VisitingForm = () => {
  const [visitType, setVisitType] = React.useState(1);
  const [gender, setGender] = React.useState(1);
  const [physically, setPhysically] = React.useState(1);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  //   const [date1, setDate1] = useState(new Date());
  //   const [show, setShow] = useState(false);

  //   const onChange = (event, selectedDate) => {
  //     const currentDate = selectedDate || date1;
  //     setDate1(currentDate);
  //   console.log (currentDate)
  //   };
  // const showDatepicker=()=>{
  //     setShow(true)

  // }
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
            // backgroundColor:'yellowgreen'
          }}>
          <View style={{width: '59%', flexDirection: 'row',
          // backgroundColor:'red'
          }}>
            <Input
              placeholder=""
              label={'First name'}
              textLabel
              width="90%"
              height="44%"
              borderWidth={1}
              borderBottomWidth={1}
            />
            <Input
              placeholder=""
              label={'Last name'}
              textLabel
              width="90%"
              height="44%"
              borderWidth={1}
              borderBottomWidth={1}
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

        {/* 
<TouchableOpacity style={{backgroundColor:'red'}}>
<Text>lkjld</Text>
</TouchableOpacity> */}

        {/* {show&&(<View>
        <DateTimePicker
        
        
        value={date1} 
        display="default"
        onChange={onChange}
        />
      
        </View>)} */}

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
          />
        </View>
        <View
          style={{
            // backgroundColor: 'yellowgreen',
            ...styles.Resion_View_Css,
          }}>
          <Input
            placeholder=" "
            label={'Reasion to visit'}
            textLabel
            width={'100%'}
            borderWidth={1}
            borderBottomWidth={1}
            height={'90%'}
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
          }}>
          <View style={{alignSelf: 'center'}}>
            <FullSizeButtons titleColor="#fff" />
          </View>
        </View>
      </ScrollView>
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
    height: '20%',
  },
  genderCss: {
    bottom: '13%',
    padding: 3,
    margin: 5,
  },
  Date_of_Brith_Css: {
    padding: 3,
    margin: 5,
    bottom: '13%',
  },
  Disabled_View_Css: {
    padding: 3,
    margin: 5,
    bottom: '13%',
  },
  Vidhansabha_View_Css: {
    padding: 3,
    margin: 5,
    bottom: '13%',
    zIndex: 2,
  },
  Mantralya_View_Css: {
    padding: 3,
    margin: 5,
    bottom: '13%',
    zIndex: 1,
  },
  Reference_View_Css: {
    bottom: '13%',
    padding: 3,
    margin: 5,
  },
  Resion_View_Css: {
    bottom: '13%',
    padding: 3,
    margin: 5,
    height: 150,
  },
  Media_View_Css: {
    backgroundColor: '#ebebeb',
    bottom: '11%',
    width: '16%',
    borderRadius: 10,
    padding: 3,
    margin: 5,
  },
  Button_View_Css: {
    bottom: '10%',
    padding: 3,
    margin: 5,

    width: '100%',
  },
});
