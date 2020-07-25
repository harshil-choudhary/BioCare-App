import React, { Component, useState } from 'react';
import { Text, View, Image, TouchableOpacity, Alert, FlatList, Dimensions, Platform } from 'react-native';
import RNDateTimePicker  from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker';
import AwesomeAlert from 'react-native-awesome-alerts';
const { width, height } = Dimensions.get('window');
import { Picker } from '@react-native-community/picker';

import styles from './style';
import { Icons, Images } from '../../utils';
//Libraries
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';
import { get_available_time_slots } from '../../redux/actions/get_available_time_slots';
import { get_available_dates } from '../../redux/actions/get_available_dates';
import { connect } from 'react-redux';
import { example } from '../../redux/actions/example';
import { lab_profile } from '../../redux/actions/lab_profile';
import { saveTestBooking } from '../../redux/actions/saveTestBooking';
import AsyncStorage from '@react-native-community/async-storage';
import { getProfile } from '../../redux/actions/getProfile';
class BookLab extends Component {
  state = { appointment_time_hour:'10',  appointment_time_minute:'00',  appointment_time_AMPM:'AM', name:'', showBookingAlert: false, lab_name: '', lab_phone: '', lab_address: '', lab_email: '', lab_timings: '', lab_owner: '', selectedHours: 0, selectedMinutes: 0, token: '', patient_id: '', lab_id: '', is_walk_in: '1', patient_name: '', patient_address: '', patient_email: '', patient_phone: '', appointment_date: '', appointment_time: new Date(),appointment_time1: '', tests: [], refer_by: '', date:new Date(), mode:'time', show:false}
  
  
  componentDidMount() {
    this.setState({
      patient_name: this.props.getProfile1.name,
      tests: this.props.route.params.tests,
    })
    this._getStorageValue()
    this.props.lab_profile(this.props.route.params.lab_id)
    this.setState({
      lab_id: this.props.route.params.lab_id,
      lab_name: this.props.route.params.lab_name,
      lab_phone: this.props.route.params.lab_phone,
      lab_address: this.props.route.params.lab_address,
      lab_email: this.props.route.params.lab_email,
      lab_timings: this.props.route.params.lab_timings,
      lab_owner: this.props.route.params.lab_owner
    })
  }
  async _getStorageValue() {
    var value = await AsyncStorage.getItem('token')
    var my_id = await AsyncStorage.getItem('my_id')
    var name = await AsyncStorage.getItem('name')
    if (value != null) {
      this.setState({ token: value, patient_id: my_id, name:name })
      var value2 = this.props.family_members(value)
      if (!my_id) {
        this.props.navigation.push('Members')
      }
      var value2 = this.props.getProfile(value, my_id)
    }
    else
      // this.props.navigation.replace('Login')
      return value
  }
  submitBooking() {

    var hour= this.state.appointment_time_hour
    var minute= this.state.appointment_time_minute
    var AMPM=this.state.appointment_time_AMPM
    //console.log("Hour: "+hour)
    //console.log("Minute: "+minute)
    //console.log("AMPM: "+AMPM)
    var time = hour+":"+minute+" "+AMPM
    console.log("Time: "+time)
    this.setState({
      appointment_time1: time
    })
    this.props.saveTestBooking(this.state)
    this.showBookingAlert()
    
  }

  showBookingAlert = () => {
    this.setState({
      showBookingAlert: true
    });
  };
 
  hideBookingAlert = () => {
    this.setState({
      showBookingAlert: false
    });
    this.props.navigation.replace('LabBookings')
  };

