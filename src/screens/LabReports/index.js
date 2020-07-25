import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, Modal, Button, Alert} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import { uploaded_reports } from '../../redux/actions/uploaded_reports';
import { upload_report } from '../../redux/actions/upload_report';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/actions/getProfile';
import { my_reports } from '../../redux/actions/my_reports';
import { doctors } from '../../redux/actions/doctors';
import { shareReport } from '../../redux/actions/shareReport';

const pharmCatTypes = [
  {
    pharm_cat_id: '1',
    pharm_cat_name: 'Nearby',
  },
  {
    pharm_cat_id: '2',
    pharm_cat_name: 'Open',
  },
  {
    pharm_cat_id: '3',
    pharm_cat_name: 'Rating',
  },

];



class LabReports extends Component {

  state={showShareAlert: false, Alert_report_name: '', Alert_doctor_name: '', token: '', name:'', sort_by:'', report_type:'', in_lab:'', online_booking:'', report_date:'', patient_id:"",report:"",report_name:"", date_of_report:''} //filter state

  addfilter(item){
    this.setState({filter_id: item.pharm_cat_id})
    var filter = '&filter='+item.pharm_cat_name
    this.props.my_reports(this.state.token, this.state.patient_id, filter)

  }


  constructor(){
    super();
    this.state={
      showModal:false,
      UploadedReports:[],
      myReports:[],
    }
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
    // this.setState({myReports: this.props.my_reports('')})
  }

  submitForm(){
   
    this.props.navigation.push('UploadReport')
  }
  
  showShareAlert = () => {
    this.setState({
      showShareAlert: true
    });
  };
 
  hideShareAlert = () => {
    this.setState({
      showShareAlert: false
    });
    this.setState({showModal:false})
  };

  shareReport = () => {
    //code to share with doctor
    this.props.shareReport(this.state.token, this.state.Alert_doctor_name, this.state.Alert_report_name)
    this.showShareAlert()
  }



  async _getStorageValue(){
    var value = await AsyncStorage.getItem('token')
    var my_id = await AsyncStorage.getItem('my_id')
    var name = await AsyncStorage.getItem('name')
    var city = await AsyncStorage.getItem('city')
    if (value != null){
        
        this.setState({token:value, patient_id: my_id, name: name})

        if (!my_id){

          this.props.navigation.push('Members')
        }
        var value2 = this.props.getProfile(value, my_id)
        var value3 = this.props.my_reports(value, my_id, '')
        var value3 = this.props.doctors(value, city, 1)

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
                  <Text style={styles.uName}>Lab Reports</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.settingIconWrapper}
                  onPress={() => {
                    this.props.navigation.push("Members", {screen: 'LabReports'})
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
                        this.addfilter(item);
                      }}>
                      <Text style={[styles.catText, {backgroundColor: this.state.filter_id == item.pharm_cat_id ? '#5588e7': 'white'}]}>{item.pharm_cat_name}</Text>
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
                    data={this.props.my_reports1}//{this.props.uploaded_reports1}
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
                                {item.test}
                              </Text>
                              <Text style={styles.docSubNameText}>
                                {item.date}
                              </Text>
                              <Text></Text>
                             
                            </View>
                            <View>
                            
                            <View style={styles.bottom2Wrapper}>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={styles.boxBtn2}
                                onPress={() =>this.props.navigation.push('viewpdf', {report_file : item.report_url})
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
                            <Text style={styles.orderdetails}>{item.date}</Text>

                              <TouchableOpacity
                                activeOpacity={1}
                                style={styles.boxBtn2}
                                onPress={() =>this.setState({showModal:true, Alert_report_name:item.id})
                                }>
                                <LinearGradient
                                  colors={['#5588e7', '#75e4f7']}
                                  start={{x: 0.1, y: 0.1}}
                                  end={{x: 0.3, y: 1.9}}
                                  locations={[0.1, 0.6]}
                                  style={styles.boxBtn2}>
                                  <Text
                                    style={[styles.btnText, {color: '#ffffff'}]}>
                                    Share
                                  </Text>
                                </LinearGradient>
                              </TouchableOpacity> 

                              
                             
                              
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
          <Modal
            animationType="slide"
  
            onRequestClose={() => {
              this.setState({modalVisible:false})
            }}
            transparent={true}
            visible={this.state.showModal}
          >
            <View style={{backgroundColor:"#000000aa", flex:1}}>
              <View style={styles.modalWrapper}>
                <View style={styles.docCont3}>
                  <FlatList
                      showsVerticalScrollIndicator={false}
                      data={this.props.doctors1}
                      renderItem={({item}) => (
                        <> 
                          <View style={styles.modalContentWrapper}>
                          
                            <TouchableOpacity
                                activeOpacity={1}
                                style={styles.modalBoxBtn}
                                onPress={() =>{this.setState({Alert_doctor_name:item.name});this.shareReport();}

                                }>
                              <Text style={styles.docNameText}>
                               {item.name}
                              </Text>
                            </TouchableOpacity>
                           
                          </View>
                        </>
                    )}
                    keyExtractor={item => item.id}
                  />
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => this.setState({showModal:false})}>
                    <LinearGradient
                      colors={['#5FBEF4', '#75E4F7']}
                      start={{x: 0.1, y: 2}}
                      end={{x: 1.5, y: 1.9}}
                      locations={[0.1, 0.6]}
                      style={[styles.ModalapplyBtnContainer, {marginTop: 20, right:0, left:0, width:'50%'}]}>
                      <Text style={styles.btnText}>Cancel</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>

                
                </View>
              </View>
            </Modal>

            <AwesomeAlert
              show={this.state.showShareAlert}
              showProgress={false}
              title="Sharing Successful"
              message={(this.state.Alert_report_name)+" report shared with "+(this.state.Alert_doctor_name)}
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
              //showCancelButton={true}
              showConfirmButton={true}
              confirmText="Okay"
              confirmButtonColor="#5588e7"
              onConfirmPressed={() => {
                this.hideShareAlert();
              }}
            />
        </View>
        <View style={styles.bottomBtnContainer}>
              
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => this.submitForm()}>
                  <LinearGradient
                    colors={['#5FBEF4', '#75E4F7']}
                    start={{x: 0.1, y: 2}}
                    end={{x: 1.5, y: 1.9}}
                    locations={[0.1, 0.6]}
                    style={[styles.applyBtnContainer, {marginTop: 20, right:0, left:0, width:'100%'}]}>
                    <Text style={styles.btnText}>Upload Reports</Text>
                  </LinearGradient>
                </TouchableOpacity>
            
            </View>
        {/*<View style={styles.filterBtnWrapper}>
          <TouchableOpacity
            style={styles.filterBtnCont}
            activeOpacity={1}
            onPress={() => this.props.navigation.push("LabReportsFilter",{updateFilterData: this.updateFilterData})}>
            <Image style={styles.filterImg} source={Icons.filterIcon} />
          </TouchableOpacity>
        </View>*/}
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
    my_reports1:state.my_reports.my_reports,
    shareReport1:state.shareReport,
    doctors1:state.doctors.doctors
  };
};


export default connect(mapStateToProps, {
 uploaded_reports,upload_report,getProfile, my_reports, doctors,shareReport
})(LabReports);
