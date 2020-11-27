/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SettingScreen extends Component {
    render() {
        return (
            <View style={styles.layout}>
                <Text children="Setting" style={styles.text} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#c9c9c9',
    },
    text: {
        fontSize: 24,
        color: '#a0a',
    },
});

export default SettingScreen;