/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import TodoItem from './TodoItem';

let db = openDatabase({name: 'TodoList.db'});

const TodoList = () => {
  let [itemList, setItemList] = useState([]);
  useEffect(() => {
    db.transaction((txn) => {
      txn.executeSql(
        `SELECT * FROM table_todolist WHERE checked = 0 ORDER BY id DESC`,
        [],
        (txn, res) => {
          let tmp = [];
          for (let i = 0; i < res.rows.length; i++) {
            tmp.push(res.rows.item(i));
          }
          setItemList(tmp);
        },
      );
    });
  });
  const newItemList = itemList.map((item) => (
    <View key={item.id}>
      <TodoItem content={item.content} id={item.id} />
    </View>
  ));

  return (
    <ScrollView>
      {newItemList}
    </ScrollView>
  );
};

export default TodoList;
