import React, {Component, useRef, useEffect, useState, state} from 'react';
import {
  ImageBackground,
  CheckBox,
  ItemView,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  Alert,
  StatusBar,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import LinearGradient from 'react-native-linear-gradient';

import {RadioButton} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ShowData} from './ShowLabels';
import {languageData} from './data';
import {useSelector} from 'react-redux';

import {useNavigation} from '@react-navigation/native';
import {getStoreData} from '../../../helper/utils/AsyncStorageServices';

const {width, height} = Dimensions.get('window');

var selectedLanguage = '';
function Item({item, props, checked, setChecked}) {
  const [g, s] = React.useState({});
  const handleRadioBox = (id, name) => {
    // console.log('Event>>>>', id, name);
    s(prev => ({...prev, [id]: name}));
    selectedLanguage = item.name;
    setChecked(name);
  };
  // var col = Object.keys(g).indexOf(item.id.toString());
  var answr;
  answr = g[item.id];

  return (
    <>
      <TouchableOpacity
        onPress={() => handleRadioBox(item.id, item.name)}
        activeOpacity={1}
        style={{
          ...styles.item,
          backgroundColor: checked == answr ? '#ecf9fb' : '#fff',
        }}>
        <View style={{flexDirection: 'row', padding: 15}}>
          <RadioButton
            value={answr}
            color={'#005bd6'}
            uncheckedColor={'grey'}
            status={checked == answr ? 'checked' : 'unchecked'}
            onPress={() => handleRadioBox(item.id, item.name)}
          />

          <TouchableOpacity activeOpacity={1}>
            <Text
              style={{
                ...styles.language,
                color: '#005bd6',
              }}>
              {item.name1}
            </Text>
            <Text style={styles.TextNew}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </>
  );
}

const StatusBarHeight = StatusBar.currentHeight;
export default function ChangeLanguage(props) {
  const [checked, setChecked] = React.useState('');
  const navigation = useNavigation();
  const [userAsyncData, setUserAsyncData] = React.useState('');
  // var location = useSelector(state => state.languageNameReducer.language_name);
// alert(user__Data)
  // console.log('====================================');
  // console.log(location);
  // console.log('====================================');
  const FetchAsyncData = async () => {
    var userDataa = await getStoreData('userData');
    //  alert(userDataa)
    setUserAsyncData(userDataa);
  };
  useEffect(() => {
    FetchAsyncData();
  }, []);

  const handleClickUpdate = async () => {
    var userData = await getStoreData('userData');
    // setLoading(true);
    console.log('selectedLanguage==>', selectedLanguage);
    let storage = await AsyncStorage.getItem(`${selectedLanguage}`);

    storage = JSON.parse(storage);
    console.log('storage==', storage);
    // alert(storage)
    AsyncStorage.setItem('@lastlng', selectedLanguage);
    var lastlng = await AsyncStorage.getItem('@lastlng');
    // alert( lastlng);

    ShowData(selectedLanguage);

    if (userData == null) {
      navigation.navigate('Login');
    } else {
      navigation.push('Dashboard');
    }
  };

  // alert(user__Data)
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{height: StatusBarHeight, width: '100%'}}>
        <LinearGradient
          colors={['#005bd6', '#005bd6']}
          start={{x: 1, y: 1}}
          end={{x: 0, y: 0}}
          style={{flex: 1}}
        />
      </View>
      <LinearGradient
        style={styles.header}
        colors={['#005bd6', '#005bd6']}
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0}}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            width: width * 0.9,
            top: 20,
          }}>

         {userAsyncData!=null &&
          <View>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => props.navigation.goBack()}>
              <MaterialIcons
                name="arrow-back-ios"
                size={22}
                color={'#FFF'}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>}
        


          <View>
            <Text style={{...styles.CL}}>Choose Language</Text>
          </View>
        </View>
      </LinearGradient>
      <View>
        <FlatList
          data={languageData}
          contentContainerStyle={{padding: 10}}
          // horizontal={false}
          // scrollEnabled={true}
          numColumns={2}
          renderItem={({item}) => (
            <Item
              item={item}
              props={props}
              checked={checked}
              setChecked={setChecked}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.Fbottom}>
        <TouchableOpacity onPress={() => handleClickUpdate()}>
          <LinearGradient
            colors={['#005bd6', '#005bd6']}
            start={{x: 1, y: 1}}
            end={{x: 1, y: 0}}
            style={{
              ...styles.LinearGradientStyle,
            }}>
            <Text style={styles.buttonText}>Update</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    flex: 1,
    borderRadius: 10,
    margin: 8,
    width: width * 0.9,
    borderWidth: 0.8,
    borderColor: '#005bd6',
    // overflow: 'hidden',
    // elevation: 2,
    justifyContent: 'center',
    // alignSelf:'center',
    // alignItems:'center',
    // backgroundColor: '#ecf9fb',
  },
  language: {
    fontSize: 13,
    color: '#000',
    fontWeight: 'bold',
  },
  TextNew: {
    fontSize: 11,
    color: '#000',
    backgroundColor: 'transparent',
    // fontWeight: '500',
    // top:8
  },
  button: {borderColor: 'black'},
  header: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    height: 60,
  },
  CL: {
    fontSize: 17,
    color: '#FFF',
    left: 5,
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  LinearGradientStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: width * 0.9,
    borderRadius: 50,
    // elevation: 1,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
  },
  Fbottom: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 10,
    position: 'absolute',
  },
});
