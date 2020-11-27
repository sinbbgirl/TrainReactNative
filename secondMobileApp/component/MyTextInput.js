/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { TextInput, Button, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Text } from 'react-native';

class MyTextInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleEmail = (email) => {
        this.setState({ email });
    };

    handlePassword = (password) => {
        this.setState({ password });
    };

    handleLogin = () => {
        alert(`email:${this.state.email} \n password:${this.state.password}`)
    }

    render() {
        return (
            <KeyboardAvoidingView>
                <TextInput
                    style={styles.textinput}
                    placeholder="Email"
                    value={this.state.email}
                    autoCapitalize="none"
                    onChangeText={this.handleEmail} />
                <TextInput
                    style={styles.textinput}
                    placeholder="Password"
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={this.handlePassword} />
                {/* <Button title="외않되" color="#34626c" onPress={this.handleLogin}/> */}
                <TouchableOpacity style={styles.submitButton} onPress={this.handleLogin}>
                    <Text children={'Login'} style={styles.textStyle} />
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    textinput: {
        marginBottom: 10,
        height: 40,
        borderBottomColor: '#d6d2c4',
        borderBottomWidth: 1,
    },
    submitButton: {
        padding:10,
        height: 40,
        backgroundColor: '#968c83',
    },
    textStyle: {
        color: '#fff',
        textAlign: 'center',
    }
});

export default MyTextInput;
