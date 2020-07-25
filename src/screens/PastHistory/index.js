import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, CheckBox } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import styles from './style';

import { Icons, Images } from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import { FlatList, TextInput } from 'react-native-gesture-handler';

import { past_history } from '../../redux/actions/past_history';
import { past_history_save } from '../../redux/actions/past_history_save';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import RadioGroup from 'react-native-radio-buttons-group';
import SelectMultiple from 'react-native-select-multiple';

const ids = [
  {
    s_id: '1',
  },
]


// const past_complaints_options = ["Fever > 38'c",
//   'Subjective fever (feltFeverish)', 'Chills',
//   'Muscle Aches', 'Runny Nose', 'Sore Throat',
//   'Cough', 'Shrotness of Breath', 'Vomiting', 'HeadAche', 'Abdominal Pain', 'Diarrhea']

const past_complaints_options= [
  { label: "Fever > 38'c", value: 'fev' },
  { label: "Subjective fever (felt feverish)", value: 'sff' },
  { label: "Chills", value: 'chills' },
  { label: "Muscle Aches", value: 'ma' },
  { label: "Runny Nose", value: 'rn' },
  { label: "Sore Throat", value: 'st' },
  { label: "Cough", value: 'cough' },
  { label: "Shortness of Breath", value: 'sb' },
  { label: "Vomiting", value: 'vom' },
  { label: "Headache", value: 'hd' },
  { label: "Abdominal Pain", value: 'ap' },
  { label: "Diarrhoea", value: 'dh' },
   ]


class PastHistory extends Component {

  constructor(props) {
    super(props)
    this.state = {
      token:'',
      patient_id:'',
      name:'',
      showBookingAlert: false,
      check: {},
      data: [],
      present_complaints: '',
      maritial_status: 0,
      no_of_children: '',
      occupation: '',
      education: '',
      social_status: '',
      addiction: '',
      history_of_contraception: '',
      high_risk_behaviour: '',
      present_complaints: '',
      demanded_blood_transfusion: [],
      other_medicals: '',
      past_treatment: '',
      drug_allergy: '',
      surgical_interventin: 0,
      oral_contraception: 0,
      blood_transfusion: 0,
      nsaid_intake: 0,
      regular_medicine_user: 0,
      menarche: 0,
      duration_of_period: 0,
      quantity_of_blood_loss: 0,
      menstural_irregularities: 0,
      date_of_last_menstural: 0,
      menopause: 0,
      no_of_pregnancies: 0,
      outcome_of_pregnancies: 0,
      complications_during_pregnancy: 0,
      mode_of_delivery: 0,
      last_child_birth_date: 0,
      past_complaints: [],
      past_complaints1: [],

      past_complaints_options: [],
      diet_lifestyle: 0,
      family_history: 0,
      psychological_history: 0,

      radio_props: [
        { label: 'Yes', value: '1', color: '#5588e7', },
        { label: 'No', value: '0', color: '#5588e7', }
      ],

      radio_propsdemblood: [
        { label: 'Yes', value: '1', color: '#5588e7', },
        { label: 'No', value: '0', color: '#5588e7', }
      ],

      radio_propsblood: [
        { label: 'Yes', value: '1', color: '#5588e7', },
        { label: 'No', value: '0', color: '#5588e7', }
      ],

      radio_propscontra: [
        { label: 'Yes', value: '1', color: '#5588e7', },
        { label: 'No', value: '0', color: '#5588e7', }
      ],

      radio_propsoral: [
        { label: 'Yes', value: '1', color: '#5588e7', },
        { label: 'No', value: '0', color: '#5588e7', }
      ],

      radio_propssurg: [
        { label: 'Yes', value: '1', color: '#5588e7', },
        { label: 'No', value: '0', color: '#5588e7', }
      ],

      radio_propshrb: [
        { label: 'Yes', value: '1', color: '#5588e7', },
        { label: 'No', value: '0', color: '#5588e7', }
      ],

      radio_propsnsaid: [
        { label: 'Yes', value: '1', color: '#5588e7', },
        { label: 'No', value: '0', color: '#5588e7', }
      ],

      marital_status_radio_props: [
        { label: 'Yes', value: '1', color: '#5588e7', },
        { label: 'No', value: '0', color: '#5588e7', }
      ],
      
    }
  }


