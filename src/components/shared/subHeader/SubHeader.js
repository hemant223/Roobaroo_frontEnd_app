import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView ,
  KeyboardAvoidingView
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import {FontFamily} from '../../../assets/fonts/FontFamily';
import {ImagesAssets} from '../ImageAssets';
import SearchBar from '../searchbar/SearchBar';
import {DrawerActions, useNavigation} from '@react-navigation/native';
const SubHeader = props => {
  const navigation = useNavigation();
  const [locationshow, setLocationshow] = React.useState(props?.locationData)
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
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          style={{
            top: props.arrowtop,
            flexDirection: 'row',
            width: '9%',
            top: '11%',
            // backgroundColor:'red'
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
            top:11,
            // bottom: 20,
            width: '60%',
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
              <TouchableOpacity onPress={props.locationonPress} style={{width: '100%', left: '5%', flexDirection: 'row'}}>
                <Text
                  style={{fontFamily: FontFamily.PopinsMedium, color: '#fff'}}>
                 {props?.locationData?props?.locationData:'Select Location'}
                </Text>
                <Ionicons
                  onPress={props.arrowPress}
                  name={props.iconarrow}
                  color="#fff"
                  size={22}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View
          style={{
            // backgroundColor:'yellowgreen',
            bottom: '15%',
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

  height: 150,

  iconarrow: 'keyboard-arrow-down',

  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,

  arrowtop: 14,
};



// <SubHeader  
// MenuIcon
// profile
// rightText
// rightContent='Tarun Bhadoriya'

// />