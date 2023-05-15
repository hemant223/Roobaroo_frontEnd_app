import * as React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from '../NavigationDrw/NavigationServices';
import Dashboard from '../../screens/dashboard/Dashboard';
import SplashScreen from '../../screens/splashscreen/SplashScreen';
import DrawerNavigation from '../drawerNavigation/DrawerNavigation';

import Login from '../../screens/Login.js/Login';
import OtpInput from '../../screens/otpInput/OtpInput';
import Visits from '../../screens/visits/Visits';
import LocationModal from '../../components/componentModals/LocationModal';
import VerifyNumber from '../../screens/auth/VerifyNumber';
import VerifyOtp from '../../screens/auth/VisitorOTP';
import VisitingForm from '../../screens/VisitiorForm/VisitingForm';
import ViewVisit from '../../screens/VisitiorForm/ViewVisit';
import SearchScreen from '../../screens/search/SearchScreen';
import language from '../../components/selectLanguage/NewModal';
import ChangeLanguage from '../../components/ChangeLanguage/ChangeLanguage';
import NewFile from '../../screens/NewFile/NewFile';



function MainNavigationStack(props) {
  const Stack = createStackNavigator();

  //   const horizontalAnimation = {
  //     gestureDirection: 'horizontal',
  //     cardStyleInterpolator: ({current, layouts}) => {
  //       return {
  //         cardStyle: {
  //           transform: [
  //             {
  //               translateX: current.progress.interpolate({
  //                 inputRange: [0, 1],
  //                 outputRange: [layouts.screen.width, 0],
  //               }),
  //             },
  //           ],
  //         },
  //       };
  //     },
  //   };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator /* screenOptions={horizontalAnimation} *//*  initialRouteName='language' */ headerShown={false}>
        {/* <Stack.Screen
          name="SyncScreen"
          component={SyncScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
       
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="OtpInput"
          component={OtpInput}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Visits"
          component={Visits}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifyNumber"
          component={VerifyNumber}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifyOtp"
          component={VerifyOtp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VisitingForm"
          component={VisitingForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ViewVisit"
          component={ViewVisit}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="language"
          component={ChangeLanguage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewFile"
          component={NewFile}
          options={{ headerShown: false }}
        />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigationStack;
