/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function SettingScreen({ navigation }) {
    return (
        <View style={styles.layoutStyle}>
            {/* <View> */}
            <View style={styles.buttonStyle}>
                {/* <Text>Home Screen</Text> */}
                {/* <Button
                title="설정화면 재진입"
                onPress={() => navigation.push('SETTING')} /> */}
                <Button
                    title="상세화면"
                    onPress={() => navigation.navigate('DETAIL')} />
                <Button
                    title="홈으로"
                    onPress={() => navigation.navigate('HOME')} />
                <Button
                    title="뒤로"
                    onPress={() => navigation.goBack()} />
                {/* <Button
                title="최초화면으로"
                onPress={() => navigation.popToTop()} /> */}
            </View>
            <View style={styles.mainStyle}>
                <Text>Setting UI Layout</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainStyle: {
        backgroundColor: '#ff0',
        flex: 1,
    },
    layoutStyle: {
        flex: 1,
        // flexDirection: 'column',
    },
    buttonStyle: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'flex-start',
    },
});
export default SettingScreen;