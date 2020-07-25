import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, Alert, FlatList} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
 ;

import { example } from '../../redux/actions/example';
import { clinic } from '../../redux/actions/clinic';
import { connect } from 'react-redux';

class DoctorScreen extends Component {
  state = {clinics: [], doctor_id:'', clinic_id:0, hospital_id:0}
  componentDidMount(){
    this.props.example(this.props.route.params.doctor_id)
    this.setState({doctor_id:this.props.route.params.doctor_id})
    // this.props.clinic(this.props.route.params.doctor_id, '')
  }
  render() {
    ratings = []
    if (this.props.example1.ratings == undefined){
      ratings = [];
    }
    else
      ratings = this.props.example1.ratings
    clinics = []
    if (this.props.example1.clinics_count > 0){
      clinics = this.props.example1.clinics
    }

    hospitals = []
    if (this.props.example1.hospitals != undefined && this.props.example1.hospitals.length > 0){
      hospitals = this.props.example1.hospitals
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
              <View style={styles.titleWrapper} />
              <View style={styles.settingIconWrapper} />
            </View>
          </LinearGradient>

          <View style={styles.boxCont1}>
            <View style={styles.profileImgCont}>
              <View style={styles.profileTextWrap}>
                 <Text style={styles.docText}>{this.props.example1.title}</Text>
              </View>
              <View style={styles.profileImgWrap}>
                <Image source={{uri:this.props.example1.avatar_url}} style={styles.docImage} />
              </View>
              <View style={styles.profileTextWrap}>
                <Image source={Images.starImg} style={{height:14.76,width:15.52, marginRight: 5}} />
                <Text style={[styles.docText, {marginRight: 5}]}>{this.props.example1.avg_rating}</Text>
              </View>
            </View>
            <Text style={styles.docName}>{this.props.example1.name}</Text>
            <Text style={styles.docDesc}>
              {this.props.example1.degree}
            </Text>
            <View style={styles.docInfoWrap}>
              <Text style={[styles.docInfoText, {color: '#898A8F'}]}>
                <Text style={styles.docInfoText}>{this.props.example1.exp} </Text>
                yrs. Experience
              </Text>
              <Text style={[styles.docInfoText, {color: '#898A8F'}]}>
                <Text style={styles.docInfoText}>{this.props.example1.avg_rating*20}% </Text>
                ({ratings.length} votes)
              </Text>
            </View>
            
          </View>

          <View style={styles.boxScrollCont}>
            <ScrollView
              contentContainerStyle={styles.scrollWrapper}
              showsVerticalScrollIndicator={false}>

              <View style={styles.flatlistWrapper}>
                {/* ............................................................... */}
                  <FlatList
                  vertical={true}
                  showsVerticalScrollIndicator={false}
                  data={clinics}
                  renderItem={({item}) => (
                  <View style={styles.boxUpper}>
                    <View style={styles.upperInfoWrapper}>
                      <Text style={styles.docText}>{item.name}</Text>
                  <Text style={styles.docText}>{item.address}</Text>
                    </View>

                    <LinearGradient
                      colors={['#5588e7', '#75e4f7']}
                      start={{x: 0.1, y: 0.1}}
                      end={{x: 0.3, y: 1.9}}
                      locations={[0.1, 0.6]}
                      style={styles.boxBtn2}>
                      <TouchableOpacity
                    activeOpacity={1}
                    style={styles.bookBtn}
                    onPress={() => this.setState({clinic_id:item.id,
                                                              hospital_id:0, 
                                                              doctor_id:this.props.route.params.doctor_id,   })}
                  >
                <Text style={[styles.btnText, {color: '#ffffff'}]}>{item.id == this.state.clinic_id ? 'Selected' : 'Select'}</Text>
                  </TouchableOpacity>
                    </LinearGradient>
                  </View>

                    )}
                  keyExtractor={item => item.id}
                />
              </View>

            <View style={styles.flatlistWrapper}>        
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={hospitals}
              renderItem={({item}) => (
                <>
              <View style={styles.boxUpper}>
                <View style={styles.upperInfoWrapper}>
                  <Text style={styles.docText}>{item.name}</Text>
                  <Text style={styles.docText}>{item.timings}</Text>
                </View>

                <LinearGradient
                  colors={['#5588e7', '#75e4f7']}
                  start={{x: 0.1, y: 0.1}}
                  end={{x: 0.3, y: 1.9}}
                  locations={[0.1, 0.6]}
                  style={styles.boxBtn2}>
                  <TouchableOpacity
                activeOpacity={1}
                style={styles.bookBtn}
                onPress={() => this.setState({hospital_id:item.id,
                                                              clinic_id:0, 
                                                              doctor_id:this.props.route.params.doctor_id,   })}
                  >
                <Text style={[styles.btnText, {color: '#ffffff'}]}>{item.id == this.state.hospital_id} ? Selected : Select</Text>
              </TouchableOpacity>
                </LinearGradient>
              </View>
              
              
                <View style={styles.boxMapUpper}>
                  <Image  style={styles.doclocImg} source={Icons.locationIcon} />
                  <Text style={styles.mapText}>
                   {item.address}, {this.props.clinic1.city}
                  </Text>
                </View>
               
              </>

                )}
              keyExtractor={item => item.id}
            />
            </View>

              
             {/* <View style={styles.boxMap}>
                <View style={styles.boxMapLower}>
                  <Image source={Images.mapImage} style={styles.mapImage} />
                </View>
              </View> */}

              <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={this.props.example1.ratings}
              renderItem={({item}) => (
                 console.log(item)
                
              )}
              keyExtractor={item => item.id}
            /> 






            </ScrollView>
              </View>

          <View style={styles.bfbottomWrapper}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.feedbackTextbtn}>       Cancel</Text>
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
                onPress={() => this.props.navigation.replace('TimeSlot2', {
                                                              hospital_id:this.state.hospital_id,
                                                              clinic_id:this.state.clinic_id, 
                                                              doctor_id:this.props.example1.id, 
                                                              })}>
                <Text style={[styles.bookTextbtn, {color: '#ffffff'}]}>
                  Book
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
  console.log(state.clinic.clinic)
  return {
    example1: state.example.example,
    clinic1:state.clinic.clinic
  };
};

export default connect(mapStateToProps, {
  example, clinic
})(DoctorScreen);
