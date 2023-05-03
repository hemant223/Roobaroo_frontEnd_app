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
import RadioButtonRN from 'radio-buttons-react-native';
import {Colors} from '../../assets/config/Colors';
import {RadioButton} from 'react-native-paper';

const DATA = [
  {
    id: '1',
    language: 'English',
    locallanguage: 'English',
    
  },
  {
    id: '2',
    language: 'हिंदी',
    locallanguage: 'Hindi ',
  },
  {
    id: '3',
    language: 'ગુજરાતી',
    locallanguage: 'Gujarati ',
  },
  {
    id: '4',
    language: 'मराठी',
    locallanguage: 'Marathi  ',
  },
  {
    id: '5',
    language: 'भोजपुरी',
    locallanguage: 'Bhojpuri  ',
  },
  {
    id: '6',
    language: 'તેલુગી',
    locallanguage: ' Telugu  ',
  },

  {
    id: '7',
    language: 'தமிழ்',
    locallanguage: 'Tamil ',
  },
  {
    id: '8',
    language: 'ਪੰਜਾਬੀ',
    locallanguage: 'Punjabi ',
  },
];


const Item = ({item}) => {
  const [checked, setChecked] = useState('');
  

 
  const handleChech = (item) => {
  //  alert (id)
    setChecked(item.id);
    if(checked>=1){
      setChecked('unchecked')
    }

  };

  return (
    <View
      style={{
        width: '50%',
        // backgroundColor: 'yellowgreen',
        alignItems: 'center',
      }}>
      <View style={{...styles.mainContainer}}>
        <View
          style={{
            width: '27%',
            // backgroundColor:"yellowgreen",
            top: 30,
          }}>
           <RadioButton
              value={item.id}
              color={'#005db6'}
              status={checked === item.id ? 'checked' : 'unchecked'}
               onPress={() => handleChech(item)}
              />
            
        </View>
        <View
          style={{
            width: '100%',
            // height: 30,
            // backgroundColor: 'skyblue',
            // bottom: 4,
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text style={styles.textCss}>{item.language}</Text>
        </View>

        <View
          style={{
            width: '100%',
            // height: 20,
            // backgroundColor: 'yellowgreen',
            // bottom: 4,

            alignItems: 'center',
          }}>
          <Text
            style={{
              //   left: 5,
              fontFamily: FontFamily.PopinsRegular,
              // fontSize: FontSize.small,
              color: Colors.black,
              //   top:'0.8%'
            }}>
            {item.locallanguage}
          </Text>
        </View>
        <View></View>
      </View>
    </View>
  );
};

const SelectLanguage = props => {
  let numColumns = 2;
  return (
    <>
      <View>
        <FlatList
          numColumns={numColumns}
          data={props.VisitorDetailsData}
          renderItem={({item, index}) => <Item item={item} indx={index} />}
          keyExtractor={item => item.id}
          // contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
          scrollEnabled={true}
        />
      </View>
    </>
  );
};

export default SelectLanguage;

SelectLanguage.defaultProps = {
  VisitorDetailsData: DATA,
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 16,
    // marginLeft: 10,
    borderWidth: 1,
    borderColor: Colors.borderColor1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',

    margin: 5,
    height: 120,
    // elevation: 1,
    // borderColor:Colors.borderColor1
  },

  textCss: {
    color: '#186cbd',

    fontFamily: FontFamily.Popinsbold,
    // fontSize: FontSize.small,
    // backgroundColor: 'yellow',
  },
});
