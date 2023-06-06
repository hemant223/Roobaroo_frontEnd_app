import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import RadioButton from '../../components/shared/buttons/RadioButton';
import Input from '../../components/shared/textInputs/Inputs';
import Dropdown from '../../components/shared/dropdowns/DropDownComponent';
import FullSizeButtons from '../../components/shared/buttons/FullSizeButtons';
import Attachment from '../../components/shared/attachment/Attachment';
import SuccessModal from '../../components/componentModals/SuccessModal';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {getDataAxios, postDataAxios} from '../../fetchNodeServices';
import {getStoreData, storeData} from '../../helper/utils/AsyncStorageServices';
import moment from 'moment';
import CenterHeader from '../../components/shared/header/CenterHeader';
import {Colors} from '../../assets/config/Colors';
import DateTimePicker from '../../components/shared/date/DateTimePicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MultipleTextField from '../../components/multiple_text_field/MultipleTextField';
import {FontFamily} from '../../assets/fonts/FontFamily';
import {useSelector} from 'react-redux';


const VisitingForm = props => {
  var language = useSelector(state => state.languageNameReducer.language_name);
  const data = [
    {type: language['Single'], id: 1, color: false},
    {type: language['Group'], id: 2, color: false},
  ];
  
  const physicallyData = [
    {type:language['Yes'], id: 1, color: false},
    {type: language['No'], id: 2, color: false},
  ];
  
  const genderdata = [
    {type: language['Male'], id: 1, color: false},
    {type: language['Female'], id: 2, color: false},
    {type: language['Other'], id: 3, color: false},
  ];
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = React.useState({
    firstName: '',
    LastName: '',
    Reasion: '',
    Reference: '',
  });
  const [errors, setErrors] = React.useState({});

  const [dob, setDob] = useState(moment().format('YYYY-MM-DD'));
  // console.log('============<DOB======>>',dob)
  const [location, setLocation] = useState();

  // const [userid, setUserId] = React.useState(1);
  const [visitorname, setVisitorName] = useState(language['Single']);
  const [SngGupId, setSngGupId] = useState("1")
  const [gender, setGender] = React.useState(language['Male']);
  const [physically_disabled_Name, setPhysically_disabled_Name] =
    useState(language['Yes']);

  const [image, setImage] = React.useState('');
  const [getUserData, setUserDataByAsync] = useState([]);

  // Vidhansabha DropDown State//
  const [vidhansabhaName, setVidhansabhaName] = useState();
  const [vidhansabha, setVidhansabha] = React.useState('');
  const [vidhansabhaNamee, setVidhansabhaNamee] = useState('');
  // alert(JSON.stringify(vidhansabhaNamee))
  //Constituency DropDown State//
  const [constituencyid, setContituencyid] = React.useState('');
  const [constituency, setConstituency] = useState();
  const [concetencyNamee, setConcetencyNamee] = useState('');
  // alert(SngGupId)
  // Mantralay DropDown State//
  const [mantralay, setMantralay] = useState();
  const [mantralayId, setMantralayId] = useState();
  const [showMantralayName, setMantralayName] = useState();

  // Minister DropDown State.//
  const [ministarid, setMinisterid] = React.useState('');
  // alert(dob)
  const [minister, setMinister] = useState();
  const [ministerName, setMinisterName] = useState('');

  const [textFields, setTextFields] = useState([{value: ''}]);
  const [imageShow, setImageShow] = useState(false);
  const [apiUserData, setApiUserData] = useState('');

  var locationReducer = useSelector(state => state.locationReducer.location);
  // VidhanSbha DropDown
  const fetchVidhansbha = async () => {
    try {
      const userData = await getStoreData('userData');
      var data = await getDataAxios(`users/fetchUserDetail/${userData?.id}`);
      setApiUserData(data.result[0]);

      // alert(JSON.stringify(apiUserData.user_location))
      // alert(locationReducer)

      // alert(JSON.stringify(userData))
      var StateId = userData.StateId;
      // alert((StateId))
      var response = await getDataAxios(
        `vidhansabha/displayVidhansabha/${StateId}`,
      );
      //  console.log('RESPONSE', response.result);
      // alert(JSON.stringify(response));
      // console.log('33 Line in Dropdown===========>', response.result);
      var aa = [];
      for (var arrays of response.result) {
        // console.log('53=========>',arrays)
        aa.push({value: arrays.id, label: arrays.vidhansabha_name});
      }
      setVidhansabhaName(aa);
      // console.log(aa)
    } catch (err) {
      console.error('Catch Error ', err);
    }
  };
  // alert(JSON.stringify(props?.route?.params));
  useEffect(() => {
    fetchVidhansbha();
  }, []);

  //Constituency//
  const fetchConstituency = async () => {
    try {
      // alert(vidhansabha)
      setConcetencyNamee('');
      var response = await getDataAxios(
        `constituency/displayConstituency/${vidhansabha}`,
      );
      //  console.log('RESPONSE', response.result);
      var constituency = [];
      for (var con of response.result) {
        // console.log('53=========>',con)
        constituency.push({value: con.id, label: con.constituency_name});
      }
      setConstituency(constituency);
    } catch (err) {
      console.error('Catch Error ', err);
    }
  };
  // alert(data);
  useEffect(() => {
    fetchConstituency();
  }, [vidhansabha]);

  //Minister//
  const fetchMinister = async () => {
    try {
      // alert(vidhansabha)
      setMinisterName('');
      var response = await getDataAxios(
        `minister/displayMinister/${constituencyid}`,
      );
      //  console.log('RESPONSE_Minister_Data', response.result[0].firstname);
      //  console.log('RESPONSE_Minister_DataLastName',response.result[0].lastname);
      var minister = [];
      for (var mini of response.result) {
        // console.log('150=========>',mini)
        minister.push({
          value: mini.constituency_id,
          label: mini.firstname + ' ' + mini.lastname,
        });
        // console.log('152 Line Visiting Form ==========>',minister)
      }
      setMinister(minister);
    } catch (err) {
      console.error('Catch Error ', err);
    }
  };
  // alert(data);
  useEffect(() => {
    fetchMinister();
  }, [constituencyid]);

  //Mantralaya//
  const fetchMantralya = async () => {
    try {
      // alert(vidhansabha)

      var response = await getDataAxios(`mantralay/displayMantralay`);
      // console.log('RESPONSE', response.result);
      var zz = [];
      for (var man of response.result) {
        // console.log('53=========>',man)
        zz.push({value: man.id, label: man.mantralya_name});
      }
      setMantralay(zz);
    } catch (err) {
      console.error('Catch Error ', err);
    }
  };

  useEffect(() => {
    fetchMantralya();
  }, []);

  const getUserDataByAsyncStorage = async () => {
    const userData = await getStoreData('userData');

    const locationn = await getStoreData('Location');
    setLocation(locationn?.location);
    setUserDataByAsync(userData);
    // alert(JSON.stringify(userData))
  };
  useEffect(() => {
    getUserDataByAsyncStorage();
  }, []);
  // alert(JSON.stringify(getUserData));
  // alert(dob)

  const validate = async () => {
    var arr_group = [];
    {
      textFields.map(item => {
        arr_group.push(item.value);
      });
    }
    // alert(arr);

    try {
      let i = 0;
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
          mantralya_id: mantralayId,
          refernce: inputs.Reference,
          reason_to_visit: inputs.Reasion,
          picture: image,
          user_id: getUserData.id,
          created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
          group_member: arr_group,
          visitor_status: 'ongoing',
          location_type: locationReducer
            ? locationReducer
            : apiUserData.user_location,
          constituency_id: constituencyid,
          minister_id: ministarid,
        };

        // console.log(body);
        // alert(++i);
        let response = await postDataAxios(`visitors/addVisitor`, body);
        // console.log('response', response);
        // alert(response.status);
        if (response.status == true) {
          setShowModal(true);
        } else {
          alert('Error in data Submissin');
        }
      }
    } catch (err) {
      console.log('Catch Error: line 257 visitor', err);
    }
  };

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

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  // const handleDatePicker=(value,valuetwo)=>{
  //   // console.log("VALUEEEEEEEEEEE",value);
  //   // console.log("VALUE TWOOOOOOOOOO",valuetwo);
  //   setDob(valuetwo)
  // }

  // alert(apiUserData.user_location)
  // alert(locationReducer)

  return (
    <View style={{...styles.mainView}}>
      <CenterHeader
        centerText
        stepContent={language['Step'] + '02'}
        centerContent={language['Visiting_Form']}
        stepText
        onPressBackArrow={() => {
          navigation.push('Dashboard');
        }}
      />
      <ScrollView>
        <View style={{...styles.visitTypeViewCss}}>
          <RadioButton
            label={language['visit_type']}
            data={data}
            setType={setVisitorName}
            getType={visitorname}
            setId={setSngGupId}
            // labelLeft={10}
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
              placeholder={language['First_name']}
              label={language['First_name']}
              textLabel
              width="100%"
              height={45}
              borderWidth={1}
              borderBottomWidth={1}
              onFocus={() => handleError(null, 'firstName')}
              error={errors.firstName}
              onChangeText={text => handleOnchange(text, 'firstName')}
              // value={firstName}
              textfontSize={15}
            />
          </View>
          <View style={{width: '49%', marginRight: 5}}>
            <Input
              placeholder={language['Last_name']}
              label={language['Last_name']}
              textLabel
              width="100%"
              height={45}
              borderWidth={1}
              borderBottomWidth={1}
              onFocus={() => handleError(null, 'LastName')}
              error={errors.LastName}
              onChangeText={text => handleOnchange(text, 'LastName')}
              textfontSize={15}
            />
          </View>
        </View>
        {SngGupId == '2' && (
          <View style={{width: '97%', alignSelf: 'center'}}>
            <Text
              style={{
                top: 9,
                color: '#aeaeae',
                fontSize: 15,
                fontFamily: FontFamily.Popinssemibold,
                marginLeft: 10,
              }}>
              {language['Group_Members_Name']}
            </Text>
            <MultipleTextField
              setTextFields={setTextFields}
              textFields={textFields}
            />
          </View>
        )}

        <View
          style={{
            // backgroundColor: 'yellowgreen',
            ...styles.genderCss,
          }}>
          <RadioButton
            // labelLeft={10}
            label={language['Gender']}
            data={genderdata}
            setType={setGender}
            getType={gender}
          />
        </View>

        <View
          style={{
            // backgroundColor: 'yellowgreen',
            ...styles.Date_of_Brith_Css,
          }}>
          <DateTimePicker
          placeholder={language['Select_Date_of_Birth']}
            borderRadius={30}
            backgroundColor={Colors.Textinputbg}
            height={40}
            // setDate={setDob}
            label={language['Date_of_Birth']}
            setDate={setDob}
          />
        </View>

        <View
          style={{
            //   backgroundColor: 'yellowgreen',
            ...styles.Disabled_View_Css,
          }}>
          <RadioButton
            label={language['Physically_Disabled']}
            data={physicallyData}
            getType={physically_disabled_Name}
            setType={setPhysically_disabled_Name}
            // labelLeft={10}
          />
        </View>

        <View
          style={{
            //   backgroundColor: 'yellowgreen',
            ...styles.Vidhansabha_View_Css,
          }}>
          <Dropdown
            label={language['Vidhansabha']}
            labelLeft={10}
            borderRadius={12}
            options={vidhansabhaName}
            onSelect={setVidhansabha}
            setShowName={setVidhansabhaNamee}
            showName={
              vidhansabhaNamee ? vidhansabhaNamee : language['Select_Vidhansabha']
            }
          />
        </View>
        <View
          style={{
            //   backgroundColor: 'yellowgreen',
            ...styles.Constintuency_View_Css,
          }}>
          <Dropdown
            label={language['Constituency']}
            labelLeft={10}
            borderRadius={12}
            options={constituency}
            onSelect={setContituencyid}
            setShowName={setConcetencyNamee}
            showName={concetencyNamee ? concetencyNamee : language['Select_Constituency']}
          />
        </View>
        <View
          style={{
            //   backgroundColor: 'yellowgreen',
            ...styles.Minister_View_Css,
          }}>
          <Dropdown
            label={language['Ministers']}
            labelLeft={10}
            borderRadius={12}
            options={minister}
            onSelect={setMinisterid}
            setShowName={setMinisterName}
            showName={ministerName ? ministerName :language['Select_Ministers']}
          />
        </View>

        <View
          style={{
            //   backgroundColor: 'yellowgreen',
            ...styles.Mantralya_View_Css,
          }}>
          <Dropdown
            label={language['Mantralaya']}
            labelLeft={10}
            borderRadius={12}
            options={mantralay}
            onSelect={setMantralayId}
            setShowName={setMantralayName}
            showName={
              showMantralayName ? showMantralayName :language['Select_Mantralaya']
            }
          />
        </View>

        <View
          style={{
            // backgroundColor: 'yellowgreen',
            ...styles.Reference_View_Css,
          }}>
          <Input
            placeholder={language['Enter_reference_name_if_any']}
            label={language['Reference']}
            textLabel
            width={'100%'}
            textfontSize={15}
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
            ...styles.Reference_View_Css,
          }}>
          <Input
            // placeholder="Enter reference name if any "
            label={language['Selected_Location']}
            textLabel
            width={'100%'}
            textfontSize={15}
            borderWidth={1}
            borderBottomWidth={1}
            value={
              locationReducer ? locationReducer : apiUserData.user_location
            }
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
            label={language['Reason_of_visit']}
            textLabel
            width={'100%'}
            borderWidth={1}
            borderBottomWidth={1}
            height={100}
            onFocus={() => handleError(null, 'Reasion')}
            error={errors.Reasion}
            onChangeText={text => handleOnchange(text, 'Reasion')}
            textfontSize={15}
          />
        </View>

        <View
          style={{
            ...styles.Media_View_Css,
          }}>
          <Attachment size={30} setImage={setImage} />
        </View>

        {image && (
          <Image
            source={{uri: `data:image/png;base64,${image}`}}
            style={{height: 100, width: 100, margin: 5}}
          />
        )}

        <View
          style={{
            // backgroundColor: 'yellowgreen',
            ...styles.Button_View_Css,
            alignSelf: 'center',
            alignItems: 'center',
            // bottom:19
          }}>
          <FullSizeButtons
          title={language['Submit']}
            /* onPress={()=>{setShowModal(true)}} */ onPress={() => validate()}
            titleColor="#fff"
          />
        </View>
      </ScrollView>
      {
        <SuccessModal
          title={language['Your_visiting_record_request_has_been_successfully_Submitted']}
          onPress={() => {
            navigation.push('Visits', {complete: 0});
            setShowModal(false);
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
