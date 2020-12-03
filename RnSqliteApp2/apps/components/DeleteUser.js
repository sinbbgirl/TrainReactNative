/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View, Alert, SafeAreaView } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
 
import MyButton from '../controls/MyButton';
import MyTextInput from '../controls/MyTextInput';
 
var db = openDatabase({ name: 'Users.db' });
 
const DeleteUser = ({ navigation }) => {
  let [inputUserId, setInputUserId] = useState('');
 
  let deleteUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  table_user where user_id=?',
        [inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User deleted successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Please insert a valid User Id');
          }
        }
      );
    });
  };
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <MyTextInput
            placeholder="Enter User Id"
            onChangeText={
              (inputUserId) => setInputUserId(inputUserId)
            }
            style={{ padding: 10 }}
          />
          <MyButton title="Delete User" customClick={deleteUser} />
        </View>
      </View>
    </SafeAreaView>
  );
};
 
export default DeleteUser;
