/* eslint-disable prettier/prettier */
import React, {Component, useEffect, useState} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import CplTodoItem from './CplTodoItem';

let db = openDatabase({name: 'TodoList.db'});

const CplTodoList = () => {
  let [cplItemList, setCplItemList] = useState([]);
  useEffect(() => {
    db.transaction((txn) => {
      txn.executeSql(
        `SELECT * FROM table_todolist WHERE checked = 1`,
        [],
        (txn, res) => {
          let tmp = [];
          for (let i = 0; i < res.rows.length; i++) {
            tmp.push(res.rows.item(i));
          }
          setCplItemList(tmp);
        },
      );
    });
  });
  const completedItemList = cplItemList.map((item) => (
    <View key={item.id}>
      <CplTodoItem content={item.content} id={item.id} />
    </View>
  ));
  return (
    <View>
      <Text style={styles.header}>Congrats! Completed</Text>
      <ScrollView>{completedItemList}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'DancingScript-Bold',
    color: '#495464',
  },
});

export default CplTodoList;
