import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ActivityIndicator,
  StatusBar,
  Text,
  TouchableOpacity
} from 'react-native';
import SearchBar from '../../components/search_bar/SearchBar';
import SearchList from '../../components/search_list/SearchList';
import {getStoreData} from '../../helper/utils/AsyncStorageServices';
import {getDataAxios} from '../../fetchNodeServices';
import {useNavigation} from '@react-navigation/native';
import { ImagesAssets } from '../../components/shared/ImageAssets';

const SearchScreen = props => {
  const navigation = useNavigation();

  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  //   const [vechileData, setVechileData] = useState();
  const [refresh, setRefresh] = useState(false);
  const [getVisitorData, setVisitorData] = useState([]);
  const [getUserData, setUserDataByAsync] = useState([]);
  const [show, setShow] = useState(false);
  const [getdata, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const getUserDataByAsyncStorage = async () => {
    const userData = await getStoreData('userData');

    var data = await getDataAxios(
      `visitors/displayVisitors/${userData?.minister_id}`,
    );
    if (data.status) {
      setVisitorData(data?.result);
      setShow(true);
    } else {
      alert('data fetch error');
    }
    setUserDataByAsync(userData);
  };

  useEffect(() => {
    getUserDataByAsyncStorage();
  }, []);

  useEffect(() => {
    setRefresh(!refresh);
  }, [props]);


  const getData = async () => {
    const userData = await getStoreData('userData');
    var data = await getDataAxios(
      `visitors/displayAppVisitors/${userData?.minister_id}/${5}/${offset}`,
    );
  // console.log('====================================');
  // console.log('>>>>>>>>>>>>>>>>>>>>>',data.result);
  // console.log('====================================');
    if (data.status) {
      const combineArray = [...getdata, ...data.result];
      setData(combineArray);
      setLoading(true);
    } else {
      setLoading(false);
    }
    if(searchPhrase!=''){
      setLoading(false)
    }
  };

  useEffect(() => {
    getData();
  }, [offset]);

  

  return (
    <View style={{height:'100%',marginBottom:0}}>
      <StatusBar hidden={false} translucent backgroundColor="transparent" />
      {/* {!clicked && <Image source={require('../../assets/images/logo.png')} style={{width:200,height:70,resizeMode:'contain'}} />} */}
     
      <View
        style={{
          backgroundColor: '#005db6',
          height: 95,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          // alignItems:'flex-end',
          paddingBottom: 15,
          flexDirection:'row',
          // justifyContent:'center'
          alignItems:'center',
          // marginTop:10,
          paddingTop:30
        }}>
            <TouchableOpacity
            onPress={()=>{navigation.push('Dashboard')}}
            style={{
             
                marginLeft: 12,
             
             
            }}>
            <Image
              source={ImagesAssets.arrowLeft}
              style={{
               width:30,height:20
                // marginHorizontal: isLandscape ? 5 : 5,
              }}
              // resizeMode={'center'}
            />
          </TouchableOpacity>
          <View style={{marginLeft:10}}>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />
        </View>
         
      </View>

      {
        show? <SearchList
        loading={loading}
        setOffset={setOffset}
        offset={offset}
        searchPhrase={searchPhrase}
        data={searchPhrase==''?getdata:getVisitorData}
        setClicked={setClicked}
      />:
        <ActivityIndicator  color="#1e70bf" />
       
      }
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: '10%',
  },
});
