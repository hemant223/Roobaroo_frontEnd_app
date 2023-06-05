// import React, {Component, useRef, useEffect, useState, state} from 'react';
// import {
//   ImageBackground,
//   CheckBox,
//   ItemView,
//   ScrollView,
//   SafeAreaView,
//   TouchableOpacity,
//   Dimensions,
//   TextInput,
//   Text,
//   StyleSheet,
//   View,
//   Image,
//   Button,
//   Alert,
//   StatusBar,
//   FlatList,
//   TouchableHighlight,
// } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import FAIcon from 'react-native-vector-icons/FontAwesome';
// import LinearGradient from 'react-native-linear-gradient';
// import * as Animatable from 'react-native-animatable';
// import {FontFamily} from './config/FontFamily';
// import {Checkbox, RadioButton} from 'react-native-paper';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ShowData } from './helper/ShowData';
// import { useFocusEffect } from '@react-navigation/native';
// // import strings from './constant/LocalizedStrings';
// // import {getLng, setLng} from './helper/ChangeLng';
// const {width, height} = Dimensions.get('window');

const data = [
  {
    name: 'English',
    name1: 'English',
    id: '0',
  },
  {
    name: 'Hindi',
    name1: 'हिंदी',
    id: '1',
  },
  {
    name: 'Gujrati',
    name1: 'ગુજરાતી',
    id: '2',
  },
  {
    name: 'Bhojpuri',
    name1: 'भोजपुरी',
    id: '3',
  },
  {
    name: 'Marathi',
    name1: 'मराठी',
    id: '4',
  },
  {
    name: 'Telugu',
    name1: 'తెలుగు',
    id: '5',
  },
  {
    name: 'Tamil',
    name1: 'தமிழ்',
    id: '6',
  },
  {
    name: 'Punjabi',
    name1: 'ਪੰਜਾਬੀ',
    id: '7',
  },
];

// var selectedLanguage = '';
// function Item({item, props, checked, setChecked}) {
//   const [g, s] = React.useState({});
//   const handleRadioBox = (id, name) => {
//     console.log('Event>>>>', id, name);
//     s(prev => ({...prev, [id]: name}));
//     selectedLanguage = item.name
//     setChecked(name);
//   };
//   var col = Object.keys(g).indexOf(item.id.toString());
//   var answr;
//   answr = g[item.id];
//   return (
//     <>
//       <TouchableOpacity onPress={() => handleRadioBox(item.id, item.name)} activeOpacity={1} style={{...styles.item, backgroundColor: checked==answr?'#ecf9fb':"#fff",}}>
//         <View style={{flexDirection: 'row', padding: 15}}>
//           <RadioButton
//             value={answr}
//             color={'#005bd6'}
//             uncheckedColor={'grey'}
//             status={checked == answr ? 'checked' : 'unchecked'}
//             onPress={() => handleRadioBox(item.id, item.name)}
//           />

//           <TouchableOpacity activeOpacity={1}>
//             <Text
//               style={{
//                 ...styles.language,
//                 color: '#005bd6',
//               }}>
//               {item.name1}
//             </Text>
//             <Text style={styles.TextNew}>{item.name}</Text>
//           </TouchableOpacity>
//         </View>
//       </TouchableOpacity>
//     </>
//   );
// }

// const StatusBarHeight = StatusBar.currentHeight;
// export default function ChangeLanguage(props) {
//   const [checked, setChecked] = React.useState('');
//   const [getState, setState] = React.useState('');
//   let lngObject = '';
//   const getObj = async () => {
//     var data = await AsyncStorage.getItem('OBJ');
//     if (data != null) {
//       lngObject = JSON.parse(data);
//       setState(lngObject);
//     }
//   };

//   useFocusEffect(
//     React.useCallback(() => {
//       getObj();
//     }, []),
//   );

//   const handleClickUpdate = async () => {
//     // setLoading(true);
//     console.log('Language Name>>>', selectedLanguage);
//     let storage = await AsyncStorage.getItem(`${selectedLanguage}`);
//     storage = JSON.parse(storage);

//     AsyncStorage.setItem('@lastlng', selectedLanguage);
//     var lastlng = await AsyncStorage.getItem('@lastlng');
//     ShowData(selectedLanguage);
//     console.log('Last LNggggggggggggggg inside change language197', lastlng);
  
//     props.navigation.navigate('dashboard')}
  
