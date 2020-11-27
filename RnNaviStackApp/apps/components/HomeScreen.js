/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';

function HomeScreen({ navigation }) {
    return (

        <View style={styles.layoutStyle}>
            {/* 가로 슬라이드 활성화(버튼만 슬라이드하기 css 참조 flex:1 이걸론 하기 힘듬) */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.buttonStyle}>
                    {/* <Text>Home Screen</Text> */}
                    <Button
                        title="상세화면"
                        onPress={() => navigation.navigate('DETAIL')} />
                    <Button
                        title="설정화면"
                        onPress={() => navigation.navigate('SETTING')} />
                </View>
            </ScrollView>
            <View style={styles.mainStyle}>
                <Text>Home UI Layout</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainStyle: {
        backgroundColor: '#cfcfcf',
        // flex: 1
        height:'95%',
    },
    layoutStyle: {
        // flex: 1,
        // flexDirection: 'column'
    },
    buttonStyle: {
        flexDirection: 'row',
        // alignItems: 'baseline',
        // justifyContent: 'flex-start',
    },
});
export default HomeScreen;