  renderHourPicker(){
    if (this.state.appointment_time_AMPM=='AM'){
      return(
        <Picker
        selectedValue={this.state.appointment_time_hour}
        style={{ color: 'grey', borderWidth: 1, width: '33.33%', borderRadius: 50, borderColor: '#000'}}
        onValueChange={(itemValue, itemIndex) =>{
          console.log(this.state.appointment_time_hour)
          this.setState({ appointment_time_hour: itemValue })
          console.log(this.state.appointment_time_hour)
        }}>
       
        <Picker.Item label="10" value="10" />
        <Picker.Item label="11" value="11" />
      </Picker>
      )
    }
    else{
      return(
        <Picker
        selectedValue={this.state.appointment_time_hour}
        style={{ color: 'grey', borderWidth: 1, width: '33.33%', borderRadius: 50, borderColor: '#000'}}
        onValueChange={(itemValue, itemIndex) =>{
          this.setState({ appointment_time_hour: itemValue })
          console.log(this.state.appointment_time_hour)
        }}>
        <Picker.Item label="12" value="12" />
        <Picker.Item label="01" value="01" />
        <Picker.Item label="02" value="02" />
        <Picker.Item label="03" value="03" />
        <Picker.Item label="04" value="04" />
        <Picker.Item label="05" value="05" />
        <Picker.Item label="06" value="06" />
        <Picker.Item label="07" value="07" />
        <Picker.Item label="08" value="08" />
        <Picker.Item label="09" value="09" />
        
      </Picker>
      )
    }
  }

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.appointment_time;
    if (Platform.OS === 'ios')
      this.setState({show: true})
    else
      this.setState({show: false})
    this.setState({appointment_time1: currentDate.toString().split(' ')[4], appointment_time: currentDate});
  };

   

  showTimepicker(){
    this.setState({show:true})
  }


  



  render() {
    const { selectedHours, selectedMinutes, date, mode, show } = this.state;
    console.log(this.state.show)
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
                  <Text style={styles.uName}>Lab Booking</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.settingIconWrapper}
                  onPress={() => {
                    this.props.navigation.push("Members", {screen: 'BookLab'})
                  }}>
                  <Text style={styles.dropName}>{this.state.name}</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
            <View style={styles.cardWrapper}>
              <View style={styles.boxUpper}>
                <View style={styles.imageWrapper}>
                  <Image source={Images.lab} style={styles.image} />
                </View>
                <View style={styles.boxInfo}>
                  <Text style={styles.title}>{this.state.lab_name}</Text>
                  <Text style={styles.description}>{this.state.lab_address}</Text>
                  <Text style={styles.description}>{this.state.lab_phone}</Text>
                  <Text style={styles.description}>{this.state.lab_email}</Text>
                </View>
              </View>
              
              <View style={styles.innerBoxWrapper}>
        
                <DatePicker
                  style={{ width: width * 0.73, }}
                  date={this.state.appointment_date}
                  mode="date"
                  placeholder=" Set Appointment Date"
                  format="DD-MM-YYYY"
                  minDate="01-05-1930"
                  maxDate="01-06-2021"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    placeholderText: {
                      color: '#787878',
                      fontSize: height * 0.020,
                      fontWeight: 'bold',
                      
                    },
                    dateText:styles.placeholderText,
                    dateIcon: {
                      // display: 'none',
                      left: 0,
                      top: 2,
                      marginLeft: 0
                    },
                    // dateInput: {
                    //   marginLeft:
                    // }

                  }}
                  onDateChange={(appointment_date) => { this.setState({ appointment_date }) }}
                />
             
              
              </View>
              <View style={styles.innerBoxWrapper2}>
                {/*<TouchableOpacity
                  activeOpacity={1}
                  style={styles.innerBoxWrapper}
                  onPress={() => {
                    this.showTimepicker()
                  }}>
                 
                
                {
        this.state.show && (
          <RNDateTimePicker 
                  testID="dateTimePicker"
                  value={this.state.appointment_time}
                  mode={this.state.mode}
                  is24Hour={true}
                  display="default"
                  onChange={this.onChange}
        />
        )
      }








                <Text style={styles.placeholderText}>{this.state.appointment_time1}</Text>
                </TouchableOpacity>*/}
                {this.renderHourPicker()}

                <Picker
                  selectedValue={this.state.appointment_time_minute}
                  style={{ color: 'grey', borderWidth: 1, width: '33.33%', borderRadius: 50, borderColor: '#000'}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ appointment_time_minute: itemValue })
                  }>
                  <Picker.Item label="00" value="00" />
                  {/*<Picker.Item label="01" value="01" />
                  <Picker.Item label="02" value="02" />
                  <Picker.Item label="03" value="03" />
                  <Picker.Item label="04" value="04" />
                  <Picker.Item label="05" value="05" />
                  <Picker.Item label="06" value="06" />
                  <Picker.Item label="07" value="07" />
                  <Picker.Item label="08" value="08" />
                  <Picker.Item label="09" value="09" />
                  <Picker.Item label="10" value="10" />
                  <Picker.Item label="11" value="11" />
                  <Picker.Item label="12" value="12" />
                  <Picker.Item label="13" value="13" />
                  <Picker.Item label="14" value="14" />*/}
                  <Picker.Item label="15" value="15" />
                  {/* <Picker.Item label="16" value="16" />
                  <Picker.Item label="17" value="17" />
                  <Picker.Item label="18" value="18" />
                  <Picker.Item label="19" value="19" />
                  <Picker.Item label="20" value="20" />
                  <Picker.Item label="21" value="21" />
                  <Picker.Item label="22" value="22" />
                  <Picker.Item label="23" value="23" />
                  <Picker.Item label="24" value="24" />
                  <Picker.Item label="25" value="25" />
                  <Picker.Item label="26" value="26" />
                  <Picker.Item label="27" value="27" />
                  <Picker.Item label="28" value="28" />
                  <Picker.Item label="29" value="29" /> */}
                  <Picker.Item label="30" value="30" />
                  {/* <Picker.Item label="31" value="31" />
                  <Picker.Item label="32" value="32" />
                  <Picker.Item label="33" value="33" />
                  <Picker.Item label="34" value="34" />
                  <Picker.Item label="35" value="35" />
                  <Picker.Item label="36" value="36" />
                  <Picker.Item label="37" value="37" />
                  <Picker.Item label="38" value="38" />
                  <Picker.Item label="39" value="39" />
                  <Picker.Item label="40" value="30" />
                  <Picker.Item label="41" value="41" />
                  <Picker.Item label="42" value="42" />
                  <Picker.Item label="43" value="43" />
                  <Picker.Item label="44" value="44" /> */}
                  <Picker.Item label="45" value="45" />
                  {/* <Picker.Item label="46" value="46" />
                  <Picker.Item label="47" value="47" />
                  <Picker.Item label="48" value="48" />
                  <Picker.Item label="49" value="49" />
                  <Picker.Item label="50" value="50" />
                  <Picker.Item label="51" value="51" />
                  <Picker.Item label="52" value="52" />
                  <Picker.Item label="53" value="53" />
                  <Picker.Item label="54" value="54" />
                  <Picker.Item label="55" value="55" />
                  <Picker.Item label="56" value="56" />
                  <Picker.Item label="57" value="57" />
                  <Picker.Item label="58" value="58" />
                  <Picker.Item label="59" value="59" /> */}
                </Picker>

                <Picker
                  selectedValue={this.state.appointment_time_AMPM}
                  style={{ color: 'grey', borderWidth: 1, width: '33.33%', borderRadius: 50, borderColor: '#000'}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ appointment_time_AMPM: itemValue })
                  }>
                  <Picker.Item label="AM" value="AM" />
                  <Picker.Item label="PM" value="PM" />
            
                </Picker>
    </View>


             


            
            <Text style={styles.bookText}>
              By booking this appointment you agree to the{' '}
              <Text style={styles.tcText}>T&C</Text>
            </Text>
            </View>
           
            <View style={styles.bfbottomWrapper}>
              <TouchableOpacity
                activeOpacity={1}
              //onPress={() => this.props.navigation.replace('DoctorScreen')}
              >
                <Text style={styles.feedbackTextbtn}>Feedback</Text>
              </TouchableOpacity>
              <LinearGradient
                colors={['#5588e7', '#75e4f7']}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.3, y: 1.9 }}
                locations={[0.1, 0.6]}
                style={styles.bookTextbtnWrapper}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.bookBtn}
                  onPress={() => this.submitBooking()}>
                  <Text style={[styles.bookTextbtn, { color: '#ffffff' }]}>
                    Book
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>

            <AwesomeAlert
              show={this.state.showBookingAlert}
              showProgress={false}
              title={this.state.lab_name}
              message="Booking Succesful"
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
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.family_members)
  return {
    lab_profile1: state.lab_profile.lab_profile,
    example1: state.example.example,
    saveTestBooking1: state.saveTestBooking,
    getProfile1: state.getProfile.getProfile,
  };
};
export default connect(mapStateToProps, {
  lab_profile, example, saveTestBooking, getProfile,
})(BookLab);
