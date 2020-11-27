/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function DetailScreen({ navigation }) {
    return (
      <View style={styles.layoutStyle}>
        <View style={styles.buttonStyle}>
          {/* <Text>Home Screen</Text> */}
          {/* <Button
            title="상세화면 재진입"
            onPress={() => navigation.push('DETAIL')} /> */}
          <Button
            title="설정화면"
            onPress={() => navigation.navigate('SETTING')} />
          <Button
            title="홈으로"
            onPress={() => navigation.navigate('HOME')} />
          <Button
            title="뒤로"
            onPress={() => navigation.goBack()} />
          {/* 둘다 같음 */}
          {/* onPress={() => navigation.pop()} /> */}
          {/* <Button
            title="최초화면으로"
            onPress={() => navigation.popToTop()} /> */}
        </View>
        <View style={styles.mainStyle}>
          <Text>Detail UI Layout</Text>
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    mainStyle: {
      backgroundColor: '#cfcfcf',
      flex: 1
    },
    layoutStyle: {
      flex: 1,
    //   flexDirection: 'column'
    },
    buttonStyle: {
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'flex-start',
    },
  });
  export default DetailScreen;