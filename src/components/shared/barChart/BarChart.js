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

const data = [
  {x: 'Sun', y: 5},
  {x: 'Mon', y: 4},
  {x: 'Tue', y: 3},
  {x: 'Wed', y: 2},
  {x: 'Thu', y: 1},
  {x: 'Fri', y: 3},
  {x: 'Sat', y: 2},
];

export default function SingleBarChart(props) {
  const [weekly_Count, setWeekly_Count] = useState();

  // alert (weekly_Count);

  const fetchVisitor = async () => {
    let body = {
      startDate: '2023-05-01',
      endDate: '2023-05-08',
    };
    var response = await getDataAxios(`visitors/todayVisitor/${37}`, body);
// console.log(response)
//     console.log(
//       'BarChart Component mein 30 Line==========>',
//       response.obj.label
//     );

    var aa = response.obj.datasets[0].data;
    const count=aa.length
    // console.log(count)
    setWeekly_Count(count);
  };


 
    fetchVisitor();
  
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
          //   backgroundColor: 'red',
          alignSelf: 'flex-start',
          top: '4%',
          padding: 1,
          margin: 5,
          flexDirection: 'row',
          width: '100%',
          //   backgroundColor:'red'
        }}>
        <Text
          style={{
            color: '#000',
            fontFamily: FontFamily.TTCommonsMedium,
            fontSize: 17,
          }}>
          Visitors trend
        </Text>
        <View
          style={{
            top: 3,
            // backgroundColor:'yellowgreen',
            width: '70%',
            alignItems: 'flex-end',
          }}>
          <FilterDropdown />
        </View>
      </View>
      <VictoryChart
        width={props.width}
        height={props.height}
        theme={VictoryTheme.material}
        domainPadding={20}>
        <VictoryBar
          data={props.data}
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
    </View>
  );
}

SingleBarChart.defaultProps = {
  barColor: '#fea90d',
  data: data,
  x_key_name: 'x',
  y_key_name: 'y',
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
