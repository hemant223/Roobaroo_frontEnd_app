import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {FontFamily} from '../../assets/fonts/FontFamily';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '../../assets/config/Colors';
import { ImagesAssets } from '../../components/shared/ImageAssets';
import {
  useNavigation,
} from '@react-navigation/native';
import { getDataAxios } from '../../fetchNodeServices';
const DATA = [
  {
    id: '1',
    name: 'Partho Parekh',
    date: '11:56 am 25 Mar 2023',
    mobile: '7985109164',
  },
  {
    id: '2',
    name: 'Parthmesah Kumar',
    date: '11:56 am 25 Mar 2023',
    mobile: '7985109164',
  },
  //   {
  //     id: '3',
  //     title: 'Rishi',

  //   },
];

const Item = ({item,navigation}) => {
  return (
    <>
      <TouchableOpacity onPress={()=>{navigation.navigate('ViewVisit',{visitordata:item})}}  style={styles.mainContainer}>
        <View
          style={{
            width: '100%',
            // height: 30,
            // backgroundColor: 'skyblue',
            bottom: 4,
          }}>
          <Text style={styles.textCss}>{item.firstname} {item.lastname}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            // height: 20,
            // backgroundColor: 'yellowgreen',
            bottom: 4,
          }}>
          <View style={{top: 2,width:'6%',
          // backgroundColor:'yellow'
          }}>
            {/* <MCIcon name="calendar-month-outline" color={'#186cbd'} size={15} /> */}
            <Image
              source={ImagesAssets.Calender}
              style={{
               ...styles.Calender
                // marginHorizontal: isLandscape ? 5 : 5,
              }}
              resizeMode={'center'}
            />
          </View>
          <Text
            style={{
              left: 5,
              fontFamily: FontFamily.PopinsRegular,
              // fontSize: FontSize.small,
              color: Colors.black,
              top:'0.8%'
            }}>
            {item.time}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            // height: 20,
            // backgroundColor: 'yellowgreen',
            bottom: 2,
          }}>
          <View style={{top: 2,width:'6%',}}>
            {/* <MCIcon name="cellphone" color={'#186cbd'} size={15} /> */}

            <Image
              source={ImagesAssets.mobileImage}
              style={{
               ...styles.mobileCss
                // marginHorizontal: isLandscape ? 5 : 5,
              }}
              resizeMode={'center'}
            />

          </View>
          <Text
            style={{
              left: 5,
              fontFamily: FontFamily.PopinsRegular,
              // fontSize: FontSize.small,
              color: Colors.black,
            }}>
            {item.VisitorMobile}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const VisitorDetails = props => {
  const navigation = useNavigation()
  // const [visitorData, setVisitorData] = useState([])
  // console.log('====================================');
  // console.log('data on VisitorDetailss page:',props.data);
  // console.log('====================================');

  // const getVisitorData=async()=>{
  //   var response = await getDataAxios(`visitors/displayVisitors/${props.data.MinisterId}`)
  //   setVisitorData(response.result)
  //   console.log('====================================');
  //   console.log('respone data of visitor:',response.result);
  //   console.log('====================================');
  // }
// alert(JSON.stringify(props.data))
  // useEffect(() => {
  //  getVisitorData()
  // }, [])
  

  // let numColumns = 3;
  return (
    <>
      <View>
        <FlatList
          // numColumns={numColumns}
          data={props.data}
          renderItem={({item, index}) => <Item item={item} indx={index} navigation={navigation} />}
          keyExtractor={item => item.id}
          // contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
          scrollEnabled={true}
        />
      </View>
    </>
  );
};

export default VisitorDetails;

VisitorDetails.defaultProps = {
  VisitorDetailsData: DATA,
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 16,
    // marginLeft: 10,
    borderWidth: 1,
    borderColor: Colors.borderColor1,
    position: 'relative',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    height: 120,
    alignSelf:'center'
    // elevation: 1,
    // borderColor:Colors.borderColor1
  },
  mciIconCss: {
    color: '#ff2a2a',
    fontWeight: 'bolder',
  },
  imageCss: {
    height: '100%',
    width: '100%',
    // marginTop: 20,
    // marginLeft: 45,
    // backgroundColor: 'red'
  },
  textCss: {
    color: '#186cbd',

    fontFamily: FontFamily.Popinsbold,
    // fontSize: FontSize.small,
    // backgroundColor: 'yellow',
  },
  //   numericInputCss: {
  //     alignSelf: 'center',
  //   },
  Calender:{
    width:16,
    height:25,
    // backgroundColor:'red'
  },
  mobileCss:{
    width:16,
    height:19,
    // backgroundColor:'red'
  },
});
