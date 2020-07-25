import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, Alert, FlatList} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
 ;

import { TextInput } from 'react-native-gesture-handler';
import { family_members } from '../../redux/actions/family_members';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

class Members extends Component {
  state = {data : []}

  async _getStorageValue(){
            var value = await AsyncStorage.getItem('token')
            if (value != null){
                
                this.setState({usersname:value})
                var value2 = this.props.family_members(value);
                console.log(value2);
                // this.setState({data: value2})
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
    // this.setState({data: this.props.family_members()})
    this._getStorageValue();
  }
  render() {
    return (
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
                <View style={styles.titleWrapper}>
                  <Text style={styles.uName}>Select Family member</Text>
                </View>
                
              </View>
          </LinearGradient>

          <View style={styles.boxCont1}>
          <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.flatListCont}
                    data={this.props.family_members1}
                    renderItem={({item}) => (
                      <>
            <View style={styles.innerBox}>
              <View style={styles.circle}></View>  
              <View style={styles.innerTextcont}>
                <Text style={styles.name}>{item.name}</Text>    
                <Text style={styles.relation}>{item.gender}</Text>
                <Text style={styles.age}>Phone : {item.phone}</Text>
              </View>
              <TouchableOpacity
                  activeOpacity={1}
                  style={styles.selectBtn}
                  onPress={async (props) => {
                    await AsyncStorage.setItem('my_id', JSON.stringify(item.id))
                    await AsyncStorage.setItem('city', item.city)
                    await AsyncStorage.setItem('name', item.name)
                    if (this.props.route.params == 'undefined')
                      this.props.navigation.replace(this.props.route.params.screen);
                    else
                      this.props.navigation.replace('AppHome');
                  }}>
                  <Text style={styles.tnc}>Select</Text>
              </TouchableOpacity>
            </View>
              
             
            </>
                    )}
                    keyExtractor={item => item.id}
                  />
          </View>


          <View style={styles.bfbottomWrapper}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={async () => {await AsyncStorage.removeItem('token'); this.props.navigation.replace('Login')}}>
              <Text style={styles.feedbackTextbtn}>Logout</Text>
            </TouchableOpacity>
            <LinearGradient
              colors={['#5588e7', '#75e4f7']}
              start={{x: 0.1, y: 0.1}}
              end={{x: 0.3, y: 1.9}}
              locations={[0.1, 0.6]}
              style={styles.bookTextbtnWrapper}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.bookBtn}
                onPress={() => this.props.navigation.push('AddMember')}>
                <Text style={[styles.bookTextbtn, {color: '#ffffff'}]}>
                  Add Member
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    family_members1: state.family_members.family_members,
  };
};

export default connect(mapStateToProps, {
  family_members,
})(Members);
