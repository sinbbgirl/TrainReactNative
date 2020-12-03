/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {openDatabase} from 'react-native-sqlite-storage';

let db = openDatabase({name: 'Users.db'});

const ViewAllUser = () => {
  // let [flatListItem, setFlatListItems] = useState([]);
  // useEffect(() => {
  //   db.transaction((txn) => {
  //     txn.executeSql(`SELECT * FROM table_user`, [], (tx, res) => {
  //       let tmp = [];
  //       for (let i = 0; i < res.rows.length; i++) {
  //         tmp.push(res.rows.item(i));
  //       }
  //       setFlatListItems(tmp);
  //     });
  //   });
  // });

  // let listViewItemSeparator = () => {
  //   return (
  //     <View
  //       style={{
  //         height: 0.2,
  //         width: '100%',
  //         backgroundColor: '#000',
  //       }}
  //     />
  //   );
  // };

  // let listItemView = (item) => {
  //   return (
  //     <View key={item.user_id} style={{backgroundColor: 'white', padding: 20}}>
  //       <Text>Id: {item.user_id}</Text>
  //       <Text>Name: {item.user_name}</Text>
  //       <Text>Contact: {item.user_contact}</Text>
  //       <Text>Address: {item.user_address}</Text>
  //     </View>
  //   );
  // };

  return (
    // <SafeAreaView>
    //   <View>
    //     <View>
    //       <FlatList
    //         data={flatListItem}
    //         ItemSeparatorComponent={listViewItemSeparator}
    //         keyExtractor={(item, index) => index.toString()}
    //         renderItem={({item}) => listItemView(item)}
    //       />
    //     </View>
    //   </View>
    // </SafeAreaView>
    <Text>ho</Text>
  );
};

export default ViewAllUser;
