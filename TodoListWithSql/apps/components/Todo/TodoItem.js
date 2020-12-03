/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {Input} from 'react-native-elements';
import {openDatabase} from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import FontIcon from 'react-native-vector-icons/SimpleLineIcons';

let db = openDatabase({name: 'TodoList.db'});

const TodoItem = ({id, content}) => {
  const [txt, setTxt] = useState('');
  const input = React.createRef();
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

  const updateItem = (txt, id) => {
    db.transaction((txn) => {
      txn.executeSql(
        `UPDATE table_todolist SET
            content = ?
            WHERE id = ?`,
        [txt, id],
        (txn, res) => {
          if (res.rowsAffected > 0) {
            alert('성공');
            // input.current.clear();
            // setTxt('');
          } else {
            alert('실패');
          }
        },
      );
    });
  };
  const completeItem = (id) => {
    db.transaction((txn) => {
      txn.executeSql(
        `UPDATE table_todolist SET
            checked = 1
            WHERE id = ?`,
        [id],
      );
    });
  };
  return (
    <View style={styles.itemContainer}>
      <Input
        editable={true}
        defaultValue={content}
        ref={input}
        // value={content}
        leftIcon={{
          type: 'ant-design',
          name: 'star',
          color: '#32e0c4',
        }}
        inputStyle={styles.inputStyle}
        containerStyle={styles.containerStyle}
        // disabled
        // disabledInputStyle={{color: '#222831'}}
        onChangeText={(txt) => setTxt(txt)}
      />
      <Icon
        name="check"
        size={25}
        color="#16697a"
        onPress={() => completeItem(id)}
      />
      <Text>&nbsp;&nbsp;</Text>
      <Icon
        name="tool"
        size={25}
        color="#625261"
        onPress={() => updateItem(txt, id)}
      />
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
  },
  containerStyle: {
    width: '75%',
    marginRight: 5,
  },
});

export default TodoItem;
