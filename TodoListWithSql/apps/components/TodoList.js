/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Input} from 'react-native-elements';
import {openDatabase} from 'react-native-sqlite-storage';
import CplTodoItem from './CplTodoItem';
import TodoItem from './TodoItem';

let db = openDatabase({name: 'TodoList.db'});

const TodoList = () => {
  let [itemList, setItemList] = useState([]);
  let [cplItemList, setCplItemList] = useState([]);
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
      // txn.executeSql(
      //   `SELECT * FROM table_todolist WHERE checked = 1`,
      //   [],
      //   (txn, res) => {
      //     let temp = [];
      //     for (let i = 0; i < res.rows.length; i++) {
      //       temp.push(res.rows.item(i));
      //     }
      //     setCplItemList(temp);
      //   },
      // );
    });
  });
  const newItemList = itemList.map((item) => (
    <View key={item.id}>
      <TodoItem content={item.content} id={item.id} />
      <Text>{item.checked}</Text>
    </View>
  ));

  // const completedItemList = cplItemList.map((item) => {
  //   <View key={item.id}>
  //     <CplTodoItem content={item.content} id={item.id} />
  //   </View>;
  // });
  return (
    <ScrollView>
      {newItemList}
      <Text>완성</Text>
      {/* {completedItemList} */}
    </ScrollView>
  );
};

export default TodoList;
