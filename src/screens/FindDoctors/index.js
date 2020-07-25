import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView,Alert, Modal, FlatList, Button} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
 ;

// import { example } from '../../redux/actions/example';
import { connect } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { getProfile } from '../../redux/actions/getProfile';
// import { lab_categories } from '../../redux/actions/lab_categories';

var radio_props1 = [
  {label: 'Physical        ', value: 0 },
  {label: 'Virtual', value: 1 }
];

const data = [
  {
    id: '1',
    name: 'Physician',
  },
  {
    id: '2',
    name: 'Dentist',
  },
];
 
class FindDoctors extends Component {


  state = {
      showModal:false,
     
      radio_props : [
        {label: 'Physical', color: '#5588e7', },
        {label: 'Virtual', color: '#5588e7',}
      ],
      filters : [],
      city:'',
      appointment_type: '', 
      name:''
   }

   onPress = radio_props => {
     this.setState({radio_props})
     this.selectRadio()
   };  

   selectRadio(){
     let selectedButton = this.state.radio_props.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
    this.setState({appointment_type : selectedButton})
   }

  componentDidMount(){
    this.selectRadio()
   
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
    let selectedButton = this.state.radio_props.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.radio_props[0].label;
    console.log(this.state.city)

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
                  <Text style={styles.uName}>Find Doctors</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.settingIconWrapper}
                  onPress={() => {
                    this.props.navigation.push("Members", {screen: 'FindDoctors'})
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
              value={this.state.city}
              onChangeText={city => this.setState({city})}
              placeholder="City"/>    
            </View>

         
            
            <Text style={styles.inputHeads}>Appointment Type</Text>
            <Text></Text>
            <View>
              <RadioGroup radioButtons={this.state.radio_props} onPress={(this.onPress)} flexDirection='row'/>
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
                onPress={() => this.props.navigation.replace('DoctorCategory', {city:this.state.city, appointment_type: this.state.appointment_type})}>
                <Text style={[styles.bookTextbtn, {color: '#ffffff'}]}>
                  Find Doctors
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
    getProfile1:state.getProfile.getProfile,
  };
};

export default connect(mapStateToProps, {
   getProfile,
})(FindDoctors);
