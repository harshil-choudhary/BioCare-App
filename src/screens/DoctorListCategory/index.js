import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Alert, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import styles from './style';
import { Icons, Images } from '../../utils';
//Libraries
import LinearGradient from 'react-native-linear-gradient';
import { FlatList } from 'react-native-gesture-handler';
import { doctors } from '../../redux/actions/doctors';
import { connect } from 'react-redux';
const docCatTypes = [
  {
    doc_cat_id: '1',
    color:'white',
    doc_cat_name: 'Availability',
  },
  {
    doc_cat_id: '2',
    color:'#5588e7',
    doc_cat_name: 'In Hospital',
  },
  {
    doc_cat_id: '3',
    color:'white',
    doc_cat_name: 'Online Booking',
  },
  {
    doc_cat_id: '4',
    color:'white',
    doc_cat_name: 'Personal Clinic',
  },
];
const sponseredDoc = [
];
const normalDoc = [];
class DocDetailedCategory extends Component {
  componentDidMount(props) {
    this.setState({city:this.props.route.params.city, doctor_category:this.props.route.params.doctor_category})
    this.props.doctors('', this.props.route.params.city, this.props.route.params.doctor_category, '')
  }
  state = {filter_id : '', doctor_category:'', city:''}
  addfilter(item){
    this.setState({filter_id: item.doc_cat_id})
    var filter = '&filter='+item.doc_cat_name
    this.props.doctors('', this.props.route.params.city, this.props.route.params.doctor_category, filter_id)

  }


