import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const TestComponent = () => {
  return (
    <View style={{padding:5,margin:5}}>
      <SkeletonPlaceholder borderRadius={4}    >
        <View
          style={{
            height: '70%',
            // borderColor: Colors.borderColor1,
            width: '100%',
            alignSelf:'center',
           
      
          }}>
         
        
        </View>
        

              
      </SkeletonPlaceholder>
    </View>
  );
};

export default TestComponent;

const styles = StyleSheet.create({});
