import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Button, Alert, ScrollView} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';
import {TextInput, FlatList} from 'react-native-gesture-handler';
import { pharmacy } from '../../redux/actions/pharmacy';
import { connect } from 'react-redux';


import LinearGradient from 'react-native-linear-gradient';

import { family_members} from '../../redux/actions/family_members';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';



const members = [
  {
    cat_id: '1',
    cat_img: Images.labcatImg,
    cat_name: 'Member 1',
    screenName: 'LabDetailedCategory',
  },
  {
    cat_id: '2',
    cat_img: Images.labcatImg,
    cat_name: 'Member 2',
    screenName: 'LabDetailedCategory',
  },
  {
    cat_id: '3',
    cat_img: Images.labcatImg,
    cat_name: 'Member 3',
    screenName: 'LabDetailedCategory',
  },
  {
    cat_id: '4',
    cat_img: Images.labcatImg,
    cat_name: 'Member 4',
    screenName: 'LabDetailedCategory',
  },
  {
    cat_id: '5',
    cat_img: Images.labcatImg,
    cat_name: 'Member 5',
    screenName: 'LabDetailedCategory',
  },
  {
    cat_id: '6',
    cat_img: Images.labcatImg,
    cat_name: 'Member 6',
    screenName: 'LabDetailedCategory',
  },
  {
    cat_id: '7',
    cat_img: Images.labcatImg,
    cat_name: 'Member 7',
    screenName: 'LabDetailedCategory',
  },
  {
    cat_id: '8',
    cat_img: Images.labcatImg,
    cat_name: 'Member 8',
    screenName: 'LabDetailedCategory',
  },
];

class FamilyMembers extends Component {

  state = {FM : []}

  async _getStorageValue(){
            var value = await AsyncStorage.getItem('token')
            if (value != null){
                
                this.setState({usersname:value})
                this.setState({FM: this.props.family_members(value)})
                // console.log(value2)

                // if (value2.data == undefined){
                //   await AsyncStorage.removeItem('token')
                //   this.props.navigation.replace('Login')
                // }
               // this.props.navigation.replace('AppHome')
            }
            else
              
               // this.props.navigation.replace('Login')

            return value
          }

  componentDidMount(){
    this._getStorageValue()
  }
  render() {
    return (
      // console.log(this.state.FM)
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
                  <Text style={styles.uName}>Your Family Members</Text>
                </View>
                <View style={styles.settingIconWrapper} />
              </View>
            </LinearGradient>
            <View style={styles.inputWrapper}>
              <Image source={Icons.searchIcon} />
              <TextInput
                style={styles.searchinp}
                placeholder="Search for your Family Members"
              />
            </View>
          </View>
          <View style={styles.topText}>
            <Button 
                onPress={(this.props.navigation.push('Profile'))}
                title="Add New Family Member"
            />
          </View>

          <View style={styles.docListWrapper}>
            <FlatList
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              data={members}
              renderItem={({item}) => (
                <View style={styles.docTypeWrapper}>
                  <Image style={styles.labcatImg} source={item.cat_img} />
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

const mapStateToProps = (state) => {
  console.log(state.family_members.family_members)
  return {
    family_members1:state.family_members.family_members
  };
};

export default connect(mapStateToProps, {
 family_members
})(FamilyMembers);

