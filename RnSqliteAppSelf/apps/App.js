/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import ViewAllUsers from './components/ViewAllUsers';
import DeleteUser from './components/DeleteUser';
import RegisterUser from './components/RegisterUser';
import ViewUser from './components/ViewUser';
import UpdateUser from './components/UpdateUser';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Welcome',
            headerTitleStyle: {fontWeight: 'bold'},
            headerStyle: {backgroundColor: '#30475e'},
            headerTintColor: '#fff5ea',
          }}
        />
        <Stack.Screen
          name="RegisterUser"
          component={RegisterUser}
          options={{
            title: '사용자 등록',
            headerTitleStyle: {fontWeight: 'bold'},
            headerStyle: {backgroundColor: '#30475e'},
            headerTintColor: '#fff5ea',
          }}
        />
        <Stack.Screen
          name="ViewAllUsers"
          component={ViewAllUsers}
          options={{
            title: '사용자 전체 조회',
            headerTitleStyle: {fontWeight: 'bold'},
            headerStyle: {backgroundColor: '#30475e'},
            headerTintColor: '#fff5ea',
          }}
        />
        <Stack.Screen
          name="ViewUser"
          component={ViewUser}
          options={{
            title: '사용자 조회',
            headerTitleStyle: {fontWeight: 'bold'},
            headerStyle: {backgroundColor: '#30475e'},
            headerTintColor: '#fff5ea',
          }}
        />
        <Stack.Screen
          name="UpdateUser"
          component={UpdateUser}
          options={{
            title: '사용자 수정',
            headerTitleStyle: {fontWeight: 'bold'},
            headerStyle: {backgroundColor: '#30475e'},
            headerTintColor: '#fff5ea',
          }}
        />
        <Stack.Screen
          name="DeleteUser"
          component={DeleteUser}
          options={{
            title: '사용자 삭제',
            headerTitleStyle: {fontWeight: 'bold'},
            headerStyle: {backgroundColor: '#30475e'},
            headerTintColor: '#fff5ea',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
