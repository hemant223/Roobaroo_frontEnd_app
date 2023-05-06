import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import RadioButton from '../../components/shared/buttons/RadioButton';
import Header from '../../components/shared/header/Header';
import Input from '../../components/shared/textInputs/Inputs';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Dropdown from '../../components/shared/dropdowns/DropDownComponent';
import FullSizeButtons from '../../components/shared/buttons/FullSizeButtons';
import Attachment from '../../components/shared/attachment/Attachment';
import {getStoreData} from '../../helper/utils/AsyncStorageServices';
import {useNavigation} from '@react-navigation/native';
import {
  getDataAxios,
  postDataAxios,
  putDataAxios,
} from '../../fetchNodeServices';
import moment from 'moment';
import SuccessModal from '../../components/componentModals/SuccessModal';
import CenterHeader from '../../components/shared/header/CenterHeader';

const data = [
  {type: 'Single', id: 1, color: false},
  {type: 'Group', id: 2, color: false},
];

const physicallyData = [
  {type: 'Yes', id: 1, color: false},
  {type: 'No', id: 2, color: false},
];
const genderData = [
  {type: 'Male', id: 1, color: false},
  {type: 'Female', id: 2, color: false},
  {type: 'Others', id: 2, color: false},
];

const ViewVisit = props => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  //   const  getData = props.route.params

  const [visitortype, setVisitorType] = React.useState(
    props?.route?.params?.visitordata?.visitor_type,
  );
  const [gender, setGender] = React.useState(
    props?.route?.params?.visitordata?.gender,
  );
  const [physically, setPhysically] = React.useState(
    props?.route?.params?.visitordata?.physically_disabled,
  );
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
  // alert(JSON.stringify(props.route.params.visitordata));
  const handleSubmit = async () => {
    let body = {
      firstname: props.route.params.visitordata.firstname,
      lastname: props.route.params.visitordata.lastname,
      mobile_number: props.route.params.visitordata.mobile_number,
      gender: props?.route.params.visitordata.gender,
      physically_disabled: props.route.params.visitordata.physically_disabled,
      date_of_birth: props.route.params.visitordata.date_of_birth,
      visitor_type: props.route.params.visitordata.visitor_type,
      vidhansabha_id: props.route.params.visitordata.vidhansabha_id,
      mantralya_id: props.route.params.visitordata.mantralya_id,
      refernce: props.route.params.visitordata.refernce,
      reason_to_visit: props.route.params.visitordata.reason_to_visit,
      // picture: '',
      user_id: props.route.params.visitordata.user_id,
      created_at: props.route.params.visitordata.created_at,
      updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
      minister_id: props.route.params.visitordata.minister_id,
      group_member: 'reaju hemu',
      visitor_status: 'completed',
    };

    // Engade Time//
    // let startTime = moment().format('8:30:20');
    // const handlClick = () => {
    //   var endTime = moment().format('hh:mm:ss'); // alert(endTime)
    //   let aa = moment
    //     .utc(moment(endTime, ' hh:mm:ss').diff(moment(startTime, ' hh:mm:ss')))
    //     .format('hh:mm:ss');
    //   alert(aa);
    // };

    // console.log((body));
    let response = await postDataAxios(
      `visitors/updateVisitor/${props.route.params.visitordata.id}`,
      body,
    );
    if (response.status) {
      setShowModal(true);
    }
  };
  return (
    <View style={{...styles.mainView}}>
      {props.route.params.visitordata.visitor_status == 'ongoing' ? (
        <CenterHeader
          centerText
          stepContent="Step 02"
          stepText
          centerContent="Visiting Form"
          onPressBackArrow={() => {
            navigation.push('Dashboard');
          }}
        />
      ) : (
        <CenterHeader
          centerText
          stepContent="Step 02"
          stepText
          centerContent="Visiting Form"
          onPressBackArrow={() => {
            navigation.push('Dashboard');
          }}
        />
      )}
      <ScrollView>
        <View style={{...styles.visitTypeViewCss}}>
          <RadioButton
            label="Visit type"
            data={data}
            setType={setVisitorType}
            getType={visitortype}
            labelLeft={10}
          />
        </View>
        <View
          style={{
            ...styles.NameViewCss,
            // backgroundColor:'yellowgreen'
          }}>
          <View style={{width: '59%', flexDirection: 'row'}}>
            <Input
              value={props.route.params.visitordata.firstname}
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
              value={props.route.params.visitordata.lastname}
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
            data={genderData}
            setType={setGender}
            getType={gender}
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
            setType={setPhysically}
            getType={physically}
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
            value={props.route.params.visitordata.refernce}
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
            value={props.route.params.visitordata.reason_to_visit}
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
          {props.route.params.visitordata.visitor_status == 'ongoing' && (
            <View style={{alignSelf: 'center'}}>
              <FullSizeButtons
                onPress={handleSubmit}
                titleColor="#fff"
                backgroundColor={'#18ae3b'}
                title="Mark as completed"
                rightIcon={'checkbox-marked-circle'}
                rightsize={16}
              />
            </View>
          )}
        </View>
      </ScrollView>
      {
        <SuccessModal
          title="Your Visiting record request has been Successfully Updated"
          onPress={() => {
            navigation.push('Visits', {complete: 'update'});
          }}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      }
    </View>
  );
};

export default ViewVisit;

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
    bottom: '11%',
    padding: 3,
    margin: 5,

    width: '100%',
  },
});
