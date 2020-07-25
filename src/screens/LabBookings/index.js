import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity,TouchableHighlight, ScrollView, Modal, Button, Alert} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';

import { uploaded_reports } from '../../redux/actions/uploaded_reports';
import { upload_report } from '../../redux/actions/upload_report';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/actions/getProfile';
import { lab_bookings } from '../../redux/actions/lab_bookings';
import { cancelLabBooking } from '../../redux/actions/cancelLabBooking';

const pharmCatTypes = [
  // {
  //   pharm_cat_id: '1',
  //   pharm_cat_name: 'Nearby',
  // },
  // {
  //   pharm_cat_id: '2',
  //   pharm_cat_name: 'Open',
  // },
  // {
  //   pharm_cat_id: '3',
  //   pharm_cat_name: 'Rating',
  // },

];




class LabBookings extends Component {

   //filter state

  // state {}

  constructor(){
    super();
    this.state={ showCancelAlert: false, Alert_test_name:'',
      token: '', sort_by:'', report_type:'', in_lab:'', online_booking:'', report_date:'', patient_id:"",report:"",report_name:"", 
      date_of_report:'', 
      booking_date:'', 
      orderdetails:[], 
      modalVisible:false,
      showModal:false,
      UploadedReports:[],
      labBookings:[],
      name:'',
      modalTests:'',
      modalDate:'',
      modalTime:'',
      modalAmount:'',
      modalItems:'',
      modalReferBy:'',
    }
  }

