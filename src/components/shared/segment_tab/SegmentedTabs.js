import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {useFocusEffect} from '@react-navigation/native';

// import { FontFamily } from '../../../assets/fonts/FontFamily';

// import {Colors} from '../../../assets/config/Colors';

const SegmentedTab = ({component1, component2, WIDTHSEG, values}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [index, setIndex] = useState(0);

  const [container, setContainer] = useState(<>{component1}</>);
  const handleSingleIndexSelect = index => {
    setSelectedIndex(index);
    if (index == 1) {
      setIndex(1);
    } else {
      setIndex(0);
    }
  };

  // useEffect(() => {
  //   if (index == 0) {
  //     setContainer(component1);
  //   } else {
  //     setContainer(component2);
  //   }
  // }, [index]);

  useFocusEffect(
    useCallback(() => {
      if (index == 0) {
        setContainer(component1);
      } else {
        setContainer(component2);
      }
    }, [index]),
  );

  return (
    <View style={{width: '100%', flex: 1}}>
      <SegmentedControlTab
        values={values}
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
          width: WIDTHSEG,
          alignSelf: 'center',
        }}
        tabTextStyle={{
          //  fontFamily: FontFamily.PopinsMedium,

          fontSize: 14,
          //   color: Colors.grey,
          color: 'grey',
        }}
        activeTabTextStyle={{color: '#FFF', fontSize: 14}}
        onTabPress={handleSingleIndexSelect}
      />
      <View style={{width: '100%', top: 5, flex: 1}}>{container}</View>
    </View>
  );
};

export default SegmentedTab;

const styles = StyleSheet.create({});

SegmentedTab.defaultProps = {
  component1: <Text>COmponent1</Text>,
  component2: <Text>COmponent2</Text>,
  values: ['Ongoing', 'Completed'],
};
