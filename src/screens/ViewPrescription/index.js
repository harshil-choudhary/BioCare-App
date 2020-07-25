import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView,Alert, Modal, FlatList, Button} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
 

import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
import { getProfile } from '../../redux/actions/getProfile';
import {myPrescriptions} from '../../redux/actions/myPrescriptions';




 
class ViewPrescription extends Component {
  state = {
    data:[],
    name:'',
    token:'',
    patient_id:'',
    patient_name:'',
    doctor_name:'',
    price:'',
    orderItems:[],
  }

  componentDidMount(){
    this._getStorageValue()
    // this.props.myPrescriptions(this.props.route.params.prescription_id)
  }

  async _getStorageValue(){
          var value = await AsyncStorage.getItem('token')
          var my_id = await AsyncStorage.getItem('my_id')
          var name = await AsyncStorage.getItem('name')
          if (value != null){
              
              this.setState({token:value, patient_id: my_id,  
                name: name, prescription: this.props.route.params.prescription, 
                patient_name : this.props.route.params.prescription.patient_name, 
                doctor_name : this.props.route.params.prescription.doctor_name, 
                orderItems : JSON.parse(this.props.route.params.prescription.prescription_items),//JSON.parse(JSON.stringify(this.props.route.params.prescription.prescription_items, typeof value === 'undefined' ? null : value)),
                price : this.props.route.params.prescription.fees})

                console.log("Order Items : "+this.state.orderItems)
              // var value2 = this.props.my_doctors(value)
              //this.setState({data: this.props.videoList(value)})

              if (!my_id){

                this.props.navigation.push('Members')
              }
              // var value2 = this.props.getProfile(value, my_id)
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

  console.log(this.state.orderItems)


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
                  <Text style={styles.uName}>Prescription</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.settingIconWrapper}
                  onPress={() => {
                    this.props.navigation.push("Members", {screen: 'ViewPrescription'})
                  }}>
                  <Text style={styles.dropName}>{this.state.name}</Text>
                </TouchableOpacity>

              </View>
          </LinearGradient>

          <View style={styles.boxCont1}>
            
            <View style={styles.innerBox}>
              <Text style={styles.inputHeads2}>Patient Name : </Text>
              <Text style={styles.inputHeads}>{this.state.patient_name}</Text> 
            </View>

            <View style={styles.innerBox}>
              <Text style={styles.inputHeads2}>Doctor Name : </Text>
              <Text style={styles.inputHeads}>{this.state.doctor_name}</Text> 
            </View>

            <View style={styles.innerBox}>
              <Text style={styles.inputHeads2}>Total Price : </Text>
              <Text style={styles.inputHeads}>{this.state.price}</Text> 
            </View>
            
            <View style={styles.FlatListWrapper}>
            <FlatList
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              // data={this.props.myAddress1}
              data={this.state.orderItems}
              renderItem={({item}) => (
                <View style={styles.docTypeWrapper}>
                  <View style={styles.innerFlatlistBox}>
                    <View style={styles.innerFlatlistTextBox}>
                      <Text style={styles.itemHeader}>Name: </Text>
                      <Text style={styles.itemText}>{item.medicine}</Text>
                
                    </View>
                    <View style={styles.innerFlatlistTextBox}>
                      <Text style={styles.itemHeader}>Quantity: </Text>
                      <Text style={styles.itemText}>{item.qty}</Text>
                    </View>
                    <View style={styles.innerFlatlistTextBox}>
                      <Text style={styles.itemHeader}>Instructions: </Text>
                      <Text style={styles.itemText}>{item.instructions}</Text>
                    </View>
                    <View style={styles.innerFlatlistTextBox}>
                      <Text style={styles.itemHeader}>Time: </Text>
                      <Text style={styles.itemText}>{item.timings}</Text>
                    </View>
                    <View style={styles.innerFlatlistTextBox}>
                      <Text style={styles.itemHeader}>Price: </Text>
                      <Text style={styles.itemText}>{item.price}</Text>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={item => item.medicine}
            />
          </View>
            
      
      
          </View>    
          <View style={styles.bottomBtnContainer}>
              
              {/*<TouchableOpacity
                activeOpacity={1}
                onPress={() => this.props.navigation.push('Invoice')}>
                <LinearGradient
                  colors={['#5FBEF4', '#75E4F7']}
                  start={{x: 0.1, y: 2}}
                  end={{x: 1.5, y: 1.9}}
                  locations={[0.1, 0.6]}
                  style={[styles.applyBtnContainer, {marginTop: 20}]}>
                  <Text style={styles.btnText}>View Invoice</Text>
                </LinearGradient>
              </TouchableOpacity>*/}
          
          </View>
         
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    myPrescriptions1:state.myPrescriptions.myPrescriptions,
    getProfile1:state.getProfile.getProfile,
  };
};

export default connect(mapStateToProps, {
  myPrescriptions, getProfile,
})(ViewPrescription);