  onSelectionsChange = (past_complaints) => {
    // selectedFruits is array of { label, value }
    this.setState({ past_complaints })
    console.log(this.state.past_complaints)
  }


  componentDidMount() {
    // this.setState({data: this.props.past_history()})
    this._getStorageValue()
  }

  async _getStorageValue() {
    var value = await AsyncStorage.getItem('token')
    var my_id = await AsyncStorage.getItem('my_id')
    var name = await AsyncStorage.getItem('name')
    if (value != null) {

      this.setState({ token: value, patient_id: my_id, name: name })

      if (!my_id) {

        this.props.navigation.push('Members')
      }
      this.props.past_history(value, my_id)
      // this.setState({Appoint: this.props.my_doctors1})
      this.setState({ maritial_status: this.props.past_history1.maritial_status })
      this.setState({ no_of_children: this.props.past_history1.no_of_children })
      this.setState({ occupation: this.props.past_history1.occupation })
      this.setState({ education: this.props.past_history1.education })
      this.setState({ social_status: this.props.past_history1.social_status })
      this.setState({ addiction: this.props.past_history1.addiction })
      this.setState({ history_of_contraception: this.props.past_history1.history_of_contraception })
      this.setState({ high_risk_behaviour: this.props.past_history1.high_risk_behaviour })
      this.setState({ present_complaints: this.props.past_history1.present_complaints })
      this.setState({ demanded_blood_transfusion: this.props.past_history1.demanded_blood_transfusion })
      this.setState({ other_medicals: this.props.past_history1.other_medicals })
      this.setState({ past_treatment: this.props.past_history1.past_treatment })
      this.setState({ drug_allergy: this.props.past_history1.drug_allergy })
      this.setState({ surgical_interventin: this.props.past_history1.surgical_interventin })
      this.setState({ oral_contraception: this.props.past_history1.oral_contraception })
      this.setState({ blood_transfusion: this.props.past_history1.blood_transfusion })
      this.setState({ nsaid_intake: this.props.past_history1.nsaid_intake })
      this.setState({ regular_medicine_user: this.props.past_history1.regular_medicine_user })
      this.setState({ menarche: this.props.past_history1.menarche })
      this.setState({ duration_of_period: this.props.past_history1.duration_of_period })
      this.setState({ quantity_of_blood_loss: this.props.past_history1.quantity_of_blood_loss })
      this.setState({ menstural_irregularities: this.props.past_history1.menstural_irregularities })
      this.setState({ date_of_last_menstural: this.props.past_history1.date_of_last_menstural })
      this.setState({ menopause: this.props.past_history1.menopause })
      this.setState({ no_of_pregnancies: this.props.past_history1.no_of_pregnancies })
      this.setState({ outcome_of_pregnancies: this.props.past_history1.outcome_of_pregnancies })
      this.setState({ complications_during_pregnancy: this.props.past_history1.complications_during_pregnancy })
      this.setState({ mode_of_delivery: this.props.past_history1.mode_of_delivery })
      this.setState({ last_child_birth_date: this.props.past_history1.last_child_birth_date })
      this.setState({ past_complaints: this.props.past_history1.past_complaints })
      this.setState({ diet_lifestyle: this.props.past_history1.diet_lifestyle })
      this.setState({ family_history: this.props.past_history1.family_history })
      this.setState({ psychological_history: this.props.past_history1.psychological_history })
    }
    else

      return value
  }

  checkBox_Test = (id) => {
    const checkCopy = { ...this.state.check }
    if (checkCopy[id]) checkCopy[id] = false;
    else checkCopy[id] = true;
    this.setState({ check: checkCopy });
  }

