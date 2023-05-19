import {ScrollView, StyleSheet, Text, View, BackHandler} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import Header from '../../components/shared/header/Header';
import SegmentedTab from '../../components/shared/segment_tab/SegmentedTabs';
import VisitorDetails from '../visitorDetails/VisitorDetails';
import {goBackTwoScreen} from '../../navigation/NavigationDrw/NavigationServices';
import {getStoreData} from '../../helper/utils/AsyncStorageServices';
import VisitorDetailsShow from '../visitorDetails/VisitorDetailsShow';
import {getDataAxios, postDataAxios} from '../../fetchNodeServices';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import RbeSheet from '../../components/shared/rbesheet/RbeSheet';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import { FilterFun } from '../../helper/utils/redux/slices/filteringSlice';


const Visits = props => {
  const navigation = useNavigation();
  var dispatch = useDispatch();

  // alert(JSON.stringify(props?.route?.params?.userData))
  // console.log('====================================');
  // console.log('fulluserData on visitor page:',props?.route?.params?.userData);
  // console.log('fulluserData on visitor page:',props?.route?.params?.complete);
  // console.log('====================================');
  const [selectedIndex, setSelectedIndex] = useState(
    props?.route?.params?.complete ? 1 : 0,
  );
  const refRBSheet = useRef();
  const [show, setShow] = useState(false);
  const [getVisitorData, setVisitorData] = useState([]);
  const [getUserData, setUserDataByAsync] = useState([]);
  const [filterData, setFilterData] = useState([])
  const [name, setName] = useState('');
  const [refresh, setRefresh] = useState(false)
  // alert(name)
  const [month, setMonth] = React.useState('');
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');


var filteringData = useSelector(state => state.filterReducer);

  const FetchRBsheetFilterData = async () => {
    var namme = '';
    if (name == 'Alphabetically A to Z') {
      setRefresh(false)
      var namme = 'asc';
    } else if (name == 'Alphabetically Z to A') {
      setRefresh(false)
      var namme = 'desc';
    } else if (name == 'Newly Added') {
      setRefresh(false)
      var namme = 'Newelly added';
    }
   var startDatee=''
   if(from!=''){
    setRefresh(false)
    startDatee=from
   }else{
    setRefresh(false)
    startDatee=startDate
   }
   var endDatee=''
   if(to!=''){
    setRefresh(false)
    endDatee=to
   }else{
    setRefresh(false)
    endDatee=endDate
   }

   let body = {order: namme, startDate:startDatee,endDate:endDatee}
    var response = await postDataAxios(
      `visitors/appVisitorFilter/${getUserData?.minister_id}`,body);
    // alert(JSON.stringify(response));
    if(response.status){
      // console.log("DATA OF FILTER>>>>>>>>",response.result);
      dispatch(FilterFun(response.result));
      setRefresh(true)
      setFilterData(response.result)
    }else{
      alert('Error in Filtering')
    }
  
  };
 

  const getUserDataByAsyncStorage = async () => {
    const userData = await getStoreData('userData');
    setUserDataByAsync(userData);
  };
  const fetchAllVisitorData = async () => {
    var data = await getDataAxios(
      `visitors/displayVisitors/${getUserData?.minister_id}`,
    );
    if (data.status) {
      setVisitorData(data?.result);
      setRefresh(true)
    } else {
      alert('data fetch error');
    }
    if (data.result) {
      setTimeout(() => {
        setShow(true);
      }, 0);
    }
  };
  useEffect(() => {
    getUserDataByAsyncStorage();
    fetchAllVisitorData();
  }, [show, selectedIndex]);
  useEffect(() => {}, [show]);

  const handleSingleIndexSelect = index => {
    setSelectedIndex(index);
  };
  // alert(selectedIndex)
  // console.log('====================================');
  // console.log('getVisitorDataaaaa',getVisitorData);
  // console.log('====================================');

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

  return (
    <>
      <View>
        <Header
          BackonPress={() => {
            props.navigation.push('Dashboard');
            dispatch(FilterFun(''));

          }}
          addonPress={() => {
            props.navigation.navigate('VerifyNumber');
            dispatch(FilterFun(''));
          }}
          add
          height={90}
          rightText
          backarrowIcon
          sort
          sortonPress={() => {
            refRBSheet.current.open();
          }}
        />
      </View>

      <View style={{margin: 15, top: 10}}>
        {/* {show && (
            <SegmentedTab
              component1={<VisitorDetails data={getVisitorData} />}
              component2={<VisitorDetailsShow data={getVisitorData} />}
            />
          )} */}
        <SegmentedControlTab
          values={['Ongoing', 'Completed']}
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
        <ScrollView style={{marginBottom: 135, marginTop: 7}}>
          <View>
            {selectedIndex == 0 && (
              <View>
                {refresh &&
                <VisitorDetails data={filteringData?.filtering!=""?filteringData?.filtering:getVisitorData} />}
                 {/* data={filterData!=""?filterData:getVisitorData}  */}
                {/* {filteringData.filtering?.map((item,index)=>{
                  return <View>
                    <Text>{item.firstname} {item.lastname}</Text>
                  </View>
                })} */}
              </View>
             )}
            {selectedIndex == 1 && (
              <View>
                {refresh &&
                <VisitorDetailsShow data={filteringData?.filtering!=""?filteringData?.filtering:getVisitorData} />}
              </View>
            )}
          </View>
        </ScrollView>
      </View>
      <>
        {
          <RbeSheet
            refRBSheet={refRBSheet}
            setMonth={setMonth}
            month={month}
            setName={setName}
            setFrom={setFrom}
            setTo={setTo}
            doneonPress={()=>{FetchRBsheetFilterData()}}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
           
          />
        }
      </>
    </>
  );
};

export default Visits;

const styles = StyleSheet.create({});
