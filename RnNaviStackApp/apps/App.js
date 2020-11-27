/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import HomeScreen from './components/HomeScreen';
import SettingScreen from './components/SettingScreen';
import DetailScreen from './components/DetailScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="HOME">
          <Stack.Screen name="HOME" component={HomeScreen} />
          <Stack.Screen name="DETAIL" component={DetailScreen} />
          <Stack.Screen name="SETTING" component={SettingScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
