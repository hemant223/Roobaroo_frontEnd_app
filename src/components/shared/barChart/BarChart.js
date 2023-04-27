import React from 'react';
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

const data = [
  {x: 'Sun', y: 60},
  {x: 'Mon', y: 30},
  {x: 'Tue', y: 20},
  {x: 'Wed', y: 10},
  {x: 'Thu', y: 5},
  {x: 'Fri', y: 15},
  {x: 'Sat', y: 2},
];

export default function SingleBarChart(props) {
  return (
    <View
      style={{
        ...styles.container,
        height: '25%',
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
          top: '6%',
          left: 35,
          flexDirection: 'row',
          width: '93%',
        }}>
        <Text
          style={{
            color: '#000',
            fontFamily: FontFamily.TTCommonsMedium,
            fontSize: 17,
          }}>
          Visitors trend
        </Text>
        <View style={{justifyContent: 'flex-end', left: 145, top: 3}}>
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
    elevation: 1,
  },
});
