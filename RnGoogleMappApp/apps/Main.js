/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  PermissionsAndroid,
  Button,
  Linking,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Getlocation from 'react-native-get-location';
import MyMarker from './MyMarker';

export default class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initLocation: {
        // 경복궁
        latitude: 37.578046,
        longitude: 126.976889,
        longitudeDelta: 0.1,
        latitudeDelta: 0.1,
      },
      pinLocation: {
        //부산it교육센터
        latitude: 35.156021,
        longitude: 129.05948,
      },
    };
  }
  componentDidMount() {
    console.log('init');
    console.log(this.state.initLocation);
  }

  async getCurrentLocation() {
    await Getlocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then((res) => {
        console.log('res', res);
        let tmpLocation = {
          latitude: res.latitude,
          longitude: res.longitude,
          // 0.1 default zoom: 0.05<0.02
          longitudeDelta: 0.05,
          latitudeDelta: 0.05,
        };
        this.setState({
          initLocation: tmpLocation,
        });
      })
      .catch((err) => {
        const {code, message} = err;
        console.log(code, message);
      });
  }

  onMyLocationClick = () => {
    this.getCurrentLocation();
  };

  onMarkerClick = () => {
    Linking.openURL('http://www.busanit.ac.kr/m');
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} region={this.state.initLocation}>
          <Marker
            coordinate={this.state.pinLocation}
            title="부산IT교육센터"
            description="부산인재개발원"
            image={require('./images/pin.png')}
            onCalloutPress={this.onMarkerClick}
          />
          {this.state.initLocation.latitude ? (
            <MyMarker location={this.state.initLocation} title="현재위치" />
          ) : (
            <View />
          )}
        </MapView>
        <Button title="현재위치" onPress={this.onMyLocationClick} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, margin: 10},
  map: {flex: 1, marginBottom: 10},
});
