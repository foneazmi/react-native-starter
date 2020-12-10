import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {navigationRef} from '@services';
// import { color } from "react-native-tailwindcss";

import {
  SplashScreen,
  // HomeScreen,
  // SearchScreen,
  // DetailScreen,
  // FeedScreen,
  // NotificationScreen,
  // ProfileScreen,
  LoginScreen,
  RegisterScreen,
} from '@screens';

// import Icon from "react-native-vector-icons/Feather";

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const Dashboard = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       tabBarOptions={{
//         showLabel: false,
//         activeTintColor: color.red700,
//       }}
//     >
//       <Tab.Screen
//         name="home"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: "Home",
//           tabBarIcon: (e) => <Icon name="home" size={20} color={e.color} />,
//         }}
//       />
//       {/* <Tab.Screen
//         name="search"
//         component={SearchScreen}
//         options={{
//           tabBarLabel: 'Search',
//           tabBarIcon: (e) => <Icon name="search" size={20} color={e.color} />,
//         }}
//       /> */}
//       <Tab.Screen
//         name="feed"
//         component={FeedScreen}
//         options={{
//           tabBarLabel: "Feed",
//           tabBarIcon: (e) => <Icon name="layout" size={20} color={e.color} />,
//         }}
//       />
//       <Tab.Screen
//         name="notification"
//         component={NotificationScreen}
//         options={{
//           tabBarLabel: "Notification",
//           tabBarIcon: (e) => <Icon name="bell" size={20} color={e.color} />,
//         }}
//       />
//       {/* <Tab.Screen
//         name="chat"
//         component={ProfileScreen}
//         options={{
//           tabBarLabel: 'Chat',
//           tabBarIcon: (e) => (
//             <Icon name="message-circle" size={20} color={e.color} />
//           ),
//         }}
//       /> */}
//       <Tab.Screen
//         name="profile"
//         component={ProfileScreen}
//         options={{
//           tabBarLabel: "Profile",
//           tabBarIcon: (e) => <Icon name="user" size={20} color={e.color} />,
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

const Routers = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
        {/* <Stack.Screen name="dashboard" component={Dashboard} /> */}
        {/* <Stack.Screen name="detail" component={DetailScreen} /> */}
        {/* <Stack.Screen name="search" component={SearchScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
