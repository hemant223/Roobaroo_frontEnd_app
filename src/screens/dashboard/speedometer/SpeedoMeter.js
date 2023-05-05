import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {RadialSlider} from 'react-native-radial-slider';
import {getDataAxios} from '../../../fetchNodeServices';

const SpeedoMeter = () => {
  const [data, setData] = useState(0);
  const [shimmer, setShimmer] = useState(true);

  // alert(data);

  const fetchVisitor = async () => {
    try {
      var response = await getDataAxios(`visitors/todayVisitor/${37}`);
      // console.log('RESPONSE', response);
      // alert(JSON.stringify(response));
      console.log(
        '12 Line in Speedometer===========>123',
        response.todayVisitor[0].TodayVisitorCount,
      );
      setData(response.todayVisitor[0].TodayVisitorCount);
      setShimmer(false);
    } catch (err) {
      console.error('Catch Error ', err);
      setShimmer(false);
    }
  };
  // alert(data);
  useEffect(() => {
    fetchVisitor();
  });

  return (
    <View style={styles.container}>
      {shimmer ? (
        <></>
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
