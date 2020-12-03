/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {openDatabase} from 'react-native-sqlite-storage';

let db = openDatabase({name: 'TodoList.db'});

const TodoInsert = () => {
  let [content, setContent] = useState('');
  const input = React.createRef();

  let insertContent = () => {
    if (!content) {
      Alert.alert('알림', '할일을 입력하세요');
      return;
    }

    db.transaction((txn) => {
      txn.executeSql(
        `INSERT INTO table_todolist
            (content,date,checked)
            VALUES
            (?,?,0)
            `,
        [content, Date.now()],
        (txn, res) => {
          console.log('res.aff:', res.rowsAffected);
          if (!res.rowsAffected > 0) {
            alert('실패');

          } else {
            console.log('추가 성공');
          }
        },
      );
    });
    input.current.clear();
    setContent('');
    input.current.blur();
  };

  const onReset = () => {
    input.current.clear();
    setContent('');
  };

  return (
    <View>
      <Text style={styles.header}>To Do List</Text>
      <Input
        label="할일 추가하기"
        placeholder="ADD ..."
        leftIcon={{type: 'font-awesome-5', name: 'tasks'}}
        onChangeText={(content) => setContent(content)}
        ref={input}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Add to List"
          type="clear"
          titleStyle={{color: '#16697a'}}
          icon={{
            type: 'ionicons',
            name: 'add-circle',
            color: '#16697a',
          }}
          containerStyle={{width: '47%'}}
          onPress={insertContent}
        //   onPress={()=>alert('aa')}
        />
        <Button
          title=" Rewrite"
          type="clear"
          titleStyle={{color: '#821752'}}
          icon={{
            type: 'ionicons',
            name: 'backspace',
            color: '#821752',
          }}
          containerStyle={{width: '53%'}}
          onPress={onReset}
        />
      </View>
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
  buttonContainer: {
    marginTop: -15,
    flexDirection: 'row',
    // justifyContent: 'space-around',
  },
});

export default TodoInsert;
