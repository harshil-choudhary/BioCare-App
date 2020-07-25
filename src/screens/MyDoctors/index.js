import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import { my_doctors } from '../../redux/actions/my_doctors';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/actions/getProfile';

const docCatTypes = [
  {
    doc_cat_id: '1',
    doc_cat_name: 'Upcoming',
  },
  {
    doc_cat_id: '2',
    doc_cat_name: 'Consulted',
  },
  {
    doc_cat_id: '3',
    doc_cat_name: 'Online',
  },
  {
    doc_cat_id: '4',
    doc_cat_name: 'Walking',
  },
];


class MyDoctors extends Component {
  
  state = {Appoint : [], filter:[],token:'', patient_id :'',name:'', filter_id:'' }
addfilter(item){
    this.setState({filter_id: item.doc_cat_id})
    var filter = '&filter='+item.doc_cat_name
    this.props.my_doctors(this.state.token, this.state.patient_id, filter)

  }
async _getStorageValue(){
            var value = await AsyncStorage.getItem('token')
            var my_id = await AsyncStorage.getItem('my_id')
            var name = await AsyncStorage.getItem('name')
            if (value != null){
                
                this.setState({token:value, patient_id: my_id, name: name})
                var value2 = this.props.my_doctors(value, my_id, '')

                if (!my_id){

                  this.props.navigation.push('Members')
                }
                // var value2 = this.props.getProfile(value, my_id)
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
    // this.setState({Appoint: this.props.my_doctors('')})
  }


  render() {
    console.log(this.props.my_doctors1);
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
                  <Text style={styles.uName}>My Doctors</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.settingIconWrapper}
                  onPress={() => {
                    this.props.navigation.push("Members", {screen: 'MyDoctors'})
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
                    data={this.props.my_doctors1}
                    renderItem={({item}) => (
                      <>
                        <View style={styles.docDetailedWrapper2}>
                          <View
                            style={[styles.docSpecsWrapper, {marginTop: 10}]}>
                            <Image
                              style={{width: '22%', height: '83%', borderRadius: 50}}
                              source={{uri:item.avatar_url}}
                            />
                            <Text style={styles.perText}>{item.avg_rating*20}%</Text>
                            <View style={styles.docNameWrapper}>
                              <Text style={styles.docNameText}>
                                {item.name}
                              </Text>
                              <Text style={styles.docSubNameText}>
                                {item.degree}
                              </Text>
                              <Text style={styles.docprofText}>
                                {item.bio}
                              </Text>
                              <Text style={styles.docExpText}>
                                {item.exp} Years of Exp.
                              </Text>
                            </View>
                          </View>
                          <View style={styles.middleWrapper}>
                            <Text style={styles.feedText}>{'0'} Feedback</Text>
                            <Text style={styles.dateText}>{item.date}</Text>
                            <Text style={styles.timeText}>{item.time}</Text>
                            
                          </View>
                          <View style={styles.bottom1Wrapper}>
                          <View style={styles.nodoctorWrapper}>
                              <Image
                                style={styles.doclocImg}
                                source={Icons.locationIcon}
                              />
                              <Text style={styles.nodocText}>{item.address}</Text>
                        
                            </View>
                          </View>
                          <View style={styles. buttoncontainer}>
                            
                            <TouchableOpacity
                              activeOpacity={1}
              
                              onPress={() =>
                                this.props.navigation.push('DoctorScreen', { doctor_id: item.id, city: this.state.city, appointment_type: item.appointment_type })
                              }>
                              <LinearGradient
                                colors={['#5588e7', '#75e4f7']}
                                start={{x: 0.1, y: 0.1}}
                                end={{x: 0.3, y: 1.9}}
                                locations={[0.1, 0.6]}
                                style={styles.boxBtn2}>
                                <Text
                                  style={[styles.btnText, {color: '#ffffff'}]}>
                                  Book
                                </Text>
                              </LinearGradient>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </>
                    )}
                    keyExtractor={item => item.s_id}
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
  console.log(state.my_doctors.my_doctors)
  return {
    my_doctors1:state.my_doctors.my_doctors,
    getProfile1:state.getProfile.getProfile
  };
};

export default connect(mapStateToProps, {
 my_doctors,getProfile,
})(MyDoctors);

