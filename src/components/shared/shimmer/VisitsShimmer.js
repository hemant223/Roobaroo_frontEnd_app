import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const SpeedoMetterShimmer = () => {
  return (
    <View
      style={{
        padding: 5,
        margin: 5,
        width: '100%',
        height: 120,
        borderRadius: 20,
        backgroundColor: '#fff',
      }}>
      <SkeletonPlaceholder borderRadius={4} speed={600}>
        <View
          style={{
            width: 150,
            height: 20,
            top: 5,
            left:7,
          }}></View>
         <View
          style={{
            width: 250,
            height: 70,
            top: 20,
            left:7,
            
          }}></View>
       
      </SkeletonPlaceholder>
    </View>
  );
};

export default SpeedoMetterShimmer;

const styles = StyleSheet.create({});
