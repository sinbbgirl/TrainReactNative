/* eslint-disable prettier/prettier */
import React from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native'
import MyButton from '../controls/MyButton';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text children="SQLite Sample" />
                <MyButton
                    title="사용자 전체보기"
                    onButtonClick={()=>
                        alert('who am i')
                    } />
                <MyButton title="사용자 선택" />
                <MyButton title="사용자 등록" />
                <MyButton title="사용자 수정" />
                <MyButton title="사용자 삭제" />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;