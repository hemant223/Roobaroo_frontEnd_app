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
import FAIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {FontFamily} from './config/FontFamily';
import {Checkbox, RadioButton} from 'react-native-paper';
// import strings from './constant/LocalizedStrings';
// import {getLng, setLng} from './helper/ChangeLng';
const {width, height} = Dimensions.get('window');

const data = [
  {
    id: '1',
    name: 'English',
    name1: 'English',
    
  },
  {
    id: '2',
    name: 'हिंदी',
    name1: 'Hindi ',
  },
  {
    id: '3',
    name: 'ગુજરાતી',
    name1: 'Gujarati ',
  },
  {
    id: '4',
    name: 'मराठी',
    name1: 'Marathi  ',
  },
  {
    id: '5',
    name: 'भोजपुरी',
    name1: 'Bhojpuri  ',
  },
  {
    id: '6',
    name: 'તેલુગી',
    name1: ' Telugu  ',
  },

  {
    id: '7',
    name: 'தமிழ்',
    name1: 'Tamil ',
  },
  {
    id: '8',
    name: 'ਪੰਜਾਬੀ',
    name1: 'Punjabi ',
  },
 


 
];

function Item({item, props, checked, setChecked}) {
  const [g, s] = React.useState({});
  const handleRadioBox = (id, name) => {
    console.log('Event>>>>', id, name);
    s(prev => ({...prev, [id]: name}));
    setChecked(name);
  };
  var col = Object.keys(g).indexOf(item.id.toString());
  var answr;
  answr = g[item.id];
  return (
    <>
      <TouchableOpacity onPress={() => handleRadioBox(item.id, item.name)} activeOpacity={1} style={{...styles.item, backgroundColor: checked==answr?'#ecf9fb':"#fff",}}>
        <View style={{flexDirection: 'row', padding: 15}}>
          <RadioButton
            value={answr}
            color={'#005db6'}
            uncheckedColor={'#005db6'}
            status={checked == answr ? 'checked' : 'unchecked'}
            onPress={() => handleRadioBox(item.id, item.name)}
          />

          <TouchableOpacity activeOpacity={1}>
            <Text
              style={{
                ...styles.language,
                color: '#314d6e',
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
  const [checked, setChecked] = React.useState('English');
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{height: StatusBarHeight, width: '100%'}}>
        <LinearGradient
          colors={['#03c6ca', '#0ab9d4']}
          start={{x: 1, y: 1}}
          end={{x: 0, y: 0}}
          style={{flex: 1}}
        />
      </View>
      <LinearGradient
        style={styles.header}
        colors={['#005db6', '#005db6']}
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0}}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            width: width * 0.9,
            top: 20,
          }}>
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
          </View>
          <View>
            <Text style={{...styles.CL}}>Choose Language</Text>
          </View>
        </View>
      </LinearGradient>
      <View>
        <FlatList
          data={data}
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
        <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate('DoctorList')}>
          <LinearGradient
            colors={['#005db6', '#005db6']}
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
    borderColor: '#005db6',
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
