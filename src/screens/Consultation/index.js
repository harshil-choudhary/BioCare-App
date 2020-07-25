import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';
import AsyncStorage from '@react-native-community/async-storage';

import { onlineConsultation } from '../../redux/actions/onlineConsultation';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/actions/getProfile';
//Libraries
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native-gesture-handler';

const docCatTypes = [
  {
    doc_cat_id: '1',
    doc_cat_name: 'Cancelled',
  },
  {
    doc_cat_id: '2',
    doc_cat_name: 'Paid',
  },
  {
    doc_cat_id: '3',
    doc_cat_name: 'Upcoming',
  },

];



class Consultation extends Component {

  state = {Consult : [], name:'', token:'', my_id:''}

  componentDidMount(){
    this._getStorageValue()
  }

   async _getStorageValue(){
    var value = await AsyncStorage.getItem('token')
    var my_id = await AsyncStorage.getItem('my_id')
    var name = await AsyncStorage.getItem('name')
    if (value != null){
        
        this.setState({token:value, patient_id: my_id, name:name})
        this.setState({Consult: this.props.onlineConsultation(value, my_id)})
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


  categoryDefined(category){
    if (JSON.stringify(category, typeof value === 'undefined' ? null : value)!='{}'){
        return(
          <Text style={styles.docprofText}>
          {(JSON.stringify(category, typeof value === 'undefined' ? null : value))}
          </Text>
      )
    }
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
                  <Text style={styles.uName}>Consulted Doctor</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.settingIconWrapper}
                  onPress={() => {
                    this.props.navigation.push("Members", {screen: 'Consultation'})
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
                        console.log((item.doc_cat_name),"List of Doctors");;
                      }}>
                      <Text style={styles.catText}>{item.doc_cat_name}</Text>
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
                    data={this.props.onlineConsultation1}
                    renderItem={({item}) => (
                      <>
                        <View style={styles.docDetailedWrapper2}>
                          <View
                            style={[styles.docSpecsWrapper, {marginTop: 20}]}>
                            <Image
                              style={styles.docdetailImg}
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
                              <Text style={styles.docprofText}>
                                {this.categoryDefined(item.category)}
                              </Text>
                              <Text style={styles.docExpText}>
                                {item.exp} years of experience
                              </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                          <View style={styles.middleWrapper}>
                            <Text style={styles.feedText}>{item.ratings != undefined ? item.ratings.length : '0'} Feedback</Text>
                            <View style={styles.nodoctorWrapper}>
                              <Image
                                style={styles.doclocImg}
                                source={Icons.locationIcon}
                              />
                              <Text style={styles.nodocText}>{item.location_name}</Text>
                        
                            </View>
                          </View>
                          <View style={styles.bottom1Wrapper}>
                          <View style={styles.nodoctorWrapper}>
                             <Text></Text>
                            </View>
                          </View>
                          <View style={styles.bottom2Wrapper}>
                            <TouchableOpacity
                              activeOpacity={1}
                              onPress={() =>
                                console.log(item.doctor_name,"Booking Successful")
                              }>
                              <LinearGradient
                                colors={['#5588e7', '#75e4f7']}
                                start={{x: 0.1, y: 0.1}}
                                end={{x: 0.3, y: 1.9}}
                                locations={[0.1, 0.6]}
                                style={styles.boxBtn2}>
                                <Text
                                  style={[styles.btnText, {color: '#ffffff'}]}>
                                  Book Again
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
        <View style={styles.filterBtnWrapper}>
          {/*<TouchableOpacity
            style={styles.filterBtnCont}
            activeOpacity={1}
            onPress={() => alert("Filter")}>
            <Image style={styles.filterImg} source={Icons.filterIcon} />
          </TouchableOpacity>*/}
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.onlineConsultation.onlineConsultation)
  return {
    onlineConsultation1:state.onlineConsultation.onlineConsultation,
    getProfile1:state.getProfile.getProfile,
  };
};

export default connect(mapStateToProps, {
  onlineConsultation, getProfile
})(Consultation);
