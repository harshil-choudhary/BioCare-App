import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView,Alert, Modal, FlatList, Button} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
 ;

import { example } from '../../redux/actions/example';
import { connect } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
import { lab_categories } from '../../redux/actions/lab_categories';
import AsyncStorage from '@react-native-community/async-storage';
import { getProfile } from '../../redux/actions/getProfile';


class FindLabs extends Component {



  state = {
      showModal:false,
      categoryText:'General',
      Lab_Cat : [],
      city:'',
      name:''
   }

  componentDidMount(){
    this.setState({Lab_Cat: this.props.lab_categories('')})
    this._getStorageValue()

  }

async _getStorageValue(){
            var value = await AsyncStorage.getItem('token')
            var my_id = await AsyncStorage.getItem('my_id')
            var city = await AsyncStorage.getItem('city')
            var name = await AsyncStorage.getItem('name')
            if (value != null){
                console.log(city)
                this.setState({usersname:value})
                this.setState({patient_id:my_id})
                this.setState({city:city})
                this.setState({name:name})

                if (!my_id){
                  this.props.navigation.push('Members')
                }
                var value2 = this.props.getProfile(value, my_id)
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
                  <Text style={styles.uName}>Find Labs</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.settingIconWrapper}
                  onPress={() => {
                    this.props.navigation.push("Members", {screen: 'FindLabs'})
                  }}>
                  <Text style={styles.dropName}>{this.state.name}</Text>
                </TouchableOpacity>
              </View>
          </LinearGradient>

          <View style={styles.boxCont1}>

            <Text style={styles.inputHeads}>City</Text>
            
            <View style={styles.innerBox}>
              <Image  style={styles.doclocImg} source={Icons.locationIcon} /> 
              <TextInput
              style={styles.textInputBox}
              onChangeText={city => this.setState({city})}
              value={this.state.city}
              placeholder="City"/>    
            </View>           
      
            <LinearGradient
              colors={['#5588e7', '#75e4f7']}
              start={{x: 0.1, y: 0.1}}
              end={{x: 0.3, y: 1.9}}
              locations={[0.1, 0.6]}
              style={styles.bookTextbtnWrapper}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.bookBtn}
                onPress={() => this.props.navigation.replace('Reports', {city:this.state.city, category: this.state.categoryText})}>
                <Text style={[styles.bookTextbtn, {color: '#ffffff'}]}>
                  Find Labs
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
    example: state.example.example,
    lab_categories1:state.lab_categories.lab_categories,
    getProfile1:state.getProfile.getProfile,
  };
};

export default connect(mapStateToProps, {
  example, lab_categories,getProfile,
})(FindLabs);
