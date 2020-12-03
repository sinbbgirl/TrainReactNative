/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {Input} from 'react-native-elements';
import {openDatabase} from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import FontIcon from 'react-native-vector-icons/SimpleLineIcons';

let db = openDatabase({name: 'TodoList.db'});

const CplTodoItem = ({id, content}) => {
  const deleteItem = (id) => {
    Alert.alert(
      '주의',
      '삭제하시겠습니까?',
      [
        {
          text: 'OK',
          onPress: () =>
            db.transaction((txn) => {
              txn.executeSql(
                `DELETE FROM table_todolist WHERE id = ?`,
                [id],
                (txn, res) => {
                  if (res.rowsAffected > 0) {
                    console.log('delete success');
                  }
                },
              );
            }),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.itemContainer}>
      <Input
        value={content}
        leftIcon={{
          type: 'ant-design',
          name: 'star',
          color: '#32e0c4',
        }}
        inputStyle={styles.inputStyle}
        containerStyle={styles.containerStyle}
        disabled
      />
      <Icon name="check" size={25} color="#16697a"/>
      <Text>&nbsp;&nbsp;</Text>
      <FontIcon
        name="minus"
        size={20}
        color="#821752"
        onPress={() => deleteItem(id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputStyle: {
    color: '#394867',
    textDecorationLine:'line-through'
  },
  containerStyle: {
    width: '75%',
    marginRight: 5,
  },
});

export default CplTodoItem;
