/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class componentName extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Setting</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  header: {
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'DancingScript-Bold',
    color: '#495464',
  },
});

export default componentName;
