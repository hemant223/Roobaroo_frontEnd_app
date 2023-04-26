import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ModalRoot from '../shared/modals/ModalRoot';
import Ad from 'react-native-vector-icons/AntDesign';
import {FontFamily} from '../../assets/fonts/FontFamily';
const LocationModal = () => {
  const [showModal, setShowModal] = useState(true);
  const SelectLocationModal = () => {
    const data = [
      {
        id: '1',
        iconName: '',
        title: 'Public meetings',
        color: '#3786eb',
        backgroundColor: '#ecf4fe',
      },
      {
        id: '2',
        iconName: '',
        title: 'Field Visits',
        color: '#f9aa4b',
        backgroundColor: '#fff6ec',
      },
    ];
    const data1 = [
      {
        id: '3',
        iconName: '',
        title: 'Mantralaya',
        color: '#f3747f',
        backgroundColor: '#fcdee0',
      },
      {
        id: '4',
        iconName: '',
        title: 'Vidhyansaabh',
        color: '#18b797',
        backgroundColor: '#c5ede5',
      },
      {
        id: '5',
        iconName: '',
        title: 'jasdham',
        color: '#d680e6',
        backgroundColor: '#f6d9ff',
      },
      {
        id: '6',
        iconName: '',
        title: 'residence',
        color: '#2fc2e1',
        backgroundColor: '#d5f3f9',
      },
    ];

    return (
      <View style={{/* backgroundColor: 'red' */}}>
        <Text
          style={{
            color: '#3f85c8',
            fontFamily: FontFamily.Popinssemibold,
            fontSize: 22,
            width: '100%',
            marginLeft:10

          }}>
          On-Field
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            // backgroundColor: 'red',
          }}>
          {data.map(item => {
            return (
              <View
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
                  <Ad name="contacts" size={30} color={'#fff'} />
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
              </View>
            );
          })}
        </View>
        <Text
          style={{
            color: '#3f85c8',
            fontFamily: FontFamily.Popinssemibold,
            fontSize: 22,
            width: '100%',
            marginLeft:10
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
              <View
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
                  <Ad name="contacts" size={30} color={'#fff'} />
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
              </View>
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
      showModal={showModal}
      setShowModal={setShowModal}
      content={<SelectLocationModal />}
    />
  );
};

export default LocationModal;

const styles = StyleSheet.create({});