  renderButton(item){
    if (item.status == 0){
      return(<>
        <TouchableOpacity
        activeOpacity={1}
        style={styles.boxBtn2}
        onPress={() =>{console.log("View")
        //this.setState({showModal:true})
        this.setState({
          modalTests: item.selected_tests[0].test_name,
          modalDate: item.appointment_date,
          modalTime: item.appointment_time,
          modalAmount:item.total_price,
          modalItems:item.invoice_items,
          modalReferBy:item.refer_by,
          modalVisible:true,
        })
      }
        }>
        <LinearGradient
          colors={['#5588e7', '#75e4f7']}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.3, y: 1.9}}
          locations={[0.1, 0.6]}
          style={styles.boxBtn2}>
          <Text
            style={[styles.btnText, {color: '#ffffff'}]}>
            View
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={1}
        style={styles.boxBtn2}
        onPress={() =>
        { console.log("Cancel")
          this.setState({Alert_test_name: item.selected_tests[0].test_name})
          this.cancelBooking(item.id)
          
        }
        }>
        <LinearGradient
          colors={['#5588e7', '#75e4f7']}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.3, y: 1.9}}
          locations={[0.1, 0.6]}
          style={styles.boxBtn2}>
          <Text
            style={[styles.btnText, {color: '#ffffff'}]}>
            Cancel
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      </>)
    }

    if (item.status == 1){
      return(<>
        <TouchableOpacity
        activeOpacity={1}
        style={styles.boxBtn2}
        onPress={() =>{console.log("View")
        //this.setState({showModal:true})
        this.setState({
          modalTests: item.selected_tests[0].test_name,
          modalDate: item.appointment_date,
          modalTime: item.appointment_time,
          modalAmount:item.total_price,
          modalItems:item.invoice_items,
          modalReferBy:item.refer_by,
          modalVisible:true,
        })
      }
        }>
        <LinearGradient
          colors={['#5588e7', '#75e4f7']}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.3, y: 1.9}}
          locations={[0.1, 0.6]}
          style={styles.boxBtn2}>
          <Text
            style={[styles.btnText, {color: '#ffffff'}]}>
            View
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={1}
        style={styles.boxBtn2}
        onPress={() =>
        { console.log("Pay")
          //this.setState({Alert_test_name: item.selected_tests[0].test_name})
          //this.cancelBooking(item.id)
          
        }
        }>
        <LinearGradient
          colors={['#5588e7', '#75e4f7']}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.3, y: 1.9}}
          locations={[0.1, 0.6]}
          style={styles.boxBtn2}>
          <Text
            style={[styles.btnText, {color: '#ffffff'}]}>
            Pay
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      </>)
  }

  if (item.status == 2 || item.status==3){
    return(<>
      <TouchableOpacity
      activeOpacity={1}
      style={styles.boxBtn2}
      onPress={() =>{console.log("View")
      //this.setState({showModal:true})
      this.setState({
        modalTests: item.selected_tests[0].test_name,
        modalDate: item.appointment_date,
        modalTime: item.appointment_time,
        modalAmount:item.total_price,
        modalItems:item.invoice_items,
        modalReferBy:item.refer_by,
        modalVisible:true,
      })
    }
      }>
      <LinearGradient
        colors={['#5588e7', '#75e4f7']}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.3, y: 1.9}}
        locations={[0.1, 0.6]}
        style={styles.boxBtn2}>
        <Text
          style={[styles.btnText, {color: '#ffffff'}]}>
          View
        </Text>
      </LinearGradient>
    </TouchableOpacity>

    <TouchableOpacity
      activeOpacity={1}
      style={styles.boxBtn2}
      onPress={() =>
      { console.log("Invoice")
        //this.setState({Alert_test_name: item.selected_tests[0].test_name})
        //this.cancelBooking(item.id)
        
      }
      }>
      <LinearGradient
        colors={['#5588e7', '#75e4f7']}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.3, y: 1.9}}
        locations={[0.1, 0.6]}
        style={styles.boxBtn2}>
        <Text
          style={[styles.btnText, {color: '#ffffff'}]}>
          Invoice
        </Text>
      </LinearGradient>
    </TouchableOpacity>
    </>)
}

}

  cancel_order(item){
    this.props.cancelLabBooking(this.state.token, this.state.patient_id, this.state.item.id)
    this.props.lab_bookings(this.state.token, this.state.patient_id)
  }

    updateFilterData = (sort_by, report_type, in_lab, online_booking, report_date) => {
      this.setState({
        sort_by:sort_by,
        report_type:report_type,
        in_lab:in_lab,
        online_booking:online_booking,
        report_date:report_date,
      })
      console.log(this.state)
    };
  
  state = {Appoint : []}

  componentDidMount(){
    this._getStorageValue()
  
    // this.setState({UploadedReports: this.props.uploaded_reports('')})
    // this.setState({labBookings: this.props.lab_bookings('')})
  }

  submitForm(){
   this.setState({
     patient_id:this.props.uploaded_reports1.patient_id,
     report:this.props.uploaded_reports1.report_url,
     report_name:this.props.uploaded_reports1.test,
     date_of_reportl:this.props.uploaded_reports1.date,
    })
    console.log(this.state)
    this.props.upload_report(this.state)
    this.props.navigation.push('Profile')
  }
  

  async _getStorageValue(){
    var value = await AsyncStorage.getItem('token')
    var my_id = await AsyncStorage.getItem('my_id')
    var name = await AsyncStorage.getItem('name')
    if (value != null){
        
        this.setState({token:value, patient_id: my_id, name: name})

        if (!my_id){

          this.props.navigation.push('Members')
        }
        // var value2 = this.props.getProfile(value, my_id)
        var value3 = this.props.lab_bookings(value, my_id)
        
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

  cancelBooking(item_id){
    this.showCancelAlert()
    this.props.cancelLabBooking(this.state.token, this.state.patient_id, item_id)
    this.props.lab_bookings(this.state.token, this.state.patient_id)
  }

  showCancelAlert = () => {
    console.log('Cancel2')
    this.setState({
      showCancelAlert: true
    });
  };

  hideBookingAlert = () => {
    this.setState({
      showCancelAlert: false
    });
  };


  render() {
    console.log(this.state.modalVisible)
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
                  <Text style={styles.uName}>My Lab Bookings</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.settingIconWrapper}
                  onPress={() => {
                    this.props.navigation.push("Members", {screen: 'LabBookings'})
                  }}>
                  <Text style={styles.dropName}>{this.state.name}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.catTypeWrapper}>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={pharmCatTypes}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        console.log((item.pharm_cat_name),"List of Labs");
                      }}>
                      <Text style={styles.catText}>{item.pharm_cat_name}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.pharm_cat_id}
                />
              </View>
            </LinearGradient>

            
              <View style={styles.docContWrapper}>
              <ScrollView>
                

                <View style={styles.docCont2}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.props.lab_bookings1}//{this.props.uploaded_reports1}
                    renderItem={({item}) => (
                      <>
                        <View style={styles.docDetailedWrapper2}>
                          
                            <View style={styles.circle}>
                              <Image
                                style={styles.pharmdetailImg}
                                source={Images.report_test}
                              />
                            </View>
                            <View style={styles.docNameWrapper}>
                              <Text style={styles.docNameText}>
                                {item.selected_tests[0].test_name}
                              </Text>
                              <Text style={styles.docSubNameText}>
                                {item.appointment_date}, {item.appointment_time}
                              </Text>
                              <Text></Text>
                             
                            </View>
                            <View>
                            
                            <View style={styles.bottom2Wrapper}>
                              {this.renderButton(item)}

                            </View>
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
          <AwesomeAlert
                      show={this.state.showCancelAlert}
                      showProgress={false}
                      title={"Cancel Appointment"}
                      message={"Your " + (this.state.Alert_test_name)+ " test has been cancelled"}
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
          <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                this.setState({modalVisible:false})
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.heading}>Booking Details</Text>
                  <View style={styles.modalDetailsView}>
                    <View style={styles.modalFieldView}>
                      <Text style={styles.patient_name_header}>Patient Name: </Text>
                      <Text style={styles.patient_name}>{this.state.name}</Text>
                    </View>
                    <View style={styles.modalFieldView}>
                      <Text style={styles.patient_name_header}>Tests: </Text>
                      <Text style={styles.patient_name}>{this.state.modalTests}</Text>
                    </View>
                    <View style={styles.modalFieldView}>
                      <Text style={styles.patient_name_header}>Booking Date: </Text>
                      <Text style={styles.patient_name}>{this.state.modalDate}</Text>
                    </View>
                    <View style={styles.modalFieldView}>
                      <Text style={styles.patient_name_header}>Booking Time: </Text>
                      <Text style={styles.patient_name}>{this.state.modalTime}</Text>
                    </View>
                    <View style={styles.modalFieldView}>
                      <Text style={styles.patient_name_header}>Total Price: </Text>
                      <Text style={styles.patient_name}>{this.state.modalAmount}</Text>
                    </View>
                    <View style={styles.modalFieldView}>
                      <Text style={styles.patient_name_header}>Items: </Text>
                      <Text style={styles.patient_name}>{this.state.modalItems}</Text>
                    </View>
                    <View style={styles.modalFieldView}>
                      <Text style={styles.patient_name_header}>Refer By: </Text>
                      <Text style={styles.patient_name}>{this.state.modalReferBy}</Text>
                    </View>
                  </View>
                  <View>
                  {/*<FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.props.lab_bookings1}//{this.props.uploaded_reports1}
                    renderItem={({item}) => (
                      <>
                        <View style={styles.orderdetailswrap}>
                          
                            
                            <View style={styles.docNameWrapper}>
                              <Text style={styles.docNameText}>
                                {item.selected_tests[0].test_name}
                              </Text>
                              <Text style={styles.docSubNameText}>
                                {item.appointment_date}, {item.appointment_time}
                              </Text>
                              <Text></Text>
                             
                            </View>
                            <View>
                            
                            <View style={styles.bottom2Wrapper}>
                              
                            </View>
                            </View>
                          </View>
                        
    
                      </>
                    )}
                    keyExtractor={item => item.s_id}
                    />*/}
                    
                </View>

                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => this.setState({modalVisible:false})}>
                  <LinearGradient
                    colors={['#5FBEF4', '#75E4F7']}
                    start={{x: 0.1, y: 2}}
                    end={{x: 1.5, y: 1.9}}
                    locations={[0.1, 0.6]}
                    style={[styles.applyBtnContainer, {marginTop: 20, width:'100%'}]}>
                    <Text style={styles.btnText}>Okay</Text>
                  </LinearGradient>
                </TouchableOpacity>
                </View>
              </View>
            </Modal>
           
        </View>
        
      </>
    );
  }
}



const mapStateToProps = (state) => {
  console.log(state.uploaded_reports.uploaded_reports)
  return {
    uploaded_reports1:state.uploaded_reports.uploaded_reports,
    upload_report: state.upload_report,
    getProfile1:state.getProfile.getProfile,
    lab_bookings1:state.lab_bookings.lab_bookings,
    cancelLabBooking1:state.cancelLabBooking.cancelLabBooking,
  };
};


export default connect(mapStateToProps, {
 uploaded_reports,upload_report,getProfile, lab_bookings,cancelLabBooking
})(LabBookings);
