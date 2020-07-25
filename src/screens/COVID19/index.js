import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Alert, FlatList, Dimensions } from 'react-native';
import styles from './style';
const { width, height } = Dimensions.get('window');
import { Icons, Images } from '../../utils';
import DatePicker from 'react-native-datepicker'
import CheckBox from 'react-native-check-box'
import SelectMultiple from 'react-native-select-multiple'
import { Picker } from '@react-native-community/picker';
//Libraries
import LinearGradient from 'react-native-linear-gradient';
import { example } from '../../redux/actions/example';
import { connect } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
import { covid_form } from '../../redux/actions/covid_form';
import AsyncStorage from '@react-native-community/async-storage';
import { save_covid_form } from '../../redux/actions/save_covid_form';
import { getProfile } from '../../redux/actions/getProfile';
import AwesomeAlert from 'react-native-awesome-alerts';
// fruits
const patientSymptoms = [
  { label: "Asymptomatic", value: 'asym' },
  { label: "Fever > 38'c", value: 'fev' },
  { label: "Subjective fever (felt feverish)", value: 'sff' },
  { label: "Muscle Aches", value: 'ma' },
  { label: "Runny Nose", value: 'rn' },
  { label: "Cough", value: 'cough' },
  { label: "Shortness of Breath", value: 'sb' },
  { label: "Vomiting", value: 'vom' },
  { label: "Headache", value: 'hd' },
  { label: "Sore Throat", value: 'st' },
  { label: "Abdominal Pain", value: 'ap' },
  { label: "Diarrhoea", value: 'dh' },
]
const familySymptoms = [
  { label: "Asymptomatic", value: 'asym' },
  { label: "Fever > 38'c", value: 'fev' },
  { label: "Subjective fever (felt feverish)", value: 'sff' },
  { label: "Muscle Aches", value: 'ma' },
  { label: "Runny Nose", value: 'rn' },
  { label: "Cough", value: 'cough' },
  { label: "Shortness of Breath", value: 'sb' },
  { label: "Vomiting", value: 'vom' },
  { label: "Headache", value: 'hd' },
  { label: "Sore Throat", value: 'st' },
  { label: "Abdominal Pain", value: 'ap' },
  { label: "Diarrhoea", value: 'dh' },
]
class COVID19 extends Component {
  // Checkbox Initial State
  state = { showBookingAlert: false, token: '', patient_id: '', name: '', dob: '', blood_group: 'Blood Group', phone: '', gender: 'Gender', address: '', city: '', state: '', country: '', passport_no: '', country_travelled: '', reason_travelled: '', travel_date: '', stay_duration: '', date_in_nashik: '', healthcare_contact_date: '', patient_symptoms: '', other_symptoms: '', treating_doctor_details: '', full_address: '', patient_admitted_date: '', patient_condition: '', follow_up_date: '', family_symptoms: '', family_other_symptoms: '', family_treating_doctor: '', family_current_location: '', selectedPatientSymptoms: [], selectedFamilySymptoms: [] }
  onSelectionsChange = (selectedPatientSymptoms) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedPatientSymptoms })
  }
  onFamilySelectionsChange = (selectedFamilySymptoms) => {
    // selectedFruits is array of { label, value }
    // console.log('hi')
    this.setState({ selectedFamilySymptoms: selectedFamilySymptoms })
  }
  componentDidMount() {
    this._getStorageValue()
  }
  submitForm() {
    var patient_symptoms = this.state.selectedPatientSymptoms.map((value) => { return value.value })
    this.setState({ selectedPatientSymptoms: patient_symptoms })
    var family_symptoms = this.state.selectedFamilySymptoms.map((value) => { return value.value })
    this.setState({ selectedFamilySymptoms: family_symptoms })
    console.log(this.state)
    this.props.save_covid_form(this.state)
    this.showBookingAlert()
  }
  async _getStorageValue() {
    var value = await AsyncStorage.getItem('token')
    var my_id = await AsyncStorage.getItem('my_id')
    var name = await AsyncStorage.getItem('name')
    if (value != null) {
      this.setState({ token: value, patient_id: my_id, name: name })
      this.props.getProfile(value, my_id)
      this.props.covid_form(value, my_id)
      if (!my_id) {
        this.props.navigation.replace('Members')
      }
      var value2 = this.props.getProfile(value, my_id)
      this.setState({ dob: this.props.covid_form1.dob })
      this.setState({ blood_group: this.props.covid_form1.blood_group })
      this.setState({ address: this.props.covid_form1.full_address })
      this.setState({ city: this.props.covid_form1.city })
      this.setState({ phone: this.props.covid_form1.phone })
      this.setState({ gender: this.props.covid_form1.gender })
      this.setState({ country: this.props.covid_form1.country })
      this.setState({ passport_no: this.props.covid_form1.passport_no })
      this.setState({ country_travelled: this.props.covid_form1.country_travelled })
      this.setState({ reason_travelled: this.props.covid_form1.reason_travelled })
      this.setState({ travel_date: this.props.covid_form1.travel_date })
      this.setState({ stay_duration: this.props.covid_form1.stay_duration })
      this.setState({ date_in_nashik: this.props.covid_form1.date_in_nashik })
      this.setState({ healthcare_contact_date: this.props.covid_form1.healthcare_contact_date })
      this.setState({ patient_symptoms: this.props.covid_form1.patient_symptoms })
      this.setState({ other_symptoms: this.props.covid_form1.other_symptoms })
      this.setState({ treating_doctor_details: this.props.covid_form1.treating_doctor_details })
      this.setState({ full_address: this.props.covid_form1.full_address })
      this.setState({ patient_admitted_date: this.props.covid_form1.patient_admitted_date })
      this.setState({ patient_condition: this.props.covid_form1.patient_condition })
      this.setState({ follow_up_date: this.props.covid_form1.follow_up_date })
      this.setState({ family_symptoms: this.props.covid_form1.family_symptoms })
      this.setState({ family_other_symptoms: this.props.covid_form1.family_other_symptoms })
      this.setState({ family_treating_doctor: this.props.covid_form1.family_treating_doctor })
      this.setState({ family_current_location: this.props.covid_form1.family_current_location })
      this.setState({ state: this.props.covid_form1.state })
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
  showBookingAlert = () => {
    this.setState({
      showBookingAlert: true
    });
  };
  hideBookingAlert = () => {
    this.setState({
      showBookingAlert: false
    });
    this.props.navigation.replace('Profile');
  };
  render() {
    // console.log(this.props.covid_form1)
    // console.log(this.state.selectedPatientSymptoms)
    return (
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
                <Text style={styles.uName}>Covid - 19 Form</Text>
              </View>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.settingIconWrapper}
                onPress={() => {
                  this.props.navigation.push("Members", { screen: 'COVID19' })
                }}>
                <Text style={styles.dropName}>{this.state.name}</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
          <View style={styles.boxCont1}>
            <ScrollView>
              <View style={styles.innerBoxWrapper}>
                <TextInput style={styles.innerBox}
                  placeholder={'Name'}
                  placeholderTextColor="#787878"
                  value={this.state.name}
                  onChangeText={name => this.setState({ name })}
                />
              </View>
              <View style={styles.innerBoxWrapper}>
                <DatePicker
                  style={{ width: width * 0.8, }}
                  date={this.state.dob}
                  mode="date"
                  placeholder="Date of Birth"
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
                      marginLeft: -150
                    },
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
                  onDateChange={(dob) => { this.setState({ dob }) }}
                />
              </View>
              {/* <DatePicker
              style={{width: 200}}
              date={this.state.dob}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="1930-05-01"
              maxDate="2021-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  display: 'none',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
   
              }}
              onDateChange={(dob) => {this.setState({dob})}}
            /> */}
              <View style={styles.innerBoxWrapper}>
                <Picker
                  selectedValue={this.state.blood_group}
                  style={{ color: '#787878', borderWidth: 1, width: '95%', borderRadius: 50, borderColor: '#000', paddingLeft: 20, fontWeight: 'bold' }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ blood_group: itemValue })
                  }>
                  <Picker.Item label="Blood Group" value="" />
                  <Picker.Item label="A+" value="A+" />
                  <Picker.Item label="A-" value="A-" />
                  <Picker.Item label="B+" value="B+" />
                  <Picker.Item label="B-" value="B-" />
                  <Picker.Item label="AB+" value="AB+" />
                  <Picker.Item label="AB-" value="AB-" />
                  <Picker.Item label="O+" value="O+" />
                  <Picker.Item label="O-" value="O-" />
                </Picker>
              </View>
              <View style={styles.innerBoxWrapper}>
                <TextInput style={styles.innerBox}
                  placeholder={'Phone Numer'}
                  placeholderTextColor="#787878"
                  value={this.state.phone}
                  keyboardType='numeric'
                  maxLength={10}
                  onChangeText={phone => this.setState({ phone })}
                />
              </View>
              <View style={styles.innerBoxWrapper}>
                <Picker
                  selectedValue={this.state.gender}
                  style={{ color: 'grey', borderWidth: 1, width: '95%', borderRadius: 50, borderColor: '#000', paddingLeft: 20 }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ gender: itemValue })
                  }>
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                  <Picker.Item label="Other" value="Other" />
                </Picker>
              </View>
              <View style={styles.innerBoxWrapper}>
                <TextInput style={styles.innerBox}
                  placeholder={'Address'}
                  placeholderTextColor="#787878"
                  value={this.state.address}
                  onChangeText={address => this.setState({ address })}
                />
              </View>
              <View style={styles.innerBoxWrapper}>
                <TextInput style={styles.innerBox}
                  placeholder={'City'}
                  placeholderTextColor="#787878"
                  value={this.state.city}
                  onChangeText={city => this.setState({ city })}
                />
              </View>
              <View style={styles.innerBoxWrapper}>
                <TextInput style={styles.innerBox}
                  placeholder={'State'}
                  placeholderTextColor="#787878"
                  value={this.state.state}
                  onChangeText={state => this.setState({ state })}
                />
              </View>
              <View style={styles.innerBoxWrapper}>
                <TextInput style={styles.innerBox}
                  placeholder={'Country'}
                  placeholderTextColor="#787878"
                  value={this.state.country}
                  onChangeText={country => this.setState({ country })}
                />
              </View>
              <View style={styles.innerBoxWrapper}>
                <TextInput style={styles.innerBox}
                  placeholder={'Passport Number'}
                  placeholderTextColor="#787878"
                  value={this.state.passport_no}
                  onChangeText={passport_no => this.setState({ passport_no })}
                />
              </View>
              <View style={styles.innerBoxWrapper}>
                <TextInput style={styles.innerBox}
                  placeholder={' Country Travelled'}
                  placeholderTextColor="#787878"
                  value={this.state.country_travelled}
                  onChangeText={country_travelled => this.setState({ country_travelled })}
                />
              </View>
              <View style={styles.innerBoxWrapper}>
                <TextInput style={styles.innerBox}
                  placeholder={'Reason for Travel'}
                  placeholderTextColor="#787878"
                  value={this.state.reason_travelled}
                  onChangeText={reason_travelled => this.setState({ reason_travelled })}
                />
              </View>
              <View style={styles.innerBoxWrapper}>
                <DatePicker
                  style={{ width: width * 0.8, }}
                  date={this.state.travel_date}
                  mode="date"
                  placeholder="Date of Travel"
                  format="DD-MM-YYYY"
                  minDate="01-05-1930"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    placeholderText: {
                      color: '#787878',
                      fontSize: height * 0.020,
                      fontWeight: 'bold',
                      marginLeft: -150
                    },
                    dateIcon: {
                      // display: 'none',
                      left: 0,
                      top: 2,
                      marginLeft: 0
                    },
                    // dateInput: {
                    //   marginLeft: 36
                    // }
                  }}
                  onDateChange={(travel_date) => { this.setState({ travel_date }) }}
                />
              </View>
              {/* <DatePicker
              style={{width: 200}}
              date={this.state.travel_date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="1930-05-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  display: 'none',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
   
              }}
              onDateChange={(travel_date) => {this.setState({travel_date})}}
            /> */}
              <View style={styles.innerBoxWrapper}>
                <TextInput style={styles.innerBox}
                  placeholder={'Duration of Stay'}
                  placeholderTextColor="#787878"
                  value={this.state.stay_duration}
                  onChangeText={stay_duration => this.setState({ stay_duration })}
                />
              </View>
              <View style={styles.innerBoxWrapper}>
                <DatePicker
                  style={{ width: width * 0.8, }}
                  date={this.state.date_in_nashik}
                  mode="date"
                  placeholder="Date in Nashik"
                  format="DD-MM-YYYY"
                  minDate="01-05-1930"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    placeholderText: {
                      color: '#787878',
                      fontSize: height * 0.020,
                      fontWeight: 'bold',
                      marginLeft: -150
                    },
                    dateIcon: {
                      // display: 'none',
                      left: 0,
                      top: 2,
                      marginLeft: 0
                    },
                    // dateInput: {
                    //   marginLeft: 36
                    // }
                  }}
                  onDateChange={(date_in_nashik) => { this.setState({ date_in_nashik }) }}
                />
              </View>
              <View style={styles.innerBoxWrapper}>
                <DatePicker
                  style={{ width: width * 0.8, }}
                  date={this.state.healthcare_contact_date}
                  mode="date"
                  placeholder="Healthcare Contact Date"
                  format="DD-MM-YYYY"
                  minDate="01-05-1930"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    placeholderText: {
                      color: '#787878',
                      fontSize: height * 0.020,
                      fontWeight: 'bold',
                      marginLeft: -75,
                    },
                    dateIcon: {
                      // display: 'none',
                      left: 0,
                      top: 2,
                      marginLeft: 0
                    },
                    // dateInput: {
                    //   marginLeft: 36
                    // }
                  }}
                  onDateChange={(healthcare_contact_date) => { this.setState({ healthcare_contact_date }) }}
                />
              </View>
              <View style={styles.innerBoxWrapper}>
                <Text style={[{ color: '#787878', alignSelf: 'flex-start', paddingLeft: 15, fontWeight: 'bold' }]}
                  value={this.state.patient_symptoms}
                  onChangeText={patient_symptoms => this.setState({ patient_symptoms })}
                >
                  Patient Symptom
                </Text>
              </View>
              {/* .................................................................................. */}
              <SelectMultiple
                items={patientSymptoms}
                selectedItems={this.state.selectedPatientSymptoms}
                onSelectionsChange={this.onSelectionsChange} />
              {/* ................................................................................. */}
              <View style={styles.innerBoxWrapper}>
                <TextInput style={styles.innerBox}
                  placeholder={'Any Other Symptoms'}
                  placeholderTextColor="#787878"
                  value={this.state.other_symptoms}
                  onChangeText={other_symptoms => this.setState({ other_symptoms })}
                />
              </View>
              <View style={styles.innerBoxWrapper}>
                <TextInput style={styles.innerBox}
                  placeholder={'Treating Doctor Details'}
                  placeholderTextColor="#787878"
                  value={this.state.treating_doctor_details}
                  onChangeText={treating_doctor_details => this.setState({ treating_doctor_details })}
                />
              </View>
              <View style={styles.innerBoxWrapper}>
                <TextInput style={styles.innerBox}
                  placeholder={'Full Address'}
                  placeholderTextColor="#787878"
                  value={this.state.full_address}
                  onChangeText={full_address => this.setState({ full_address })}
                />
              </View>
              <View style={styles.innerBoxWrapper}>
                <DatePicker
                  style={{ width: width * 0.8, }}
                  date={this.state.patient_admitted_date}
                  mode="date"
                  placeholder="Patient Admission Date"
                  format="DD-MM-YYYY"
                  minDate="01-05-1930"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    placeholderText: {
                      color: '#787878',
                      fontSize: height * 0.020,
                      fontWeight: 'bold',
                      marginLeft: -75
                    },
                    dateIcon: {
                      // display: 'none',
                      left: 0,
                      top: 2,
                      marginLeft: 0
                    },
                    // dateInput: {
                    //   marginLeft: 36
                    // }
                  }}
                  onDateChange={(patient_admitted_date) => { this.setState({ patient_admitted_date }) }}
                />
              </View>
              <View style={styles.innerBoxWrapper}>
                <TextInput style={styles.innerBox}
                  placeholder={'Patient Condition'}
                  placeholderTextColor="#787878"
                  value={this.state.patient_condition}
                  onChangeText={patient_condition => this.setState({ patient_condition })}
                />
              </View>
              <View style={styles.innerBoxWrapper}>
                <DatePicker
                  style={{ width: width * 0.8, }}
                  date={this.state.follow_up_date}
                  mode="date"
                  placeholder="Follow-Up Date"
                  format="DD-MM-YYYY"
                  minDate="01-05-1930"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    placeholderText: {
                      color: '#787878',
                      fontSize: height * 0.020,
                      fontWeight: 'bold',
                      marginLeft: -135
                    },
                    dateIcon: {
                      // display: 'none',
                      left: 0,
                      top: 2,
                      marginLeft: 0
                    },
                    // dateInput: {
                    //   marginLeft: 36
                    // }
                  }}
                  onDateChange={(follow_up_date) => { this.setState({ follow_up_date }) }}
                />
              </View>
              {/* <View style={styles.innerBoxWrapper}>
                <Text style={styles.innerBox}>Family Symptoms</Text>
              </View> */}
              <View style={styles.innerBoxWrapper}>
                <Text style={[{ color: '#787878', alignSelf: 'flex-start', paddingLeft: 15, fontWeight: 'bold' }]}
                >
                  Family Symptoms
                </Text>
              </View>
              <SelectMultiple
                items={familySymptoms}
                selectedItems={this.state.selectedFamilySymptoms}
                onSelectionsChange={this.onFamilySelectionsChange} />
              <View style={styles.innerBoxWrapper}>
                <TextInput style={styles.innerBox}
                  placeholder={'Any Other Family Symptoms'}
                  placeholderTextColor="#787878"
                  value={this.state.family_other_symptoms}
                  onChangeText={family_other_symptoms => this.setState({ family_other_symptoms })}
                />
              </View>
              <View style={styles.innerBoxWrapper}>
                <TextInput style={styles.innerBox}
                  placeholder={'Family Treating Doctor'}
                  placeholderTextColor="#787878"
                  value={this.state.family_treating_doctor}
                  onChangeText={family_treating_doctor => this.setState({ family_treating_doctor })}
                />
              </View>
              <View style={styles.innerBoxWrapper}>
                <TextInput style={styles.innerBox}
                  placeholder={'Current Location of Family'}
                  placeholderTextColor="#787878"
                  value={this.state.family_current_location}
                  onChangeText={family_current_location => this.setState({ family_current_location })}
                />
              </View>
            </ScrollView>
          </View>
          <View style={styles.bfbottomWrapper}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => { this.props.navigation.replace('Profile') }}>
              <Text style={styles.feedbackTextbtn}>Cancel</Text>
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
                onPress={() => { this.submitForm(); }}>
                <Text style={[styles.bookTextbtn, { color: '#ffffff' }]}>
                  Save
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <AwesomeAlert
            show={this.state.showBookingAlert}
            showProgress={false}
            title={"Save Form"}
            message="COVID-19 Form Succesfully Saved"
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
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.covid_form.covid_form)
  return {
    covid_form1: state.covid_form.covid_form,
    save_covid_form: state.save_covid_form.save_covid_form,
    getProfile1: state.getProfile.getProfile
  };
};
export default connect(mapStateToProps, {
  covid_form, save_covid_form, getProfile
})(COVID19);
