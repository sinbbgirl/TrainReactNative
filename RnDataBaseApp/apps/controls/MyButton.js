/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const MyButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={props.onButtonClick}
        >
            <Text
                children={props.title}
                style={styles.text} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#394867',
        paddingVertical: 12,
        marginVertical: 8,
        marginHorizontal: 40,
        borderRadius:5
    },
    text: {
        color: '#f1f6f9'
    }
})

export default MyButton;
