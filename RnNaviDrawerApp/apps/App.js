/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unreachable */
import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import HomeScreen from './components/HomeScreen'
import DetailScreen from './components/DetailScreen'
import SettingScreen from './components/SettingScreen'

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import CustomDrawer from './CustomDrawer';

const DraweerNavigator = createDrawerNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen },
  Setting: { screen: SettingScreen },
},
  {
    contentComponent: CustomDrawer,
    drawerWidth: '75%',
    // 디바이스의 넓이,높이값을 알아보기위한 함수
    // drawerWidth: Dimensions.get('window').width-150,
  }
)

export default createAppContainer(DraweerNavigator);
