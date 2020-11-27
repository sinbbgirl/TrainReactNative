/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <Text children="Hello ReactNative" style={styles.title} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
});

export default App;
