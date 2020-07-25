import React, {Component, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
const {width} = Dimensions.get('window');
import axios from 'axios'

import styles from './style';

import {Icons, Images} from '../../utils';
import AsyncStorage from '@react-native-community/async-storage';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import { pharmacy } from '../../redux/actions/pharmacy';
import { getLocation } from '../../redux/actions/getLocation';
import { getOffers } from '../../redux/actions/getOffers';
import { doctors } from '../../redux/actions/doctors';
import { getProfile } from '../../redux/actions/getProfile';
import { connect } from 'react-redux';
// const token = AsyncStorage.getItem('@token');

const iconItems = [
  {
    cat_id: '1',
    image: Images.DocHomeImg,
    title: 'Doctor',
    desc: 'Search doctor around you',
    screen: 'FindDoctors',
  },
  {
    cat_id: '2',
    image: Images.MedicineHomeImg,
    title: 'Medicines',
    desc: 'Order medicine home',
    screen: 'FindPharmacy',
  },
  {
    cat_id: '3',
    image: Images.DiagnosticHomeImg,
    title: 'Diagnostic',
    desc: 'Book test at doorstep',
    screen: 'FindLabs',
  },
  {
    cat_id: '4',
    image: Images.VaccinationHomeImg,
    title: 'Vaccination',
    desc: 'View & Report Status online',
    screen: 'Vaccination',
  },
  {
    cat_id: '5',
    image: Images.InsuranceHomeImg,
    title: 'Insurance',
    desc: 'Book Health policy online',
    screen: 'Insurance',
  }];

const dots = [
  {
    b_id: '1',
  },
  {
    b_id: '2',
  },
];





class Home extends Component {

 state = { doctors : [], token :"", offers:[], usersname:'', location:'', patient_id:''};
  // async _getStorageValue(){
  //   var value = await AsyncStorage.getItem('token')
  //             .then(() => {
  //               console.log(value)
  //               this.setState({token:value})
  //                 this.checkProfile()
  //                 })
  //   return value
  // }

  async _getStorageValue(){
            var value = await AsyncStorage.getItem('token')
            var my_id = await AsyncStorage.getItem('my_id')
            var city = await AsyncStorage.getItem('city')
            if (value != null){
                console.log(my_id)
                this.setState({token:value})
                this.setState({patient_id:my_id})
                this.setState({city:city})

                if (!my_id){

                  this.props.navigation.push('Members')
                }
                value2 = this.props.getProfile(value, my_id)
                value2 = this.props.doctors(value, city, 1, '')
                console.log(value2)
                
            }
            else
              return value
          }
  scrollX = new Animated.Value(0); // this will be the scroll location of our ScrollView
  


  componentDidMount(props){
    
   this._getStorageValue();

  }

  

  logout = async () => {
    await AsyncStorage.removeItem('token')
    await AsyncStorage.removeItem('my_id')
    await AsyncStorage.removeItem('name')
    await AsyncStorage.removeItem('city') 
    this.props.navigation.push('Login')
  }

  
  offerRender(){

    if (this.props.getOffers1==null){
      return(
        <View style={{ flex: 1 }}>
        <FlashMessage position="top" />
        <View style={styles.BannerWrapper}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={this.props.getOffers1}
              renderItem={({item}) => (
                <View style={styles.bannerImgWrapper}>
                  <Image source={item.offer_image} style={styles.bannerImg} />
                </View>
              )}
              keyExtractor={item => item.banner_id}
            />
          </View>
          <View style={styles.docHeadingWrapper}>
          <View style={styles.docTextBar}>
            <TouchableOpacity
                style={styles.docItemWrapper}
                activeOpacity={1}
                onPress={() =>
                  this.props.navigation.push('FindDoctors', {doctor_id : item.id})
                }>
            <Text style={[styles.docText, {color: '#5588E7'}]}>
              Doctors nearby you
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.docItemWrapper}
                activeOpacity={1}
                onPress={() =>
                  this.props.navigation.push('FindDoctors', {doctor_id : item.id})
                }>
            <Text style={[styles.docText, {color: 'rgb(85,136,231)'}]}>
              See All
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.docListWrapper}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.props.doctors1}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.docItemWrapper}
                activeOpacity={1}
                onPress={() =>
                  this.props.navigation.push('DoctorScreen', {doctor_id : item.id})
                }>
                <View style={styles.docItemUpper}>
                  <Image
                    source={Images.doc1Img}
                    style={{width: '100%', height: '100%', borderRadius: 50}}
                  />
                </View>
                <View style={styles.docItemLower}>
                  <View style={styles.docItemLowerShadowWrap}>
                    <View style={styles.docItemLowerWrap}>
                      <Text style={[styles.docName, {marginTop: 0}]}>
                        {item.name}
                      </Text>
                      <View style={styles.docDescWrapper}>
                        <Text style={styles.docDesc}>{item.bio}</Text>
                      </View>
                      <View style={[styles.ratingWrapper, {marginTop: 0}]}>
                        <Image source={Images.starImg} style={{height:14.76,width:15.52}}/>
                        <Text
                          style={[
                            styles.docText,
                            {marginLeft: 8, color: '#898A8F'},
                          ]}>
                          {item.verified}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        </View>
      )  
      }
      else{
        return(
          <View>
            <View style={styles.docHeadingWrapper2}>
            <View style={styles.docTextBar}>
            <TouchableOpacity
                  activeOpacity={1}
                  onPress={() =>
                    this.props.navigation.push('FindDoctors')
                  }>
              <Text style={[styles.docText, {color: '#5588E7'}]}>
                Doctors nearby you
              </Text>
              </TouchableOpacity>
              <TouchableOpacity
                 
                  activeOpacity={1}
                  onPress={() =>
                    this.props.navigation.push('FindDoctors')
                  }>
              <Text style={[styles.docText, {color: 'rgb(85,136,231)'}]}>
                See All
              </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.docListWrapper}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={this.props.doctors1}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.docItemWrapper}
                  activeOpacity={1}
                  onPress={() =>
                    this.props.navigation.push('DoctorScreen', {doctor_id : item.id})
                  }>
                  <View style={styles.docItemUpper}>
                    <Image
                      source={{uri:item.avatar_url}}
                      style={{width: '100%', height: '100%', borderRadius: 50}}
                    />
                  </View>
                  <View style={styles.docItemLower}>
                    <View style={styles.docItemLowerShadowWrap}>
                      <View style={styles.docItemLowerWrap}>
                        <Text style={[styles.docName, {marginTop: 0}]}>
                          {item.name}
                        </Text>
                        <View style={styles.docDescWrapper}>
                          <Text style={styles.docDesc} numberOfLines={2}>{item.degree}</Text>
                        </View>
                        <View style={[styles.ratingWrapper, {marginTop: 0}]}>
                          <Image source={Images.starImg} style={{height:14.76,width:15.52}}/>
                          <Text
                            style={[
                              styles.docText,
                              {marginLeft: 8, color: '#898A8F'},
                            ]}>
                            {item.avg_rating}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
          </View>
          </View>
        )
      }
  }

   logout = async () => {
     await AsyncStorage.removeItem('token')
     await AsyncStorage.removeItem('my_id')
     await AsyncStorage.removeItem('name')
     this.props.navigation.push('Login');
   }

  render() {
    let position = Animated.divide(this.scrollX, width);   
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
                  style={styles.profileImgWrapper}
                  activeOpacity={1}
                  onPress={() => this.props.navigation.push('Profile')}>
                  <Image
                    source={{uri:this.props.getProfile1.avatar_url}}
                    style={{width: '100%', height: '100%', borderRadius: 50}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.userNameWrapper}
                  activeOpacity={1}
                  onPress={() => this.props.navigation.push('Profile')}>
                  <Text style={styles.uName}>Hi {this.props.getProfile1.name}!</Text>
                </TouchableOpacity> 
                 

              <View style={styles.searchOptionWrapper}>
                <TouchableOpacity
                onPress={() => {this.props.navigation.push('Notifications')}}>
                  <Image 
                    style={styles.topBarIcon}
                    source={Icons.NotifIcon} />
                </TouchableOpacity>

                <TouchableOpacity
                 onPress={() => {this.props.navigation.push('NewCart')}}>
                  <Image 
                    style={styles.topBarIcon}
                    source={Icons.CartIcon} />
                </TouchableOpacity>
                
                  
                </View>
              </View>
            </LinearGradient>
            <View style={styles.iconSliderWrapper}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={iconItems}
                pagingEnabled={true}
                // the onScroll prop will pass a nativeEvent object to a function
                onScroll={Animated.event(
                  // Animated.event returns a function that takes an array where the first element...
                  [{nativeEvent: {contentOffset: {x: this.scrollX}}}], // ... is an object that maps any nativeEvent prop to a variable
                )} // in this case we are mapping the value of nativeEvent.contentOffset.x to this.scrollX
                scrollEventThrottle={16} // this will ensure that this ScrollView's onScroll prop is called no faster than 16ms between each function call
                renderItem={({item}) => (
                  <View style={styles.iconItemsWrapper}>
                    <View style={styles.sliderItemWrapper}>
                      <TouchableOpacity
                        activeOpacity={1}
                        onPress={() =>
                          this.props.navigation.push(item.screen)
                        }
                        style={styles.itemImgWrapper}>
                        <Image source={item.image} style={styles.itemImg} />
                      </TouchableOpacity>
                      <Text style={styles.itemText}>{item.title}</Text>
                      <Text style={styles.subText}>{item.desc}</Text>
                    </View>
                  </View>
                )}
                keyExtractor={item => item.cat_id}
              />

              <View style={styles.scrollIndicatorWrapper}>
                {dots.map((_, i) => {
                  // the _ just means we won't use that parameter
                  let opacity = position.interpolate({
                    inputRange: [i - 1, i, i + 1], // each dot will need to have an opacity of 1 when position is equal to their index (i)
                    outputRange: [0.3, 1, 0.3], // when position is not i, the opacity of the dot will animate to 0.3
                    // inputRange: [i - 0.50000000001, i - 0.5, i, i + 0.5, i + 0.50000000001], // only when position is ever so slightly more than +/- 0.5 of a dot's index
                    // outputRange: [0.3, 1, 1, 1, 0.3], // is when the opacity changes from 1 to 0.3
                    extrapolate: 'clamp', // this will prevent the opacity of the dots from going outside of the outputRange (i.e. opacity will not be less than 0.3)
                  });
                  return (
                    <Animated.View // we will animate the opacity of the dots so use Animated.View instead of View here
                      key={i} // we will use i for the key because no two (or more) elements in an array will have the same index
                      style={{
                        opacity,
                        height: 8,
                        width: 8,
                        backgroundColor: '#5588E7',
                        margin: 8,
                        borderRadius: 5,
                      }}
                    />
                  );
                })}
                {/* <View style={styles.scrollIndicatorBig} />
                <View style={styles.scrollIndicatorSmall} />
                <View style={styles.scrollIndicatorSmall} /> */}
              </View>
            </View>
          
          {this.offerRender()}

    
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => {
   
  return {
    getLocation1:state.getLocation.getLocation,
    getOffers1:state.getOffers.getOffers,
    getProfile1:state.getProfile.getProfile,
    doctors1:state.doctors.doctors
  };
};

export default connect(mapStateToProps, {
 getLocation,getOffers,getProfile, doctors
})(Home);