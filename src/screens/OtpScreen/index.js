import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {swipeRegister} from '../../redux/actions/'
const {width, height} = Dimensions.get('window');
import styles from './style';
import {Icons, Images} from '../../utils';

import axios from 'axios'

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import SwipeButton from 'rn-swipe-button';
import { NavigationActions, StackActions } from 'react-navigation';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import AsyncStorage from '@react-native-community/async-storage';
import { setToken } from '../../redux/auth';


var otp=null;

class Otp extends Component {
  constructor() {
    super();
    var otp='';
    this.state = {
      btn: Images.otpBtnArrow,
      resendBtn:true,
      showSwipe:false
    };
  }

  changeHandler = (e) => {                                  //added
  this.setState({[e.target.name]:e.target.phone}) 
  this.setState({[e.target.name]:e.target.Otp})         //added
}      

renderResendText(){
  if (this.state.resendBtn){
    return (<TouchableOpacity
                    style={styles.backIconWrapper}
                    activeOpacity={1}
                    onPress={() => this.resentOtp()}>
                    <Text style={styles.socialText}>
                      Didn't receive OTP? RESEND OTP
                    </Text>
                    </TouchableOpacity>);
  }
}
resentOtp(){
// submitHandler
}
showSwipeBtn(){
  if (this.state.showSwipe){
    return (<SwipeButton
                      thumbIconImageSource={this.state.btn}
                      onSwipeStart={() =>
                        this.setState({btn: Images.otpBtnArrow2})
                      }
                      onSwipeFail={() =>
                        this.setState({btn: Images.otpBtnArrow})
                      }
                      onSwipeSuccess={() =>{
                        this.submitHandler()
                        
                       
                      }
                    }
                      containerStyles={styles.btn}
                      railBackgroundColor={'#ffffff'}
                      railFillBackgroundColor={'#F09819'}
                      railFillBorderColor={'#F09819'}
                      thumbIconBackgroundColor={'#ffffff'}
                      thumbIconStyles={{borderWidth: 0}}
                      title=""
                    />);
  }
}
                                                   //added


submitHandler = () => {          
// console.log();
this.setState({resendBtn:true})
var phone = this.props.route.params.phone.state.inputValue;                        //added
          var url = 'http://backend.bionische.com/api/patient/validate-otp?phone='+phone+'&otp='+otp;
          // console.log(url)                            //added
  axios.post(url,this.state)
    .then(async (response) =>{
      await setToken(response.data.token);
      this.props.navigation.replace('AppHome')
    })
    .catch(error => {

      console.log(error)
    })
}   
  

  render() {
    return (
      <>
        <View style={styles.wrapper}>
          <KeyboardAvoidingView>
            <ScrollView
              contentContainerStyle={styles.scrollWrapper}
              showsVerticalScrollIndicator={false}>
              <ImageBackground source={Images.otpBg} style={styles.bgImage}>
                <View style={styles.upperCont}>
                  <TouchableOpacity
                    style={styles.arrowCont}
                    onPress={() => this.props.navigation.replace('Login')}>
                    <Image source={Icons.BackIcon2} />
                  </TouchableOpacity>
                </View>
                <View style={styles.logoCont}>
                  <Image
                    source={Images.otpLogo}
                    style={{width: width * 0.57, height: height * 0.32}}
                  />
                </View>
                <View style={styles.textCont}>
                  <Text style={styles.heading}>Enter verification code</Text>
                  <Text style={styles.subText}>
                    Enter the OTP sent to +91 {this.props.route.params.phone.state.inputValue}
                  </Text>
                </View>
                <View style={styles.numBtnCont}>
                  <View style={styles.otpCont}>
                    <OTPInputView
                      style={{width: '100%', height: '100%'}}
                      pinCount={4}
                      code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                      onCodeChanged = {code => { this.setState({code})}}
                      autoFocusOnLoad
                      codeInputFieldStyle={styles.underlineStyleBase}
                      codeInputHighlightStyle={styles.underlineStyleHighLighted}
                      onCodeFilled={code => { otp=code
                        this.setState({resendBtn:false, showSwipe:true})
                        //alert(`Code is ${code}, you are good to go!`);
                      }}
                    />
                  </View>
                  <View style={styles.resendCont}>

                  {this.renderResendText()}
                  </View>
                  <View style={styles.btnCont}>
                    {this.showSwipeBtn()}
                  </View>
                </View>
              </ImageBackground>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </>
    );
  }
}

export default Otp;