  render() {
    console.log(this.props.route.params)
    return (
      <>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <LinearGradient
              colors={['#5588e7', '#75e4f7']}
              start={{ x: 0.16, y: 0.1 }}
              end={{ x: 1.1, y: 1.1 }}
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
                  <Text style={styles.uName}>{this.props.route.params.category_name}</Text>
                </View>
              </View>
              <View style={styles.catTypeWrapper}>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={docCatTypes}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => {
                        this.addfilter(item)
                      }}>
                      <Text style={[styles.catText, {backgroundColor: this.state.filter_id == item.doc_cat_id? '#5588e7': 'white'}]}>{item.doc_cat_name}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.doc_cat_id}
                />
              </View>
            </LinearGradient>
            <View style={styles.docContWrapper}>
              <ScrollView>
                <View style={styles.docCont}>
                  <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={sponseredDoc}
                    renderItem={({ item }) => (
                      <>
                        <View style={styles.docDetailedWrapper}>
                          <View style={styles.sponserWrapper}>
                            <Text style={styles.sponserText}>SPONSORED</Text>
                          </View>
                          <View style={styles.docSpecsWrapper}>
                            <Image
                              style={styles.docdetailImg}
                              source={Images.doc_1}
                            />
                            <Text style={styles.perText}>97%</Text>
                            <View style={styles.docNameWrapper}>
                              <Text style={styles.docNameText}>
                                Susan Witzland
                              </Text>
                              <Text style={styles.docSubNameText}>
                                MBBS, DOMS, MS - Ophthalmology
                              </Text>
                              <Text style={styles.docprofText}>
                                Ophthalmologist
                              </Text>
                              <Text style={styles.docExpText}>
                                26 years of experience
                              </Text>
                            </View>
                          </View>
                          <View style={styles.middleWrapper}>
                            <Text style={styles.feedText}>97 Feedback</Text>
                            <View style={styles.nodoctorWrapper}>
                              <Image
                                style={styles.nodocImg}
                                source={Icons.docDetail}
                              />
                              <Text style={styles.nodocText}>1 Doctor</Text>
                            </View>
                            <View style={styles.locationWrapper}>
                              <Image
                                style={styles.doclocImg}
                                source={Icons.locationIcon}
                              />
                              <Text style={styles.doclocText}>South Delhi</Text>
                            </View>
                          </View>
                          {/*<View style={styles.bottom1Wrapper}>
                            <Text style={styles.moreText}>LASIK Eye Sur…</Text>
                            <Text style={styles.moreText}>Anterior Seg…</Text>
                            <Text style={styles.moreText}>+2 More</Text>
                          </View>*/}
                          <View style={styles.bottom2Wrapper}>
                            <View style={styles.moneyWrapper}>
                              <Image source={Icons.moneyIcon} />
                              <Text style={styles.moneyText}>
                                ₹ 700 onwards
                              </Text>
                            </View>
                            <TouchableOpacity
                              activeOpacity={1}
                              style={styles.boxBtn2}
                              onPress={() =>
                                this.props.navigation.replace(item.screenName)
                              }>
                              <LinearGradient
                                colors={['#5588e7', '#75e4f7']}
                                start={{ x: 0.1, y: 0.1 }}
                                end={{ x: 0.3, y: 1.9 }}
                                locations={[0.1, 0.6]}
                                style={styles.boxBtn2}>
                                <Text
                                  style={[styles.btnText, { color: '#ffffff' }]}>
                                  Contact Clinic
                                </Text>
                              </LinearGradient>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </>
                    )}
                    keyExtractor={item => item.s_id}
                  />
                </View>
                <View style={styles.docCont2}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.props.doctors1}
                    renderItem={({ item }) => (
                      <>
                        <View style={styles.docDetailedWrapper2}>
                          <View
                            style={[styles.docSpecsWrapper, { marginTop: 10 }]}>
                            <Image
                              style={{ width: '22%', height: '70%', borderRadius: 50}}
                              source={{ uri: item.avatar_url }}
                            />
                            <Text style={styles.perText}>{item.avg_rating * 20}%</Text>
                            <View style={styles.docNameWrapper}>
                              <Text style={styles.docNameText}>
                                {item.name}
                              </Text>
                              <Text style={styles.docSubNameText}>
                                {item.degree}
                              </Text>
                              <Text style={styles.docprofText}>
                                {item.category.name}
                              </Text>
                              <Text style={styles.docExpText}>
                                {item.exp} years of experience
                              </Text>
                            </View>
                          </View>
                          <View style={styles.middleWrapper}>
                            <Text style={styles.feedText}>Feedbacks</Text>
                            <View style={styles.nodoctorWrapper}>
                              <Image
                                style={styles.nodocImg}
                                source={Icons.docDetail}
                              />
                              <Text style={styles.nodocText}>{item.clinics_count} Clinics</Text>
                            </View>
                            <View style={styles.locationWrapper}>
                              <Image
                                style={styles.doclocImg}
                                source={Icons.locationIcon}
                              />
                              <Text style={styles.doclocText}>{item.city}</Text>
                            </View>
                          </View>
                          {/*<View style={styles.bottom1Wrapper}>
                            <Text style={styles.moreText}>LASIK Eye Sur…</Text>
                            <Text style={styles.moreText}>Anterior Seg…</Text>
                            <Text style={styles.moreText}>+2 More</Text>
                          </View>*/}
                          <View style={styles.bottom2Wrapper}>
                            <View style={styles.moneyWrapper}>
                              <Image source={Icons.moneyIcon} />
                              <Text style={styles.moneyText}>
                                ₹ {item.efees} onwards
                              </Text>
                            </View>
                            <TouchableOpacity
                              activeOpacity={1}
                              style={styles.boxBtn2}
                              onPress={() =>
                                this.props.navigation.replace('DoctorScreen', { doctor_id: item.id, doctor_category: this.props.route.params.doctor_category, city: this.props.route.params.city, appointment_type: this.props.route.params.appointment_type })
                              }>
                              <LinearGradient
                                colors={['#5588e7', '#75e4f7']}
                                start={{ x: 0.1, y: 0.1 }}
                                end={{ x: 0.3, y: 1.9 }}
                                locations={[0.1, 0.6]}
                                style={styles.boxBtn2}>
                                <Text
                                  style={[styles.btnText, { color: '#ffffff' }]}>
                                  Book
                                </Text>
                              </LinearGradient>
                            </TouchableOpacity>
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
        </View>
        <View style={styles.filterBtnWrapper}>
          {/*<TouchableOpacity
            style={styles.filterBtnCont}
            activeOpacity={1}
            onPress={() => this.props.navigation.replace('DocFilteration')}>
            <Image style={styles.filterImg} source={Icons.filterIcon} />
          </TouchableOpacity>*/}
        </View>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.doctors)
  return {
    doctors1: state.doctors.doctors
  };
};
export default connect(mapStateToProps, {
  doctors
})(DocDetailedCategory);
