/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View} from 'react-native';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import {openDatabase} from 'react-native-sqlite-storage';

let db = openDatabase({name: 'TodoList.db'});

class HomeScreen extends Component {
  componentDidMount() {
    db.transaction(function (txn) {
      txn.executeSql(
        `SELECT name
          FROM sqlite_master
          WHERE type='table'
          AND name='table_todolist'`,
        [],
        function (txn, res) {
          console.log('item', res.rows.length);
          if (res.rows.length === 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_todolist');
            txn.executeSql(
              `CREATE TABLE IF NOT EXISTS table_todolist (
                      id	INTEGER,
                      content	TEXT NOT NULL,
                      date INTEGER NOT NULL,
                      checked INTEGER NOT NULL,
                      PRIMARY KEY("id" AUTOINCREMENT)
                      )`,
            );
          }
        },
      );
    });
  }
  render() {
    return (
      <View>
        <TodoInsert />
        <TodoList />
      </View>
    );
  }
}

export default HomeScreen;
