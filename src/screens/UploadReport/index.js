import React, {Component, useState } from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
 ;
 import axios from 'axios'
import { testList } from '../../redux/actions/testList';
import { upload_report } from '../../redux/actions/upload_report';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import DocumentPicker from 'react-native-document-picker';
import {Picker} from '@react-native-community/picker';
import { example } from '../../redux/actions/example';
import AwesomeAlert from 'react-native-awesome-alerts';


class UploadReport extends Component {
  state={showBookingAlert: false, patient_id:'', my_id:'', test_id:'', name:'', selectFile:'init', name:'', imageSelected:1, submit:false, patient_id: ''}
  componentDidMount(){
    
    this._getStorageValue()
  }



  ImageBox(){
   console.log(this.state.selectFile)
    if (this.state.imageSelected){
      return (<View style={{width:'80%', height:'60%', backgroundColor:'#f2f2f2', borderRadius:50, margin:10, marginLeft:'10%', alignContent:'center'}}>
          <Text style={{position:'relative', top:'45%', left:'30%', color: '#787878', fontSize: 17,fontWeight: 'bold',}}>Upload Report</Text>
        </View>);
    }
    else{
      return (<View style={{width:'80%', height:'60%', backgroundColor:'#f2f2f2', borderRadius:50, margin:10, marginLeft:'10%', alignContent:'center'}}><Image 
              source={this.state.singleFile}
              style={{height:'100%', borderRadius:50}}/></View>);
    }
  }


  renderSubmitButton(){

    if (this.state.submit)
      return (<View style={styles.bfbottomWrapper}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.props.navigation.goBack()}>
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
                onPress={() => {this.uploadImage()}}>
                <Text style={[styles.bookTextbtn, {color: '#ffffff'}]}>
                  Save
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>)
  }

  selectFile = async () => {
    //Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        //Provide which type of file you want user to pick
        type: [DocumentPicker.types.images],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      this.setState({singleFile:res, imageSelected:0, submit:true})
    } catch (err) {
      this.setState({singleFile:null})
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        // alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        // alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };


  async _getStorageValue(){
    var value = await AsyncStorage.getItem('token')
    var my_id = await AsyncStorage.getItem('my_id')
    var name = await AsyncStorage.getItem('name')
    if (value != null){
        
        this.setState({token:value, patient_id: my_id, name: name})
        console.log(this.state.token)
        if (!my_id){

          this.props.navigation.push('Members')
        }
        // var value2 = this.props.getProfile(value, my_id)
        this.props.testList()
        
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


  uploadImage = async () => {
    //Check if any file is selected or not
    if (this.state.singleFile != null) {
      //If file selected then create FormData
      // const fileToUpload = singleFile;
      const data = new FormData();
      data.append('patient_id', this.state.patient_id);
      data.append('token', this.state.token);
      data.append('test_id', this.state.test_id);
      data.append('file', this.state.singleFile);
      //Please change file upload URL

      console.log(data)
      this.props.upload_report(data)
      this.showBookingAlert()

      
    }
  }
      
  showBookingAlert = () => {
		this.setState({
		  showBookingAlert: true
		});
	  };
	 
	  hideBookingAlert = () => {
		this.setState({
		  showBookingAlert: false
		});
	  };


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
                  <Text style={styles.uName}>Upload Report</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.settingIconWrapper}
                  onPress={() => {
                    this.props.navigation.push("Members", {screen: 'UploadReport'})
                  }}>
                  <Text style={styles.dropName}>{this.state.name}</Text>
                </TouchableOpacity>
                
              </View>
          </LinearGradient>

          <View style={styles.boxCont1}>
          <View style={styles.formArea}>
          <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                this.selectFile()
              }}>
              
            {this.ImageBox()}
             
              </TouchableOpacity>
              
              <Text style={styles.selectTest}>Select Test</Text>
              <View style={styles.innerBox}>
              <Picker
                    selectedValue={this.state.test_id}
                    style={{color:'grey', borderWidth: 1, width:'100%', borderRadius:50, borderColor: '#000', paddingLeft:20}}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({test_id: itemValue})
                    }>
                     {
                                      this.props.testList1.map( (v)=>{
                                       return <Picker.Item label={v.name} value={v.id} />
                                      })
                                     }
                  </Picker>
                </View>
          </View>
          </View>


          {this.renderSubmitButton()}
          <AwesomeAlert
						show={this.state.showBookingAlert}
						showProgress={false}
						title={"Upload Report"}
						message="Uploading Successful"
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
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    testList1: state.testList.testList,
    upload_report1: state.upload_report,
  };
};

export default connect(mapStateToProps, {
  testList, upload_report
})(UploadReport);