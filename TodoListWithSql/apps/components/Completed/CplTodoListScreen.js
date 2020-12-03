/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CplTodoList from './CplTodoList';

class CplTodoListScreen extends Component {
  render() {
    return (
      <View>
        <CplTodoList />
      </View>
    );
  }
}

export default CplTodoListScreen;
