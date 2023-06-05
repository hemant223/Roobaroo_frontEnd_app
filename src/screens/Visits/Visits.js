import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  BackHandler,
  ActivityIndicator,
} from 'react-native';
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
import {FilterFun} from '../../helper/utils/redux/slices/filteringSlice';

const Visits = props => {
  const navigation = useNavigation();
  var dispatch = useDispatch();
  var language = useSelector(state => state.languageNameReducer.language_name);

  const DropDownData = [
    {value: 1, label: language['Public_meetings']},
    {value: 2, label: language['Filed_Visits']},
    {value: 3, label: language['Mantralaya']},
    {value: 4, label: language['Vidhansabha']},
    {value: 5, label: language['Jasdan']},
    {value: 6, label:language['Residence']},
  ];

  // alert(JSON.stringify(props?.route?.params?.userData))
  // console.log('====================================');
  // console.log('fulluserData on visitor page:',props?.route?.params?.userData);
  // console.log('fulluserData on visitor page:',props?.route?.params?.complete);
  // console.log('====================================');
  const [selectedIndex, setSelectedIndex] = useState(
    props?.route?.params?.complete == 1 ? 1 : 0,
  );
  const refRBSheet = useRef();
  const [show, setShow] = useState(false);
  const [getVisitorData, setVisitorData] = useState([]);
  const [getUserData, setUserDataByAsync] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [name, setName] = useState('');
  const [refresh, setRefresh] = useState(false);
  // alert(name)
  const [month, setMonth] = React.useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [getdata, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [offset1, setOffset1] = useState(0);
  const [filterLocation, setFilterLocation] = useState('');
  const [RBDropDownLocation, setRBDropDownLocation] = useState('');
  const [RBDropDownLocationValue, setRBDropDownLocationValue] = useState('');
  // alert(RBDropDownLocation)

  var filteringData = useSelector(state => state.filterReducer);
  //  console.log('====================================');
  //  console.log('filteringData>>>>>',filteringData?.filtering);
  //  console.log('====================================');
  const FetchRBsheetFilterData = async () => {
    var namme = '';
    if (name == 'Alphabetically A to Z') {
      setRefresh(false);
      var namme = 'asc';
    } else if (name == 'Alphabetically Z to A') {
      setRefresh(false);
      var namme = 'desc';
    } else if (name == 'Newly Added') {
      setRefresh(false);
      var namme = 'Newelly added';
    }
    var startDatee = '';
    if (from != '') {
      setRefresh(false);
      startDatee = from;
    } else {
      setRefresh(false);
      startDatee = startDate;
    }
    var endDatee = '';
    if (to != '') {
      setRefresh(false);
      endDatee = to;
    } else {
      setRefresh(false);
      endDatee = endDate;
    }

    let body = {order: namme, startDate: startDatee, endDate: endDatee};
    var response = await postDataAxios(
      `visitors/appVisitorFilter/${getUserData?.minister_id}`,
      body,
    );
    // alert(JSON.stringify(response));
    if (response.status) {
      dispatch(FilterFun(response.result));
      setFilterData(response.result);
      setRefresh(true);
    } else {
      alert('Error in Filtering');
    }
  };

  const FetchRBsheetFilterDataBYLazzyLoading = async () => {
    var namme = '';
    if (name == 'Alphabetically A to Z') {
      setRefresh(false);
      var namme = 'asc';
    } else if (name == 'Alphabetically Z to A') {
      setRefresh(false);
      var namme = 'desc';
    } else if (name == 'Newly Added') {
      setRefresh(false);
      var namme = 'Newelly added';
    }
    var startDatee = '';
    if (from != '') {
      setRefresh(false);
      startDatee = from;
    } else {
      setRefresh(false);
      startDatee = startDate;
    }
    var endDatee = '';
    if (to != '') {
      setRefresh(false);
      endDatee = to;
    } else {
      setRefresh(false);
      endDatee = endDate;
    }

    var location_type = '';
    if (RBDropDownLocation == 'Public meetings') {
      setRefresh(false);
      var location_type = RBDropDownLocation;
    } else if (RBDropDownLocation == 'Field visits') {
      setRefresh(false);
      var location_type = RBDropDownLocation;
    } else if (RBDropDownLocation == 'Mantralaya') {
      setRefresh(false);
      var location_type = RBDropDownLocation;
    } else if (RBDropDownLocation == 'Vidhansabha') {
      setRefresh(false);
      var location_type = RBDropDownLocation;
    } else if (RBDropDownLocation == 'Jasdhan') {
      setRefresh(false);
      var location_type = RBDropDownLocation;
    } else if (RBDropDownLocation == 'Residence') {
      setRefresh(false);
      var location_type = RBDropDownLocation;
    }
    // alert(location_type)

    let body = {
      order: namme,
      startDate: startDatee,
      endDate: endDatee,
      // limit: 5,
      // offset: offset1,
      location_type: location_type,
    };
    var limit = 5;
    var offset = offset1;
    
    var response = await postDataAxios(
      `visitors/appVisitorFilter/${getUserData?.minister_id}`,
      body,
    );
    // alert(JSON.stringify(response.status));
    // console.log('====================================');
    // console.log(response.result);
    // console.log('====================================');
    if (response.status) {
      // const combineArray = [...filterData, ...response.result];
      // dispatch(FilterFun(response.result));
      // console.log('combineArray',combineArray);
      setFilterData(response.result);
      setRefresh(true);
      setLoading(true);
    } else {
      alert('Error in Filtering');
      setLoading(false);
    }
    // if(response.result==''||response.result==undefined||response.result==null){
    //   setLoading(false)
    // }
  };

  const getUserDataByAsyncStorage = async () => {
    const userData = await getStoreData('userData');
    setUserDataByAsync(userData);
  };
  // console.log('====================================');
  //     console.log('visitor_Data_outFun>>>>>',getVisitorData);
  //     console.log('====================================');
  const fetchAllVisitorData = async () => {
    const userData = await getStoreData('userData');
    var data = await getDataAxios(
      `visitors/displayVisitors/${userData?.minister_id}`,
    );

    if (data.status) {
      setVisitorData(data.result);
      // alert(JSON.stringify(data?.result));
      setRefresh(true);
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
    // fetchAllVisitorData();
  }, [show, selectedIndex]);
  useEffect(() => {}, [show]);
  useEffect(() => {
    fetchAllVisitorData();
  }, []);

  const getData = async () => {
    const userData = await getStoreData('userData');
    var data = await getDataAxios(
      `visitors/displayAppVisitors/${userData?.minister_id}/${5}/${offset}`,
    );
    // console.log('====================================');
    // console.log('>>>>>>>>>>>ddddd>>>>>>>>>>',data.result);
    // console.log('====================================');
    if (data.status) {
      const combineArray = [...getdata, ...data.result];
      setData(combineArray);
      setRefresh(true);
      setLoading(true);
    } else {
      setLoading(false);
    }
    // if(data.result==''||data.result==undefined||data.result==null){
    //   setLoading(false)
    // }
  };

  useEffect(() => {
    getData();
  }, [offset, selectedIndex]);

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
          rightContent={language['Visits']}
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
          values={[language['Ongoing'], language['Completed']]}
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginBottom: 135, marginTop: 7}}>
          <View>
            {selectedIndex == 0 && (
              <View>
                {refresh ? (
                  <VisitorDetails
                    setLoading={setLoading}
                    loading={loading}
                    setOffset={filterData != '' ? setOffset1 : setOffset}
                    offset={filterData != '' ? offset1 : offset}
                    data={filterData != '' ? filterData : getdata}
                  />
                ) : (
                  <ActivityIndicator color="#1e70bf" size="large" />
                )}
              </View>
            )}
            {selectedIndex == 1 && (
              <View>
                {refresh ? (
                  <VisitorDetailsShow
                    setLoading={setLoading}
                    loading={loading}
                    setOffset={filterData != '' ? setOffset1 : setOffset}
                    offset={filterData != '' ? offset1 : offset}
                    data={filterData != '' ? filterData : getdata}
                  />
                ) : (
                  <ActivityIndicator color="#1e70bf" size="large" />
                )}
              </View>
            )}
          </View>
        </ScrollView>
      </View>
      <>
        {
          <RbeSheet
            DropDownData={DropDownData}
            setRBDropDownLocationValue={setRBDropDownLocationValue}
            setRBDropDownLocation={setRBDropDownLocation}
            RBDropDownLocation={RBDropDownLocation}
            RBDropDownLocationValue={RBDropDownLocationValue}
            refRBSheet={refRBSheet}
            setMonth={setMonth}
            filterLocation={filterLocation}
            setFilterLocation={setFilterLocation}
            month={month}
            setName={setName}
            setFrom={setFrom}
            setTo={setTo}
            doneonPress={() => {
              FetchRBsheetFilterDataBYLazzyLoading();
              refRBSheet.current.close();
            }}
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
