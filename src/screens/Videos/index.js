import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Alert, Button } from 'react-native';

import styles from './style';

import { Icons, Images } from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import { FlatList } from 'react-native-gesture-handler';
import { getLocation } from '../../redux/actions/getLocation';
import { videoList } from '../../redux/actions/videoList';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { getProfile } from '../../redux/actions/getProfile';
import VideoPlayer from 'react-native-video-player';




class Videos extends Component {

  state = {
    location: '',
    name: '',
    token: '',
    patient_id: '',
    videos: [],
  }
  videoPlayer;

  componentWillFocus() {
    this._getStorageValue()
  }

  componentDidMount() {
    this._getStorageValue()
  }


  async _getStorageValue() {
    var value = await AsyncStorage.getItem('token')
    var my_id = await AsyncStorage.getItem('my_id')
    var name = await AsyncStorage.getItem('name')
    if (value != null) {
      this.props.videoList(value)
      this.setState({ token: value, patient_id: my_id, name: name })
      if (!my_id) {
        this.props.navigation.push('Members')
      }
      // var value2 = this.props.getProfile(value, my_id)
    }
    else
      return value
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <LinearGradient
              colors={['#5588e7', '#75e4f7']}
              start={{ x: 0.16, y: 0.1 }}
              end={{ x: 1.1, y: 1.1 }}
              locations={[0.16, 50]}
              style={styles.upperCont}>
              <View style={styles.upperWrapper}>
                <TouchableOpacity
                  style={styles.backIconWrapper}
                  activeOpacity={1}
                  onPress={() => this.props.navigation.goBack()}>
                  <Image source={Icons.BackIcon} />
                </TouchableOpacity>
                <View style={styles.titleWrapper}>
                  <Text style={styles.uName}>Videos</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.settingIconWrapper}
                  onPress={() => {
                    this.props.navigation.push("Members", { screen: 'Videos' })
                  }}>
                  <Text style={styles.dropName}>{this.state.name}</Text>
                </TouchableOpacity>
              </View>

            </LinearGradient>


            <View style={styles.docContWrapper}>
              <ScrollView>


                <View style={styles.docCont2}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.props.videoList1}
                    renderItem={({ item }) => (


                      <View style={styles.videoCard}>
                        <View style={styles.videoWrapper}>
                          <VideoPlayer
                            endWithThumbnail
                            video={{ uri: item.video_url }}
                            ref={r => this.player = r}
                          />

                        </View>
                        <View style={styles.textWrapper}>
                          <View style={styles.FieldView}>
                            <Text style={styles.header}>Video: </Text>
                            <Text style={styles.info}>{item.video_title}</Text>
                          </View>
                          <View style={styles.FieldView}>
                            <Text style={styles.header}>Doctor: </Text>
                            <Text style={styles.info}>{item.video_title}</Text>
                          </View>
                          <View style={styles.FieldView}>
                            <Text style={styles.header}>Date: </Text>
                            <Text style={styles.info}>{item.created_at.split('T')[0]}</Text>
                          </View>

                        </View>
                      </View>
                    )}
                    keyExtractor={item => item.id}
                  />
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    videoList1: state.videoList.videoList,
    getProfile1: state.getProfile.getProfile,

  };
};

export default connect(mapStateToProps, {
  videoList, getProfile
})(Videos);



