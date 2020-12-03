/* eslint-disable prettier/prettier */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import TodoScreen from './components/Todo/TodoScreen';
import SettingScreen from './components/SettingScreen';
import CplTodoListScreen from './components/Completed/CplTodoList';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#9ba4b4"
        barStyle={{backgroundColor: '#694fad'}}
        shifting
        >
        <Tab.Screen
          name="ToDoList"
          component={TodoScreen}
          options={{
            tabBarLabel: 'To Do',
            tabBarColor:'#1e5f74',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="calendar-text-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="CplTodoListScreen"
          component={CplTodoListScreen}
          options={{
            tabBarLabel: 'Completed',
            tabBarColor:'#133b5c',
            tabBarIcon: ({color}) => (
              <FeatherIcon name="check-square" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingScreen} 
          options={{
            tabBarLabel: 'Setting',
            tabBarColor:'#1d2d50',
            tabBarIcon: ({color}) => (
              <AntDesignIcon name="setting" color={color} size={26} />
            ),
          }}
          ac
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
