import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Alert, FlatList, ActivityIndicatorBase} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';
import { NavigationActions } from 'react-navigation';
//Libraries
import LinearGradient from 'react-native-linear-gradient';
 ;
import AsyncStorage from '@react-native-community/async-storage';
import { getProfile } from '../../redux/actions/getProfile';
import { connect } from 'react-redux';

const ids=[
  {id:'1'},
];

class Profile extends Component {
   async _getStorageValue(){
            var value = await AsyncStorage.getItem('token')
            var my_id = await AsyncStorage.getItem('my_id')

            if (value != null){
                
                this.setState({usersname:value})
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

          componentDidMount(props){
    var token = this._getStorageValue();

    
  }

  logout = async () => {
    await AsyncStorage.removeItem('token')
    await AsyncStorage.removeItem('my_id')
    await AsyncStorage.removeItem('name')
    await AsyncStorage.removeItem('city') 
    this.props.navigation.push('Login')
  }
  renderProgress(){
    if (0){
      return (<><Text style={[styles.uNum, {marginTop: 10, marginBottom: 2}]}>
              22%
            </Text>
            <ProgressBar
              progress={0.55}
              width={260}
              height={5}
              borderRadius={20}
              color={'#FFFFFF'}
              unfilledColor={'rgba(0, 0, 0, 0.1)'}
              borderWidth={5}
              borderColor={'rgba(0, 0, 0, 0.1)'}
            /></>)
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <LinearGradient
            colors={['#5588e7', '#75e4f7']}
            start={{x: 0.16, y: 0.16}}
            end={{x: 0.8, y: 0.8}}
            locations={[0.16, 5]}
            style={styles.upperCont}>
            <View style={styles.upperWrapper}>
              <TouchableOpacity
                style={styles.backIconWrapper}
                activeOpacity={1}
                onPress={() => this.props.navigation.goBack()}>
                <Image source={Icons.BackIcon} />
              </TouchableOpacity>
              <View style={styles.imageWrapper}>
                <Image source={{uri:this.props.getProfile1.avatar_url}} style={styles.image} />
              </View>
              <View style={styles.settingIconWrapper}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => this.props.navigation.push('Settings')}>
                  <Image source={Icons.SettingIcon} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.midWrapper}>
              <Text style={styles.uName}>{this.props.getProfile1.name}</Text>
              <Text style={[styles.uNum, {marginTop: 3}]}>+91 {this.props.getProfile1.phone}</Text>
            </View>
            {this.renderProgress()}
            <View style={styles.lowerWrapper}>
            <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {this.logout();
                    }}>
                  <Text style={styles.uNum}>Logout</Text>
                </TouchableOpacity>
            </View>
          </LinearGradient>

          <View style={styles.lowerCont}>
          <FlatList
                    showsVerticalScrollIndicator={false}
                    data={ids}
                    renderItem={({item}) => (
                      <>
            
            <View style={styles.itemWrapper}>
              <Image source={Icons.myDoctor} style={styles.myDoctorIcon}/>
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>My Doctors</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.push('MyDoctors')}>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.itemWrapper}>
              <Image source={Icons.calendarIcon} style={styles.calendarIcon} />
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>Appointments</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.push('Appointments')
                }>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.itemWrapper}>
              <Image source={Icons.medicalRecordIcon} style={styles.medicalRecordsIcon} />
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>COVID-19 Form</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.push('COVID19')
                }>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.itemWrapper}>
              <Image source={Icons.calendarIcon} style={styles.calendarIcon} />
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>My Lab Bookings</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.push('LabBookings')
                }>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.itemWrapper}>
              <Image source={Icons.medicalRecordIcon} style={styles.calendarIcon} />
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>Upload Report</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.push('UploadReport')
                }>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.itemWrapper}>
              <Image source={Icons.onlineConsultIcon} style={styles.onlineConsultIcon}/>
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>Online consultation</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.push('Consultation')
                }>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.itemWrapper}>
              <Image source={Icons.calendarIcon} style={styles.calendarIcon} />
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>Vaccination</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.push('Vaccination')
                  
                }>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.itemWrapper}>
              <Image source={Icons.medicalRecordIcon} style={styles.medicalRecordsIcon}/>
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>Medical records</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.push('Reports')
                }>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>

           
            <View style={styles.itemWrapper}>
              <Image source={Icons.reminderIcon} style={styles.remindersIcon} />
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>Reminders</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.push('Reminders')
                }>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.itemWrapper}>
              <Image source={Icons.medicalRecordIcon} style={styles.medicalRecordsIcon}/>
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>Past History</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.push('PastHistory')
                }>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.itemWrapper}>
              <Image source={Icons.calendarIcon} style={styles.bookTestIcon}/>
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>Book a Test</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.push('FindLabs')}>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.itemWrapper}>
              <Image source={Icons.medicalRecordIcon} style={styles.medicalRecordsIcon}/>
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>My Orders</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.push('MyOrder')}>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.itemWrapper}>
              <Image source={Icons.medicalRecordIcon} style={styles.medicalRecordsIcon}/>
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>My Lab Reports</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.push('LabReports')}>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.itemWrapper}>
              <Image source={Icons.myDoctor} style={styles.offerIcon}/>
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>Add Family Member</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.push('AddMember')}>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.itemWrapper}>
              <Image source={Icons.myDoctor} style={styles.offerIcon}/>
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>My Family</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.push('Members')
                }>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.itemWrapper}>
              <Image source={Icons.paymentIcon} style={styles.paymentIcon}/>
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>My Payments</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.push('Payments')
                }>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>

            

            <View style={styles.itemWrapper}>
              <Image source={Icons.offerIcon} style={styles.offerIcon}/>
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>Offers</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.push('Offer')}>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>


            <View style={styles.itemWrapper}>
              <Image source={Icons.offerIcon} style={styles.offerIcon}/>
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>Insurance</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.push('Insurance')}>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.itemWrapperLast}>
              <Image source={Icons.medicalRecordIcon} style={styles.offerIcon}/>
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>Chat</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.push('ChatListScreen')}>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>


         
           
            </>
                    )}
                    keyExtractor={item => item.id}
                  />

          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.getProfile.getProfile)
  return {
    getProfile1:state.getProfile.getProfile
  };
};

export default connect(mapStateToProps, {
 getProfile
})(Profile);



