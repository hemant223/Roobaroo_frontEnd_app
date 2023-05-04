import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../components/shared/header/Header';
import SegmentedTab from '../../components/shared/segment_tab/SegmentedTabs';
import VisitorDetails from '../visitorDetails/VisitorDetails';
import {useNavigation} from '@react-navigation/native';
import {goBackTwoScreen} from '../../navigation/NavigationDrw/NavigationServices';
import { getStoreData } from '../../helper/utils/AsyncStorageServices';
import VisitorDetailsShow from '../visitorDetails/VisitorDetailsShow';

const Visits = props => {
  const navigation = useNavigation();
  // alert(JSON.stringify(props?.route?.params?.userData))
  // console.log('====================================');
  // console.log('fulluserData on visitor page:',props?.route?.params?.userData);
  // console.log('====================================');
  const [getVisitorData, setVisitorByAsync] = useState([]);
  const [show, setShow] = useState(true);
  // alert(JSON.stringify(getVisitorData));
  // const getUserDataByAsyncStorage = async () => {
  //   const visitorrData = await getStoreData('VisitorData');
  //   setVisitorByAsync(visitorrData);
  //   setShow(true)
  // };
  // useEffect(() => {
  //   getUserDataByAsyncStorage();
  // }, []);
  return (
    <>
      <View>
        <Header
          BackonPress={() => {
            navigation.goBack();
          }}
          addonPress={() => {
            navigation.navigate('VerifyNumber');
          }}
          add
          height={90}
          rightText
          backarrowIcon
        />
      </View>
      <ScrollView>
        <View style={{ margin: 15, top: 10}}>
          {show&&<SegmentedTab component1={<VisitorDetails data={getVisitorData}/>}   component2={<VisitorDetailsShow/>} />}
        </View>
        <View>
          
        </View>
      </ScrollView>
    </>
  );
};

export default Visits;

const styles = StyleSheet.create({});
