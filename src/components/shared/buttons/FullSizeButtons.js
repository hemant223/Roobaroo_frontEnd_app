import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
  } from 'react-native';
  import React from 'react';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
  const {width} = Dimensions.get('window');
  export default FullSizeButtonnPractice = props => {
    const styles = StyleSheet.create({
      buttonStyle: {
        width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: props.borderRadius,
      },
    });
    return (
      <View>
        <TouchableOpacity onPress={props.onPress}>
          <View style={{...styles.buttonStyle}}>
            <Text style={{color: props.titleColor, fontSize: props.fontSize}}>
              <Icon name={props.rightIcon} size={props.rightsize}  />
              {props.title}
              <Icon name={props.icon} size={props.leftSize}/>
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  
  FullSizeButtonnPractice.defaultProps = {
    height: 45,
    width: width * 0.9,
    backgroundColor: '#005db6',
    borderRadius: 10,
    title: 'submit',
    
  //   fontSize:22,
  //   rightsize:30
  };
  