import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {CheckBox} from 'react-native-elements';
import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native-gesture-handler';

import { vaccination_list } from '../../redux/actions/vaccination_list';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { getProfile } from '../../redux/actions/getProfile';



const ids = [
  {
    s_id: '1',
    s_name: 'Birth',
  },
  {
    s_id: '2',
    s_name: '6 Weeks',

  },
  {
    s_id: '3', 
    s_name: '1 Year',
  },
  {
    s_id: '4',
    s_name: '5 Year',
  },
];

class Vaccination extends Component {
  constructor(props){
    super(props)
    this.state = {
        checked: false,
        check2: {},
        data: [],
        name:'',
    }
}

async _getStorageValue(){
            var value = await AsyncStorage.getItem('token')
            var my_id = await AsyncStorage.getItem('my_id')
            var name = await AsyncStorage.getItem('name')
            console.log(value)
            if (value != null){
                
                this.setState({usersname:value, patient_id: my_id, name: name})
                // var value2 = this.props.my_doctors(value)
                this.setState({data: this.props.vaccination_list(value)})

                if (!my_id){

                  this.props.navigation.push('Members')
                }
                var value2 = this.props.getProfile(value, my_id)
                

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
                  <Text style={styles.uName}>Vaccination</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.settingIconWrapper}
                  onPress={() => {
                    this.props.navigation.push("Members", {screen: 'Vaccination'})
                  }}>
                  <Text style={styles.dropName}>{this.state.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    // alert('Pressed !!!');
                    this.props.navigation.push('VacinationDetails')
                  }}>
                    
                  <Text style={styles.expandButton}>Expand All</Text>
                </TouchableOpacity>
              </View>
              
          

            
              <View style={styles.docContWrapper}>
              <ScrollView>
                

                <View style={styles.docCont2}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.props.vaccination_list1}
                    renderItem={({item}) => (
                      <>
                        <View style={styles.docDetailedWrapper2}>
                        <Text style={{alignSelf:'flex-start', paddingLeft:35, fontSize:18,fontWeight:'bold'}} >{item.age_group}</Text>
                          <Text style={styles.time}>{item.s_name}</Text>
                            <View style={styles.innerBox1}>
                              <View style={styles.imagebox}>
                                {/*<CheckBox
                                    
                                    checkedIcon={<Image source={Images.checked} style={styles.checkicons}/>}
                                  uncheckedIcon={<Image source={Images.unchecked} style={styles.checkicons}/>}
                                    checked={this.state.checked}
                                    onPress={() => this.setState({checked: !this.state.checked})}
                                />*/}
                                
                                <Image source={Images.unchecked} style={styles.blueCircle}/>
                                <Image 
                                  style={styles.myDoctorIcon}
                                  source={Icons.myDoctor}
                                  />
                              </View>
                              <View style={styles.textBox}>
                                <Text style={styles.vaccineName}>{item.vaccine_name}</Text>
                                <Text style={styles.doctorName}>{item.doctor_name}</Text>
                              </View> 
                              <View style={styles.checkBox}>
                             
                                <Text style={styles.date}>{item.date}</Text>
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
          </View>
        </View>
      
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.vaccination_list.vaccination_list)
  return {
    vaccination_list1:state.vaccination_list.vaccination_list,
    getProfile1:state.getProfile.getProfile,
  };
};

export default connect(mapStateToProps, {
 vaccination_list, getProfile,
})(Vaccination);

