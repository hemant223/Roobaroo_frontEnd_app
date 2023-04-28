import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView 
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import {FontFamily} from '../../../assets/fonts/FontFamily';
import {ImagesAssets} from '../ImageAssets';
import SearchBar from '../searchbar/SearchBar';
const SubHeader = props => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: props.backgroundColor,
      //backgroundColor:props.backgroucColor
      height: props.height,
      borderBottomLeftRadius: props.borderBottomLeftRadius,
      borderBottomRightRadius: props.borderBottomRightRadius,
    },

    Menu: {width: 32, height: 32, left: 8},
    profile: {width: 34, height: 34, borderRadius: 30, left: '6%'},
  });
  return (
    <>
      <View style={{...styles.container}}>
        <TouchableOpacity
          style={{
            top: props.arrowtop,
            flexDirection: 'row',
            width: '9%',
            top: '9%',
          }}>
          {props.MenuIcon && (
            <Image
              source={ImagesAssets.HeaderMenuIcon}
              style={{
                ...styles.Menu,
                // marginHorizontal: isLandscape ? 5 : 5,
              }}
              resizeMode={'center'}
            />
          )}
        </TouchableOpacity>

        <View
          style={{
            // bottom: 20,
            width: '30%',
            left: 42,
            // backgroundColor: 'red',
            flexDirection: 'row',
            height: '50%',
          }}>
          {props.profile && (
            <Image
              source={ImagesAssets.Modi}
              style={{
                ...styles.profile,
                // marginHorizontal: isLandscape ? 5 : 5,
              }}
              resizeMode={'center'}
            />
          )}

          {props.rightText && (
            <View
              style={{
                justifyContent: 'center',
                width: '100%',
                bottom: 12,
                left: 4,
                // backgroundColor:'green'
              }}>
              <Text style={{fontWeight: 'bold', color: '#fff', left: '3%'}}>
                {props.rightContent}{' '}
              </Text>
              <View style={{width: '100%', left: '5%', flexDirection: 'row'}}>
                <Text
                  style={{fontFamily: FontFamily.PopinsMedium, color: '#fff'}}>
                  Office
                </Text>
                <Ionicons
                  onPress={props.arrowPress}
                  name={props.iconarrow}
                  color="#fff"
                  size={22}
                />
              </View>
            </View>
          )}
        </View>
        <View
          style={{
            // backgroundColor:'yellowgreen',
            bottom: '22%',
          }}>
          <SearchBar />
        </View>
      </View>
    </>
  );
};

export default SubHeader;

SubHeader.defaultProps = {
  backgroundColor: '#005db6',

  height: '17%',

  iconarrow: 'keyboard-arrow-down',

  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,

  arrowtop: 14,
};
