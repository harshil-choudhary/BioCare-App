import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView,Alert,Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
 ;

import { add_family_member } from '../../redux/actions/add_family_member';
import { connect } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import DatePicker from 'react-native-datepicker'
import ImagePicker from 'react-native-image-picker'
import images from '../../utils/images';
import RadioGroup from 'react-native-radio-buttons-group';
import {Picker} from '@react-native-community/picker';

class AddMember extends Component {
  state ={token:'',name:"",email:"",phone:"", dob:'', city:'', blood_group:'Blood Group', gender:'', profile_pic: Images.plus,

  radio_props : [
    {label: 'Male',value: '0', color: '#5588e7', },
    {label: 'Female',value: '1', color: '#5588e7',},
    {label: 'Other',value: '2', color: '#5588e7',},
  ],
  }

  componentDidMount(){
    this.selectRadio()
    this._getStorageValue()
  }
  submitForm(){
    this.props.add_family_member(this.state)
    this.props.navigation.push('Profile')

    // redirect anywhere you want
  }

  async _getStorageValue(){
    var value = await AsyncStorage.getItem('token')
    if (value != null){
        
        this.setState({token:value})
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


  chooseFile = () => {
    console.log("start")
    var options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        //let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          profile_pic: source,
        });
      }
    });
  };

  onPress = radio_props => {
    this.setState({radio_props})
    this.selectRadio()
  };  

  selectRadio(){
    let selectedButton = this.state.radio_props.find(e => e.selected == true);
   selectedButton = selectedButton ? selectedButton.value : this.state.data[0].value;
   this.setState({gender : selectedButton})
  }

  render() {
    let selectedButton = this.state.radio_props.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.radio_props[0].label;
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
                  <Text style={styles.uName}>Add Family Member</Text>
                </View>
                
              </View>
          </LinearGradient>

          <View style={styles.boxCont1}>
          <ScrollView>
            <View style={styles.plusImageWrapper}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {this.chooseFile()}}>
            <Image 
              source={this.state.profile_pic}
              style={styles.plus}/>
             </TouchableOpacity>
            </View>
              <View style={styles.innerBoxWrapper}>  
            <TextInput 
              style={styles.innerBox}
              value={this.state.name}
              onChangeText={name => this.setState({name})}
              placeholder="   Name"/>
              </View>
              <View style={styles.innerBoxWrapper}>  
            <TextInput 
              style={styles.innerBox}
              value={this.state.email}
              onChangeText={email => this.setState({email})}
              placeholder="   E-mail"/>
              </View>
              <View style={styles.innerBoxWrapper}>  
            <TextInput 
              style={styles.innerBox}
              value={this.state.phone}
              onChangeText={phone => this.setState({phone})}
              placeholder="   Mobile Number"/> 
              </View>

              {/* <View style={styles.innerBoxWrapper}>  
               <TextInput 
              style={styles.innerBox}
              value={this.state.dob}
              onChangeText={dob => this.setState({dob})}
              placeholder="   Date of Birth"/>    
              </View> */}

               

<View style={styles.innerBoxWrapper}>  
            <DatePicker
              style={{ width:width*0.75,marginTop:height*0.003}}
              date={this.state.dob}
              mode="date"
              placeholder="Date of Birth"
              // format="YYYY-MM-DD"
              format="DD-MM-YYYY"
              // minDate="1930-05-01"
              minDate="01-05-1930"

              // maxDate="2021-06-01"
              maxDate="01-06-2021"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                placeholderText: {
                  color: '#A8A8A8',
                  fontSize:height*0.020,
                  fontWeight:'bold',
                  marginLeft:-125
                },
                dateIcon: {
                  // display: 'none',
                  left: 0,
                  top:2,
                  marginLeft:0
                },
                // dateInput: {
                //   marginLeft:
                // }
   
              }}
              onDateChange={(dob) => {this.setState({dob})}}
            />
             </View>

              <View style={styles.innerBoxWrapper}>
              
              <Picker
                   
                    selectedValue={this.state.blood_group}
                    style={styles.innerBox}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({blood_group: itemValue})
                    }>
                     
                    <Picker.Item label="A+" value="A+" />
                    <Picker.Item label="A-" value="A-" />
                    <Picker.Item label="B+" value="B+" />
                    <Picker.Item label="B-" value="B-" />
                    <Picker.Item label="AB+" value="AB+" />
                    <Picker.Item label="AB-" value="AB-" />
                    <Picker.Item label="O+" value="O+" />
                    <Picker.Item label="O-" value="O-" />
                    
              </Picker> 
                
              {/*<DropDownPicker
                            items={[
                                { label: 'A+', value: 'A+' },
                                { label: 'A-', value: 'A-' },
                                { label: 'B+', value: 'B+' },
                                { label: 'B-', value: 'B-' },
                                { label: 'O+', value: 'O+' },
                                { label: 'O-', value: 'O-' },
                                { label: 'AB+', value: 'AB+' },
                                { label: 'AB-', value: 'AB-' },
                                { label: 'Other', value: 'Other' },
                            ]}
                            placeholder="   Blood Group"
                            placeholderStyle={{color: '#A8A8A8',
                                              fontSize:height*0.020,
                                              fontWeight:'bold',
                                              }}
                            selectedLabelStyle={{color: '#A8A8A8',
                                              fontSize:height*0.020,
                                              fontWeight:'bold',
                                              marginLeft:width*0.07,
                                              }}
                            defaultValue={this.state.blood_group}
                            dropDownStyle={{zIndex:999, height:height*0.2,}}
                            style={styles.dropDowninnerBoxWrapper}
                            arrowStyle={{marginRight: 10}}
                            arrowColor='blue'
                            
                            onChangeItem={item => this.setState({
                                blood_group:item.value
                            })}
                          /> */}
              </View>

              <View style={styles.genderInnerBoxWrapper}>     

              <RadioGroup radioButtons={this.state.radio_props} onPress={(this.onPress)} flexDirection='row'/>
              </View>
              <View style={styles.cityInnerBoxWrapper}>     

              <TextInput 
              style={styles.innerBox}
              value={this.state.city}
              onChangeText={city => this.setState({city})}
              placeholder="   City"/>     
              </View>

              </ScrollView>

          </View>


          <View style={styles.bfbottomWrapper}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {this.props.navigation.push('Members')}}>
              <Text style={styles.feedbackTextbtn}>Cancel</Text>
            </TouchableOpacity>
            <LinearGradient
              colors={['#5588e7', '#75e4f7']}
              start={{x: 0.1, y: 0.1}}
              end={{x: 0.3, y: 1.9}}
              locations={[0.1, 0.6]}
              style={styles.bookTextbtnWrapper}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.bookBtn}
                onPress={() => this.submitForm()}>
                <Text style={[styles.bookTextbtn, {color: '#ffffff'}]}>
                  Add
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
    add_family_member: state.add_family_member,
  };
};

export default connect(mapStateToProps, {
  add_family_member
})(AddMember);
