/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class TopBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={{textAlign:'center'}}>{this.props.refreshDate}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    alignSelf: 'stretch',
    flexDirection: 'row',
    backgroundColor: '#1877f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
