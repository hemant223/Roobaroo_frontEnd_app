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
import moment from 'moment';
const {width, height} = Dimensions.get('window');
const Dashboard = props => {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  const [location, setLocation] = useState('');

  const getUserDataByAsyncStorage = async () => {
    const userData = await getStoreData('userData');
    const Location = await getStoreData('Location');
    // alert(JSON.stringify(Location.location))
    var data = await getDataAxios(`visitors/todayVisitor/${userData?.id}`);
    // alert(JSON.stringify(data))
    const locationn = await getStoreData('Location');
    setLocation(locationn?.location);
  };
  useEffect(() => {
    getUserDataByAsyncStorage();
  }, []);
  const handleProfile = async () => {
    let userData = await getStoreData('userData');
    //   alert(JSON?.stringify(userData))
    navigation.navigate('UserDetail', {userData: userData});
    //   setUsedata(userData)
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
          locationData={props?.route?.params?.location}
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
          marginTop: 7,
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            width: '95%',
            height:'100%',
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
          marginTop:7
        }}>
        <SingleBarChart />
      </View>

      <View
        style={{
          width: width * 1,
          height: height * 0.12,
          alignItems: 'center',
          backgroundColor: '#fff',
          marginTop:7
        }}>
        <VisitAndProfileButton
          onPress={() => {
            handleVisits();
          }}
        />
      </View>

      <View
        style={{
          width: width * 1,
          height: height * 0.12,
          alignItems: 'center',
          backgroundColor: '#fff',
          marginTop:7
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
