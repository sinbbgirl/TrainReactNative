/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import MyButton from '../controls/MyButton';

let db = openDatabase({name: 'Users.db'});

const HomeScreen = ({navigation}) => {
  useState(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        `SELECT name 
        FROM sqlite_master 
        WHERE type='table' 
        AND name='table_user'`,
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length === 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              `CREATE TABLE table_user (
              user_id	INTEGER,
              user_name	TEXT NOT NULL,
              user_contact	TEXT NOT NULL,
              user_address	TEXT NOT NULL,
              PRIMARY KEY("user_id" AUTOINCREMENT)
            )`,
              [],
            );
          }
        },
      );
    });
  }, []);

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Home Screen</Text>
      </View>
      <MyButton
        title="사용자 등록"
        customClick={() => navigation.navigate('RegisterUser')}
      />
      <MyButton
        title="사용자 전체조회"
        customClick={() => navigation.navigate('ViewAllUsers')}
      />
      <MyButton
        title="사용자 조회"
        customClick={() => navigation.navigate('ViewUser')}
      />
      <MyButton
        title="사용자 수정"
        customClick={() => navigation.navigate('UpdateUser')}
      />
      <MyButton
        title="사용자 삭제"
        customClick={() => navigation.navigate('DeleteUser')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default HomeScreen;
