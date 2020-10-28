import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {navigationRef} from '@services';
// import { color } from "react-native-tailwindcss";

import {
  SplashPage,
  // HomePage,
  // SearchPage,
  // DetailPage,
  // FeedPage,
  // NotificationPage,
  // ProfilePage,
  LoginPage,
  RegisterPage,
} from '@pages';

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
//         component={HomePage}
//         options={{
//           tabBarLabel: "Home",
//           tabBarIcon: (e) => <Icon name="home" size={20} color={e.color} />,
//         }}
//       />
//       {/* <Tab.Screen
//         name="search"
//         component={SearchPage}
//         options={{
//           tabBarLabel: 'Search',
//           tabBarIcon: (e) => <Icon name="search" size={20} color={e.color} />,
//         }}
//       /> */}
//       <Tab.Screen
//         name="feed"
//         component={FeedPage}
//         options={{
//           tabBarLabel: "Feed",
//           tabBarIcon: (e) => <Icon name="layout" size={20} color={e.color} />,
//         }}
//       />
//       <Tab.Screen
//         name="notification"
//         component={NotificationPage}
//         options={{
//           tabBarLabel: "Notification",
//           tabBarIcon: (e) => <Icon name="bell" size={20} color={e.color} />,
//         }}
//       />
//       {/* <Tab.Screen
//         name="chat"
//         component={ProfilePage}
//         options={{
//           tabBarLabel: 'Chat',
//           tabBarIcon: (e) => (
//             <Icon name="message-circle" size={20} color={e.color} />
//           ),
//         }}
//       /> */}
//       <Tab.Screen
//         name="profile"
//         component={ProfilePage}
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
        <Stack.Screen name="splash" component={SplashPage} />
        <Stack.Screen name="login" component={LoginPage} />
        <Stack.Screen name="register" component={RegisterPage} />
        {/* <Stack.Screen name="dashboard" component={Dashboard} /> */}
        {/* <Stack.Screen name="detail" component={DetailPage} /> */}
        {/* <Stack.Screen name="search" component={SearchPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
