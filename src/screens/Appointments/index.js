import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';

import { my_appointments } from '../../redux/actions/my_appointments';
import { cancelAppointment } from '../../redux/actions/cancelAppointment';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/actions/getProfile';

const docCatTypes = [
  {
    doc_cat_id: '1',
    doc_cat_name: 'Unconfirmed',
  },
  {
    doc_cat_id: '2',
    doc_cat_name: 'Confirmed',
  },
  {
    doc_cat_id: '3',
    doc_cat_name: 'Online Booking',
  },
  {
    doc_cat_id: '4',
    doc_cat_name: 'In Person',
  },
];


class Appointments extends Component {
  
  state = {Appoint : [], name:'', showCancelAlert: false, Alert_doctor_name:'', filter_id:'', token:'', patient_id:''}

  componentDidMount(){
    this._getStorageValue()
  }

  addfilter(item){
    this.setState({filter_id: item.doc_cat_id})
    var filter = '&filter='+item.doc_cat_name
    this.props.my_appointments(this.state.token, this.state.patient_id, filter)

  }

   async _getStorageValue(){
    var value = await AsyncStorage.getItem('token')
    var my_id = await AsyncStorage.getItem('my_id')
    var name = await AsyncStorage.getItem('name')
this.setState({usersname:value, patient_id: my_id, name: name})
    if (value != null){
      this.setState({token:value , patient_id: my_id})
        this.setState({Appoint: this.props.my_appointments(value, my_id, '')})

        if (!my_id){

          this.props.navigation.push('Members')
        }
        var value2 = this.props.getProfile(value, my_id)
        console.log(value2)

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

  categoryDefined(category){
    if (JSON.stringify(category, typeof value === 'undefined' ? null : value)!='{}'){
        return(
          <Text style={styles.docprofText}>
          {(JSON.stringify(category, typeof value === 'undefined' ? null : value))}
          </Text>
      )
    }
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


  renderButton(item){
    if (item.status == 0){
      return (<><View style={styles.moneyWrapper}>
                              <Image source={Icons.moneyIcon} />
                              <Text style={styles.moneyText}>
                                Unpaid
                              </Text>
                            </View><TouchableOpacity
                              activeOpacity={1}
                              style={styles.boxBtn2}
                              onPress={() =>
                                { this.setState({Alert_doctor_name:item.doctor_name})
                                  this.cancelAppointment(item.id)
                                this.props.my_appointments(this.state.token, this.state.patient_id)}
                              }>
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
                            </TouchableOpacity></>);
                          }
      if (item.status == 1){
        return (<><View style={styles.moneyWrapper}>
                              <Image source={Icons.moneyIcon} />
                              <Text style={styles.moneyText}>
                                Unpaid
                              </Text>
                            </View><TouchableOpacity
                              activeOpacity={1}
                              style={styles.boxBtn2}
                              onPress={() =>
                                this.payAppointment()
                              }>
                              <LinearGradient
                                colors={['#5588e7', '#75e4f7']}
                                start={{x: 0.1, y: 0.1}}
                                end={{x: 0.3, y: 1.9}}
                                locations={[0.1, 0.6]}
                                style={styles.boxBtn2}>
                                <Text
                                  style={[styles.btnText, {color: '#ffffff'}]}>
                                  Pay
                                </Text>
                              </LinearGradient>
                            </TouchableOpacity></>);
      }

      if (item.status == 2){
        return (<><View style={styles.moneyWrapper}>
                              <Image source={Icons.moneyIcon} />
                              <Text style={styles.moneyText}>
                                Paid
                              </Text>
                            </View><TouchableOpacity
                              activeOpacity={1}
                              style={styles.boxBtn2}
                              onPress={() =>
                                this.props.navigation.push("Invoice")
                              }>
                              <LinearGradient
                                colors={['#5588e7', '#75e4f7']}
                                start={{x: 0.1, y: 0.1}}
                                end={{x: 0.3, y: 1.9}}
                                locations={[0.1, 0.6]}
                                style={styles.boxBtn2}>
                                <Text
                                  style={[styles.btnText, {color: '#ffffff'}]}>
                                  Invoice
                                </Text>
                              </LinearGradient>
                            </TouchableOpacity></>);
     
    }

    if (item.status == -1){
        return (<><View style={styles.moneyWrapper}>
                              <Image source={Icons.moneyIcon} />
                              <Text style={styles.moneyText}>
                                Cancelled
                              </Text>
                            </View></>);
     
    }
  }

  cancelAppointment(item_id){
    this.showCancelAlert()
    this.props.cancelAppointment(this.state.token, this.state.patient_id, item_id)
    this.props.my_appointments(this.state.token, this.state.patient_id)
    
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
                <View style={styles.titleWrapper}>
                  <Text style={styles.uName}>Appointments</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.settingIconWrapper}
                  onPress={() => {
                    this.props.navigation.push("Members", {screen: 'Appointments'})
                  }}>
                  <Text style={styles.dropName}>{this.state.name}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.catTypeWrapper}>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={docCatTypes}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                       this.addfilter(item);
                      }}>
                      <Text style={[styles.catText, {backgroundColor: this.state.filter_id == item.doc_cat_id ? '#5588e7': 'white'}]}>{item.doc_cat_name}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.doc_cat_id}
                />
              </View>
            </LinearGradient>

            <View style={styles.docContWrapper}>
              <ScrollView>
            

                <View style={styles.docCont2}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.props.my_appointments1}
                    renderItem={({item}) => (
                      <>
                        <View style={styles.docDetailedWrapper2}>
                          <View
                            style={[styles.docSpecsWrapper, {marginTop: 10}]}>
                            <Image
                             style={{width: '22%', height: '83%', borderRadius: 50}}
                              source={{uri:item.avatar_url}}
                            />
                            <Text style={styles.perText}>{}</Text>
                            <View style={styles.docNameWrapper}>
                            <TouchableOpacity
                              activeOpacity={1}
                              onPress={() => {
                                this.props.navigation.push('DoctorScreen', {doctor_id: item.doctor_id})
                              }}>
                              <Text style={styles.docNameText}>
                                {item.doctor_name}
                              
                              </Text>
                              <Text style={styles.docSubNameText}>
                                {item.degree}
                              </Text>
                              {this.categoryDefined(item.category)}
                              <Text style={styles.docExpText}>
                                {item.exp} years of experience
                              </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                          <View style={styles.middleWrapper}>
                            <Text style={styles.feedText}>{item.ratings != undefined ? item.ratings.length : '0'} Feedback</Text>
                            <Text style={styles.dateText}>{item.date}</Text>
                            <Text style={styles.timeText}>{item.time}</Text>
                            
                          </View>
                          <View style={styles.bottom1Wrapper}>
                          <View style={styles.nodoctorWrapper}>
                              <Image
                                style={styles.doclocImg}
                                source={Icons.locationIcon}
                              />
                              <Text style={styles.nodocText}>{item.location_name}</Text>
                        
                            </View>
                          </View>
                          <View style={styles.bottom2Wrapper}>
                            
                            {this.renderButton(item)}
                          </View>
                        </View>
                      </>
                    )}
                    keyExtractor={item => item.s_id}
                  />
                </View>
              </ScrollView>
            </View>
            <AwesomeAlert
              show={this.state.showCancelAlert}
              showProgress={false}
              title={"Cancel Appointment"}
              message={"Your appointment with " + (this.state.Alert_doctor_name)+ " has been cancelled"}
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
        <View style={styles.filterBtnWrapper}>
          {/*<TouchableOpacity
            style={styles.filterBtnCont}
            activeOpacity={1}
            onPress={() => this.props.navigation.push("DocFilteration")}>
            <Image style={styles.filterImg} source={Icons.filterIcon} />
          </TouchableOpacity>*/}
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.my_appointments.my_appointments)
  return {
    my_appointments1:state.my_appointments.my_appointments,
    getProfile1:state.getProfile.getProfile,
    cancelAppointment1:state.cancelAppointment.cancelAppointment,
  };
};

export default connect(mapStateToProps, {
 my_appointments,getProfile,cancelAppointment
})(Appointments);

