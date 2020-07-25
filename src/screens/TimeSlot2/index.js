import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, Alert, FlatList} from 'react-native';
import moment from 'moment';
import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import { get_available_time_slots } from '../../redux/actions/get_available_time_slots';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { example } from '../../redux/actions/example';


  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
class TimeSlot2 extends Component {


state = { Dates : [] , addDay : 0,token: '', date:'', type : 'c_', location_id:1, doctor_id:'', morning: [], afternoon:[], night:[], evening:[], selectedDate:'', selectedTime:'' }

componentDidMount(){
  this.setState({location_id:this.props.route.params.location_id})
  var location_id = 0;
  if (this.props.route.params.clinic_id>0){
    location_id = this.props.route.params.clinic_id
  }
  else if (this.props.route.params.hospital_id>0){
    location_id = this.props.route.params.hospital_id

  }
  this.setState({doctor_id:this.props.route.params.doctor_id})
  
  // console.log(this.props.route.params)
  let today = new Date();
  var dateset = moment(today).add(this.state.addDay, 'day').format('DD-MM-YYYY');
  // console.log(this.state)
  this.props.get_available_time_slots(this.props.route.params.doctor_id, this.state.location_id, this.state.type, dateset)
            .then(()=>  this.getDate(this.state.addDay))
 
}


renderBook(){
  console.log(this.state.selectedTime)
  if (this.state.selectedTime != ''){
    return (<>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.props.navigation.replace('DoctorScreen', {doctor_id: this.props.route.params.doctor_id})}>
                <Text style={styles.feedbackTextbtn}>Feedback</Text>
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
                  onPress={() => this.props.navigation.replace('TimeSlot3', {clinic_id:this.props.route.params.clinic_id,hospital_id:this.props.route.params.hospital_id , doctor_id:this.props.route.params.doctor_id, selectedDate: this.state.selectedDate, selectedTime: this.state.selectedTime})}>
                  <Text style={[styles.bookTextbtn, {color: '#ffffff'}]}>
                    Book
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </>)
  }
    else{
      return (<Text>No Slot Available</Text>)
    }
  
}




getDate(add){
    if (this.state.location_id == undefined){
      this.setState({location_id:1})
    }
    let today = new Date();
    var dateset = moment(today).add(add, 'day').format('DD-MM-YYYY');
    var tomorrow = moment(today).add(add, 'day').format('DD MMM, YYYY');
    this.setState({
      //Setting the value of the date time
      date: tomorrow ,
      selectedDate:tomorrow
    });
    // console.log(this.props.route.params)
    this.props.get_available_time_slots(this.props.route.params.doctor_id, this.state.location_id, this.state.type, dateset)
    this.changeColor('')
   
}

renderMorningarea(){
  if (this.state.morning != undefined && this.state.morning != null)
  var morning = Array.from(this.state.morning)
else 
  var morning = []
  if (morning.length > 0){
    return ( <View style={styles.timecardWrapper}>
                  <LinearGradient
                    colors={['#FFFB91', '#FF9FFF']}
                    start={{x: 0.1, y: 0.1}}
                    end={{x: 0.3, y: 1.9}}
                    locations={[0.1, 0.6]}
                    style={styles.morningTextbtnWrapper}>
                    <Text style={[styles.morningTextbtn, {color: '#000'}]}>
                      Morning
                    </Text>
                  </LinearGradient>
                  <View style={styles.timeseqWrapper}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.morning}
                        renderItem={({item}) => (
                          <TouchableOpacity
                              activeOpacity={1}
                              onPress={() => {this.changeColor(item[0]); }}>
                          <Text style={[styles.timeText, {backgroundColor:item[1]}]}>{item[0]}</Text>
                          </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                      />
                    
                    
                  </View>
                </View>)
  }
}


renderEveningarea(){
  if (this.state.evening != undefined && this.state.evening != null)
  var evening = Array.from(this.state.evening)
else 
  var evening = []
  if (evening.length > 0){
    return (<View style={styles.timecardWrapperBig}>
                  <LinearGradient
                    colors={['#90E4FF', '#9FFFF5']}
                    start={{x: 0.1, y: 0.1}}
                    end={{x: 0.3, y: 1.9}}
                    locations={[0.1, 0.6]}
                    style={styles.morningTextbtnWrapper}>
                    <Text style={[styles.morningTextbtn, {color: '#000'}]}>
                      Evening
                    </Text>
                  </LinearGradient>
                  <View style={styles.timeseqWrapper}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.evening}
                        renderItem={({item}) => (
                          <TouchableOpacity
                              activeOpacity={1}
                              onPress={() => {
                                console.log(item[0])
                                this.changeColor(item[0]); }}>
                          <Text style={[styles.timeText, {backgroundColor:item[1]}]}>{item[0]}</Text>
                          </TouchableOpacity>
                          
                        )}
                        keyExtractor={item => item.id}
                      />
                  </View>
                  <View style={styles.timeseqWrapperLast}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.night}
                        renderItem={({item}) => (
                          <TouchableOpacity
                              activeOpacity={1}
                              onPress={() => {this.changeColor(item[0]); }}>
                          <Text style={[styles.timeText, {backgroundColor:item[1]}]}>{item[0]}</Text>
                          </TouchableOpacity>
                          
                        )}
                        keyExtractor={item => item.id}
                      />
                  </View>
                </View>)
  }
}

