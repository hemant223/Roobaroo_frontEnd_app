import React from 'react';
import {StyleSheet,View,TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SearchBar =(props)=>{


  return (
    
    <View style={{padding:10,width:props.Width}}>
    <View style={style.inputContainer}>
        <TextInput style={style.textinput} placeholder={props.Placeholder}/>
        <Feather name={'search'} style={style.icon} /> 
    </View>
  
</View>
)
}

const style = StyleSheet.create({

inputContainer:{
height:40,
backgroundColor:'#FFFF',
elevation:1,
flexDirection:'row',
borderRadius:10,
padding:0,
justifyContent:'space-between',
padding:5

},
textinput:{
    marginLeft:5,
     fontSize:18,
     width:'90%',
     justifyContent:'center',
     height:'100%',
     alignSelf:'center',
     padding:0,


},
icon:{

    color:'grey',
     fontSize: 22,
     justifyContent:'flex-end',
     alignSelf:'center',
     marginRight:5,

}
})


export default SearchBar;



SearchBar.defaultProps={
    Width:'100%',
    Placeholder:'Search'
    
}