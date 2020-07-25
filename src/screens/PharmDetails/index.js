import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
 ;

import { pharmacy_details } from '../../redux/actions/pharmacy_details';
import { connect } from 'react-redux';




class PharmDetails extends Component {
 componentDidMount(){
   // console.log(this.props.route.params.pharm_id)
    this.props.pharmacy_details(this.props.route.params.pharm_id)
  }

  homeDeliveryCheck(){
    if (this.props.pharmacy_details1.home_delivery==1){
      return(
        <Text style={[styles.docInfoText, {color: '#898A8F'}]}>Available</Text>
      )
    }
    else{
      return(
        <Text style={[styles.docInfoText, {color: '#898A8F'}]}>Not Available</Text>
      )
    }
  }

  render() {
    console.log(this.props.pharmacy_details1)
    var ratings = [];
    if (this.props.pharmacy_details1.ratings != undefined){
      ratings = this.props.pharmacy_details1.ratings
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
                 <Text style={styles.docText}></Text>
              </View>
              <View style={styles.profileImgWrap}>
                <Image source={Images.pharm} style={styles.docImage} />
              </View>
              <View style={styles.profileTextWrap}>
                <Image source={Images.starImg} style={{height:14.76,width:15.52,marginRight: 5}} />
                <Text style={[styles.docText, {marginRight: 5}]}>{this.props.pharmacy_details1.avg_rating}</Text>
              </View>
            </View>
            <Text style={styles.docName}>{this.props.pharmacy_details1.name}</Text>
            <Text style={styles.docDesc}> </Text>
            <View style={styles.docInfoWrap}>

            <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.props.navigation.replace('MyOrder')}>
              <LinearGradient
                  colors={['#5588e7', '#75e4f7']}
                  start={{x: 0.1, y: 0.1}}
                  end={{x: 0.3, y: 1.9}}
                  locations={[0.1, 0.6]}
                  style={styles.boxBtn}>
                  <Text style={[styles.btnText, {color: '#ffffff'}]}>My Order</Text>
                </LinearGradient>
            </TouchableOpacity>
      
              <Text style={[styles.docInfoText, {color: '#898A8F'}]}>
                <Text style={styles.docInfoText}>{this.props.pharmacy_details1.avg_rating*20}% </Text>
                ({ratings.length} votes)
              </Text>
            </View>
            
          </View>

          <View style={styles.boxScrollCont}>
            <ScrollView
              contentContainerStyle={styles.scrollWrapper}
              showsVerticalScrollIndicator={false}>
              <View style={styles.boxUpper}>
                <View>
                  <Text style={styles.docInfoText}>Pick-up</Text>
                  <Text style={[styles.docInfoText, {color: '#898A8F'}]}>Available</Text>
                </View>
                <View>
                  <Text style={styles.docInfoText}>Home Delivery</Text>
                  {this.homeDeliveryCheck()}
                </View>
               
              </View>
              <View style={styles.boxDate}>
                <Text style={[styles.dateText, {color: '#FF4D4D'}]}>
                  Closed Today
                </Text>
                <Text style={styles.dateText}>
                  Timings:   
                  <Text style={styles.dateText}> {this.props.pharmacy_details1.timings}</Text>
                </Text>
                
              </View>
              <View style={styles.boxMap}>
                <View style={styles.boxMapUpper}>
                  <Image style={styles.doclocImg} source={Icons.locationIcon} />
                  <Text style={styles.mapText}>{this.props.pharmacy_details1.address}</Text>
                </View>
                <View style={styles.boxMapLower}>
                  <Image source={Images.mapImage} style={styles.mapImage} />
                </View>
              </View>
              <View style={styles.textBoxWrapper}>
                {/*<Text style={styles.reviewHeading}>Reviews</Text>
                <Text style={styles.docText2}>
                  Very good . courteous and efficient staff.
                </Text>
                <Text
                  style={[
                    styles.docInfoText,
                    {color: '#898A8F', alignSelf:'flex-end',marginRight:20,},
                  ]}>
                  - Jitu Raut (2 years ago)
                </Text>*/}
                <TouchableOpacity
                activeOpacity={1}
                onPress={() => console.log('All reviews')}
                style={{alignSelf:'center'}}>
                 <Text style={[styles.reviewHeading,{color:'#5588e7'}]}>SHOW ALL REVIEWS</Text>
                 </TouchableOpacity>
              </View>
              

              

              
            </ScrollView>
          </View>

          <View style={styles.bfbottomWrapper}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => console.log((this.props.pharmacy_details1.name),'Feedback')}>
              <Text style={styles.feedbackTextbtn}>         Feedback</Text>
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
                onPress={() => this.props.navigation.replace('SelectPrescription', {pharm_id : this.props.route.params.pharm_id, pharmacy_category:this.props.route.params.pharmacy_category, city:this.props.route.params.city, delivery_type:this.props.route.params.delivery_type})}>
                <Text style={[styles.bookTextbtn, {color: '#ffffff'}]}>
                  Order
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
  console.log(state.pharmacy_details.pharmacy_details)
  return {

    pharmacy_details1:state.pharmacy_details.pharmacy_details
  };
};

export default connect(mapStateToProps, {
  pharmacy_details
})(PharmDetails);
