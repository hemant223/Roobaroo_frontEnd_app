import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {FontFamily} from '../../../assets/fonts/FontFamily';
import {ImagesAssets} from '../ImageAssets';
import SearchBar from '../searchbar/SearchBar';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import { getStoreData } from '../../../helper/utils/AsyncStorageServices';
const SubHeader = props => {
  const navigation = useNavigation();
  const [getuserData, setuserData] = React.useState([])
  const [locationshow, setLocationshow] = React.useState(props?.locationData);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: props.backgroundColor,
      //backgroundColor:props.backgroucColor
      height: props.height,
      borderBottomLeftRadius: props.borderBottomLeftRadius,
      borderBottomRightRadius: props.borderBottomRightRadius,
      // justifyContent:'center'
    },

    Menu: {width: 32, height: 32, left: 8},
    profile: {width: 34, height: 34, borderRadius: 30, left: '6%'},
  });
  const getUserDataByAsyncStorage=async()=>{
    const userData = await getStoreData('userData');
    setuserData(userData)
  }
  useEffect(() => {
    getUserDataByAsyncStorage()
  }, [])


  return (
    <>
      <View style={{...styles.container}}>
        <View
          style={{
            // backgroundColor: 'green',
            flexDirection: 'row',
            // alignItems: 'center',
            top: 45,
            justifyContent: 'space-between',
          }}>



          <View
            style={{
              // backgroundColor: '#fff',
              // width: '90%',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              style={{
                // top: props.arrowtop,
                // flexDirection: 'row',
                // width: '9%',
                // top: 0,
                // backgroundColor: 'red',
                // justifyContent:'flex-start'
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
                  // width: '10%',

                  // backgroundColor: 'yellow',
                  flexDirection: 'row',
                  marginLeft:10

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
                      // width: '800%',
                      // backgroundColor: 'yellowgreen',
                      flexDirection: 'column',
                      marginLeft:10
                    }}>
                    <Text style={{fontWeight: 'bold', color: '#fff'}}>
                     {getuserData.firstname} {getuserData.lastname}
                    </Text>
                    <TouchableOpacity
                      onPress={props.locationonPress}
                      style={{width: '100%', flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontFamily: FontFamily.PopinsMedium,
                          color: '#fff',
                        }}>
                        {props?.locationData
                          ? props?.locationData
                          : 'Select Location'}
                      </Text>
                      <Ionicons
                        onPress={props.arrowPress}
                        name="keyboard-arrow-down"
                        color="#fff"
                        size={22}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
           
          </View>

         

          <View style={{justifyContent:'center',
          // backgroundColor:'red',
          marginRight:10}}>

            <Ionicons
              onPress={props.searchPress}
              name="search"
              color="#fff"
              size={22}
            />
          </View>



        </View>

       
      </View>
    </>
  );
};

export default SubHeader;

SubHeader.defaultProps = {
  backgroundColor: '#005db6',
  height: 150,
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
};

// <SubHeader
// MenuIcon
// profile
// rightText
// rightContent='Tarun Bhadoriya'

// />
