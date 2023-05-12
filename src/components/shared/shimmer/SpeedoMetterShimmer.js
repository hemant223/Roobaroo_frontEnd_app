import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const SpeedoMetterShimmer = () => {
  return (
    <View style={{padding:5,margin:5,width:'100%',height:'100%',top:30  }}>
      <SkeletonPlaceholder borderRadius={4}  speed={600} >
        <View
          style={{
            height: '90%',
            // borderColor: Colors.borderColor1,
            width: '100%',
            alignSelf:'center',
           
      
          }}>
         
        
        </View>
        

              
      </SkeletonPlaceholder>
    </View>
  );
};

export default SpeedoMetterShimmer;

const styles = StyleSheet.create({});
