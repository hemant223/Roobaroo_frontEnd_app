import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const SpeedoMetterShimmerTwo = () => {
  return (
    <View style={{ width:350,height:'100%'}}>
       
      <SkeletonPlaceholder borderRadius={4}  speed={600} >
        <View
          style={{
            width:350,height:'100%'
           
      
          }}>
         
        
        </View>
        

              
      </SkeletonPlaceholder>
    </View>
  );
};

export default SpeedoMetterShimmerTwo;

const styles = StyleSheet.create({});
