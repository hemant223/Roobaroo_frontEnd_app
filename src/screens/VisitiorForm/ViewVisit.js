import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  Image,
  BackHandler,
  Alert,
  TextArea,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';

import RadioButton from '../../components/shared/buttons/RadioButton';
import Header from '../../components/shared/header/Header';
import Input from '../../components/shared/textInputs/Inputs';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Dropdown from '../../components/shared/dropdowns/DropDownComponent';
import FullSizeButtons from '../../components/shared/buttons/FullSizeButtons';
import Attachment from '../../components/shared/attachment/Attachment';
import {getStoreData} from '../../helper/utils/AsyncStorageServices';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  getDataAxios,
  postDataAxios,
  putDataAxios,
} from '../../fetchNodeServices';
import moment from 'moment';
import SuccessModal from '../../components/componentModals/SuccessModal';
import CenterHeader from '../../components/shared/header/CenterHeader';

import {FontFamily} from '../../assets/fonts/FontFamily';
import {TextInput} from 'react-native-gesture-handler';

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
  {type: 'Other', id: 2, color: false},
];

const ViewVisit = props => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [showengageTime, showsetEngagetime] = useState('');

  const [visitortype, setVisitorType] = React.useState(
    props?.route?.params?.visitordata?.visitor_type,
  );
  const [gender, setGender] = React.useState(
    props?.route?.params?.visitordata?.gender,
  );
  const [physically, setPhysically] = React.useState(
    props?.route?.params?.visitordata?.physically_disabled,
  );
  const [engage_Time_show, setEngage_Time_show] = useState('');
  // console.log('ABCDddddd', engage_Time_show);
  useFocusEffect(
    React.useCallback(() => {
      function handleBackButtonClick() {
        navigation.push('Dashboard');
        return true;
      }

      BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);

      return () => {
        BackHandler.removeEventListener(
          'hardwareBackPress',

          handleBackButtonClick,
        );
      };
    }, []),
  );
  
  // alert(JSON.stringify(props.route.params.visitordata))
  const showEng = () => {
    let d = Number(props.route.params.visitordata.engage_time);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);
    var hDisplay = h > 0 ? h + (h == 1 ? ' hour: ' : 'hr: ') : '';
    var mDisplay = m > 0 ? m + (m == 1 ? ' minute: ' : 'min: ') : '';
    var sDisplay = s > 0 ? s + (s == 1 ? ' second' : 'sec') : '';
    var enga = hDisplay + mDisplay + sDisplay;
    setEngage_Time_show(enga);
  };

  useEffect(() => {
    showEng();
  }, []);

  const handleSubmit = async () => {
    let startTime = moment(props.route.params.visitordata.created_at).format(
      'HH:mm:ss',
    );
    var hms1 = startTime;
    var a1 = hms1.split(':');
    var seconds1 = a1[0] * 60 * 60 + +a1[1] * 60 + +a1[2];
    var endTime = moment().format('HH:mm:ss');
    var hms2 = endTime;
    var a2 = hms2.split(':');
    var seconds2 = a2[0] * 60 * 60 + +a2[1] * 60 + +a2[2];
    var engagetime = seconds2 - seconds1;

    let d = Number(engagetime);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);
    var hDisplay = h > 0 ? h + (h == 1 ? ' hour: ' : ' hours: ') : '';
    var mDisplay = m > 0 ? m + (m == 1 ? ' minute: ' : ' minutes: ') : '';
    var sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
    var aa = hDisplay + mDisplay + sDisplay;
    showsetEngagetime(aa);

    let body = {
      firstname: props.route.params.visitordata.firstname,
      lastname: props.route.params.visitordata.lastname,
      mobile_number: props.route.params.visitordata.mobile_number,
      gender: props?.route.params.visitordata.gender,
      physically_disabled: props.route.params.visitordata.physically_disabled,
      date_of_birth: moment(
        props.route.params.visitordata.date_of_birth,
      ).format('YYYY-MM-DD '),
      visitor_type: props.route.params.visitordata.visitor_type,
      vidhansabha_id: props.route.params.visitordata.vidhansabha_id,
      mantralya_id: props.route.params.visitordata.mantralya_id,
      refernce: props.route.params.visitordata.refernce,
      reason_to_visit: props.route.params.visitordata.reason_to_visit,
      picture: props.route.params.visitordata.picture,
      constituency_id: props.route.params.visitordata.constituency_id,
      user_id: props.route.params.visitordata.user_id,
      created_at: moment(props.route.params.visitordata.created_at).format(
        'YYYY-MM-DD HH:mm:ss',
      ),
      updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
      minister_id: props.route.params.visitordata.minister_id,
      group_member: props.route.params.visitordata.group_member,
      visitor_status: 'completed',
      engage_time: engagetime,
      location_type:props.route.params.visitordata.location_type
    };
 
   

    let response = await postDataAxios(
      `visitors/updateVisitor/${props.route.params.visitordata.id}`,
      body,
      
      );
    if (response.status) {
      // handlClick()

      setShowModal(true);
    }
  };

  return (
    <View style={{...styles.mainView}}>
      {props.route.params.visitordata.visitor_status == 'ongoing' ? (
        <CenterHeader
          centerText
          stepContent=""
          stepText
          centerContent=""
          ViewVisit
          viewText="View Visit"
          onPressBackArrow={() => {
            navigation.push('Dashboard');
          }}
        />
      ) : (
        <CenterHeader
        centerText
        stepContent=""
        stepText
        centerContent=""
        ViewVisit
        viewText="View Visit"
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
            // backgroundColor:'yellowgreen',
            flexDirection: 'row',
            // backgroundColor:'red',
            alignSelf: 'center',
          }}>
          <View style={{width: '49%', marginRight: 5}}>
            <Input
              showSoftInputOnFocus={false}
              value={props.route.params.visitordata.firstname}
              placeholder=""
              label={'First name'}
              textLabel
              width="100%"
              height={45}
              borderWidth={1}
              borderBottomWidth={1}
              textfontSize={15}
              caretHidden={true}
            />
          </View>
          <View style={{width: '49%', marginRight: 5}}>
            <Input
              placeholder=""
              showSoftInputOnFocus={false}
              label={'Last name'}
              textLabel
              width="100%"
              height={45}
              borderWidth={1}
              borderBottomWidth={1}
              value={props.route.params.visitordata.lastname}
              // top={3}
              textfontSize={15}
              caretHidden={true}
            />
          </View>
        </View>

        {props.route.params.visitordata.group_member && (
          <View
            style={{
              // backgroundColor: 'yellowgreen',

              // bottom: '13%',
              padding: 3,
              margin: 5,
            }}>
            <Text
              style={{
                color: '#aeaeae',
                fontSize: 15,
                fontFamily: FontFamily.Popinssemibold,
              }}>
              Group Member
            </Text>
            <TextInput
              style={{
                fontFamily: FontFamily.PopinsMedium,
                color: '#000',
                fontSize: 15,
                width: '100%',
              }}
              value={props.route.params.visitordata.group_member}
              // width={'100%'}
              borderWidth={1}
              borderBottomWidth={1}
              borderRadius={15}
              borderColor={'#ddd'}
              multiline={true}
              showSoftInputOnFocus={false}
              caretHidden={true}
            />
          </View>
        )}
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

        {/* <TouchableOpacity style={{backgroundColor:'red'}}>
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
          <Input
            value={moment(props.route.params.visitordata.date_of_birth).format(
              'YYYY-MM-DD',
            )}
            label="Date of Birth"
            textLabel
            textfontSize={15}
            showSoftInputOnFocus={false}
            caretHidden={true}
            // top={3}
          />
        </View>
        <View
          style={{
            //   backgroundColor: 'yellowgreen',
            ...styles.Disabled_View_Css,
          }}>
          <RadioButton
            label="Physically Disabled"
            data={physicallyData}
            setType={setPhysically}
            getType={physically}
            labelLeft={10}
          />
        </View>
        {props.route.params.visitordata.visitor_status == 'completed' && (
          <View style={{padding: 3, margin: 5}}>
            <Input
              showSoftInputOnFocus={false}
              value={engage_Time_show}
              placeholder=""
              label={'Engage Time'}
              textLabel
              width="100%"
              height={45}
              borderWidth={1}
              borderBottomWidth={1}
              textfontSize={15}
              caretHidden={true}
            />
          </View>
        )}
         <View style={{padding: 3, margin: 5}}>
            <Input
              showSoftInputOnFocus={false}
              value={props.route.params.visitordata.location_type}
              placeholder=""
              label={'Location'}
              textLabel
              width="100%"
              height={45}
              borderWidth={1}
              borderBottomWidth={1}
              textfontSize={15}
              caretHidden={true}
            />
          </View>
        <View
          style={{
            // backgroundColor: 'yellowgreen',
            ...styles.Reference_View_Css,
          }}>
          <Input
            label={'Vidhansabha'}
            value={props.route.params.visitordata.Vidhansabha}
            textLabel
            width={'100%'}
            textfontSize={15}
            borderWidth={1}
            borderBottomWidth={1}
            showSoftInputOnFocus={false}
            caretHidden={true}
          />
        </View>

        <View
          style={{
            // backgroundColor: 'yellowgreen',
            ...styles.Reference_View_Css,
          }}>
          <Input
            // placeholder="Enter reference name if any "
            label={'Constituency'}
            value={props.route.params.visitordata.ConstituencyName}
            textLabel
            width={'100%'}
            textfontSize={15}
            borderWidth={1}
            borderBottomWidth={1}
            showSoftInputOnFocus={false}
            caretHidden={true}
          />
        </View>

        <View
          style={{
            // backgroundColor: 'yellowgreen',
            ...styles.Reference_View_Css,
          }}>
          <Input
            // placeholder="Enter reference name if any "
            label={'Mantralaya'}
            value={props.route.params.visitordata.MantralayName}
            textLabel
            width={'100%'}
            textfontSize={15}
            borderWidth={1}
            borderBottomWidth={1}
            showSoftInputOnFocus={false}
            caretHidden={true}
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
            value={props.route.params.visitordata.refernce}
            textLabel
            width={'100%'}
            textfontSize={15}
            borderWidth={1}
            borderBottomWidth={1}
            showSoftInputOnFocus={false}
            caretHidden={true}
          />
        </View>
        <View
          style={{
            // backgroundColor: 'yellowgreen',
            ...styles.Resion_View_Css,
          }}>
          <Input
            placeholder=" "
            label={'Reason to visit'}
            value={props.route.params.visitordata.reason_to_visit}
            textLabel
            width={'100%'}
            borderWidth={1}
            borderBottomWidth={1}
            height={100}
            textfontSize={15}
            showSoftInputOnFocus={false}
            caretHidden={true}
          />
        </View>

        <View
          style={{
            ...styles.Media_View_Css,
          }}>
          <Image
            source={{
              uri: `data:image/png;base64,${props.route.params.visitordata.picture}`,
            }}
            style={{height: 100, width: 100}}
          />
        </View>

        <View
          style={{
            // backgroundColor: 'yellowgreen',
            ...styles.Button_View_Css,
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          {props.route.params.visitordata.visitor_status == 'ongoing' && (
            <FullSizeButtons
              onPress={handleSubmit}
              titleColor="#fff"
              backgroundColor={'#18ae3b'}
              title="Mark as completed"
              rightIcon={'checkbox-marked-circle'}
              rightsize={16}
            />
          )}
        </View>
      </ScrollView>
      {
        <SuccessModal
          title={`Visits has been ended succesfully Engagement time was ${showengageTime}`}
          onPress={() => {
            setShowModal(false);
            navigation.push('Visits', {complete: 1});
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
    // margin: 4,
  },
  NameViewCss: {
    padding: 3,
    margin: 5,
  },
  genderCss: {
    padding: 3,
    // margin: 5,
  },
  Date_of_Brith_Css: {
    padding: 3,
    margin: 5,
  },
  Disabled_View_Css: {
    padding: 3,
    // margin: 5,
  },
  Vidhansabha_View_Css: {
    padding: 3,
    margin: 5,
    zIndex: 12,
  },
  Constintuency_View_Css: {
    padding: 3,
    margin: 5,
    zIndex: 11,
  },
  Minister_View_Css: {
    padding: 3,
    margin: 5,
    zIndex: 9,
  },
  Mantralya_View_Css: {
    padding: 3,
    margin: 5,
    zIndex: 8,
  },
  Reference_View_Css: {
    padding: 3,
    margin: 5,
    zIndex: 1,
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
    padding: 5,
    margin: 5,

    width: '100%',
  },
});
