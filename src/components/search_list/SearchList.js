import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import {ImagesAssets} from '../shared/ImageAssets';
import {FontFamily} from '../../assets/fonts/FontFamily';
import {color} from '@rneui/themed/dist/config';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getStoreData} from '../../helper/utils/AsyncStorageServices';
import {useToast} from 'react-native-toast-notifications';
const Item = props => {
  const toast = useToast();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {props.locationnn != undefined || props.location != "" ? (
        <TouchableOpacity
          onPress={() => {
            props.navigation.push('ViewVisit', {visitordata: props.item});
          }}
          style={{
            width: '95%',
            backgroundColor: '#fff',
            height: 130,
            borderRadius: 15,
            padding: 10,
            alignItems: 'center',
            flexDirection: 'row',
            margin: 5,
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: '#dfecff',
              marginLeft: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={ImagesAssets.addressbook}
              resizeMode="contain"
              style={{width: 25, height: 30}}
            />
          </View>
          <View style={{marginLeft: 10, width: '80%', flexWrap: 'wrap'}}>
            <View
              style={{
                /* backgroundColor:'red', */ flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontFamily: FontFamily.Popinssemibold,
                    color: '#1e70bf',
                    fontSize: 18,
                  }}>
                  {props.item.firstname} {props.item.lastname}
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: FontFamily.Popinssemibold,
                  color: '#1e70bf',
                  fontSize: 15,
                }}>
                Status :
              </Text>

              <Text
                style={{
                  fontFamily: FontFamily.Popinssemibold,
                  color: '#4f5153',
                  marginLeft: 5,
                  fontSize: 13,
                }}>
                {props.item.visitor_status}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: FontFamily.Popinssemibold,
                  color: '#1e70bf',
                  fontSize: 15,
                }}>
                Location :
              </Text>

              <Text
                style={{
                  fontFamily: FontFamily.Popinssemibold,
                  color: '#4f5153',
                  marginLeft: 5,
                  fontSize: 13,
                }}>
                {props.item.location_type}
              </Text>
            </View>

            <View
              style={{
                /* backgroundColor:'red', */ flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <View>
                <Image
                  source={ImagesAssets.Calender}
                  style={{
                    width: 15,
                    height: 15,
                  }}
                  resizeMode={'center'}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: FontFamily.Popinssemibold,
                    color: '#4f5153',
                    fontSize: 12,
                    marginLeft: 5,
                  }}>
                  {props.item.created_at}
                </Text>
              </View>
            </View>

            <View
              style={{
                /* backgroundColor:'red', */ flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                marginTop: 6,
              }}>
              <View>
                <Image
                  source={ImagesAssets.mobileImage}
                  style={{
                    width: 15,
                    height: 18,
                  }}
                  resizeMode={'center'}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: FontFamily.Popinssemibold,
                    color: '#4f5153',
                    fontSize: 12,
                    marginLeft: 5,
                  }}>
                  {props.item.mobile_number}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            // if (props.item.visitor_status == 'completed') {
            //   props.navigation.push('ViewVisit', {visitordata: props.item});
            // } else {
              toast.show('Please Select Location', {
                type: 'warning',
                placement: 'bottom',
                duration: 1000,
                offset: 30,
                animationType: 'zoom-in',
              });
            // }
            // alert('Plase Select Location')
          }}
          style={{
            width: '95%',
            backgroundColor: '#fff',
            height: 130,
            borderRadius: 15,
            padding: 10,
            alignItems: 'center',
            flexDirection: 'row',
            margin: 5,
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: '#dfecff',
              marginLeft: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={ImagesAssets.addressbook}
              resizeMode="contain"
              style={{width: 25, height: 30}}
            />
          </View>
          <View style={{marginLeft: 10, width: '80%', flexWrap: 'wrap'}}>
            <View
              style={{
                /* backgroundColor:'red', */ flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontFamily: FontFamily.Popinssemibold,
                    color: '#1e70bf',
                    fontSize: 18,
                  }}>
                  {props.item.firstname} {props.item.lastname}
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: FontFamily.Popinssemibold,
                  color: '#1e70bf',
                  fontSize: 15,
                }}>
                Status :
              </Text>

              <Text
                style={{
                  fontFamily: FontFamily.Popinssemibold,
                  color: '#4f5153',
                  marginLeft: 5,
                  fontSize: 13,
                }}>
                {props.item.visitor_status}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: FontFamily.Popinssemibold,
                  color: '#1e70bf',
                  fontSize: 15,
                }}>
                Location :
              </Text>

              <Text
                style={{
                  fontFamily: FontFamily.Popinssemibold,
                  color: '#4f5153',
                  marginLeft: 5,
                  fontSize: 13,
                }}>
                {props.item.location_type}
              </Text>
            </View>

            <View
              style={{
                /* backgroundColor:'red', */ flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <View>
                <Image
                  source={ImagesAssets.Calender}
                  style={{
                    width: 15,
                    height: 15,
                  }}
                  resizeMode={'center'}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: FontFamily.Popinssemibold,
                    color: '#4f5153',
                    fontSize: 12,
                    marginLeft: 5,
                  }}>
                  {props.item.created_at}
                </Text>
              </View>
            </View>

            <View
              style={{
                /* backgroundColor:'red', */ flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                marginTop: 6,
              }}>
              <View>
                <Image
                  source={ImagesAssets.mobileImage}
                  style={{
                    width: 15,
                    height: 18,
                  }}
                  resizeMode={'center'}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: FontFamily.Popinssemibold,
                    color: '#4f5153',
                    fontSize: 12,
                    marginLeft: 5,
                  }}>
                  {props.item.mobile_number}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const RenderItem = ({
  item,
  searchPhrase,
  navigation,
  locationnn,
  location,
  // tost,
}) => {
  if (searchPhrase === '') {
    return (
      <Item
        item={item}
        navigation={navigation}
        locationnn={locationnn}
        location={location}
        // toast={tost}
      />
    );
  }

  if (
    item.firstname
      .toUpperCase()
      .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
  ) {
    return (
      <Item
        item={item}
        navigation={navigation}
        locationnn={locationnn}
        location={location}
        // toast={tost}
      />
    );
  }
  if (
    item.mobile_number
      .toUpperCase()
      .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
  ) {
    return (
      <Item
        item={item}
        navigation={navigation}
        locationnn={locationnn}
        location={location}
        // toast={tost}
      />
    );
  }
};









