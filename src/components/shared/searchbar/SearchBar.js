import React from 'react';
import {StyleSheet, TextInput, View, Keyboard} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <View
        style={
          !props.clicked
            ? styles.searchBar__unclicked
            : styles.searchBar__clicked
        }>
        
        <Feather
          name="search"
          size={20}
          color="black"
          style={{alignSelf:'center',marginLeft:5}}
        />
        <TextInput
          style={styles.input}
          placeholder="Search Visitors"
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
          onFocus={() => {
            props.setClicked(true);
          }}
        />
  

        {props.clicked && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{backgroundColor:'blue',alignSelf:'center',marginLeft:5}}
            onPress={() => {
              props.setSearchPhrase('');
              Keyboard.dismiss();
              props.setClicked(false);
            }}
          />
        )}
      </View>
      
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
   
  },
  searchBar__unclicked: {
    width:'95%',
    flexDirection: 'row',  
    backgroundColor: '#fff',
    borderRadius: 15,
    alignContent: 'center',
    justifyContent:'flex-start',
    height:40,

  },
  searchBar__clicked: {
    width:'95%',
    flexDirection: 'row',  
    backgroundColor: '#fff',
    borderRadius: 15,
    alignContent: 'center',
    justifyContent:'flex-start',
    height:40
  },
  input: {
    fontSize: 16,
    width:'90%' ,
    
  },
});
