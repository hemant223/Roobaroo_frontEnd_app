import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const SpeedoMetterShimmerTwo = () => {
  return (
    
      <SkeletonPlaceholder borderRadius={4} speed={600}>
        <View
          style={{
            width: 300,
            padding: 5,
            margin: 5,
            height: '95%',
          }}></View>
      </SkeletonPlaceholder>
   
  );
};

export default SpeedoMetterShimmerTwo;

const styles = StyleSheet.create({});
