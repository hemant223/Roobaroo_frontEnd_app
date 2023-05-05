import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/shared/header/Header';
import SegmentedTab from '../../components/shared/segment_tab/SegmentedTabs';
import VisitorDetails from '../visitorDetails/VisitorDetails';
import {useNavigation} from '@react-navigation/native';
import {goBackTwoScreen} from '../../navigation/NavigationDrw/NavigationServices';
import {getStoreData} from '../../helper/utils/AsyncStorageServices';
import VisitorDetailsShow from '../visitorDetails/VisitorDetailsShow';
import {getDataAxios} from '../../fetchNodeServices';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const Visits = props => {
  const navigation = useNavigation();
  // alert(JSON.stringify(props?.route?.params?.userData))
  // console.log('====================================');
  // console.log('fulluserData on visitor page:',props?.route?.params?.userData);
  // console.log('fulluserData on visitor page:',props?.route?.params?.complete);
  // console.log('====================================');
  const [getVisitorData, setVisitorData] = useState([]);
  const [index, setIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(props?.route?.params?.complete?1:0);

  const [show, setShow] = useState(false);
  const [getUserData, setUserDataByAsync] = useState([]);

  const getUserDataByAsyncStorage = async () => {
    const userData = await getStoreData('userData');
    setUserDataByAsync(userData);
  };
// alert(selectedIndex)
  // alert(JSON.stringify(getVisitorData));
  // const getUserDataByAsyncStorage = async () => {
  //   const visitorrData = await getStoreData('VisitorData');
  //   setVisitorByAsync(visitorrData);
  //   setShow(true)
  // };
  // useEffect(() => {
  //   getUserDataByAsyncStorage();
  // }, []);
  // alert(getUserData?.minister_id)
  const fetchAllVisitorData = async () => {
    var data = await getDataAxios(
      `visitors/displayVisitors/${getUserData?.minister_id}`,
    );
    if (data.status) {
      setVisitorData(data?.result);
      // alert(JSON.stringify(data?.result))
    } else {
      alert('data fetch error');
    }
    if (data.result) {
      setTimeout(() => {
        setShow(true);
      }, 0);
    }
  };
  // console.log(getVisitorData)
  // alert(JSON.stringify(getUserData))
  useEffect(() => {
    getUserDataByAsyncStorage();
    fetchAllVisitorData();
  }, [show,selectedIndex]);
  useEffect(() => {
  
  }, [show]);
 

  const handleSingleIndexSelect = index => {
    setSelectedIndex(index);
  };
  // alert(selectedIndex)

  return (
    <>
      <View>
        <Header
          BackonPress={() => {
            props.navigation.push('Dashboard');
          }}
          addonPress={() => {
            props.navigation.navigate('VerifyNumber');
          }}
          add
          height={90}
          rightText
          backarrowIcon
        />
      </View>
      <ScrollView>
        <View style={{margin: 15, top: 10}}>
          {/* {show && (
            <SegmentedTab
              component1={<VisitorDetails data={getVisitorData} />}
              component2={<VisitorDetailsShow data={getVisitorData} />}
            />
          )} */}
          <SegmentedControlTab
            values={['On Going', 'Completed']}
            selectedIndex={selectedIndex}
            tabStyle={{
              //   backgroundColor: Colors.white,
              //   color: Colors.white,
              //   borderColor: Colors.MRGREEN,
              backgroundColor: '#fff',
              color: '#fff',
              borderColor: '#ffff',
              // borderRadius:10
            }}
            activeTabStyle={{
              // backgroundColor: Colors.MRGREEN
              backgroundColor: '#005db6',
            }}
            tabsContainerStyle={{
              height: 45,
              // width: WIDTHSEG,
              alignSelf: 'center',
            }}
            tabTextStyle={{
              //  fontFamily: FontFamily.PopinsMedium,

              fontSize: 14,
              //   color: Colors.grey,
              color: 'grey',
            }}
            activeTabTextStyle={{color: '#FFF', fontSize: 14}}
            onTabPress={index => handleSingleIndexSelect(index)}
          />
          {selectedIndex==0&&<View>
            <VisitorDetails data={getVisitorData} />
          </View>}
         {selectedIndex==1&& <View>
            <VisitorDetailsShow data={getVisitorData} />
          </View>}
        </View>
        <View></View>
      </ScrollView>
    </>
  );
};

export default Visits;

const styles = StyleSheet.create({});
