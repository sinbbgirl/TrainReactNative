/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'

import DetailScreen from './components/DetailScreen';
import HomeScreen from './components/HomeScreen'
import SettingScreen from './components/SettingScreen';

import Icon from 'react-native-vector-icons/dist/Feather'

const TapNavigator = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel:'Home',
      tabBarIcon:({tintColor}) => (
        <View>
          <Icon style={{color:tintColor}} size={25} name={'home'}/>
        </View>
      ),
      activeColor:'#000080',
      inactiveColor:'#226557',
      barStyle:{backgroundColor:'#694fad'},
    }
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      tabBarLabel:'Detail',
      tabBarIcon:({tintColor}) => (
        <View>
          <Icon style={{color:tintColor}} size={25} name={'feather'}/>
        </View>
      ),
      activeColor:'#000080',
      inactiveColor:'#226557',
      barStyle:{backgroundColor:'#a2c1c7'},
    }
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      tabBarLabel:'Setting',
      tabBarIcon:({tintColor}) => (
        <View>
          <Icon style={{color:tintColor}} size={25} name={'settings'}/>
        </View>
      ),
      activeColor:'#000080',
      inactiveColor:'#226557',
      barStyle:{backgroundColor:'#c1c2d9'},
    }
  },
},
// {
//   defaultNavigationOptions:({navigation}) => ({
//     tabBarIcon:({horizontal,tintColor}) => {
//       // Home, Detail, Setting
//       const {routeName} = navigation.state;
//       let iconName;
//       if (routeName === 'Home'){
//         iconName = 'home';
//       } else if (routeName === 'Detail') {
//         iconName = 'feather';
//       } else if (routeName === 'Setting') {
//         iconName = 'settings';
//       }
//       return (
//         <Icon
//         name={iconName}
//         size={22}
//         color={tintColor}
//         />
//       )
//     },
  // }),
// }
)

const TopTapNavigator = createMaterialTopTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel:'Home',
      tabBarIcon:({tintColor}) => (
        <View>
          <Icon style={{color:tintColor}} size={25} name={'home'}/>
        </View>
      ),
      activeColor:'#000080',
      inactiveColor:'#226557',
      barStyle:{backgroundColor:'#c981c1'},
    }
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      tabBarLabel:'Detail',
      tabBarIcon:({tintColor}) => (
        <View>
          <Icon style={{color:tintColor}} size={25} name={'feather'}/>
        </View>
      ),
      activeColor:'#000080',
      inactiveColor:'#226557',
      barStyle:{backgroundColor:'#a2c1c7'},
    }
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      tabBarLabel:'Setting',
      tabBarIcon:({tintColor}) => (
        <View>
          <Icon style={{color:tintColor}} size={25} name={'settings'}/>
        </View>
      ),
      activeColor:'#000080',
      inactiveColor:'#226557',
      barStyle:{backgroundColor:'#c1c2d9'},
    }
  },
},
// {
//   defaultNavigationOptions:({navigation}) => ({
//     tabBarIcon:({horizontal,tintColor}) => {
//       // Home, Detail, Setting
//       const {routeName} = navigation.state;
//       let iconName;
//       if (routeName === 'Home'){
//         iconName = 'home';
//       } else if (routeName === 'Detail') {
//         iconName = 'feather';
//       } else if (routeName === 'Setting') {
//         iconName = 'settings';
//       }
//       return (
//         <Icon
//         name={iconName}
//         size={22}
//         color={tintColor}
//         />
//       )
//     },
  // }),
// }
)

export default createAppContainer(TapNavigator)