  marital_status_radio_onPress= (marital_status_radio_props) => {
    
    let selectedButton = this.state.marital_status_radio_props.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.radio_props[0].value;
    this.setState({ maritial_status: selectedButton })
  }


  onPressmed= radio_props => {
    
    let selectedButton = this.state.radio_props.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.radio_props[0].value;
    this.setState({ regular_medicine_user: selectedButton })
  };


   onPresshrb= radio_props => {
    
    let selectedButton = this.state.radio_props.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.radio_props[0].value;
    this.setState({ high_risk_behaviour: selectedButton })
  };

  onPressnsaid= radio_props => {
    
    let selectedButton = this.state.radio_props.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.radio_props[0].value;
    this.setState({ high_risk_behaviour: selectedButton })
  };


  onPresscontra= radio_props => {
    
    let selectedButton = this.state.radio_props.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.radio_props[0].value;
    this.setState({ history_of_contraception: selectedButton })
  };

   onPressoral= radio_props => {
    
    let selectedButton = this.state.radio_props.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.radio_props[0].value;
    this.setState({ oral_contraception: selectedButton })
  };

  onPressblood= radio_props => {
    
    let selectedButton = this.state.radio_props.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.radio_props[0].value;
    this.setState({ blood_transfusion: selectedButton })
  };


  onPressdemblood= radio_props => {
    
    let selectedButton = this.state.radio_props.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.radio_props[0].value;
    this.setState({ demanded_blood_transfusion: selectedButton })
  };

  onPressdemsurg= radio_props => {
    
    let selectedButton = this.state.radio_props.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.radio_props[0].value;
    this.setState({ surgical_intervention: selectedButton })
  };


  submitForm() {
    if (this.state.past_complaints!=undefined){
      var past_complaint = this.state.past_complaints.map((value) => { return value.value })
    }
      
    this.setState({ past_complaints1: JSON.stringify(past_complaint) })
    console.log("Submit Form before state passing")
    this.props.past_history_save(this.state)
    console.log("Submit Form after state passing")
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
    this.props.navigation.replace('Profile');
  };

  render() {


    return (
      <>
        <View style={styles.container}>
          <View style={styles.wrapper}>

            <View style={styles.upperWrapper}>
              <TouchableOpacity
                style={styles.backIconWrapper}
                activeOpacity={1}
                onPress={() => this.props.navigation.goBack()}>
                <Image source={Icons.BackIcon} />
              </TouchableOpacity>
              <View style={styles.titleWrapper}>
                <Text style={styles.uName}>Past History</Text>
              </View>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  alert('Pressed !!!');
                }}>
                {/*<Text style={styles.expandButton}>Expand All</Text>*/}
              </TouchableOpacity>
            </View>


            <View style={styles.docContWrapper}>
              <ScrollView>


