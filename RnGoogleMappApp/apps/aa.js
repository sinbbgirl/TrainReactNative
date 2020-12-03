/* eslint-disable prettier/prettier */
import React, {useEffect, useState, Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  PermissionsAndroid,
  Button,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
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
// const [location, setLocation] = useState({});
class nope extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {latitude: 37.578046, longitude: 126.976889},
    };
  }

  componentDidUpdate() {
    requestPermission()
      .then((result) => {
        console.log(result);
        if (result === 'granted') {
          Geolocation.getCurrentPosition(
            (pos) => {
              //   setLocation(pos.coords);
              this.setState({
                location: pos.coords,
              });
            },
            (error) => console.error(`Position Error: ${error}`),
            {enableHighAccuracy: true, timeout: 20000},
          );
          componentWillUnmount();
        } else if (result === '') {
        }
      })
      .catch((err) => console.error(`useEffect Error: ${err}`));
  }

  render() {
    if (!this.state.location) {
      return (
        <View>
          <Text>GPS Disalbed</Text>
        </View>
      );
    } else {
      console.log(this.state.location);
      return (
        <View style={{flex: 1}}>
          <MapView
            style={{flex: 1, margin: 5}}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: this.state.location.latitude,
              longitude: this.state.location.longitude,
              longitudeDelta: 0.1,
              latitudeDelta: 0.3,
            }}
          />
          <Button title="a" onPress={() => this.setState({hi: 'txt'})} />
          <Text>hi</Text>
        </View>
      );
    }
  }
}
export default nope;

const styles = StyleSheet.create({});
