import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FontFamily} from '../../../assets/fonts/FontFamily';
// import {Dimensions} from 'react-native';
// const width = Dimensions.get('screen').width;
// const height = Dimensions.get('screen').height;
const Header = props => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: props.backgroundColor,
      //backgroundColor:props.backgroucColor
      height: props.height,
      borderBottomLeftRadius: props.borderBottomLeftRadius,
      borderBottomRightRadius: props.borderBottomRightRadius,
    },
    addCss: {
      color: '#fff',
      right: props.addright,
      bottom: props.addbottom,
    },

    iconDownCss: {
      color: '#fff',
      right: props.DownIconRight,
      bottom: props.DownBottom,
    },
    upCss: {
      color: '#fff',
      right: props.upRight,
      bottom: props.upBottom,
    },
    centerCss: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
 

      bottom: props.verifyBottom,
    },
  });
  return (
    <>
      <View style={{...styles.container}}>
        <TouchableOpacity style={{top: 14, flexDirection: 'row', width: '9%'}}>
          <Ionicons
            onPress={props.arrowPress}
            name={props.iconarrow}
            color="#fff"
            size={32}
          />
        </TouchableOpacity>
        <View style={{bottom: 13, width: '10%', left: 32}}>
          {props.rightText && (
            <View style={{justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold', color: '#fff'}}>
                {props.rightContent}{' '}
              </Text>
            </View>
          )}
        </View>
        {props.stepText && (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              bottom: props.stepBottom,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 14,
                fontFamily: FontFamily.PopinsExtraLight,
              }}>
              {' '}
              {props.stepContent}
            </Text>
          </View>
        )}
        {props.centerText && (
          <View
            style={{
              ...styles.centerCss,
            }}>
            <Text style={{fontFamily:FontFamily.PopinsRegular, color: '#fff',fontSize:20}}>
              {props.centerContent}
            </Text>
          </View>
        )}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            bottom: 11,
          }}>
          {props.add && (
            <Ionicons
              onPress={props.addonPress}
              name={props.iconAdd}
              size={34}
              style={{...styles.addCss}}
            />
          )}

          {props.iconupdown && (
            <TouchableOpacity style={{alignContent: 'space-between'}}>
              <FontAwesome
                name={props.iconDown}
                size={22}
                style={{...styles.iconDownCss}}
              />

              <FontAwesome
                onPress={props.updownPress}
                name={props.iconUp}
                size={22}
                style={{...styles.upCss}}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

export default Header;

Header.defaultProps = {
  backgroundColor: '#005db6',

  height: '9%',
  iconAdd: 'ios-add',
  iconDown: 'caret-down',
  iconarrow: 'arrow-back',
  iconUp: 'caret-up',
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
  rightContent: 'Visits',
  stepContent: 'Step01',
  centerContent: 'Verify Number',
  addright: 22,
  addbottom: 67,
  DownIconRight: 12,
  DownBottom: 58,
  upRight: 12,
  upBottom: 90,
  verifyBottom: 33,
  stepBottom: 33,
};
