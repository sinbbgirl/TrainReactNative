/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MyButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#968c83',
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    padding: 15,
  },
  buttonText: {color: '#fff5ea', fontSize: 16},
});

export default MyButton;
