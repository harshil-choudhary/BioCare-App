import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
 ;
import { get_available_dates } from '../../redux/actions/get_available_dates';
import { connect } from 'react-redux';
import { example } from '../../redux/actions/example';

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
class TimeSlot1 extends Component {
  componentDidMount(){
    this.props.get_available_dates(this.props.route.params.doctor_id)
    this.props.example(this.props.route.params.doctor_id)
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth(); //Current Month
    month = monthNames[month]
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    that.setState({
      //Setting the value of the date time
      date: 'Today, ' + date + ' ' + month ,
    });
  }
state = {token:'', doctor_id : '', TimeSlot1:'No slots available for today', date:''}



  render() {
    console.log(this.props.route.params)

    if (this.props.get_available_dates1.time_slots == undefined){
      slot = "No slots available for today"
    }
    else{
      slot = JSON.parse(this.props.get_available_dates1.time_slots)[0]

    }

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
                <Text style={styles.uName}>Select a time slot</Text>
              </View>
              
            </View>
          </LinearGradient>

          <View style={styles.boxCont1}>
            <View style={styles.boxUpper}>
              <View style={styles.imageWrapper}>
                <Image source={{uri: this.props.example1.avatar_url}} style={styles.image} />
              </View>
              <View style={styles.boxInfo}>
                <Text style={styles.title}>{this.props.example1.name}</Text>
                <Text style={styles.description}>
                  {this.props.example1.degree}
                </Text>
              </View>
            </View>
            <View style={styles.boxLower}>
              <View style={styles.dateBox}>
                <Text style={styles.dateText}>{this.state.date}</Text>
                <Image source={Icons.goIconWhite} style={{marginRight: 10}} />
              </View>
              <Text style={[styles.description, {marginTop: 20}]}>
                {this.state.TimeSlot1}
              </Text>
              <LinearGradient
                colors={['#5588e7', '#75e4f7']}
                start={{x: 0.1, y: 2}}
                end={{x: 1.5, y: 1.9}}
                locations={[0.1, 0.6]}
                style={[styles.boxBtn2, {marginTop: 20}]}>
                <Text style={[styles.btnText, {color: '#ffffff'}]}>
                  {slot}
                </Text>
              </LinearGradient>
              <Text style={[styles.description, {marginTop: 20}]}>OR</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.replace('TimeSlot2', {doctor_id: this.props.route.params.doctor_id,hospital_id: this.props.route.params.hospital_id,clinic_id: this.props.route.params.clinic_id, slot : slot})}>
                <Image source={Icons.goIconBig} style={{marginTop: 15}} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.get_available_dates.get_available_dates)
  return {
    get_available_dates1:state.get_available_dates.get_available_dates,
    example1:state.example.example
  };
};

export default connect(mapStateToProps, {
 get_available_dates, example
})(TimeSlot1);



