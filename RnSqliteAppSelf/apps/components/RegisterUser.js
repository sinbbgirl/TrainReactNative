/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import MyButton from '../controls/MyButton';

let db = openDatabase({name: 'Users.db'});

const RegisterUser = ({navigation}) => {
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  let registerUser = () => {
    console.log(userName, userContact, userAddress);
    if (!userName) {
      alert('이름을 입력하세요');
      return;
    }
    if (!userContact) {
      alert('연락처를 입력하세요');
      return;
    }
    if (!userAddress) {
      alert('주소를 입력하세요');
      return;
    }

    db.transaction(function (txn) {
      txn.executeSql(
        `INSERT INTO table_user 
        (user_name, user_contact, user_address)
        VALUES(?,?,?)`,
        [userName, userContact, userAddress],
        (tx, res) => {
          console.log('result:', res.rowsAffected);
          if (res.rowsAffected > 0) {
            Alert.alert('등록 성공', '회원 등록에 성공하셨습니다', [
              {
                text: 'OK',
                onPress: () => navigation.navigate('HomeScreen'),
              },
            ],
            {cancelable:false});
          } else {
              alert('등록에 실패하셨습니다')
          }
        },
      );
    });
  };

  return (
    <View>
      <TextInput
        placeholder="이름 입력"
        style={styles.input}
        onChangeText={(userName) => setUserName(userName)}
      />
      <TextInput
        placeholder="연락처 입력"
        style={styles.input}
        onChangeText={(userContact) => setUserContact(userContact)}
      />
      <TextInput
        placeholder="주소 입력"
        style={styles.input}
        onChangeText={(userAddress) => setUserAddress(userAddress)}
      />
      <MyButton title="저장" customClick={registerUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 21,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d2c4',
    fontSize: 20,
  },
});

export default RegisterUser;
