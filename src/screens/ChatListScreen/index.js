import React, { Component } from "react";
import {Text, View, Image, TouchableOpacity, ScrollView, FlatList,Alert} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';
import LinearGradient from 'react-native-linear-gradient';
import { GiftedChat } from 'react-native-gifted-chat';

const chatList = [
    {
      chat_id: '1',
      doc_img: Images.doc1Img,
      doc_name: 'Gaurav Dixit',
      screenName: 'Chat',
    },
    {
        chat_id: '2',
        doc_img: Images.doc1Img,
        doc_name: 'Gaurav Dixit',
        screenName: 'Chat',
    },
    {
        chat_id: '3',
        doc_img: Images.doc1Img,
        doc_name: 'Gaurav Dixit',
        screenName: 'LabDetailedCategory',
    },
    {
        chat_id: '4',
        doc_img: Images.doc1Img,
        doc_name: 'Gaurav Dixit',
        screenName: 'LabDetailedCategory',
    },
    {
        chat_id: '5',
        doc_img: Images.doc1Img,
        doc_name: 'Gaurav Dixit',
        screenName: 'LabDetailedCategory',
    },
    {
        chat_id: '6',
        doc_img: Images.doc1Img,
        doc_name: 'Gaurav Dixit',
        screenName: 'LabDetailedCategory',
    },
    {
        chat_id: '7',
        doc_img: Images.doc1Img,
        doc_name: 'Gaurav Dixit',
        screenName: 'LabDetailedCategory',
    },
    {
        chat_id: '8',
        doc_img: Images.doc1Img,
        doc_name: 'Gaurav Dixit',
        screenName: 'LabDetailedCategory',
    },
  ];
  

class ChatListScreen extends Component {
    render() {
        return (
            <>
            <View style={styles.container}>
              <View style={styles.wrapper}>
                <LinearGradient
                  colors={['#5588e7', '#75e4f7']}
                  start={{x: 0.16, y: 0.1}}
                  end={{x: 1.1, y: 1.1}}
                  locations={[0.16, 50]}
                  style={styles.upperCont}>
                  <View style={styles.upperWrapper}>
                    <TouchableOpacity
                      style={styles.backIconWrapper}
                      activeOpacity={1}
                      onPress={() => this.props.navigation.goBack()}>
                      <Image source={Icons.BackIcon} />
                    </TouchableOpacity>
                    <View style={styles.imageWrapper}>
                      <Text style={styles.uName}>ChatList</Text>
                    </View>
                    <View style={styles.settingIconWrapper} />
                  </View>
                </LinearGradient>
    
              </View>
              <View style={styles.docListWrapper}>
                <FlatList
                  scrollEnabled={true}
                  showsVerticalScrollIndicator={false}
                  data={chatList}
                 
                  renderItem={({item}) => (
                    <View style={styles.docTypeWrapper}>
                      <Image style={styles.labcatImg} source={item.doc_img} />
                      <View style={styles.textBox}>
                        <Text style={styles.specialText}>{item.doc_name}</Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => this.props.navigation.push('Chat')}>
                        <Image source={Icons.goIcon} style={styles.iconStyle} />
                      </TouchableOpacity>
                    </View>
                  )}
                  keyExtractor={item => item.chat_id}
                />
              </View>
            </View>
          </>
        );
    }
}
export default ChatListScreen;

