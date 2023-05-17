import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FontFamily} from '../../../assets/fonts/FontFamily';
import {ImagesAssets} from '../ImageAssets';
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
      // right: props.addright,
      // bottom: props.addbottom,
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
    leftArrow: {
      width: 30,
      height: 30,
      left: 6,
    },
  });
  return (
    <>
      <View
        style={{
          ...styles.container,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <TouchableOpacity
            onPress={props.BackonPress}
            style={{
              width: '17%',
              /* backgroundColor: 'red',  */ marginLeft: 10,
              bottom: props.bottom,
            }}>
            <Image
              source={ImagesAssets.arrowLeft}
              style={{
                ...styles.leftArrow,
                // marginHorizontal: isLandscape ? 5 : 5,
              }}
              resizeMode={'center'}
            />
          </TouchableOpacity>

          <View
            style={{
              width: '50%',
              marginLeft: 10 /*  backgroundColor: 'red' */,
            }}>
            {props.rightText && (
              <View style={{justifyContent: 'center'}}>
                <Text style={{fontWeight: 'bold', color: '#fff'}}>
                  {props.rightContent}{' '}
                </Text>
              </View>
            )}
          </View>
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <View
            style={{
              marginRight: 10,
            }}>
            {props.add && (
              <TouchableOpacity onPress={props.addonPress}>
                <Ionicons
                  name={props.iconAdd}
                  size={34}
                  style={{...styles.addCss}}
                />
              </TouchableOpacity>
            )}
          </View>

         {props.sort && <View
            style={{
              marginRight: 10,
            }}>
              <TouchableOpacity
            onPress={props.sortonPress}
           >
            <Image
              source={ImagesAssets.sort}
              style={{
                width:16,
                height:22
                // ...styles.leftArrow,
                // marginHorizontal: isLandscape ? 5 : 5,
              }}
              // resizeMode={'center'}
            />
          </TouchableOpacity>

          </View>}

        </View>
      </View>
    </>
  );
};

export default Header;

Header.defaultProps = {
  backgroundColor: '#005db6',

  height: 90,
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
  arrowtop: 35,
};
