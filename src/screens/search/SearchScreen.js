import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import SearchBar from '../../components/search_bar/SearchBar';
import SearchList from '../../components/search_list/SearchList';
import {getStoreData} from '../../helper/utils/AsyncStorageServices';
import {getDataAxios} from '../../fetchNodeServices';
const SearchScreen = props => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  //   const [vechileData, setVechileData] = useState();
  const [refresh, setRefresh] = useState(false);
  const [getVisitorData, setVisitorData] = useState([]);
  const [getUserData, setUserDataByAsync] = useState([]);
  const [show, setShow] = useState(false);
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

  // const data = [
  //     {id:1, name:'Hemu Singh',time:'11:56am, 25 Mar 2023',mobileNo:'39996754245'},
  //     {id:2, name:'Raju Singh',time:'11:56am, 23 Mar 2023',mobileNo:'69996754245'},
  //     {id:3, name:'dd',time:'11:56am, 21 Mar 2023',mobileNo:'19996754245'},
  //     {id:4, name:'cc',time:'13:56am, 25 Mar 2023',mobileNo:'79996754245'},
  //     {id:5, name:'xxx',time:'14:56am, 25 Mar 2023',mobileNo:'99996754245'},

  // ]

  return (
    <View>
      <StatusBar hidden={false} translucent backgroundColor="transparent" />
      {/* {!clicked && <Image source={require('../../assets/images/logo.png')} style={{width:200,height:70,resizeMode:'contain'}} />} */}
      <View
        style={{
          backgroundColor: '#005db6',
          height: 110,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingBottom: 15,
        }}>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />
      </View>

      {
        show? <SearchList
        searchPhrase={searchPhrase}
        data={getVisitorData}
        setClicked={setClicked}
      />:
        <ActivityIndicator  color="#1e70bf" size="large"/>
       
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
