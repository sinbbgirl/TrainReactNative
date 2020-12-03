/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: {uri: 'https://img.youtube.com/vi/1k7zsAfVH-c/maxresdefault.jpg'},
    };
  }

  showPicker = () => {
    const options = {
      title: '이미지 선택',
      takePhotoButtonTitle: '카메라',
      chooseFromLibraryButtonTitle: '저장소',
      cancelButtonTitle: '취소',
      allowsEditing:true,
      // customButtons:[
      //   {name:'kb', title:'카카오톡 이미지 선택'}
      // ]
      storageOption: {
        skipBackup: true, // iOS / android는 무시
        path: 'Pictures/images/',
        privateDirectory: true,
      },
    };
    ImagePicker.showImagePicker(options, (res) => {
      if (res.didCancel) {
        alert('취소하였습니다');
      } else if (res.error) {
        alert(`에러: ${res.error}`);
      } else if (res.customButton) {
        //
      } else {
        // url은 인터넷주소창
        // uri는 파일경로등 url의 상위개념
        const uri = {uri: res.uri};
        this.setState({
          img: uri,
        });
      }
    });
  };

  render() {
    return (
      <View style={styles.body}>
        <Button title="이미지 선택" onPress={this.showPicker} />
        <Text style={styles.urlText}>{this.state.img.uri}</Text>
        <Image source={this.state.img} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#e9e9e9',
    flex: 1,
    padding: 15,
  },
  urlText: {
    fontSize: 12,
    color: '#000',
    margin: 8,
  },
  image: {
    backgroundColor: '#1877f2',
    marginTop: 8,
    flex: 1,
    borderRadius: 10,
  },
});
