import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {navigationRef} from '@services';
// import {CustomBottomNavbar} from '@components';

import {SplashScreen} from '@screens';

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const DashboardScreen = () => {
//   return (
//     <Tab.Navigator
//       tabBar={props => <CustomBottomNavbar {...props} />}
//       initialRouteName="Home"
//       tabBarOptions={{
//         showLabel: false,
//       }}>
//       <Tab.Screen
//         name="home"
//         component={HomeScreen}
//         options={{
//           icon: 'home',
//           tabBarLabel: 'Home',
//         }}
//       />
//       <Tab.Screen
//         name="orders"
//         component={OrderScreen}
//         options={{
//           icon: 'check-square',
//           tabBarLabel: 'Orders',
//         }}
//       />
//       <Tab.Screen
//         name="inbox"
//         component={InboxScreen}
//         options={{
//           icon: 'mail',
//           tabBarLabel: 'Inbox',
//         }}
//       />
//       <Tab.Screen
//         name="account"
//         component={AccountScreen}
//         options={{
//           icon: 'users',
//           tabBarLabel: 'Account',
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

const Routers = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        // initialRouteName="dashboard"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splash" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
