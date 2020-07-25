import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import styles from './style';
import { Icons, Images } from '../../utils';
import { TextInput, FlatList, BorderlessButton } from 'react-native-gesture-handler';
import { ListItem, SearchBar } from 'react-native-elements';
//Libraries
import LinearGradient from 'react-native-linear-gradient';
import { color } from 'react-native-reanimated';
import { myAddress } from '../../redux/actions/myAddress';
import AsyncStorage from '@react-native-community/async-storage';
import { my_appointments } from '../../redux/actions/my_appointments';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/actions/getProfile';
import { saveOrder } from '../../redux/actions/saveOrder';
import { myPrescriptions } from '../../redux/actions/myPrescriptions';

class MyAddresses extends Component {
  state = {
    addresses: [],
  }
  state = {
    Appoint : [],
    address : '',
    token:'',
    contact_no:'',
    prescription:[],
    pharmacy_id:'',
    patient_id:'',

  }


   async _getStorageValue(){
    var value = await AsyncStorage.getItem('token')
    var my_id = await AsyncStorage.getItem('my_id')
    var my_id = await AsyncStorage.getItem('contact_no')
    if (value != null){
        this.setState({token:value})
        this.setState({token:value, patient_id: my_id})
        this.props.my_appointments(value)

        if (!patient_id){

          this.props.navigation.push('Members')
       }
        var value2 = this.props.getProfile(value, my_id)
        // this.setState({addresses: this.props.my_appointments(value)})
        
    }
    else
    return value
  }
  componentDidMount() {
    this.setState({prescription:this.props.myPrescriptions(this.props.route.params.prescription_id)})
    console.log("Pharm_id:"+this.props.route.params.pharm_id+"Phone"+this.props.getProfile1.phone)
    this.setState({
      pharmacy_id:this.props.route.params.pharm_id,
      contact_no:this.props.getProfile1.phone,
    })
    this._getStorageValue();
  }

  submitForm(){
    
    console.log(this.state)
    this.props.saveOrder(this.state)
    this.props.navigation.push('Pharmacy')

    // redirect anywhere you want
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
                  <Text style={styles.uName}>My Addresses</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.settingIconWrapper}
                  onPress={() => {
                    this.props.navigation.push("Members", {screen: 'MyAddresses'})
                  }}>
                  <Text style={styles.dropName}>{this.state.name}</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
          <View style={styles.boxCont1}>
          <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.flatListCont}
                    data={this.props.my_appointments1}
                    renderItem={({item}) => (
                      <>
            <View style={styles.innerBox}>
              <View style={styles.circle}></View>  
              <View style={styles.innerTextcont}>
                <Text style={styles.name}>{item.address}</Text>    
                
              </View>
              <TouchableOpacity
                  activeOpacity={1}
                  style={styles.selectBtn}
                  onPress={() => {this.setState({address:item.address})
                  console.log(item.address + "is selected")}
                  }>
                  <Text style={styles.tnc}>Select</Text>
              </TouchableOpacity>
            </View>
              
             
            </>
                    )}
                    keyExtractor={item => item.id}
                  />
          </View>
         <View style={styles.bottomBtnContainer}>
              
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => this.submitForm()}>
                  <LinearGradient
                    colors={['#5FBEF4', '#75E4F7']}
                    start={{x: 0.1, y: 2}}
                    end={{x: 1.5, y: 1.9}}
                    locations={[0.1, 0.6]}
                    style={[styles.applyBtnContainer, {marginTop: 20}]}>
                    <Text style={styles.btnText}>Order</Text>
                  </LinearGradient>
                </TouchableOpacity>
            
            </View>
        </View>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.myAddress.myAddress)
  return {
    myAddress1: state.myAddress.myAddress,
    my_appointments1: state.my_appointments.my_appointments,
    getProfile1:state.getProfile.getProfile,
    saveOrder:state.saveOrder,
    myPrescriptions1:state.myPrescriptions.myPrescriptions
  };
};
export default connect(mapStateToProps, {
  myAddress, my_appointments, getProfile, saveOrder, myPrescriptions,
})(MyAddresses);
