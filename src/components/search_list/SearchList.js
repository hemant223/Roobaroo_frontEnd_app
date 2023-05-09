import React,{useState} from "react";
import {  
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  Image
} from "react-native";
import { ImagesAssets } from "../shared/ImageAssets";
import { FontFamily } from "../../assets/fonts/FontFamily";

const Item = (props) => {


    return (
      <ScrollView>
       <View style={{width:'95%',backgroundColor:'#f3f8ff',height:85,borderRadius:15,padding:10,alignItems:'center',flexDirection:'row',margin:5,alignSelf:'center'}}>
       <View  style={{width:60,height:60,borderRadius:30,backgroundColor:'#dfecff',marginLeft:10,justifyContent:'center',alignItems:'center'}}>
       <Image source={ImagesAssets.addressbook} resizeMode='contain' style={{width:25,height:30}} />
       </View>
       <View style={{marginLeft:10,width:'80%',flexWrap:'wrap'}}>
       <View style={{/* backgroundColor:'red', */flexDirection:'row',width:'100%',alignItems:'center'}}>
        <View>
        <Text style={{fontFamily:FontFamily.Popinssemibold,color:'#1e70bf',fontSize:18}}>{props.item.firstname} {props.item.last}</Text>
        </View>
       </View>


       <View style={{/* backgroundColor:'red', */flexDirection:'row',width:'100%',alignItems:'center'}}>
        <View>
        <Image
              source={ImagesAssets.Calender}
              style={{
              width:15,height:15
              }}
              resizeMode={'center'}
            />
        </View>
        <View>
        <Text style={{fontFamily:FontFamily.Popinssemibold,color:'#4f5153',fontSize:12,marginLeft:5}}>{props.item.created_at}</Text>
        </View>
       </View>


       <View style={{/* backgroundColor:'red', */flexDirection:'row',width:'100%',alignItems:'center',marginTop:2}}>
        <View>
        <Image
              source={ImagesAssets.mobileImage}
              style={{
              width:15,height:18
              }}
              resizeMode={'center'}
            />
        </View>
        <View>
        <Text style={{fontFamily:FontFamily.Popinssemibold,color:'#4f5153',fontSize:12,marginLeft:5}}>{props.item.mobile_number}</Text>
        </View>
       </View>




       
       </View>
      
    </View>
      </ScrollView>
    )
  };
  
  const RenderItem = ({ item,searchPhrase }) => {
    
    if (searchPhrase === "") {
      return <Item item={item} />;
    }
    
   
    if (item.firstname.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item item={item} />;
    }
    if (item.mobile_number.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item item={item} />;
    }
  
  
    
  };

const SearchList = (props) => {
    const [refresh, setRefresh] = useState(false);
  return (
    <SafeAreaView style={styles.list__container}>
    <View
      onStartShouldSetResponder={() => {
        props.setClicked(false);
      }}
    >
      <FlatList
        data={props.data}
        renderItem={({item})=><RenderItem item={item} refresh={refresh} setRefersh={setRefresh} searchPhrase={props.searchPhrase}  />}
        keyExtractor={(item) => item.id}
      />
    </View>
  </SafeAreaView>
);
}

export default SearchList

const styles = StyleSheet.create({
    list__container: {
    //   margin: 10,
      height: "85%",
      width: "100%",
    //   backgroundColor:'#fff'
    },
    item: {
      margin: 30,
      color: '#000',
      borderBottomWidth: 2,
      borderBottomColor: "lightgrey"
    },
    title: {
      fontSize: 20,
      color: '#000',
      fontWeight: "bold",
      marginBottom: 5,
      fontStyle: "italic",
    },
  });