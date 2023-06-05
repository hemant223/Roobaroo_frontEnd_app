import React from 'react';
import {StyleSheet, TextInput, View, Keyboard} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Input from '../shared/textInputs/Inputs';
import { useSelector } from 'react-redux';

const SearchBar = props => {
  var language = useSelector(state => state.languageNameReducer.language_name);

  return (
    <View style={styles.container}>
      {/* <Feather name="search" size={20} color="black" style={{marginLeft: 5}} /> */}

      <Input
        width={'90%'}
        icon
        iconName={'search'}
        txtColor={'#cccccc'}
        borderRadius={20}
        textfontSize={16}
        // style={styles.input}
        // rightIcon={props.clicked?'cross':'hair-cross'}
        placeholder={language['Search_visitors']}
        placeholderColor={'#cecece'}
        value={props.searchPhrase}
        onChangeText={props.setSearchPhrase}
        onFocus={() => {
          props.setClicked(true);
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    //   margin: 15,
    //   justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '95%',
    // backgroundColor: 'red',
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
  },
});
