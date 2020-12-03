/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class CoinItem extends Component {
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  render() {
    const {name, volume, price, rank,iconUrl} = this.props;
    // console.log('icon:',iconUrl)
    return (
      <View style={styles.subContainer}>
        <Image source={{uri: iconUrl}} style={styles.coin} />
        <View style={styles.coinDetail}>
          <Text style={styles.coinName}>{name}</Text>
          <Text style={{color: '#000'}}>vol: {this.numberWithCommas(Number(volume))}</Text>
          <Text>{this.numberWithCommas(Number(price))}</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>#{rank}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    width: '97.5%',
    height: 90,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 5,
  },
  coin: {
    width: 64,
    height: 64,
  },
  coinDetail: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  coinName: {fontSize: 20, textAlign: 'left', width: 100, color: '#000'},
});
