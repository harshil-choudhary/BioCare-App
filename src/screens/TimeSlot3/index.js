import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Alert, FlatList } from 'react-native';
import styles from './style';
import { Icons, Images } from '../../utils';
import AwesomeAlert from 'react-native-awesome-alerts';
//Libraries
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';
import { get_available_time_slots } from '../../redux/actions/get_available_time_slots';
import { get_available_dates } from '../../redux/actions/get_available_dates';
import { connect } from 'react-redux';
import { example } from '../../redux/actions/example';
import { family_members } from '../../redux/actions/family_members'
import { saveAppointments } from '../../redux/actions/saveAppointments'
import AsyncStorage from '@react-native-community/async-storage';
import { getProfile } from '../../redux/actions/getProfile';
class TimeSlot3 extends Component {
  state = { showBookingAlert: false, showButton: false, Time: [], token: '', patient_id: '', doctor_id: '', slot: '', date: '', type: '0', patient_name: '', fees: '', doctor_name: '' }
  componentDidMount() {
    this._getStorageValue()
    this.props.example(this.props.route.params.doctor_id)
    this.setState({
      doctor_id: this.props.route.params.doctor_id,
      clinic_id: this.props.route.params.clinic_id,
      hospital_id: this.props.route.params.hospital_id,
      type: 'c_',
      date: this.props.route.params.selectedDate,
      slot: this.props.route.params.selectedTime,
      patient_id: this.state.patient_id
    })
    this.setState({ doctor_id: this.props.route.params.doctor_id, slot: this.props.route.params.selectedTime })
  }
  renderButton() {
    if (this.state.showButton)
      return (<View style={styles.bfbottomWrapper}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.props.navigation.replace('DoctorScreen', { doctor_id: this.props.route.params.doctor_id, clinic_id: this.props.route.params.clinic_id, hospital_id: this.props.route.params.hospital_id, type: 'c_', selectedDate: this.props.route.params.selectedDate, selectedTime: this.props.route.params.selectedTime, patient_id: this.state.patient_id })}>
          <Text style={styles.feedbackTextbtn}>       Feedback</Text>
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
      </View>)
  }
  async _getStorageValue() {
    var value = await AsyncStorage.getItem('token')
    var my_id = await AsyncStorage.getItem('my_id')
    if (value != null) {
      this.setState({ token: value, patient_id: my_id })
      var value2 = this.props.family_members(value)
      if (!my_id) {
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
  async submitBooking() {
    console.log(this.state)
    await AsyncStorage.setItem('my_id', JSON.stringify(this.state.patient_id))
    await AsyncStorage.setItem('name', this.state.name)
    await AsyncStorage.setItem('name', this.state.name)
    this.props.saveAppointments(this.state)
    console.log(this.props.saveAppointments1)
    this.showBookingAlert()
    this.props.navigation.replace('Appointments')
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
	  };

  render() {
    console.log(this.props.route.params)
    console.log(this.props.example1.avatar_url)
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
                  <Text style={styles.uName}>Select a time slot</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.settingIconWrapper}
                  onPress={() => {
                    this.props.navigation.push("Members", {screen: 'TimeSlot3'})
                  }}>
                  <Text style={styles.dropName}>{this.state.name}</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
            <View style={styles.cardWrapper}>
              <View style={styles.boxUpper}>
                {/* .................................................................... */}
                <View style={styles.imageWrapper}>
                  <Image source={{ uri: this.props.example1.avatar_url }} style={styles.image} />
                  {/* <Image
                    source={this.props.example1.avatar_url ?
                      { uri: this.props.example1.avatar_url }
                      :
                      require(
                        '../../assets/images/userImage.png'
                      )
                    }
                  /> */}
                </View>
                {/* ........................................................... */}
                <View style={styles.boxInfo}>
                  <Text style={styles.title}>{this.props.example1.name}</Text>
                  <Text style={styles.description}>
                    {this.props.example1.degree}
                  </Text>
                </View>
              </View>
              <View style={styles.docDTFWrapper}>
                <View style={styles.dtfmWrapper}>
                  <Text style={styles.dtfText}>Date & Time</Text>
                  <Text style={styles.dtfSubText}>{this.props.route.params.selectedDate}</Text>
                  <Text style={styles.dtfSubText}>{this.props.route.params.selectedTime}</Text>
                </View>
                <View style={styles.dtfWrapper}>
                  <Text style={styles.dtfText}>Consultation Fees</Text>
                  <Text style={styles.dtfSubText}>₹ {this.props.example1.fees}</Text>
                </View>
              </View>
              <View style={styles.inputTextWrapper}>
                <FlatList
                  scrollEnabled={true}
                  showsVerticalScrollIndicator={false}
                  data={this.props.family_members1}
                  renderItem={({ item }) => (
                    <View style={styles.docTypeWrapper}>
                      <Image
                        style={{ width: '16%', height: '82%', borderRadius: 50 }}
                        source={{ uri: item.avatar_url }}
                      // source={this.props.family_members1.avatar_url
                      //   ? { uri: item.avatar_url }
                      //   : require('../../assets/images/doc1.png')}
                      />
                      <View style={styles.textBox}>
                        <Text style={styles.specialText}>{item.name}</Text>
                      </View>
                      <View style={styles.goIconWrapper}>
                        <TouchableOpacity
                          onPress={() => { 
                            this.setState({ patient_id: item.id, showButton: true, name: item.name, city:item.city }) 
                          }
                          }>
                          <Image source={Icons.goIcon} style={styles.iconStyle} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                  keyExtractor={item => item.cat_id}
                />
              </View>
              <Text style={styles.bookText}>
                By booking this appointment you agree to the{' '}
                <Text style={styles.tcText}>T&C</Text>
              </Text>
            </View>
            {this.renderButton()}

            <AwesomeAlert
              show={this.state.showBookingAlert}
              showProgress={false}
              title={this.props.example1.name}
              message="Booking Successful"
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
    family_members1: state.family_members.family_members,
    example1: state.example.example,
    get_available_time_slots1: state.get_available_time_slots.get_available_time_slots,
    saveAppointments1: state.saveAppointments,
    getProfile1: state.getProfile.getProfile
  };
};
export default connect(mapStateToProps, {
  family_members, example, get_available_time_slots, saveAppointments, getProfile,
})(TimeSlot3);