//   return (
//     <View style={{flex: 1, backgroundColor: '#FFF'}}>
//       <StatusBar translucent backgroundColor="transparent" />
//       <View style={{height: StatusBarHeight, width: '100%'}}>
//         <LinearGradient
//           colors={['#005bd6', '#005bd6']}
//           start={{x: 1, y: 1}}
//           end={{x: 0, y: 0}}
//           style={{flex: 1}}
//         />
//       </View>
//       <LinearGradient
//         style={styles.header}
//         colors={['#005bd6', '#005bd6']}
//         start={{x: 1, y: 1}}
//         end={{x: 0, y: 0}}>
//         <View
//           style={{
//             flexDirection: 'row',
//             alignSelf: 'center',
//             width: width * 0.9,
//             top: 20,
//           }}>
//           <View>
//             <TouchableOpacity
//               activeOpacity={1}
//               onPress={() => props.navigation.goBack()}>
//               <MaterialIcons
//                 name="arrow-back-ios"
//                 size={22}
//                 color={'#FFF'}
//                 resizeMode={'contain'}
//               />
//             </TouchableOpacity>
//           </View>
//           <View>
//             <Text style={{...styles.CL}}>Choose Language</Text>
//           </View>
//         </View>
//       </LinearGradient>
//       <View>
//         <FlatList
//           data={data}
//           contentContainerStyle={{padding: 10}}
//           // horizontal={false}
//           // scrollEnabled={true}
//           numColumns={2}
//           renderItem={({item}) => (
//             <Item
//               item={item}
//               props={props}
//               checked={checked}
//               setChecked={setChecked}
//             />
//           )}
//           keyExtractor={item => item.id}
//         />
//       </View>
//       <View style={styles.Fbottom}>
//         <TouchableOpacity  onPress={() =>handleClickUpdate() }>
//           <LinearGradient
//             colors={['#005bd6', '#005bd6']}
//             start={{x: 1, y: 1}}
//             end={{x: 1, y: 0}}
//             style={{
//               ...styles.LinearGradientStyle,
//             }}>
//             <Text style={styles.buttonText}>Update</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   item: {
//     flex: 1,
//     borderRadius: 10,
//     margin: 8,
//     width: width * 0.9,
//     borderWidth: 0.8,
//     borderColor: '#005bd6',
//     // overflow: 'hidden',
//     // elevation: 2,
//     justifyContent: 'center',
//     // alignSelf:'center',
//     // alignItems:'center',
//     // backgroundColor: '#ecf9fb',
//   },
//   language: {
//     fontSize: 13,
//     color: '#000',
//     fontWeight: 'bold',
//   },
//   TextNew: {
//     fontSize: 11,
//     color: '#000',
//     backgroundColor: 'transparent',
//     // fontWeight: '500',
//     // top:8
//   },
//   button: {borderColor: 'black'},
//   header: {
//     borderBottomLeftRadius: 15,
//     borderBottomRightRadius: 15,
//     height: 60,
//   },
//   CL: {
//     fontSize: 17,
//     color: '#FFF',
//     left: 5,
//     fontWeight: '700',
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//   },

//   LinearGradientStyle: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 40,
//     width: width * 0.9,
//     borderRadius: 50,
//     // elevation: 1,
//     alignSelf: 'center',
//     overflow: 'hidden',
//   },
//   buttonText: {
//     fontSize: 18,
//     textAlign: 'center',
//     color: '#fff',
//     fontWeight: '500',
//   },
//   Fbottom: {
//     width: width,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     bottom: 10,
//     position: 'absolute',
//   },
// });


import {
  View,
  Text,
  Modal,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
const {height, width} = Dimensions.get('window');
const ChangeLanguage= ({
  langModalVisible,
  setLangModalVisible,
  onSelectLang,
}) => {
  const [selectedLang, setSelectedLang] = useState(0);
  const [languages, setLangauges] = useState([
    {name: 'English', selected: true},
    {name: 'हिन्दी', selected: false},
   {name:'Tamil',selected:false},
  ]);
  const onSelect = index => {
    const temp = languages;
    temp.map((item, ind) => {
      if (index == ind) {
        if (item.selected == true) {
          item.selected = false;
        } else {
          item.selected = true;
          setSelectedLang(index);
        }
      } else {
        item.selected = false;
      }
    });
    let temp2 = [];
    temp.map(item => {
      temp2.push(item);
    });
    setLangauges(temp2);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={langModalVisible}
      onRequestClose={() => {
        setLangModalVisible(!langModalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Select Language</Text>
          <View style={{width: '100%'}}>
            <FlatList
              data={languages}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.languageItem,
                      {borderColor: item.selected == true ? 'blue' : 'black'},
                    ]}
                    onPress={() => {
                      onSelect(index);
                    }}>
                    {item.selected == true ? (
                      <Image
                        source={require('../../assets/images/selected.png')}
                        style={[styles.icon, {tintColor: 'blue'}]}
                      />
                    ) : (
                      <Image
                        source={require('../../assets/images/non_selected.png')}
                        style={styles.icon}
                      />
                    )}

                    <Text
                      style={{
                        marginLeft: 20,
                        fontSize: 18,
                        color: item.selected == true ? 'blue' : 'black',
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View style={styles.btns}>
            <TouchableOpacity
              style={styles.btn1}
              onPress={() => {
                setLangModalVisible(false);
              }}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => {
                setLangModalVisible(false);
                onSelectLang(selectedLang);
              }}>
              <Text style={{color: '#fff'}}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ChangeLanguage;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  modalView: {
    margin: 20,
    width: width - 20,
    // height: height / 2,

    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  languageItem: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  btns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  btn1: {
    width: '40%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn2: {
    width: '40%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#4B68E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
