import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native';
import DrawerContent from './DrawerContent';
import SplashScreen from '../../screens/splashscreen/SplashScreen';
import Dashboard from '../../screens/dashboard/Dashboard';
import Visits from '../../screens/visits/Visits';
import UserDetail from '../../screens/profile/UserDetail';

const DrawerNav = createDrawerNavigator();

export default function DrawerNavigation(props) {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <DrawerNav.Navigator
      drawerContent={() => <DrawerContent />}
    //   drawerType={isLargeScreen ? 'permanent' : 'back'}
    //   drawerStyle={isLargeScreen ? null : {width: '100%'}}
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'tranparent',
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          overflow: 'hidden',
          zIndex: 100,
        },
      }}
      initialRouteName="home"
      >
      <DrawerNav.Screen
        name="home"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <DrawerNav.Screen
        name="Visit"
        component={Visits}
        options={{headerShown: false}}
      />
      <DrawerNav.Screen
        name="UserDetail"
        component={UserDetail}
        options={{headerShown: false}}
      />
         </DrawerNav.Navigator>
  );
}
