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
import { WebView } from 'react-native-webview';





class viewpdf extends Component {

  state={showShareAlert: false, Alert_report_name: '', Alert_doctor_name: '', token: '', name:'', sort_by:'', report_type:'', in_lab:'', online_booking:'', report_date:'', patient_id:"",report:"",report_name:"", date_of_report:''} //filter state



  constructor(){
    super();
  }


  componentDidMount(){
    this._getStorageValue()
    // this.setState({UploadedReports: this.props.uploaded_reports('')})
    // this.setState({myReports: this.props.my_reports('')})
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
    }
    else
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
                  <Text style={styles.uName}>Report</Text>
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
              
            </LinearGradient>
              </View>

              <WebView source={{ uri: this.props.route.params.report_file }} />
              </View>
  
        
          
        
        
      </>
    );
  }
}




export default viewpdf;
