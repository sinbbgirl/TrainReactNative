/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';

class DetailScreen extends Component {
    render() {
        return (
            <View style={styles.layout}>
                <Text>디테일</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layout: { flex: 1, alignItems: 'center', justifyContent: 'center' }
})

export default DetailScreen;