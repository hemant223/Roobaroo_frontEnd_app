import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ModalRoot from '../shared/modals/ModalRoot';
import Ad from 'react-native-vector-icons/AntDesign';
import {FontFamily} from '../../assets/fonts/FontFamily';
import {ImagesAssets} from '../shared/ImageAssets';
import {useNavigation} from '@react-navigation/native';
import {storeData} from '../../helper/utils/AsyncStorageServices';
import {useDispatch} from 'react-redux';
import {locationFun} from '../../helper/utils/redux/slices/locationSlice';
import En from 'react-native-vector-icons/Entypo';

const LocationModal = props => {
  const navigation = useNavigation();
  var dispatch = useDispatch();

  // const [showModal, setShowModal] = useState(true);
  const SelectLocationModal = ({navigation}) => {
    // const [showModal, setShowModal] = useState(true)
    const data = [
      {
        id: '1',
        iconName: '',
        title: 'Public meetings',
        color: '#3786eb',
        backgroundColor: '#ecf4fe',
        img: ImagesAssets.Publicmeetings,
      },
      {
        id: '2',
        iconName: '',
        title: 'Field Visits',
        color: '#f9aa4b',
        backgroundColor: '#fff6ec',
        img: ImagesAssets.FiledVisits,
      },
    ];
    const data1 = [
      {
        id: '3',
        iconName: '',
        title: 'Mantralaya',
        color: '#f3747f',
        backgroundColor: '#fcdee0',
        img: ImagesAssets.Mantralaya,
      },
      {
        id: '4',
        iconName: '',
        title: 'Vidhyansaabh',
        color: '#18b797',
        backgroundColor: '#c5ede5',
        img: ImagesAssets.Vidhansabha,
      },
      {
        id: '5',
        iconName: '',
        title: 'Jasdham',
        color: '#d680e6',
        backgroundColor: '#f6d9ff',
        img: ImagesAssets.jasdan,
      },
      {
        id: '6',
        iconName: '',
        title: 'Residence',
        color: '#2fc2e1',
        backgroundColor: '#d5f3f9',
        img: ImagesAssets.Residence,
      },
    ];

    return (
      <View
        style={
          {
            width:'100%',
            alignItems:'center'
          }
        }>
        <View style={{flexDirection: 'row',width:'95%',justifyContent:'space-between'}}>
          <View>
          <Text
            style={{
              color: '#3f85c8',
              fontFamily: FontFamily.Popinssemibold,
              fontSize: 22,
              width: '100%',
              marginLeft: 10,
            }}>
            On-Field
          </Text>
          </View>
          <TouchableOpacity onPress={()=>{props.setShowModal(false)}}>
          <En name={'cross'} style={{color: '#000', fontSize: 22}} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            // backgroundColor: 'red',
          }}>
          {data.map(item => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props.setShowModal(false);
                  navigation.navigate('home', {location: item.title});
                  storeData('Location', {location: item.title});
                  dispatch(locationFun(item.title));
                }}
                key={item.id}
                style={{
                  width: '45%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: item.backgroundColor,
                  borderRadius: 10,
                  margin: 5,
                  padding: 10,
                }}>
                <View
                  style={{
                    width: 70,
                    height: 70,
                    backgroundColor: item.color,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.img}
                    resizeMode="contain"
                    style={{width: 40, height: 40}}
                  />
                </View>
                <Text
                  style={{
                    color: '#000',
                    fontFamily: FontFamily.Popinssemibold,
                    fontSize: 12,
                    marginTop: 4,
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Text
          style={{
            color: '#3f85c8',
            fontFamily: FontFamily.Popinssemibold,
            fontSize: 22,
            width: '100%',
            marginLeft: 10,
          }}>
          Office
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            // backgroundColor: 'red',
          }}>
          {data1.map(item => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props.setShowModal(false);
                  navigation.navigate('home', {location: item?.title});
                  storeData('Location', {location: item.title});
                  dispatch(locationFun(item.title));
                }}
                key={item.id}
                style={{
                  width: '45%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: item.backgroundColor,
                  //   height: '60%',
                  borderRadius: 10,
                  margin: 5,
                  padding: 10,
                }}>
                <View
                  style={{
                    width: 70,
                    height: 70,
                    backgroundColor: item.color,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.img}
                    resizeMode="contain"
                    style={{width: 40, height: 40}}
                  />
                </View>
                <Text
                  style={{
                    color: '#000',
                    fontFamily: FontFamily.Popinssemibold,
                    fontSize: 12,
                    marginTop: 4,
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <ModalRoot
      // width={'90%'}
      // height={'30%'}
      padding={15}
      showModal={props.showModal}
      setShowModal={props.setShowModal}
      content={<SelectLocationModal navigation={navigation} />}
    />
  );
};

export default LocationModal;

const styles = StyleSheet.create({});
