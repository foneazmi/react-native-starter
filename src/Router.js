import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {navigationRef} from '@services';
// import {CustomBottomNavbar} from '@components';

import {SplashScreen, HomeScreen, ProfileScreen, LoremScreen} from '@screens';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '@helpers';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const DashboardScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.primary,
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: e => <Icon name="home" size={20} color={e.color} />,
        }}
      />
      <Tab.Screen
        name="assigment"
        component={LoremScreen}
        options={{
          tabBarIcon: e => <Icon name="file-text" size={20} color={e.color} />,
        }}
      />
      <Tab.Screen
        name="date"
        component={LoremScreen}
        options={{
          tabBarIcon: e => <Icon name="calendar" size={20} color={e.color} />,
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: e => <Icon name="users" size={20} color={e.color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const Routers = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        // initialRouteName="dashboard"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
