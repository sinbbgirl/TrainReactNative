/* eslint-disable prettier/prettier */
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './components/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen 
        name="HomeScrren" 
        component={HomeScreen}
        options={{
          title:"Home",
          headerStyle:{
            backgroundColor:'#968c83'
          },
          headerTitleStyle:{
            fontWeight:'bold',
            color:'#d6d2c4'
          }
        }}
        />
        {/* <Stack.Screen name="HomeScrren" component={HomeScreen}/>
        <Stack.Screen name="HomeScrren" component={HomeScreen}/> */}
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.body}>
    //   <Text children="Hello ReactNative" style={styles.title} />
    // </View>
  );
};

export default App;