renderAfternoonarea(){
  if (this.state.afternoon != undefined && this.state.afternoon != null)
  var afternoon = Array.from(this.state.afternoon)
else 
  var afternoon = []
  if (afternoon.length > 0){
    return (<View style={styles.timecardWrapper}>
                  <LinearGradient
                    colors={['#E0CCFF', '#C1FFF1']}
                    start={{x: 0.1, y: 0.1}}
                    end={{x: 0.3, y: 1.9}}
                    locations={[0.1, 0.6]}
                    style={styles.morningTextbtnWrapper}>
                    <Text style={[styles.morningTextbtn, {color: '#000'}]}>
                      Afternoon
                    </Text>
                  </LinearGradient>
                  <View style={styles.timeseqWrapper}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.afternoon}
                        renderItem={({item}) => (
                          <TouchableOpacity
                              activeOpacity={1}
                              onPress={() => {this.changeColor(item[0]); }}>
                          <Text style={[styles.timeText, {backgroundColor:item[1]}]}>{item[0]}</Text>
                          </TouchableOpacity>
                          
                        )}
                        keyExtractor={item => item.id}
                      />
                  </View>
                </View>)
  }
}

renderNightarea(){

  if (this.state.night != undefined && this.state.night != null)
  var night = Array.from(this.state.night)
else 
  var night = []
  if (night.length > 0){
    return (<View style={styles.timecardWrapperBig}>
                  <LinearGradient
                    colors={['#90E4FF', '#9FFFF5']}
                    start={{x: 0.1, y: 0.1}}
                    end={{x: 0.3, y: 1.9}}
                    locations={[0.1, 0.6]}
                    style={styles.morningTextbtnWrapper}>
                    <Text style={[styles.morningTextbtn, {color: '#000'}]}>
                      Night
                    </Text>
                  </LinearGradient>
                  <View style={styles.timeseqWrapper}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.night}
                        renderItem={({item}) => (
                          <Text style={styles.timeText}>{item}</Text>
                          
                        )}
                        keyExtractor={item => item.id}
                      />
                  </View>
                  <View style={styles.timeseqWrapperLast}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={slots}
                        renderItem={({item}) => (
                          <Text style={styles.timeText}>{item}</Text>
                          
                        )}
                        keyExtractor={item => item.id}
                      />
                  </View>
                </View>)
  }
}

changeColor(value){
  this.setState({selectedTime: value})
   if (this.props.get_available_time_slots1.morning != undefined){
        var morning = this.props.get_available_time_slots1.morning.map(function(el) {
          if (el == value){
            var o = [el, '#5588e7'];
          }
          else
            var o = [el, 'white'];
          return o;
        })
        
      }
      this.setState({morning: morning})

      if (this.props.get_available_time_slots1.evening != undefined){
        
        var evening = this.props.get_available_time_slots1.evening.map(function(el) {

          if (el == value){
            var o = [el, '#5588e7'];
          }
          else
            var o = [el, 'white'];
          return o;
        })
        
      
      this.setState({evening: evening})
      }

      if (this.props.get_available_time_slots1.afternoon != undefined){
        var afternoon = this.props.get_available_time_slots1.afternoon.map(function(el) {

          if (el == value){
            var o = [el, '#5588e7'];
          }
          else
            var o = [el, 'white'];
          return o;
        })
        
      this.setState({afternoon: afternoon})
      }

        if (this.props.get_available_time_slots1.night != undefined){
        var night = this.props.get_available_time_slots1.night.map(function(el) {

          if (el == value){
            var o = [el, '#5588e7'];
          }
          else
            var o = [el, 'white'];
          return o;
        })
        
      this.setState({night: night})
      }
  // this.state.morning[id][1] = "#5588e7";
}


renderLeftButton(){
  if (this.state.addDay > 0){
    return (<TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    // console.log('button pressed')
                    var number1 = this.state.addDay-1
                    // console.log(this.state)
                    this.setState({addDay: number1})
                    console.log("AddDay: " + this.state.addDay)
                  this.getDate(this.state.addDay-1);
                }}>
                  <Image source={Icons.LeftDateIcon} />
                </TouchableOpacity>
      );
  }
}

  render() {
    var slots = [];
    // console.log(this.props.route.params)

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
                  <Text style={styles.uName}>Select a time slot</Text>
                </View>
                
              </View>
            </LinearGradient>
            <View style={styles.cardWrapper}>
              <View style={styles.boxUpper}>
                <View style={styles.imageWrapper}>
                  <Image source={{uri:this.props.example1.avatar_url}} style={styles.image} />
                </View>
                <View style={styles.boxInfo}>
                  <Text style={styles.title}>{this.props.example1.name}</Text>
                  <Text style={styles.description}>
                    {this.props.example1.degree}
                  </Text>
                </View>
              </View>
              <View style={styles.datechangeWrapper}>
                <View style={styles.leftdate}> 
                  {this.renderLeftButton()}
                </View>
                <View style={styles.dateWrapper}>
                  <Text style={styles.dateText}>{this.state.date}</Text>
                </View>
                <View style={styles.rightdate}>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                      // console.log('button pressed')
                      console.log("AddDay: " + this.state.addDay)
                      this.setState({addDay: this.state.addDay+1})
                      console.log("AddDay: " + this.state.addDay)
                    this.getDate(this.state.addDay+1);
                  }}>
                    <Image source={Icons.RightDateIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <ScrollView
                contentContainerStyle={styles.scrollWrapper}
                showsVerticalScrollIndicator={false}>
               {this.renderMorningarea()}
                {this.renderAfternoonarea()}
                {this.renderEveningarea()}

                {this.renderNightarea()}
              </ScrollView>
            </View>
            <View style={styles.bfbottomWrapper}>
            {this.renderBook()}
            </View>

            
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.get_available_time_slots.get_available_time_slots)
  return {
    get_available_time_slots1:state.get_available_time_slots.get_available_time_slots,
    example1:state.example.example
  };
};

export default connect(mapStateToProps, {
 get_available_time_slots,example
})(TimeSlot2);