                <View style={styles.docCont2}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={ids}
                    renderItem={({ item }) => (
                      <>
                        <View style={styles.docDetailedWrapper2}>
                          <Text style={styles.time}>Present Problem</Text>
                          <TextInput
                            value={this.state.present_complaints}
                            onChangeText={present_complaints => this.setState({ present_complaints })}
                            style={styles.paraAns} multiline={true} />

                          



                        </View>


                        <View>
                          <View style={styles.symptomText}>
                            <Text style={[{ color: '#FFFFFF', alignSelf: 'flex-start', paddingLeft: 15, fontWeight: 'bold' }]}>
                              Patient Symptom
                        </Text>
                          </View>
{/* ......................................................................................... */}

                          <SelectMultiple
                        style={styles.selectMultiple}
                        items={past_complaints_options}
                        selectedItems={this.state.past_complaints}
                        onSelectionsChange={this.onSelectionsChange} />

                          {/* <SelectMultiple
                             style={styles.selectMultiple}
                            items={past_complaints_options}
                            selectedItems={this.state.past_complaints}
                            onSelectionsChange={this.onSelectionsChange} /> */}
{/* .................................................................................................. */}

                        </View>

                        <View style={styles.pastDetailedWrapper}>
                          <Text style={styles.time}>Past History</Text>


                          <View style={styles.disease}>
                            <View style={styles.circle}></View>
                            <Text style={styles.vaccineName}>Regular Medicine User:</Text>
                            <Text style={styles.vaccineName}>{/*{this.props.past_history1.regular_medicine_user}*/}</Text>
                          </View>
                          <RadioGroup radioButtons={this.state.radio_props} onPress={(this.onPressmed)} flexDirection='row' />

                          <View style={styles.disease}>
                            <View style={styles.circle}></View>
                            <Text style={styles.vaccineName}>Other Medicals:</Text>
                          </View>
                          {/* <TextInput value={this.state.other_medicals}
                            onChangeText={other_medicals => this.setState({ other_medicals })} style={styles.answers} /> */}

                          <View style={styles.innerBoxWrapper}>
                            <TextInput style={styles.innerBox}
                              // placeholder={'Treating Doctor Details'}
                              placeholderTextColor="#787878"
                              value={this.state.other_medicals}
                              onChangeText={other_medicals => this.setState({ other_medicals })}
                            />
                          </View>


                        </View>

                        <View style={styles.docDetailedWrapper2}>
                          <Text style={styles.time}>Marriage</Text>
                          <View style={styles.disease}>
                            <View style={styles.circle}></View>
                            <Text style={styles.vaccineName}>Marital Status:</Text>
                            <Text style={styles.vaccineName}>{/*{this.props.past_history1.maritial_status == 0 ? 'No': 'Yes'}*/}</Text>
                          </View>
                          <RadioGroup radioButtons={this.state.marital_status_radio_props} onPress={(this.marital_status_radio_onPress)} flexDirection='row' />

                          <View style={styles.disease}>
                            <View style={styles.circle}></View>
                            <Text style={styles.vaccineName}>No Of Children:</Text>
                          </View>
                          {/* <TextInput value={this.state.no_of_children}
                              onChangeText={no_of_children => this.setState({ no_of_children })} style={styles.answers} />
                            */}

                          <View style={styles.innerBoxWrapper}>
                            <TextInput style={styles.innerBox}
                              // placeholder={'Treating Doctor Details'}
                              placeholderTextColor="#787878"
                              value={this.state.no_of_children}
                              onChangeText={no_of_children => this.setState({ no_of_children })}
                            />
                          </View>
                        </View>


                        <View style={styles.proffsnDetailedWrapper}>
                          <Text style={styles.time}>Professional</Text>
                          <View style={styles.disease}>
                            <View style={styles.circle}></View>
                            <Text style={styles.vaccineName}>Occupation:</Text>
                          </View>
                          {/* <TextInput value={this.state.occupation}
                              onChangeText={occupation => this.setState({ occupation })} style={styles.answers1} /> */}

                          <View style={styles.innerBoxWrapper}>
                            <TextInput style={styles.innerBox}
                              // placeholder={'Treating Doctor Details'}
                              placeholderTextColor="#787878"
                              value={this.state.occupation}
                              onChangeText={occupation => this.setState({ occupation })}
                            />
                          </View>

                          <View style={styles.disease}>
                            <View style={styles.circle}></View>
                            <Text style={styles.vaccineName}>Education:</Text>
                          </View>
                          {/* <TextInput value={this.state.education}
                              onChangeText={education => this.setState({ education })} style={styles.answers1} /> */}


                          <View style={styles.innerBoxWrapper}>
                            <TextInput style={styles.innerBox}
                              // placeholder={'Treating Doctor Details'}
                              placeholderTextColor="#787878"
                              value={this.state.education}
                              onChangeText={education => this.setState({ education })}
                            />
                          </View>

                          <View style={styles.disease}>
                            <View style={styles.circle}></View>
                            <Text style={styles.vaccineName}>Annual Income:</Text>
                          </View>
                          {/* <TextInput value={this.state.social_status}
                              onChangeText={social_status => this.setState({ social_status })} style={styles.answers1} /> */}

                          <View style={styles.innerBoxWrapper}>
                            <TextInput style={styles.innerBox}
                              // placeholder={'Treating Doctor Details'}
                              placeholderTextColor="#787878"
                              value={this.state.social_status}
                              onChangeText={social_status => this.setState({ social_status })}
                            />
                          </View>

                        </View>


                        <View style={styles.proffsnDetailedWrapper}>
                          <Text style={styles.time}>Habits</Text>
                          <View style={styles.disease}>
                            <View style={styles.circle}></View>
                            <Text style={styles.vaccineName}>Addiction:</Text>
                          </View>
                          {/* <TextInput value={this.state.addiction}
                            onChangeText={addiction => this.setState({ addiction })} style={styles.answers1} /> */}

                          <View style={styles.innerBoxWrapper}>
                            <TextInput style={styles.innerBox}
                              // placeholder={'Treating Doctor Details'}
                              placeholderTextColor="#787878"
                              value={this.state.addiction}
                              onChangeText={addiction => this.setState({ addiction })}
                            />
                          </View>


                          <View style={styles.disease}>
                            <View style={styles.circle}></View>
                            <Text style={styles.vaccineName}>High Risk Behavior:</Text>

                          </View>
                          <RadioGroup radioButtons={this.state.radio_propshrb} onPress={(this.onPresshrb)} flexDirection='row' />

                          <View style={styles.disease}>
                            <View style={styles.circle}></View>
                            <Text style={styles.vaccineName}>NSAID Intake:</Text>
                          </View>
                          <RadioGroup radioButtons={this.state.radio_propsnsaid} onPress={(this.onPressnsaid)} flexDirection='row' />

                        </View>


                        <View style={styles.proffsnDetailedWrapper}>
                          <Text style={styles.time}>Family Planning</Text>
                          <View style={styles.disease}>
                            <View style={styles.circle}></View>
                            <Text style={styles.vaccineName}>Contraception:</Text>
                          </View>
                          <RadioGroup radioButtons={this.state.radio_propscontra} onPress={(this.onPresscontra)} flexDirection='row' />

                          <View style={styles.disease}>
                            <View style={styles.circle}></View>
                            <Text style={styles.vaccineName}>Oral Contraception:</Text>

                          </View>
                          <RadioGroup radioButtons={this.state.radio_propsoral} onPress={(this.onPressoral)} flexDirection='row' />

                          <View style={styles.disease}>
                            <View style={styles.circle}></View>
                            <Text style={styles.vaccineName}>Social Status:</Text>
                          </View>
                          {/* <TextInput value={this.state.social_status}
                            onChangeText={social_status => this.setState({ social_status })} style={styles.answers1} /> */}
                          <View style={styles.innerBoxWrapper}>
                            <TextInput style={styles.innerBox}
                              // placeholder={'Treating Doctor Details'}
                              placeholderTextColor="#787878"
                              value={this.state.social_status}
                              onChangeText={social_status => this.setState({ social_status })}
                            />
                          </View>

                        </View>

                        <View style={styles.proffsnDetailedWrapper}>
                          <Text style={styles.time}>Blood</Text>
                          <View style={styles.disease}>
                            <View style={styles.circle}></View>
                            <Text style={styles.vaccineName}>Blood Transfusion:</Text>
                          </View>
                          <RadioGroup radioButtons={this.state.radio_propsblood} onPress={(this.onPressblood)} flexDirection='row' />

                          <View style={styles.disease}>
                            <View style={styles.circle}></View>
                            <Text style={styles.vaccineName}>Demanded Blood Transfusion:</Text>

                          </View>
                          <RadioGroup radioButtons={this.state.radio_propsdemblood} onPress={(this.onPressdemblood)} flexDirection='row' />

                          <View style={styles.disease}>
                            <View style={styles.circle}></View>
                            <Text style={styles.vaccineName}>Blood Transfusion:</Text>
                          </View>
                          <RadioGroup radioButtons={this.state.radio_propsblood} onPress={(this.onPressblood)} flexDirection='row' />

                        </View>


                        <View style={styles.docDetailedWrapper2}>
                          <Text style={styles.time}>Pregnancy</Text>
                          <View style={styles.disease}>
                            <View style={styles.circle}></View>
                            <Text style={styles.vaccineName}>Surgical Intervention:</Text>
                          </View>
                          <RadioGroup radioButtons={this.state.radio_propssurg} onPress={(this.onPressdemsurg)} flexDirection='row' />

                          <View style={styles.disease}>
                            <View style={styles.circle}></View>
                            <Text style={styles.vaccineName}>Demanded Blood Transfusion:</Text>

                          </View>
                          <RadioGroup radioButtons={this.state.radio_propsdemblood} onPress={(this.onPressdemblood)} flexDirection='row' />



                        </View>


                        <View style={styles.proffsnDetailedWrapper3}>
                          <Text style={styles.time}>Mensturation</Text>
                          <View style={styles.disease}>
                            <View style={styles.circle}></View>
                            <Text style={styles.vaccineName}>Menarche:</Text>
                          </View>
                          {/* <TextInput value={this.state.menarche}
                            onChangeText={menarche => this.setState({ menarche })} style={styles.answers1} /> */}

                          <View style={styles.innerBoxWrapper}>
                            <TextInput style={styles.innerBox}
                              // placeholder={'Treating Doctor Details'}
                              placeholderTextColor="#787878"
                              value={this.state.menarche}
                              onChangeText={menarche => this.setState({ menarche })}
                            />
                          </View>

                          <View style={styles.disease}>
                            <View style={styles.circle}></View>
                            <Text style={styles.vaccineName}>Duration of Period:</Text>

                          </View>
                          {/* <TextInput value={this.state.duration_of_period}
                            onChangeText={duration_of_period => this.setState({ duration_of_period })} style={styles.answers1} /> */}


                          <View style={styles.innerBoxWrapper}>
                            <TextInput style={styles.innerBox}
                              // placeholder={'Treating Doctor Details'}
                              placeholderTextColor="#787878"
                              value={this.state.duration_of_period}
                              onChangeText={duration_of_period => this.setState({ duration_of_period })}
                            />
                          </View>


                          <View style={styles.disease}>
                            <View style={styles.circle}></View>
                            <Text style={styles.vaccineName}>Blood Loss (Quantity):</Text>

                          </View>

                          {/* <TextInput value={this.state.quantity_of_blood_loss}
                            onChangeText={quantity_of_blood_loss => this.setState({ quantity_of_blood_loss })} style={styles.answers1} /> */}

                          <View style={styles.innerBoxWrapper}>
                            <TextInput style={styles.innerBox}
                              // placeholder={'Treating Doctor Details'}
                              placeholderTextColor="#787878"
                              value={this.state.quantity_of_blood_loss}
                              onChangeText={quantity_of_blood_loss => this.setState({ quantity_of_blood_loss })}
                            />
                          </View>



                        </View>






                      </>
                    )}
                    keyExtractor={item => item.s_id}
                  />
                </View>
              </ScrollView>

            </View>


            <View style={styles.bfbottomWrapper}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => console.log(
                  'COVID-19 Form',
                  'Are you sure you want to discard your changes?',
                  [
                    {
                      text: 'Yes',
                      onPress: () => {
                        console.log('Yes pressed')
                        this.props.navigate.push("Profile")
                      }
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
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.3, y: 1.9 }}
                locations={[0.1, 0.6]}
                style={styles.bookTextbtnWrapper}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.bookBtn}
                  onPress={() => this.submitForm()}>
                  <Text style={[styles.bookTextbtn, { color: '#ffffff' }]}>
                    Save
                </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <AwesomeAlert
              show={this.state.showBookingAlert}
              showProgress={false}
              title={"Past History"}
              message="Succesfully Saved"
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
  console.log(state.past_history.past_history)
  return {
    past_history1: state.past_history.past_history,
    past_history_save: state.past_history_save,
  };
};

export default connect(mapStateToProps, {
  past_history, past_history_save,
})(PastHistory);

