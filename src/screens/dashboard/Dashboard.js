import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/shared/header/Header';
import SpeedoMeter from './speedometer/SpeedoMeter';
import SingleBarChart from '../../components/shared/barChart/BarChart';
import VisitAndProfileButton from '../../components/visit_and_myProfile/VisitAndProfileButton';
import SubHeader from '../../components/shared/subHeader/SubHeader';
import LocationModal from '../../components/componentModals/LocationModal';
import {useNavigation} from '@react-navigation/native';
const Dashboard = props => {
//   const {location} = props.route.params;


  // var dataa = Object.keys(getData)
//   alert(JSON.stringify(location));
  // var titledata=JSON.stringify(title)
  // console.log('getData',Object.values(getData));
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <StatusBar hidden={false} translucent backgroundColor="transparent" />

      <SubHeader
         locationData={props?.route?.params?.location}
        locationonPress={() => {
          setShowModal(true);
        }}
        MenuIcon
        profile
        rightText
        rightContent="Tarun Bhadoriya"
      />

      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          height: '25%',
          marginTop: 12,
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
          width: '100%',
          height: '30%',
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SingleBarChart />
      </View>
      <View
        style={{
          width: '100%',
          height: '12%',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <VisitAndProfileButton
          onPress={() => {
            navigation.navigate('Visit');
          }}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: '12%',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <VisitAndProfileButton
          onPress={() => {
            navigation.navigate('UserDetail');
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
