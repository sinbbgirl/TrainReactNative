/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

async function requestPermission() {
  try {
    if (Platform.OS === 'ios') {
      return await Geolocation.requestAuthorization('always');
    } else if (Platform.OS === 'android') {
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  } catch (error) {
    console.error('error MSG:', error);
  }
}

const App = () => {
  // const [location, setLocation] = useState({});

  // useEffect(() => {
  //   // 초기값 넣기
  //   let initVal = {
  //     latitude: 37.578046,
  //     longitude: 126.976889,
  //   };
  //   setLocation(initVal);
  //   requestPermission()
  //     .then((result) => {
  //       console.log(result);
  //       if (result === 'granted') {
  //         Geolocation.getCurrentPosition(
  //           (pos) => {
  //             setLocation(pos.coords);
  //           },
  //           (error) => console.error(`Position Error: ${error}`),
  //           {enableHighAccuracy: true, timeout: 20000},
  //         );
  //       } else if (result === '') {
  //       }
  //     })
  //     .catch((err) => console.error(`useEffect Error: ${err}`));
  // }, []);
  let location = {
    latitude: 37.578046,
    longitude: 126.976889,
  };
  // setLocation(initVal)
  if (!location) {
    return (
      <View>
        <Text>GPS Disalbed</Text>
      </View>
    );
  } else {
    console.log(location);
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1, margin: 5}}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            longitudeDelta: 0.1,
            latitudeDelta: 0.3,
          }}
        />
        <Marker
          coordinate={{
            latitude: 37.578046,
            longitude: 126.976889,
          }}
          title="경복궁"
          description="조선왕조 왕의 거처"
          image={require('./images/pin.png')}
        />
        <Text>hi</Text>
      </View>
    );
  }
};
export default App;

const styles = StyleSheet.create({});
