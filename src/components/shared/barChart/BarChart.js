import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
} from 'victory-native';
import {Colors} from '../../../assets/config/Colors';
import {FontFamily} from '../../../assets/fonts/FontFamily';
import FilterDropdown from '../dropdowns/FilterDropdown';
import {getDataAxios} from '../../../fetchNodeServices';
import {getStoreData} from '../../../helper/utils/AsyncStorageServices';
import SpeedoMetterShimmer from '../shimmer/SpeedoMetterShimmer';
import {useSelector} from 'react-redux';
import moment from 'moment';
const data = [];

export default function SingleBarChart(props) {
  const [getUserData, setUserDataByAsync] = useState([]);
  const [shimmer, setShimmer] = useState(true);
  const [last_Week, setLast_Week] = useState();
  const [filterSelected, setFilterSelected] = useState(1);
  const [referesh, setReferesh] = useState(false)


  const [current_Week, setCurrent_Week] = useState('');
  var location = useSelector(state => state.locationReducer.location);
 
  const fetchVisitor = async () => {
    setShimmer(true)
    const userData = await getStoreData('userData');
    var data = await getDataAxios(`users/fetchUserDetail/${userData?.id}`);
    var location_type = '';

    if (data.result[0].user_location != '') {
      var location_type = data.result[0].user_location;
    } else {
     
      location_type='undefined'
    }
        // alert(location_type)
    const startDate = moment()
      .subtract(1, 'weeks')
      .startOf('isoWeek')
      .format('YYYY-MM-DD');
      const endDate = moment()
      .subtract(1, 'weeks')
      .endOf('isoWeek')
      .format('YYYY-MM-DD');
      var response = await getDataAxios(
        `visitors/todayVisitor/${userData?.id}/${startDate}/${endDate}/${location?location:location_type}`,
        );
        
        var aa = response.data;

    console.log(aa)
    setLast_Week(aa);
    setShimmer(false);
  };

  useEffect(() => {
    fetchVisitor();
  }, [location]);

  const fetchVisitorCureent_Week = async () => {
    const userData = await getStoreData('userData');

    var data = await getDataAxios(`users/fetchUserDetail/${userData?.id}`);
    // alert(JSON.stringify(data.result[0].user_location))
    var location_type = '';
    if (data.result[0].user_location != '') {
      var location_type = data.result[0].user_location;
    } else {
      location_type='undefined'
    }

    // alert(location_type)
    var startDate = moment().isoWeekday('Monday').format('YYYY-MM-DD');

    var endDate = moment().format('YYYY-MM-DD');

    var response = await getDataAxios(
      `visitors/todayVisitor/${userData.id}/${startDate}/${endDate}/${location_type}`,
    );

    var yy = response.data;

    setCurrent_Week(yy);
    // console.log(yy)
    setShimmer(false);
  };

  useEffect(() => {
    fetchVisitorCureent_Week();
  }, []);

  return (
    <View
      style={{
        ...styles.container,
        height: 'auto',
        width: '95%',
        margin: 3,
        padding: 5,
        position: 'relative',
      }}>
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          // backgroundColor: 'red',
          // justifyContent: 'flex-start',
          top: '4%',
          // marginTop:10,
          // padding: 0,
          paddingHorizontal: 10,
          // margin: 5,
          flexDirection: 'row',
          width: '100%',
          height: 25,
          // backgroundColor:'red',s
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{}}>
          <Text
            style={{
              color: '#000',
              fontFamily: FontFamily.TTCommonsMedium,
              fontSize: 17,

              // backgroundColor:"yellow"
            }}>
            Visitors trend
          </Text>
        </View>
        <View style={{marginTop: 10, height: 20}}>
          <FilterDropdown
            onValueChange={txt => {
              setFilterSelected(txt.id);
            }}
          />
        </View>
      </View>
      {shimmer ? (
        <>
          <SpeedoMetterShimmer />
        </>
      ) : (
        <VictoryChart
          width={props.width}
          height={props.height}
          theme={VictoryTheme.material}
          domainPadding={20}>
          <VictoryBar
            data={filterSelected == 1 ? last_Week : current_Week}
            x={props.x}
            y={props.y}
            style={{data: {fill: props.barColor}}}
            animate={{
              duration: 2000,
              onLoad: {duration: 1500},
            }}
            labels={true}
            labelComponent={<VictoryLabel text={({datum}) => [`${datum.y}`]} />}
            // height={400}
          />
        </VictoryChart>
      )}
    </View>
  );
}

SingleBarChart.defaultProps = {
  barColor: '#fea90d',
  data: data,
  // x_key_name: 'x',
  // y_key_name: 'y',
  width: 350,
  height: 200,
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Colors.borderColor1,
    // elevation: 1,
    // height:'auto'
  },
});
