import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
 ;
import { pharmacy } from '../../redux/actions/pharmacy';
import { connect } from 'react-redux';

import { example } from '../../redux/actions/example';
import { TextInput } from 'react-native-gesture-handler';

class FillProfile extends Component {
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
                  <Text style={styles.uName}>Complete Profile</Text>
                </View>
                
              </View>
          </LinearGradient>

          <View style={styles.boxCont1}>
            <TextInput 
              style={styles.innerBox}
              placeholder="   Name"/>
            <TextInput 
              style={styles.innerBox}
              placeholder="   E-Mail"/>
            <TextInput 
              style={styles.innerBox}
              placeholder="   Phone No."/>
            <TextInput 
              style={styles.innerBox}
              placeholder="   Date of Birth"/>
            <TextInput 
              style={styles.innerBox}
              placeholder="   Address"/>
            <TextInput 
              style={styles.innerBox}
              placeholder="   Any Ongoing Medical Conditions"/>
            <TextInput 
              style={styles.innerBox}
              placeholder="   Any Orevious Medical Conditions"/>
          </View>


          <View style={styles.bfbottomWrapper}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => console.log(
                'Complete Profile',
                'Are you sure you want to discard your changes?',
                [
                  {
                    text: 'Yes',
                    onPress: () => this.props.navigation.goBack(),
                  },
                  {
                    text: 'No',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                  },
                ],
                { cancelable: true }
              )}>
              <Text style={styles.feedbackTextbtn}>Cancel</Text>
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
                onPress={() => console.log('Complete Profile','Successfully saved')}>
                <Text style={[styles.bookTextbtn, {color: '#ffffff'}]}>
                  Save
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    );
  }
}


export default (FillProfile);
