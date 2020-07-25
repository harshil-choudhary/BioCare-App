import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView,Alert,Dimensions,Picker} from 'react-native';
const {width, height} = Dimensions.get('window');

import styles from './style';

import {Icons, Images} from '../../utils';
import { TextInput } from 'react-native-gesture-handler';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker'




class VaccinationDetails extends Component {
   
    constructor(props){
        super(props)
        this.state = {date:""}
      }

    state={ agegroup:0,vacination:0}
   
    render() {
       
       
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
                      <Text style={styles.uName}>Vaccination Details</Text>
                    </View>
                    
                  </View>
              </LinearGradient>
    
              <View style={styles.boxCont1}>
              <ScrollView>
              <View style={styles.pickerWrapper}>
                            <View style={styles.pickerBox}>

                                <Picker style={styles.pickerStyle}
                                    selectedValue={this.state.ageType}
                                    mode={'dropdown'}
                                    onValueChange={(itemValue, itemPosition) =>
                                        this.setState({ ageType: itemValue, agegroup: itemPosition })}
                                >
                                    <Picker.Item label="Age Group" value="degree" />
                                    <Picker.Item label="0-3" value="zero" />
                                    <Picker.Item label="3-5" value="three" />
                                    <Picker.Item label="5-10" value="five" />
                                    <Picker.Item label="10-15" value="ten" />
                                </Picker>

                            </View>
                        </View>
                        <View style={styles.pickerWrapper2}>
                            <View style={styles.pickerBox}>

                                <Picker style={styles.pickerStyle}
                                    selectedValue={this.state.vacinationType}
                                    mode={'dropdown'}
                                    onValueChange={(itemValue, itemPosition) =>
                                        this.setState({ vacinationType: itemValue, vacination: itemPosition })}
                                >
                                    <Picker.Item label="Vacination" value="vacination" />
                                    <Picker.Item label='Polio' value="zero" />
                                    <Picker.Item label="Malaria" value="three" />
                                    <Picker.Item label="Covid" value="five" />
                                    <Picker.Item label="H-B" value="ten" />
                                </Picker>

                            </View>
                        </View>

                        <View style={styles.innerBoxWrapper}>  
              <TextInput style={styles.innerBox}
                placeholder={'Doctor Name'}
                placeholderTextColor = "#787878"
                value={this.state.name}
                onChangeText={name => this.setState({name})}
              />

            </View>
            
            <View style={styles.nameBoxWrapper}>  
            <DatePicker
              style={{ width:width*0.79,}}
              date={this.state.date}
              mode="date"
              placeholder="Vacination Date"
              format="DD-MM-YYYY"
              minDate="01-05-1930"
              maxDate="01-06-2021"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                placeholderText: {
                  color: '#787878',
                  fontSize:height*0.020,
                  fontWeight:'bold',
                  marginLeft:-130
                },
                dateIcon: {
                  // display: 'none',
                  left: 0,
                  top:2,
                  marginLeft:2
                },
                // dateInput: {
                //   marginLeft:
                // }
   
              }}
              onDateChange={(date) => {this.setState({date})}}
            />
             </View>
             <View style={styles.checkboxContainer}>
       
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
             
            
                  </ScrollView>
                  </View>
                  </View>
                  </View>
        );
    }
}
export default VaccinationDetails;


