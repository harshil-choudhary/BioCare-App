import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { my_orders } from '../../redux/actions/my_orders';
import { cancelPharmacyOrder } from '../../redux/actions/cancelPharmacyOrder';
import { connect } from 'react-redux';
import AwesomeAlert from 'react-native-awesome-alerts';

const pharmCatTypes = [
  {
    pharm_cat_id: '1',
    pharm_cat_name: 'Pending',
  },
  {
    pharm_cat_id: '2',
    pharm_cat_name: 'Delivered',
  },
  {
    pharm_cat_id: '3',
    pharm_cat_name: 'Confirmed',
  },

];

class MyOrder extends Component {

  state = {orders : [], filter:[], patient_id :'',name:'', token:'' , showCancelAlert: false, Alert_pharmacy_name:''}
  cancel_order(item){
    this.showCancelAlert()
    this.props.cancelPharmacyOrder(this.state.token, this.state.patient_id, item.id)
    this.props.my_orders(this.state.token, this.state.patient_id, '')
  }

  renderButton(item){
    if ((item.delivered == 0 || item.paid == 0) && item.status == 0 ){
      return (<TouchableOpacity
                                activeOpacity={1}
                                style={styles.boxBtn2}
                                onPress={() =>
                                  { this.setState({Alert_pharmacy_name:item.pharmacy_name})
                                    this.cancel_order(item)}}>
                                <LinearGradient
                                  colors={['#5588e7', '#75e4f7']}
                                  start={{x: 0.1, y: 0.1}}
                                  end={{x: 0.3, y: 1.9}}
                                  locations={[0.1, 0.6]}
                                  style={styles.boxBtn2}>
                                  <Text
                                    style={[styles.btnText, {color: '#ffffff'}]}>
                                    Cancel
                                  </Text>
                                </LinearGradient>
                              </TouchableOpacity>)
    }
  }
async _getStorageValue(){
            var value = await AsyncStorage.getItem('token')
            var my_id = await AsyncStorage.getItem('my_id')
            var name = await AsyncStorage.getItem('name')
            if (value != null){
                
                this.setState({token:value, patient_id: my_id, name: name})
                
                if (!my_id){

                  this.props.navigation.push('Members')
                }
                this.props.my_orders(value, my_id, '')
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
  }
  addfilter(item){
    this.setState({filter_id: item.pharm_cat_id})
    var filter = '&filter='+item.pharm_cat_name
    this.props.my_orders(this.state.token, this.state.patient_id, filter)

  }

  showCancelAlert = () => {
    this.setState({
      showCancelAlert: true
    });
  };

  hideBookingAlert = () => {
    this.setState({
      showCancelAlert: false
    });
  };

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
                <View style={styles.titleWrapper}>
                  <Text style={styles.uName}>My Orders</Text>
                </View>
                <View style={styles.settingIconWrapper}>
                
                <Text style={styles.dropName}>{this.state.name} </Text>
                  
                </View>
              </View>
              <View style={styles.catTypeWrapper}>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={pharmCatTypes}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        this.addfilter(item);
                      }}>
                      <Text style={[styles.catText, {backgroundColor: this.state.filter_id == item.pharm_cat_id? '#5588e7': 'white'}]}>{item.pharm_cat_name}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.pharm_cat_id}
                />
              </View>
            </LinearGradient>

            
              <View style={styles.docContWrapper}>
              <ScrollView>
                

                <View style={styles.docCont2}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.props.my_orders1}
                    renderItem={({item}) => (
                      <>
                        <View style={styles.docDetailedWrapper2}>
                          
                            <View style={styles.circle}>
                              <Image
                                style={styles.pharmdetailImg}
                                source={Images.pharm}
                              />
                            </View>
                            <View style={styles.docNameWrapper}>
                              <Text style={styles.docNameText}>
                                {item.pharmacy_name}
                              </Text>
                              <Text style={styles.docSubNameText}>
                                {item.patient_name}
                              </Text>
                              <Text style={styles.docprofText}>
                                { item.delivery_type == "0" ?  "Self - Pickup" : item.address.substring(0,20) + "..."}
                              </Text>

                              
                              <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => {
                                  console.log(item.order_items)
                                  var order_items = JSON.parse(JSON.stringify(item.order_items, typeof value === 'undefined' ? null : value))

                                  if (order_items != null && order_items != 'undefined')
                                  this.props.navigation.push("OrderDetails",{order_id:item.id, 
                                                                                    order_items:JSON.parse(JSON.stringify(item.order_items, typeof value === 'undefined' ? null : value)), 
                                                                                    patient_name:item.patient_name, 
                                                                                    doctor_name:item.doctor_name, 
                                                                                    total_price:item.total_price,
                                                                                    address:item.address})

                                }}>
                                 <Text style={styles.tnc}>Order Details</Text>
                              </TouchableOpacity> 
                              
                             
                            </View>
                            <View>
                            
                            <View style={styles.bottom2Wrapper}>
                            <Text style={styles.orderdetails}>Order No : {item.id}</Text>
                            <Text style={styles.orderdetails}>{item.created_at.split('T')[0]}</Text>
                              {this.renderButton(item)}
                             
                              
                            </View>
                            </View>
                          </View>
                        
                          
                          
                          
                      </>
                    )}
                    keyExtractor={item => item.id}
                  />
                </View>
              </ScrollView>
            </View>
            <AwesomeAlert
              show={this.state.showCancelAlert}
              showProgress={false}
              title={"Cancel Order"}
              message={"Your order from " + (this.state.Alert_pharmacy_name)+ " has been cancelled"}
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
              //showCancelButton={true}
              showConfirmButton={true}
              confirmText="Okay"
              confirmButtonColor="#5588e7"
              onConfirmPressed={() => {
                this.hideBookingAlert();
              }}
            />
          </View>
        </View>
        <View style={styles.bottomBtnContainer}>
              
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => this.props.navigation.push('FindPharmacy')}>
                  <LinearGradient
                    colors={['#5FBEF4', '#75E4F7']}
                    start={{x: 0.1, y: 2}}
                    end={{x: 1.5, y: 1.9}}
                    locations={[0.1, 0.6]}
                    style={[styles.applyBtnContainer, {marginTop: 20, width:'100%'}]}>
                    <Text style={styles.btnText}>Book New Order</Text>
                  </LinearGradient>
                </TouchableOpacity>
            
            </View>        
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.my_orders.my_orders)
  return {
    my_orders1:state.my_orders.my_orders,
    cancelPharmacyOrder1:state.cancelPharmacyOrder
  };
};

export default connect(mapStateToProps, {
  my_orders, cancelPharmacyOrder
})
(MyOrder);

