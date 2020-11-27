/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { Link } from '@react-navigation/native';
import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

class customDrawer extends Component {
    constructor(props) {
        super(props);
        this.items = [
            {
                navOptionIcon: 'home', //fontaweome 아이콘 이름
                navOptionName: 'HOME', // 메뉴표시이름,
                screenName: 'Home' // 컴포넌트 이름
            },
            {
                navOptionIcon: 'road', //fontaweome 아이콘 이름
                navOptionName: 'DETAIL', // 메뉴표시이름,
                screenName: 'Detail' // 컴포넌트 이름
            },
            {
                navOptionIcon: 'gear', //fontaweome 아이콘 이름
                navOptionName: 'SETTING', // 메뉴표시이름,
                screenName: 'Setting' // 컴포넌트 이름
            },
        ]

    }


    render() {
        return (
            <View style={styles.drawer}>
                <Image
                    source={require('./images/cat.png')}
                    style={styles.profile} />
                <View style={styles.menuGroup}>
                    {this.items.map((item, index) =>
                        <View key={index}
                            style={styles.menuItem}>
                            {/* <Text children={item.screenName} /> */}
                            <TouchableOpacity onPress={() => this.props.navigation.navigate(item.screenName)}>
                                <View style={styles.touch}>
                                    <Icon name={item.navOptionIcon} size={25} style={styles.icon} />
                                    <Text children={item.navOptionName} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    drawer: {
        backgroundColor: '#a9a9a9',
        alignItems: 'baseline',
    },
    profile: {
        width: '100%',
        // height: 100,
        resizeMode: 'stretch'
    },
    touch: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    menuGroup: {
        backgroundColor: 'white',
        width: '100%'
    },
    menuItem: {
        paddingTop: 0, paddingLeft: 10
    },
    icon: { paddingRight: 5 }
})

export default customDrawer;