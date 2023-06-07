import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FontFamily} from '../../../assets/fonts/FontFamily';
import {ImagesAssets} from '../ImageAssets';
import {transparent} from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
// import {Dimensions} from 'react-native';
// const width = Dimensions.get('screen').width;
// const height = Dimensions.get('screen').height;
const CenterHeader = props => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: props.backgroundColor,
      //backgroundColor:props.backgroucColor
      height: props.height,
      borderBottomLeftRadius: props.borderBottomLeftRadius,
      borderBottomRightRadius: props.borderBottomRightRadius,
      justifyContent: 'center',
    },

    centerCss: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    leftArrow: {
      width: 30,
      height: 30,
      //   left: 6,
      marginLeft: 10,
    },
  });
  return (
    <>
      {/* <StatusBar hidden={false} translucent backgroundColor='transparent'/> */}
      <View style={{...styles.container}}>
        <View
          style={{
            // backgroundColor: 'green',
            // height: '50%',z
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent:'center',
            marginTop: 40,
          }}>
          <View
            style={{
              width: '42%',
              // backgroundColor: 'yellow',
            }}>
            <TouchableOpacity
              style={{
                width: '25%',
              }}
              onPress={props.onPressBackArrow}>
              <Image
                source={ImagesAssets.arrowLeft}
                style={{
                  ...styles.leftArrow,
                }}
                resizeMode={'center'}
              />
            </TouchableOpacity>
          </View>
         
          <View style={{}}>
            {props.stepText && (
              <View style={{marginBottom:11}}>
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


{props.ViewVisit&&(<View
            style={{
              ...styles.centerCss,
                // backgroundColor: 'red',
                right:15,
              bottom: 12,
            }}>
            <Text
              style={{
                fontWeight: 'bold', fontSize:19, color: '#fff'
               
              }}>
              {props.viewText}
            </Text>
          </View>)}


          </View>
        </View>
        {props.centerText && (
          <View
            style={{
              ...styles.centerCss,
                // backgroundColor: 'red',
              bottom: 19,
            }}>
            <Text
              style={{
                fontFamily: FontFamily.PopinsRegular,
                color: '#fff',
                fontSize: 20,
              }}>
              {props.centerContent}
            </Text>

            




          </View>
        )}
      </View>
    </>
  );
};

export default CenterHeader;

CenterHeader.defaultProps = {
  backgroundColor: '#005db6',
  height: 90,

  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
  stepContent: 'Step01',
  centerContent: 'Verify Number',
  
};

{
  /* <CenterHeader
centerText
stepText
onPressBackArrow={() => {
  alert('hii');
}}
/> */
}
