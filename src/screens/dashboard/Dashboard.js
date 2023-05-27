import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  BackHandler,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/shared/header/Header';
import SpeedoMeter from './speedometer/SpeedoMeter';
import SingleBarChart from '../../components/shared/barChart/BarChart';
import VisitAndProfileButton from '../../components/visit_and_myProfile/VisitAndProfileButton';
import SubHeader from '../../components/shared/subHeader/SubHeader';
import LocationModal from '../../components/componentModals/LocationModal';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {
  getStoreData,
  removeStoreData,
} from '../../helper/utils/AsyncStorageServices';
import {getDataAxios} from '../../fetchNodeServices';
import {useSelector} from 'react-redux';
import {useToast} from 'react-native-toast-notifications';

import moment from 'moment';
const {width, height} = Dimensions.get('window');
const Dashboard = props => {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  const toast = useToast();
  const [locationnn, setLocation] = useState('');
  const [asyncUserData, setAsyncUserData] = useState('');
  const [conditionLocation, setConditionLocation] = useState('');
  const [conditionRefresh, setConditionRefresh] = useState(false);
  var location = useSelector(state => state.locationReducer.location);
  var user__Data = useSelector(state => state.userDataReducer.user_data);
  // alert( props.route.params)

  // console.log('redux_userData>>>>>>',user__Data);
  const getUserDataByAsyncStorage = async () => {
    const userData = await getStoreData('userData');
    // alert(userData.user_location)
    setAsyncUserData(userData);
    // alert(JSON.stringify(Location.location))
    // console.log('local_userData>>>>>>',userData);
    var data = await getDataAxios(`visitors/todayVisitor/${userData?.id}`);
    // alert(JSON.stringify(data))
    const locationn = await getStoreData('Location');
    setLocation(locationn?.location);
    // alert(JSON.stringify(locationn))
    // var conditionLocation=locationn != '' ? locationn : locationnn
    // setConditionLocation(conditionLocation)
  };
  // alert(location)
  // alert(locationnn)

  useEffect(() => {
    getUserDataByAsyncStorage();
  }, []);
  const handleProfile = async () => {
    let userData = await getStoreData('userData');
    navigation.navigate('UserDetail', {
      userData: user__Data != '' ? user__Data : userData,
    });

    //  setUsedata(userData)
  };
  const handleVisitBlank = () => {
    // var conditionLocation=location != '' ? location : locationnn
    // setConditionLocation(conditionLocation)
    toast.show('Please Select Location', {
      type: 'warning',
      placement: 'bottom',
      duration: 1000,
      offset: 30,
      animationType: 'zoom-in',
    });
  };
  const handleVisits = async () => {
    let userData = await getStoreData('userData');
    navigation.navigate('Visit', {userData: userData});
  };

  useFocusEffect(
    React.useCallback(() => {
      function handleBackButtonClick() {
        BackHandler.exitApp();
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
  // alert(showModal)

  // const FetchDisplayVisitorLazzyLodingData = async () => {
  //   var data = await getDataAxios(`visitors/displayAppVisitors/${1}/${2}/${13}`)
  //   // console.log('RRRRRR====================================');
  //   // console.log('limit Data>>>>>>>>',data.result);
  //   // console.log('RRRRRRRR====================================');
  //   // alert(JSON.stringify(asyncUserData.minister_id))
  // };
  // useEffect(() => {
  //   FetchDisplayVisitorLazzyLodingData();
  // }, []);

  return (
    <View
      style={{
        backgroundColor: '#fff',
        height: height * 1,
        width: width * 1,
      }}>
      <StatusBar hidden={false} translucent backgroundColor="transparent" />
      <View
        style={{
          height: height * 0.15,
          backgroundColor: '#fff',
          width: width * 1,
        }}>
        <SubHeader
          userData={user__Data != '' ? user__Data : asyncUserData}
          locationData={location != '' ? location : locationnn}
          locationonPress={() => {
            setShowModal(true);
          }}
          MenuIcon
          profile
          rightText
          rightContent="Tarun Bhadoriya"
          searchPress={() => {
            navigation.navigate('SearchScreen');
          }}
        />
      </View>

      <View
        style={{
          backgroundColor: '#fff',
          width: width * 1,
          height: height * 0.28,
          marginTop: 10,
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            width: '95%',
            height: '100%',
            borderRadius: 12,
            borderWidth: 1,
            borderColor: '#e4e4e4',
            alignItems: 'center',
            alignContent: 'center',
            paddingVertical: 20,
          }}>
          <SpeedoMeter />
        </View>
      </View>

      <View
        style={{
          width: width * 1,
          height: height * 0.28,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <SingleBarChart />
      </View>

      <View
        style={{
          width: width * 1,
          height: height * 0.12,
          alignItems: 'center',
          backgroundColor: '#fff',
          marginTop: 10,
        }}>
        {locationnn != undefined || location != '' ? (
          <VisitAndProfileButton
            onPress={() => {
              handleVisits();
            }}
          />
        ) : (
          <VisitAndProfileButton
            onPress={() => {
              handleVisitBlank();
            }}
          />
        )}
      </View>

      <View
        style={{
          width: width * 1,
          height: height * 0.25,
          alignItems: 'center',
          backgroundColor: '#fff',
          marginTop: 10,
        }}>
        <VisitAndProfileButton
          data="See Profile to here "
          onPress={() => {
            handleProfile();
          }}
          heading="My Profile"
          circleColor={'#f9aa4b'}
          backgroundColor={'#fdead2'}
        />
      </View>

      <View>
        {<LocationModal setShowModal={setShowModal} showModal={showModal} />}
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
