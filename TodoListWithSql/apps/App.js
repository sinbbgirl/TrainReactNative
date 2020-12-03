/* eslint-disable prettier/prettier */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from './components/HomeScreen';
import SettingScreen from './components/SettingScreen';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#694fad'}}
        >
        <Tab.Screen name="HomeScreen" component={HomeScreen}/>
        {/* <Tab.Screen name="Settings" component={SettingScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
