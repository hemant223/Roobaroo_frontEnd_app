import React, {useCallback, useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {RadialSlider} from 'react-native-radial-slider';
import {getDataAxios} from '../../../fetchNodeServices';
import {getStoreData} from '../../../helper/utils/AsyncStorageServices';
import {useFocusEffect} from '@react-navigation/native';
import SpeedoMetterShimmerTwo from '../../../components/shared/shimmer/SpeedoMeterShimmerTwo';
const SpeedoMeter = (props) => {
  const [data, setData] = useState(0);
  
  const [shimmer, setShimmer] = useState(true);
  const [getUserData, setUserDataByAsync] = useState([]);

// alert (dasboard_data)

  //  alert(JSON.stringify(data))
  const getUserDataByAsyncStorage = async () => {
    const userData = await getStoreData('userData');
    fetchVisitor(userData.id);
    setUserDataByAsync(userData);
  };
  useEffect(() => {
    getUserDataByAsyncStorage();
  }, []);
  // alert(JSON.stringify(getUserData));

  const fetchVisitor = async id => {
    setShimmer(true);
    try {
      var response = await getDataAxios(
        `visitors/todayVisitor/${id}/2020-05-09/2020-05-09`,
      );
      // console.log('RESPONSE', response);
      // alert(JSON.stringify(response));
      // console.log(
      //   '27 Line in Speedometer===========>',
      //   response.todayVisitor[0].TodayVisitorCount,
      // );
      // alert("response of speedo",JSON.stringify(response))
   setData(response?.todayVisitor[0]?.TodayVisitorCount);
     props.setDashboard_Data(response?.todayVisitor[0]?.TodayVisitorCount)
      setShimmer(false);
    } catch (err) {
      console.error('Catch Error ', err);
      setShimmer(true);
    }
  };
  // alert(data);
  // useEffect(() => {
  //   fetchVisitor();
  // },[]);

  return (
    <View
      style={{
        ...styles.container,
        
       
        

      }}>
      {shimmer ? (
        <>
          <SpeedoMetterShimmerTwo />
        </>
      ) : (
        <RadialSlider
          value={data}
          min={0}
          max={100}
          subTitle="Today's Visitor"
          thumbRadius={50}
          lineColor="grey"
          linearGradient={[{offset: '100%', color: '#5bd5c2'}]}
          disabled={true}
          isHideTailText={true}
          isHideButtons={true}
          isHideSlider={true}
          isHideTitle={true}
          unit=""
          valueStyle={{fontSize: 40, textAlign: 'right'}}
          centerContentStyle={{alignItems: 'center', top: -40}}
          openingRadian={1.55}
          subTitleStyle={{fontWeight: '600', fontSize: 16}}
          stroke="red"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SpeedoMeter;
