import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';
import {TextInput, FlatList, BorderlessButton} from 'react-native-gesture-handler';
import { ListItem, SearchBar } from 'react-native-elements';
//Libraries
import LinearGradient from 'react-native-linear-gradient';
import { color } from 'react-native-reanimated';


const doctors = [
  {
    cat_id: '1',
    cat_img: Images.starImg,
    cat_name: 'Change Password',
    screenName: 'ChangePassword',
  },
  {
    cat_id: '2',
    cat_img: Images.starImg,
    cat_name: 'Display',
    screenName: 'ChangePassword',
  },
  {
    cat_id: '3',
    cat_img: Images.starImg,
    cat_name: 'About Us',
    screenName: 'ChangePassword',
  },
  {
    cat_id: '4',
    cat_img: Images.starImg,
    cat_name: 'FAQ',
    screenName: 'ChangePassword',
  },
  {
    cat_id: '5',
    cat_img: Images.starImg,
    cat_name: 'Notifications',
    screenName: 'ChangePassword',
  },
  {
    cat_id: '6',
    cat_img: Images.starImg,
    cat_name: 'Setting',
    screenName: 'ChangePassword',
  },
  {
    cat_id: '7',
    cat_img: Images.starImg,
    cat_name: 'Setting',
    screenName: 'ChangePassword',
  },
  {
    cat_id: '8',
    cat_img: Images.starImg,
    cat_name: 'Setting',
    screenName: 'ChangePassword',
  },
];

class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
    };
    this.arrayholder = [];
  }



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
                  <Text style={styles.uName}>Settings</Text>
                </View>
                <View style={styles.settingIconWrapper} />
              </View>
            </LinearGradient>

          </View>
          <View style={styles.docListWrapper}>
            <FlatList
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              data={doctors}
              renderItem={({item}) => (
                <View style={styles.docTypeWrapper}>
                  <View style={styles.textBox}>
                    <Text style={styles.specialText}>{item.cat_name}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.push(item.screenName)
                    }>
                    <Image source={Icons.goIcon} style={styles.iconStyle} />
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.cat_id}
            />
          </View>
        </View>
      </>
    );
  }
}

export default Settings;