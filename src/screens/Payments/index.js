import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';
import {TextInput, FlatList, BorderlessButton} from 'react-native-gesture-handler';
import { ListItem, SearchBar } from 'react-native-elements';
//Libraries
import LinearGradient from 'react-native-linear-gradient';
import { color } from 'react-native-reanimated';

import { my_payments } from '../../redux/actions/my_payments';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';


class Payments extends Component {

  
  state={
    data:'',
  }
  async _getStorageValue(){
            var value = await AsyncStorage.getItem('token')
            var my_id = await AsyncStorage.getItem('my_id')
            var name = await AsyncStorage.getItem('name')
            if (value != null){
                
                this.setState({usersname:value, patient_id: my_id, name: name})
                
                if (!my_id){

                  this.props.navigation.push('Members')
                }
                this.props.my_payments(value, my_id)
                // this.setState({Appoint: this.props.my_doctors1})
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
    // this.setState({data: this.props.my_payments('')})
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
                  <Text style={styles.uName}>My Payments</Text>
                </View>
                <View style={styles.settingIconWrapper} />
              </View>
            </LinearGradient>

          </View>
          <View style={styles.docListWrapper}>
            <FlatList
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              data={this.props.my_payments1}
              renderItem={({item}) => (
                <View style={styles.docTypeWrapper}>
                  <Image style={styles.labcatImg} source={Icons.moneyIcon} />
                  <View style={styles.textBox}>
                    <Text style={styles.specialText}>
                      <Text style={styles.specialText2}> Patient Name: </Text>
                      {item.patient_name}</Text>
                    <Text style={styles.specialText}>
                    <Text style={styles.specialText2}> Amount: </Text>
                      {item.amount}</Text>
                    <Text style={styles.specialText}>
                    <Text style={styles.specialText2}> Order ID: </Text>
                      {item.pharmacy_order_id}</Text>
                  </View>
                  {/*<TouchableOpacity
                    onPress={() =>
                      console.log((item.patient_name),'Details')
                    }>
                    <Image source={Icons.goIcon} style={styles.iconStyle} />
                  </TouchableOpacity>*/}
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.my_payments.my_payments)
  return {
    my_payments1:state.my_payments.my_payments
  };
};

export default connect(mapStateToProps, {
 my_payments
})(Payments);
