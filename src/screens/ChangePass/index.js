import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import styles from './style';

import {Icons, Images} from '../../utils';

 // 0.4.8

//Libraries
import LinearGradient from 'react-native-linear-gradient';
 ;

import { example } from '../../redux/actions/example';
import { connect } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';


class ChangePass extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  async componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        /*Geocoder.from(position.coords.latitude, position.coords.longitude)      USE FOR GEOCODER
                    .then(json => {
                        console.log(json);
                        var addressComponent = json.results[0].address_components;
                        this.setState({
                            Address: addressComponent
                        })
                        console.log(addressComponent);
                    })
                    .catch(error => console.warn(error)); */
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
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
                  <Text style={styles.uName}>Change Password</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.settingIconWrapper}
                  onPress={() => {
                    alert('Pressed !!!');
                  }}>
                  <Text style={styles.dropName}>Lat:{this.state.latitude}, Long:{this.state.longitude}</Text>
                  <Image source={Icons.dropDownIcon} />
                </TouchableOpacity>
              </View>
          </LinearGradient>

          <View style={styles.boxCont1}>
            <TextInput 
              style={styles.innerBox}
              placeholder="   Old Password"/>
            <TextInput 
              style={styles.innerBox}
              placeholder="   New Password"/>
            <TextInput 
              style={styles.innerBox}
              placeholder="   Confirm Password"/>
          </View>


          <View style={styles.bfbottomWrapper}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => alert('Cancel Pressed')}>
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
                onPress={() => 
                  {{console.log("Change Password", "Your Password has been changed")};
                  {this.props.navigation.push('Settings')}}
                  }>
                <Text style={[styles.bookTextbtn, {color: '#ffffff'}]}>
                  Confirm
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    example: state.example.example,
  };
};

export default connect(mapStateToProps, {
  example,
})(ChangePass);
