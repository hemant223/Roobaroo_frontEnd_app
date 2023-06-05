import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ModalRoot from '../shared/modals/ModalRoot';
import Ad from 'react-native-vector-icons/AntDesign';
import {FontFamily} from '../../assets/fonts/FontFamily';
import {ImagesAssets} from '../shared/ImageAssets';
import {useNavigation} from '@react-navigation/native';
import {getStoreData, storeData} from '../../helper/utils/AsyncStorageServices';
import {useDispatch, useSelector} from 'react-redux';
import {locationFun} from '../../helper/utils/redux/slices/locationSlice';
import En from 'react-native-vector-icons/Entypo';
import {postDataAxios} from '../../fetchNodeServices';
import moment from 'moment';

const LocationModal = props => {
  const navigation = useNavigation();
  var dispatch = useDispatch();
  var language = useSelector(state => state.languageNameReducer.language_name);
  // const [showModal, setShowModal] = useState(true);
  const SelectLocationModal = ({navigation}) => {
    // const [showModal, setShowModal] = useState(true)
    // var dispatch = useDispatch();
  

    const data = [
      {
        id: '1',
        iconName: '',
        title1: 'Public meetings',
        title: language['Public_meetings'],
        color: '#3786eb',
        backgroundColor: '#ecf4fe',
        img: ImagesAssets.Publicmeetings,
      },
      {
        id: '2',
        iconName: '',
        title1: 'Field visits',
        title: language['Filed_Visits'],
        color: '#f9aa4b',
        backgroundColor: '#fff6ec',
        img: ImagesAssets.FiledVisits,
      },
    ];
    const data1 = [
      {
        id: '3',
        iconName: '',
        title1: 'Mantralaya',
        title: language['Mantralaya'],
        color: '#f3747f',
        backgroundColor: '#fcdee0',
        img: ImagesAssets.Mantralaya,
      },
      {
        id: '4',
        iconName: '',
        title1: 'Vidhansabha',
        title: language['Vidhansabha'],
        color: '#18b797',
        backgroundColor: '#c5ede5',
        img: ImagesAssets.Vidhansabha,
      },
      {
        id: '5',
        iconName: '',
        title1: 'Jasdhan',
        title: language['Jasdan'],
        color: '#d680e6',
        backgroundColor: '#f6d9ff',
        img: ImagesAssets.jasdan,
      },
      {
        id: '6',
        iconName: '',
        title1: 'Residence',
        title: language['Residence'],
        color: '#2fc2e1',
        backgroundColor: '#d5f3f9',
        img: ImagesAssets.Residence,
      },
    ];
    const handleOnField = async title1 => {
      const userData = await getStoreData('userData');

      props.setShowModal(false);
      navigation.navigate('home', {location: title1});
      storeData('Location', {location: title1});
      dispatch(locationFun(title1));
      // storeData('userData', {...userData, user_location: title});
      body = {
        firstname: userData?.firstname,
        lastname: userData?.lastname,
        email: userData?.email,
        mobile_number: userData?.mobile_number,
        status: userData?.status,
        minister_id: userData?.minister_id,
        picture: userData?.picture,
        created_at: moment(userData?.created_at).format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        role_id: userData?.role_id,
        language_id: userData?.language_id,
        user_address: userData?.user_address,
        user_organization: userData?.user_organization,
        user_location: title,
      };
      await postDataAxios(`users/updateUser/${userData?.id}`, body);
    };
    const handleOffice = async title1 => {
      const userData = await getStoreData('userData');
      props.setShowModal(false);
      navigation.navigate('home', {location: title1});
      storeData('Location', {location: title1});
      // storeData('userData', {...userData, user_location: title});
      dispatch(locationFun(title1));
      body = {
        firstname: userData?.firstname,
        lastname: userData?.lastname,
        email: userData?.email,
        mobile_number: userData?.mobile_number,
        status: userData?.status,
        minister_id: userData?.minister_id,
        picture: userData?.picture,
        created_at: moment(userData?.created_at).format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        role_id: userData?.role_id,
        language_id: userData?.language_id,
        user_address: userData?.user_address,
        user_organization: userData?.user_organization,
        user_location: title,
      };

      await postDataAxios(`users/updateUser/${userData?.id}`, body);
    };

    return (
      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                color: '#3f85c8',
                fontFamily: FontFamily.Popinssemibold,
                fontSize: 22,
                width: '100%',
                marginLeft: 10,
              }}>
              {language['On_Field']}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              props.setShowModal(false);
            }}>
            <En name={'cross'} style={{color: '#000', fontSize: 22}} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            // backgroundColor: 'red',
            // width:'100%'
          }}>
          {data.map(item => {
            return (
              <TouchableOpacity
                onPress={() => {
                  handleOnField(item.title1);
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
                  {item.title.toUpperCase()}
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
          {language['Office']}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            // backgroundColor: 'red',
            // width:'100%'
          }}>
          {data1.map(item => {
            return (
              <TouchableOpacity
                onPress={() => {
                  handleOffice(item.title1);
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
                  {item.title.toUpperCase()}
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