const SearchList = props => {
  const [refresh, setRefresh] = useState(false);
  const navigation = useNavigation();
  const [locationnn, setLocation] = useState('');
  var location = useSelector(state => state.locationReducer.location);
  const getLocationDataByAsyncStorage = async () => {
    const locationn = await getStoreData('Location');
    setLocation(locationn?.location);
  };
  useEffect(() => {
    getLocationDataByAsyncStorage();
  }, []);
  // alert(locationnn)
// alert(props.searchPhrase)
  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          props.setClicked(false);
        }}>
        <FlatList
          data={props.data}
          onEndReached={() => {
           
            props.setOffset(props.offset + 5);
         
          }}
          renderItem={({item}) => (
            <RenderItem
              // toast={toast}
              navigation={navigation}
              locationnn={locationnn}
              location={location}
              item={item}
              refresh={refresh}
              setRefersh={setRefresh}
              searchPhrase={props.searchPhrase}
            />
          )}
          keyExtractor={item => item.id}
          scrollEnabled={true}
          ListFooterComponent={() => {
            // if(props.searchPhrase==''){
            if (props.loading) {
              return (
                <ActivityIndicator color={'#1e70bf'} style={{margin: 20}} />
              );
            } else {
              return null;
            }

          // }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchList;

const styles = StyleSheet.create({
  list__container: {
    //   margin: 10,
    height: '88%',
    width: '100%',
    //   backgroundColor:'#fff'
  },
  item: {
    margin: 30,
    color: '#000',
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 5,
    fontStyle: 'italic',
  },
});
