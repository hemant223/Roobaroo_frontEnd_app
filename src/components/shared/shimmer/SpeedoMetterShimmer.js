import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const SpeedoMetterShimmer = () => {
  return (
    <View
      style={{padding: 5, margin: 5, width: '100%', height: 200,}}>
      <SkeletonPlaceholder borderRadius={4} speed={600}>
      
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: '85%',
            justifyContent: 'space-evenly',
            left:13,
            top:50,
           
          
          }}>
          <View
            style={{
              height: '90%',
              // borderColor: Colors.borderColor1,
              width: '1%',
             right:20
            }}></View>



          <View
            style={{
              height: '90%',
              // borderColor: Colors.borderColor1,
              width: '5%',
             
            }}></View>



          <View
            style={{
              height: '90%',
              // borderColor: Colors.borderColor1,
              width: '5%',
              
            }}></View>



          <View
            style={{
              height: '90%',
              // borderColor: Colors.borderColor1,
              width: '5%',
            }}></View>



          <View
            style={{
              height: '90%',
              // borderColor: Colors.borderColor1,
              width: '5%',
            }}></View>



          <View
            style={{
              height: '90%',
              // borderColor: Colors.borderColor1,
              width: '5%',
            }}></View>



          <View
            style={{
              height: '90%',
              // borderColor: Colors.borderColor1,
              width: '5%',
            }}></View>




          <View
            style={{
              height: '90%',
              // borderColor: Colors.borderColor1,
              width: '5%',
            }}></View>



        </View>
        <View
            style={{
              height: '1%',
              // borderColor: Colors.borderColor1,
              width: '90%',
              top:37,
              left:14,
            }}></View>


      </SkeletonPlaceholder>
    </View>
  );
};

export default SpeedoMetterShimmer;

const styles = StyleSheet.create({});
