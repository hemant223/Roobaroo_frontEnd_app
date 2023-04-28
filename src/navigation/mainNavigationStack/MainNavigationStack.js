import * as React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { navigationRef } from '../NavigationDrw/NavigationServices';
import Dashboard from '../../screens/dashboard/Dashboard';
import SplashScreen from '../../screens/splashscreen/SplashScreen';
import DrawerNavigation from '../drawerNavigation/DrawerNavigation';

import Login from '../../screens/Login.js/Login';
import OtpInput from '../../screens/otpInput/OtpInput';
import Visits from '../../screens/Visits/Visits';

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
      <Stack.Navigator /* screenOptions={horizontalAnimation} */ headerShown={false}>
        {/* <Stack.Screen
          name="SyncScreen"
          component={SyncScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OtpInput"
          component={OtpInput}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Dashboard"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Visits"
          component={Visits}
          options={{headerShown: false}}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigationStack;
